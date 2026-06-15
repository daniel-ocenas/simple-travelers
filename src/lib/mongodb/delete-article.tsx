import { dbConnect } from './dbConnect';

/**
 * Permanently remove an article, matched on its slug.
 *
 * Articles read through `services/posts` are projected without `_id`, so — like
 * `updateArticle` — the delete path keys on the slug rather than an ObjectId.
 */
export async function deleteArticle(slug: string) {
  const { db } = await dbConnect();
  return db.collection('articles').deleteOne({ slug });
}
