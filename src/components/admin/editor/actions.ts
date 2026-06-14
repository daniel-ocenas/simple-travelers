'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { emptyArticle } from '@/lib/cms/empty-article';
import { tiptapToBlocks } from '@/lib/cms/tiptap-adapter';
import { createArticle } from '@/lib/mongodb/create-article';
import { updateArticle } from '@/lib/mongodb/update-article';
import { getPost, invalidateArticlesCache } from '@/services/posts';
import { ImageAsset } from '@/store/Article/Article.types';

export type SaveResult =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string };

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

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
  const slug = String(formData.get('slug') ?? '').trim();
  // `originalSlug` is empty when creating; set to the current slug when editing.
  const originalSlug = String(formData.get('originalSlug') ?? '').trim();
  const isCreate = !originalSlug;

  if (!slug) return { status: 'error', error: 'Slug is required' };
  if (!SLUG_RE.test(slug)) {
    return {
      status: 'error',
      error: 'Slug may contain only lowercase letters, numbers and hyphens',
    };
  }

  const existing = isCreate ? undefined : await getPost(originalSlug);
  if (!isCreate && !existing) {
    return { status: 'error', error: `Article "${originalSlug}" not found` };
  }

  // Guard against clobbering another article when creating or renaming.
  if (slug !== originalSlug) {
    const collision = await getPost(slug);
    if (collision) {
      return { status: 'error', error: `Slug "${slug}" is already in use` };
    }
  }

  const base = existing ?? emptyArticle();

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

  const body = tiptapToBlocks(bodyJSON);

  let hero = base.hero;
  const heroRaw = formData.get('hero');
  if (heroRaw) {
    try {
      hero = JSON.parse(String(heroRaw)) as ImageAsset;
    } catch {
      return { status: 'error', error: 'Hero payload was not valid JSON' };
    }
  }

  const now = new Date().toISOString();
  const saved = {
    ...base,
    slug,
    title,
    description,
    categories,
    keywords,
    status,
    hero,
    body,
    updatedAt: now,
    publishedAt:
      status === 'published'
        ? (base.publishedAt ?? now)
        : status === 'draft'
          ? null
          : base.publishedAt,
  };

  try {
    if (isCreate) {
      await createArticle(saved);
    } else {
      await updateArticle(originalSlug, saved);
    }
  } catch (err) {
    return {
      status: 'error',
      error:
        err instanceof Error
          ? `Save failed: ${err.message}`
          : 'Save failed: unknown error',
    };
  }

  invalidateArticlesCache();
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  if (originalSlug && originalSlug !== slug) {
    revalidatePath(`/blog/${originalSlug}`);
  }
  revalidatePath('/admin/articles');

  // After a successful create (or rename) land on the canonical edit URL.
  if (isCreate || originalSlug !== slug) {
    redirect(`/admin/articles/${slug}`);
  }

  return { status: 'success' };
}
