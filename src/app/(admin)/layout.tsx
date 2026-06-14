import Link from 'next/link';
import React from 'react';

import { SESSION_COOKIE, verifySession } from '@/lib/auth/session';
import { cookies } from 'next/headers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const authed = await verifySession(token);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {authed && (
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <Link href="/admin" className="text-sm font-semibold tracking-tight">
              Simple Travelers <span className="text-gray-400">/ admin</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link
                href="/admin/articles"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Articles
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                View site ↗
              </Link>
              <form action="/admin/logout" method="post">
                <button
                  type="submit"
                  className="rounded-md border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
                >
                  Log out
                </button>
              </form>
            </nav>
          </div>
        </header>
      )}
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
