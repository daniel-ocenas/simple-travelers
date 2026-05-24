import { Article } from '@/store/Article/Article.types';

import { dbConnect } from './dbConnect';

type ArticleListResult =
  | { articles: Article[]; status: 200 }
  | { articles: []; status: 500; error: unknown };

async function ArticleList(): Promise<ArticleListResult> {
  const { db } = await dbConnect();

  try {
    const articles = await db
      .collection<Article>('articles')
      .find()
      .toArray();
    return { articles, status: 200 };
  } catch (error) {
    console.error(error);
    return { articles: [], status: 500, error };
  }
}

export default ArticleList;
