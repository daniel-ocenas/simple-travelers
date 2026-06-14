import { ArticleStatus } from '@/store/Article/Article.types';

const VARIANTS: Record<ArticleStatus, string> = {
  draft:
    'bg-gray-100 text-gray-700 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700',
  scheduled:
    'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-900',
  published:
    'bg-emerald-100 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-900',
};

const LABELS: Record<ArticleStatus, string> = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  published: 'Published',
};

export default function StatusPill({ status }: { status: ArticleStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${VARIANTS[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
