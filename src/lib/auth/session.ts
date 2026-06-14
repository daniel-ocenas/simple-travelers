const SESSION_COOKIE = 'st_admin_session';
const DEFAULT_TTL_DAYS = 7;

type Payload = { exp: number };

const enc = new TextEncoder();
const dec = new TextDecoder();

function b64urlEncode(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function importKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

function getSecret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) {
    throw new Error(
      'SESSION_SECRET is not set or is too short (>=32 chars required)',
    );
  }
  return s;
}

export async function signSession(
  ttlDays: number = DEFAULT_TTL_DAYS,
): Promise<string> {
  const payload: Payload = {
    exp: Date.now() + ttlDays * 24 * 60 * 60 * 1000,
  };
  const payloadB64 = b64urlEncode(enc.encode(JSON.stringify(payload)));
  const key = await importKey(getSecret());
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payloadB64));
  return `${payloadB64}.${b64urlEncode(new Uint8Array(sig))}`;
}

export async function verifySession(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  const [payloadB64, sigB64] = token.split('.');
  if (!payloadB64 || !sigB64) return false;

  try {
    const key = await importKey(getSecret());
    const expected = new Uint8Array(
      await crypto.subtle.sign('HMAC', key, enc.encode(payloadB64)),
    );
    if (!timingSafeEqual(expected, b64urlDecode(sigB64))) return false;
    const payload = JSON.parse(dec.decode(b64urlDecode(payloadB64))) as Payload;
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function verifyPassword(submitted: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = enc.encode(submitted);
  const b = enc.encode(expected);
  return timingSafeEqual(a, b);
}

export { SESSION_COOKIE };
