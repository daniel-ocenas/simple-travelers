/**
 * Zero-dependency in-memory rate limiter (fixed-window counter).
 *
 * Purpose: keep us well under Vercel function-invocation and Cloudflare R2
 * Class-A/B operation limits by capping how fast the admin API + login can be
 * hit. The guarded endpoints are admin-only (except login), so the realistic
 * threat is an accidental runaway — a client retry loop, a bulk upload, or a
 * brute-force burst — not large-scale abuse.
 *
 * Caveat: state lives in module memory, so on Vercel each serverless instance
 * counts independently. This is a strong per-instance safety net, NOT a hard
 * global cap. The public surface here (`consume`) is storage-agnostic, so it
 * can be swapped for a Mongo/Upstash-backed implementation later without
 * touching any call site.
 */

export type RateLimitRule = {
  /** Max requests allowed inside the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
};

export type RateLimitResult = {
  allowed: boolean;
  /** Configured ceiling for the matched rule. */
  limit: number;
  /** Requests left in the current window (0 when blocked). */
  remaining: number;
  /** Epoch ms when the current window resets. */
  resetAt: number;
  /** Seconds until the window resets — for the `Retry-After` header. */
  retryAfterSec: number;
};

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Drop expired buckets periodically so the Map can't grow unbounded across a
// long-lived instance. `unref` keeps this timer from holding the process open.
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function ensureCleanup(now: number): void {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const cutoff = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= cutoff) buckets.delete(key);
    }
  }, CLEANUP_INTERVAL_MS);
  cleanupTimer.unref?.();
  void now;
}

/**
 * Record one hit against `key` and report whether it is allowed under `rule`.
 * A blocked hit does NOT extend the window (no penalty stacking).
 */
export function consume(key: string, rule: RateLimitRule): RateLimitResult {
  const now = Date.now();
  ensureCleanup(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + rule.windowMs;
    buckets.set(key, { count: 1, resetAt });
    return {
      allowed: true,
      limit: rule.limit,
      remaining: rule.limit - 1,
      resetAt,
      retryAfterSec: Math.ceil(rule.windowMs / 1000),
    };
  }

  if (existing.count >= rule.limit) {
    return {
      allowed: false,
      limit: rule.limit,
      remaining: 0,
      resetAt: existing.resetAt,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    limit: rule.limit,
    remaining: rule.limit - existing.count,
    resetAt: existing.resetAt,
    retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}

/**
 * Per-route rules. Tuned conservatively for a single-admin blog: generous
 * enough for normal editing, low enough that no client loop can spike R2 ops
 * or Vercel invocations.
 */
export const RATE_LIMITS = {
  /** Image upload: sharp CPU + R2 PUT (Class A) + Mongo write. The costly one. */
  upload: { limit: 20, windowMs: 60 * 1000 },
  /** Asset listing: Mongo read + a Vercel function invocation per call. */
  assetsList: { limit: 60, windowMs: 60 * 1000 },
  /** Asset delete: R2 DELETE (Class A) + Mongo delete. */
  assetsDelete: { limit: 30, windowMs: 60 * 1000 },
  /** Admin login: brute-force protection on the only public endpoint. */
  login: { limit: 10, windowMs: 5 * 60 * 1000 },
} as const satisfies Record<string, RateLimitRule>;
