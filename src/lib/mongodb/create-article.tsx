import { ObjectId } from 'bson';

import { dbConnect } from './dbConnect';
import { Article } from '@/store/Article/Article.types';

export async function createArticle(article: Article) {
  const { db } = await dbConnect();

  const now = new Date().toISOString();
  const _id = article._id ? new ObjectId(article._id) : new ObjectId();

  const doc = {
    ...article,
    _id,
    createdAt: article.createdAt || now,
    updatedAt: now,
  };

  return db
    .collection('articles')
    .updateOne({ _id }, { $set: doc }, { upsert: true });
}
