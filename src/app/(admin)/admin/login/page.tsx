import LoginForm from './login-form';

export const metadata = {
  title: 'Admin login',
};

type SearchParams = Promise<{ from?: string }>;

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { from } = await searchParams;

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h1 className="mb-1 text-xl font-semibold">Admin sign-in</h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Enter the editor password to continue.
        </p>
        <LoginForm from={from ?? '/admin'} />
      </div>
    </div>
  );
}
