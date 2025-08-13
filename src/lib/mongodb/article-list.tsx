import { dbConnect } from './dbConnect';

async function ArticleList() {
  const { db } = await dbConnect();

  try {
    const findResult = await db.collection('articles').find().toArray();
    // add type checking
    return {
      articles: findResult,
      status: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      // articles: ArticlesList,
      articles: [],
      status: 500,
      errorMap: e,
    };
  }
}

export default ArticleList;
