'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  SESSION_COOKIE,
  signSession,
  verifyPassword,
} from '@/lib/auth/session';

type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
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
