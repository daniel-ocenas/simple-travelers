'use client';

import { JSONContent } from '@tiptap/core';
import Image from 'next/image';
import { useActionState, useRef, useState } from 'react';

import MediaDialog from '@/components/admin/media/media-dialog';
import { Article, ArticleStatus, ImageAsset } from '@/store/Article/Article.types';
import Alert from '@/ui/alert';
import Button from '@/ui/button';
import Input from '@/ui/input';
import Textarea from '@/ui/textarea';

import { saveArticleAction, SaveResult } from './actions';
import TiptapEditor, { EditorHandle } from './tiptap-editor';

const STATUS_OPTIONS: ArticleStatus[] = ['draft', 'scheduled', 'published'];

export default function ArticleEditor({
  article,
  initialBody,
  mode = 'edit',
}: {
  article: Article;
  initialBody: JSONContent;
  mode?: 'create' | 'edit';
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
      {/* Original slug lets the save action find the existing doc even when the
          editable slug below is changed (or empty, for a new article). */}
      <input type="hidden" name="originalSlug" value={article.slug} />
      <input type="hidden" name="hero" value={JSON.stringify(hero)} />

      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {mode === 'create' ? (
            'New article'
          ) : (
            <>
              Editing <span className="font-mono">{article.slug}</span>
            </>
          )}
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
          <Button type="submit" disabled={pending}>
            {pending
              ? 'Saving…'
              : mode === 'create'
                ? 'Create article'
                : 'Save changes'}
          </Button>
        </div>
      </div>

      {state.status === 'error' && <Alert variant="error">{state.error}</Alert>}
      {state.status === 'success' && <Alert variant="success">Saved.</Alert>}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="order-1 space-y-6 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <Field label="Title">
            <Input
              name="title"
              defaultValue={article.title}
              required
              inputSize="lg"
            />
          </Field>

          <Field label="Slug (URL)">
            <Input
              name="slug"
              defaultValue={article.slug}
              required
              placeholder="napr-moja-cesta-do-talianska"
              pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
              title="Lowercase letters, numbers and hyphens only"
            />
          </Field>

          <Field label="Description">
            <Textarea
              name="description"
              defaultValue={article.description}
              rows={3}
            />
          </Field>
        </div>

        {/* Meta sits in the right column on desktop, but on small screens it
            renders before the body (order-2, between Description and Body). */}
        <aside className="order-2 space-y-6 lg:order-none lg:col-start-3 lg:row-span-2 lg:row-start-1">
          <Field label="Categories (comma separated)">
            <Input
              name="categories"
              defaultValue={article.categories.join(', ')}
            />
          </Field>
          <Field label="Keywords (comma separated)">
            <Input
              name="keywords"
              defaultValue={article.keywords.join(', ')}
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
              <Button
                variant="secondary"
                onClick={() => setHeroPickerOpen(true)}
                className="w-full"
              >
                Choose from media
              </Button>
            </div>
          </Field>
        </aside>

        <div className="order-3 lg:order-none lg:col-span-2 lg:col-start-1 lg:row-start-2">
          {/* Not a <label>: a contenteditable isn't a labelable control, so a
              wrapping <label> would silently bind to the first toolbar button. */}
          <div className="block">
            <FieldLabel>Body</FieldLabel>
            <TiptapEditor initialContent={initialBody} ref={editorRef} />
          </div>
        </div>
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
      <FieldLabel>{label}</FieldLabel>
      {children}
    </label>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
      {children}
    </span>
  );
}
