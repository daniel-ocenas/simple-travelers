import Link from 'next/link';

import ArticlesTable from '@/components/admin/articles/articles-table';
import { buttonClasses } from '@/ui/button';
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
          <Link href="/admin/articles/new" className={buttonClasses()}>
            New article
          </Link>
        }
      />
      <ArticlesTable articles={articles} />
    </>
  );
}
