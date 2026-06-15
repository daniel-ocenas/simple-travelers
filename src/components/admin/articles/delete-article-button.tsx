'use client';

import { useTransition } from 'react';

import { deleteArticleAction } from '@/components/admin/editor/actions';
import Button from '@/ui/button';

export default function DeleteArticleButton({
  slug,
  title,
  size = 'md',
}: {
  slug: string;
  title?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}) {
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    const label = title || slug;
    if (!window.confirm(`Delete "${label}"? This cannot be undone.`)) return;
    startTransition(() => {
      void deleteArticleAction(slug);
    });
  }

  return (
    <Button
      type="button"
      variant="danger"
      size={size}
      disabled={pending}
      onClick={handleDelete}
    >
      {pending ? 'Deleting…' : 'Delete'}
    </Button>
  );
}
