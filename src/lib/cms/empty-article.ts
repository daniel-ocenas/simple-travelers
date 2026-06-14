import { Article } from '@/store/Article/Article.types';

/**
 * A blank article used as the starting point for the create flow and as the
 * fallback base when saving. `_id: ''` tells `createArticle` to mint a fresh
 * ObjectId; timestamps are overwritten by the save action.
 */
export function emptyArticle(): Article {
  const now = new Date().toISOString();
  return {
    _id: '',
    slug: '',
    title: '',
    description: '',
    hero: { src: '', alt: '', width: 0, height: 0 },
    categories: [],
    keywords: [],
    status: 'draft',
    publishedAt: null,
    scheduledFor: null,
    createdAt: now,
    updatedAt: now,
    body: [],
  };
}
