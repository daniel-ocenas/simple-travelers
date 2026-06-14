'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  SESSION_COOKIE,
  signSession,
  verifyPassword,
} from '@/lib/auth/session';
import { clientIp } from '@/lib/rate-limit/http';
import { RATE_LIMITS, consume } from '@/lib/rate-limit/limiter';

type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const ip = clientIp(await headers());
  if (!consume(`login:${ip}`, RATE_LIMITS.login).allowed) {
    return { error: 'Too many attempts. Please try again later.' };
  }

  const password = String(formData.get('password') ?? '');
  const from = String(formData.get('from') ?? '/admin');

  if (!verifyPassword(password)) {
    // Small delay to make timing attacks even less viable.
    await new Promise((r) => setTimeout(r, 250));
    return { error: 'Invalid password' };
  }

  const token = await signSession();
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  });

  redirect(from.startsWith('/admin') ? from : '/admin');
}
