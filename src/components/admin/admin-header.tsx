import Button from '@/ui/button';
import Link from '@/ui/link';

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/admin" className="text-sm font-semibold tracking-tight">
          Simple Travelers <span className="text-gray-400">/ admin</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/admin/articles" variant="nav">
            Articles
          </Link>
          <Link href="/admin/media" variant="nav">
            Media
          </Link>
          <Link href="/" target="_blank" rel="noopener" variant="nav">
            View site
          </Link>
          <form action="/admin/logout" method="post">
            <Button type="submit" variant="secondary">
              Log out
            </Button>
          </form>
        </nav>
      </div>
    </header>
  );
}
