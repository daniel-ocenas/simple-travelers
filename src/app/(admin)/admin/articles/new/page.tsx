import ArticleEditor from '@/components/admin/editor/article-editor';
import { emptyArticle } from '@/lib/cms/empty-article';
import { blocksToTiptap } from '@/lib/cms/tiptap-adapter';
import Link from '@/ui/link';

export const metadata = {
  title: 'New article',
};

export default function NewArticlePage() {
  const article = emptyArticle();

  return (
    <div className="space-y-4">
      <Link href="/admin/articles" variant="muted">
        ← Articles
      </Link>
      <ArticleEditor
        article={article}
        initialBody={blocksToTiptap(article.body)}
        mode="create"
      />
    </div>
  );
}
