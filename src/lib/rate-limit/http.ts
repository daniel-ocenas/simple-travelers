import { NextResponse } from 'next/server';

import { consume, type RateLimitResult, type RateLimitRule } from './limiter';

/**
 * Best-effort client identifier from proxy headers. On Vercel `x-forwarded-for`
 * is set to the real client IP (first hop). Falls back to a constant bucket so
 * the limiter still applies — coarsely — when no IP is available.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return headers.get('x-real-ip')?.trim() || 'unknown';
}

function headersFor(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(result.limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(Math.ceil(result.resetAt / 1000)),
  };
}

/**
 * Guard a route handler. Returns a 429 `NextResponse` when the caller is over
 * the limit, or `null` when the request may proceed. On success the headers can
 * be merged into the eventual response via `result` (optional, omitted here for
 * brevity since these are admin-only JSON endpoints).
 */
export function enforceRateLimit(
  request: Request,
  bucket: string,
  rule: RateLimitRule,
): NextResponse | null {
  const key = `${bucket}:${clientIp(request.headers)}`;
  const result = consume(key, rule);
  if (result.allowed) return null;

  return NextResponse.json(
    { error: 'Too many requests. Please slow down.' },
    {
      status: 429,
      headers: {
        ...headersFor(result),
        'Retry-After': String(result.retryAfterSec),
      },
    },
  );
}
