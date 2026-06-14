import Link from 'next/link';
import { notFound } from 'next/navigation';

import ArticleEditor from '@/components/admin/editor/article-editor';
import { blocksToTiptap } from '@/lib/cms/tiptap-adapter';
import { getPost } from '@/services/posts';

export const dynamic = 'force-dynamic';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return { title: `Edit · ${slug}` };
}

export default async function EditArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return notFound();

  const initialBody = blocksToTiptap(article.body);

  return (
    <div className="space-y-4">
      <Link
        href="/admin/articles"
        className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        ← Articles
      </Link>
      <ArticleEditor article={article} initialBody={initialBody} />
    </div>
  );
}
