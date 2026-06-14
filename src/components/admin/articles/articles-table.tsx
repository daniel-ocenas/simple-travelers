import Link from 'next/link';

import { buttonClasses } from '@/ui/button';
import DataTable, { Column } from '@/ui/data-table';
import EmptyState from '@/ui/empty-state';
import StatusPill from '@/ui/status-pill';
import TagList from '@/ui/tag-list';
import { Article } from '@/store/Article/Article.types';

const DATE_FORMATTER = new Intl.DateTimeFormat('sk-SK', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return DATE_FORMATTER.format(new Date(iso));
}

const columns: Column<Article>[] = [
  {
    key: 'title',
    header: 'Title',
    cell: (a) => (
      <div className="min-w-0">
        <div className="truncate font-medium text-gray-900 dark:text-gray-100">
          {a.title}
        </div>
        <div className="truncate text-xs text-gray-400">{a.slug}</div>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    width: '120px',
    cell: (a) => <StatusPill status={a.status} />,
  },
  {
    key: 'categories',
    header: 'Categories',
    cell: (a) => <TagList items={a.categories} />,
  },
  {
    key: 'updatedAt',
    header: 'Updated',
    width: '140px',
    align: 'right',
    cell: (a) => (
      <span className="tabular-nums text-gray-500 dark:text-gray-400">
        {formatDate(a.updatedAt)}
      </span>
    ),
  },
];

export default function ArticlesTable({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <EmptyState
        title="No articles yet"
        description="Create your first article to see it here."
        action={
          <Link
            href="/admin/articles/new"
            className={buttonClasses({ size: 'lg' })}
          >
            New article
          </Link>
        }
      />
    );
  }

  return (
    <DataTable
      columns={columns}
      rows={articles}
      rowKey={(a) => a.slug}
      rowHref={(a) => `/admin/articles/${a.slug}`}
    />
  );
}
