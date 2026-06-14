'use client';

import { useActionState } from 'react';

import { loginAction } from './actions';

export default function LoginForm({ from }: { from: string }) {
  const [state, action, pending] = useActionState(loginAction, {});

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="from" value={from} />
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        autoFocus
        required
        placeholder="Password"
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-gray-500 dark:border-gray-700 dark:bg-gray-950"
      />
      {state.error && (
        <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
      >
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
