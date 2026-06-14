'use client';

import { useActionState } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import { loginAction } from './actions';

export default function LoginForm({ from }: { from: string }) {
  const [state, action, pending] = useActionState(loginAction, {});

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="from" value={from} />
      <Input
        type="password"
        name="password"
        autoComplete="current-password"
        autoFocus
        required
        placeholder="Password"
        className="shadow-sm"
      />
      {state.error && (
        <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
      )}
      <Button type="submit" size="lg" disabled={pending} className="mt-2">
        {pending ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  );
}
