import { cookies } from 'next/headers';
import React from 'react';

import AdminHeader from '@/components/admin/admin-header';
import { SESSION_COOKIE, verifySession } from '@/lib/auth/session';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const authed = await verifySession(token);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {authed && <AdminHeader />}
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
