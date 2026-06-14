'use client';

import { JSONContent } from '@tiptap/core';
import Image from 'next/image';
import { useActionState, useRef, useState } from 'react';

import MediaDialog from '@/components/admin/media/media-dialog';
import { Article, ArticleStatus, ImageAsset } from '@/store/Article/Article.types';

import { saveArticleAction, SaveResult } from './actions';
import TiptapEditor, { EditorHandle } from './tiptap-editor';

const STATUS_OPTIONS: ArticleStatus[] = ['draft', 'scheduled', 'published'];

export default function ArticleEditor({
  article,
  initialBody,
}: {
  article: Article;
  initialBody: JSONContent;
}) {
  const editorRef = useRef<EditorHandle>(null);
  const [hero, setHero] = useState<ImageAsset>(article.hero);
  const [heroPickerOpen, setHeroPickerOpen] = useState(false);

  const [state, action, pending] = useActionState<SaveResult, FormData>(
    async (_prev, formData) => {
      const json = editorRef.current?.getJSON() ?? { type: 'doc' };
      formData.set('body', JSON.stringify(json));
      return saveArticleAction(_prev, formData);
    },
    { status: 'idle' },
  );

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="slug" value={article.slug} />
      <input type="hidden" name="hero" value={JSON.stringify(hero)} />

      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Editing <span className="font-mono">{article.slug}</span>
        </div>
        <div className="flex items-center gap-3">
          <select
            name="status"
            defaultValue={article.status}
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-gray-900 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
          >
            {pending ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>

      {state.status === 'error' && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {state.error}
        </p>
      )}
      {state.status === 'success' && (
        <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
          Saved.
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Field label="Title">
            <input
              name="title"
              defaultValue={article.title}
              required
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base dark:border-gray-700 dark:bg-gray-950"
            />
          </Field>

          <Field label="Description">
            <textarea
              name="description"
              defaultValue={article.description}
              rows={3}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950"
            />
          </Field>

          <Field label="Body">
            <TiptapEditor initialContent={initialBody} ref={editorRef} />
          </Field>
        </div>

        <aside className="space-y-6">
          <Field label="Categories (comma separated)">
            <input
              name="categories"
              defaultValue={article.categories.join(', ')}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950"
            />
          </Field>
          <Field label="Keywords (comma separated)">
            <input
              name="keywords"
              defaultValue={article.keywords.join(', ')}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950"
            />
          </Field>
          <Field label="Hero image">
            <div className="space-y-2">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
                {hero.src && (
                  <Image
                    src={hero.src}
                    alt={hero.alt || 'Hero image'}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                )}
              </div>
              <button
                type="button"
                onClick={() => setHeroPickerOpen(true)}
                className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                Choose from media
              </button>
            </div>
          </Field>
        </aside>
      </div>

      <MediaDialog
        open={heroPickerOpen}
        onClose={() => setHeroPickerOpen(false)}
        onSelect={(asset) =>
          setHero({
            src: asset.src,
            alt: asset.alt,
            width: asset.width,
            height: asset.height,
            blurDataURL: asset.blurDataURL,
          })
        }
      />
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </span>
      {children}
    </label>
  );
}
