import { ArticleList, sortArticlesByDate } from '@/data/article-list';
import { dbConnect } from '@/lib/mongodb/dbConnect';
import { Article } from '@/store/Article/Article.types';

const COLLECTION = 'articles';

async function fetchFromMongo(): Promise<Article[] | null> {
  if (!process.env.DB_URL || !process.env.DB_NAME) return null;

  try {
    const { db } = await dbConnect();
    const docs = await db
      .collection<Article>(COLLECTION)
      .find({}, { projection: { _id: 0 } })
      .toArray();
    return docs.length > 0 ? docs : null;
  } catch (err) {
    console.warn(
      '[services/posts] mongo unreachable, falling back to static:',
      err instanceof Error ? err.message : err,
    );
    return null;
  }
}

let articlesPromise: Promise<Article[]> | null = null;

async function getArticles(): Promise<Article[]> {
  articlesPromise ??= (async () => {
    const fromMongo = await fetchFromMongo();
    return fromMongo ?? ArticleList;
  })();
  return articlesPromise;
}

/**
 * Drop the in-memory article cache so the next read re-fetches from Mongo.
 * Call after any write (create/update) — `revalidatePath` only clears Next's
 * route cache, not this module-level memo.
 */
export function invalidateArticlesCache(): void {
  articlesPromise = null;
}

export async function getPost(slug?: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find((post) => post.slug === slug);
}

export async function getAllPosts(): Promise<Article[]> {
  const articles = await getArticles();
  return sortArticlesByDate(articles);
}
