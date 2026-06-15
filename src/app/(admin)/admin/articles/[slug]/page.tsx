import { notFound } from 'next/navigation';

import ArticleEditor from '@/components/admin/editor/article-editor';
import { blocksToTiptap } from '@/lib/cms/tiptap-adapter';
import { getPost } from '@/services/posts';
import Link from '@/ui/link';

export const dynamic = 'force-dynamic';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return { title: `Edit · ${slug}` };
}

export default async function EditArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return notFound();

  const initialBody = blocksToTiptap(article.body);

  return (
    <div>
      <Link href="/admin/articles" variant="muted" className="mb-8 inline-block">
        ← Articles
      </Link>
      <ArticleEditor article={article} initialBody={initialBody} />
    </div>
  );
}
