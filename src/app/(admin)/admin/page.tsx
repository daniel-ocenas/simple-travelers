import Link from 'next/link';

export const metadata = {
  title: 'Admin',
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Edit articles, review drafts, publish updates.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/admin/articles"
          className="block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
        >
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Content
          </div>
          <div className="mt-1 text-lg font-semibold">Articles →</div>
        </Link>
      </div>
    </div>
  );
}
