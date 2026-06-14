'use server';

import { revalidatePath } from 'next/cache';

import { indexMediaBlocks, tiptapToBlocks } from '@/lib/cms/tiptap-adapter';
import { createArticle } from '@/lib/mongodb/create-article';
import { getPost } from '@/services/posts';

export type SaveResult =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string };

function parseList(value: FormDataEntryValue | null): string[] {
  return String(value ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function saveArticleAction(
  _prev: SaveResult,
  formData: FormData,
): Promise<SaveResult> {
  const slug = String(formData.get('slug') ?? '');
  if (!slug) return { status: 'error', error: 'Missing slug' };

  const existing = await getPost(slug);
  if (!existing) return { status: 'error', error: `Article "${slug}" not found` };

  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const status = String(formData.get('status') ?? 'draft') as
    | 'draft'
    | 'scheduled'
    | 'published';
  const categories = parseList(formData.get('categories'));
  const keywords = parseList(formData.get('keywords'));

  let bodyJSON;
  try {
    bodyJSON = JSON.parse(String(formData.get('body') ?? '{}'));
  } catch {
    return { status: 'error', error: 'Body payload was not valid JSON' };
  }

  const mediaByKey = indexMediaBlocks(existing.body);
  const body = tiptapToBlocks(bodyJSON, mediaByKey);

  const now = new Date().toISOString();
  const updated = {
    ...existing,
    title,
    description,
    categories,
    keywords,
    status,
    body,
    updatedAt: now,
    publishedAt:
      status === 'published'
        ? (existing.publishedAt ?? now)
        : status === 'draft'
          ? null
          : existing.publishedAt,
  };

  try {
    await createArticle(updated);
  } catch (err) {
    return {
      status: 'error',
      error:
        err instanceof Error
          ? `Save failed: ${err.message}`
          : 'Save failed: unknown error',
    };
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/admin/articles');

  return { status: 'success' };
}
