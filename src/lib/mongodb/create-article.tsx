import { ObjectId } from 'bson';

import { dbConnect } from '@/lib/mongodb/dbConnect';
import { Article } from '@/store/Article/Article.types';

export async function createArticle(lang: string, article: Article) {
  article.date = new Date(
    Date.parse(article.dateCreated ?? '')
  ).toLocaleDateString('sk', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  article.dateCreated =
    article.dateCreated ?? new Date().toLocaleDateString('sk');
  const { db } = await dbConnect();

  const _id = article._id ? new ObjectId(article._id) : new ObjectId();
  const newArticle = {
    ...article,
    _id,
  };

  console.log(newArticle);

  const query = { _id };
  const update = { $set: newArticle };
  const options = { upsert: true };
  return await db.collection('articles').updateOne(query, update, options);
}
