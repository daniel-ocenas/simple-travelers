import { dbConnect } from './dbConnect';
import { Article } from '@/store/Article/Article.types';

type ArticleGetResult =
  | { article: Article; status: 200 }
  | { article: null; status: 404 | 500; error?: unknown };

async function ArticleGet(slug: string): Promise<ArticleGetResult> {
  const { db } = await dbConnect();

  try {
    const result = await db.collection<Article>('articles').findOne({ slug });
    if (!result) {
      return { article: null, status: 404 };
    }
    return { article: result, status: 200 };
  } catch (error) {
    console.error(error);
    return { article: null, status: 500, error };
  }
}

export default ArticleGet;
