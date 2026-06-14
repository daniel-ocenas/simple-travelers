import Link from 'next/link';

import ArticlesTable from '@/components/admin/articles/articles-table';
import PageHeader from '@/ui/page-header';
import { getAllPosts } from '@/services/posts';

export const metadata = {
  title: 'Articles',
};

export const dynamic = 'force-dynamic';

export default async function AdminArticlesPage() {
  const articles = await getAllPosts();

  return (
    <>
      <PageHeader
        title="Articles"
        description={`${articles.length} ${articles.length === 1 ? 'article' : 'articles'}`}
        actions={
          <Link
            href="/admin/articles/new"
            className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
          >
            New article
          </Link>
        }
      />
      <ArticlesTable articles={articles} />
    </>
  );
}
