import { dbConnect } from './dbConnect';
import { Article } from '@/store/Article/Article.types';

/**
 * Update an existing article in place, identified by its CURRENT slug.
 *
 * Articles read through `services/posts` are projected without `_id` (so an
 * ObjectId never leaks to client components), which means the edit path has no
 * `_id` to key an update on. We therefore match on the existing slug instead —
 * `originalSlug` — which also lets a rename change `slug` on the same document
 * rather than inserting a duplicate (the cause of the `slug_1` E11000 error).
 *
 * `_id` is never written to `$set` (it is immutable on update).
 */
export async function updateArticle(originalSlug: string, article: Article) {
  const { db } = await dbConnect();

  const doc: Partial<Article> = {
    ...article,
    updatedAt: new Date().toISOString(),
  };
  delete doc._id;

  return db
    .collection('articles')
    .updateOne({ slug: originalSlug }, { $set: doc });
}
