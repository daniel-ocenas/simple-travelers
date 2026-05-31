/* eslint-disable no-console */
import { MongoClient } from 'mongodb';

import { ArticleList } from '../src/data/article-list';

const COLLECTION = 'articles';

async function main() {
  if (!process.env.DB_URL) throw new Error('DB_URL is not set');
  if (!process.env.DB_NAME) throw new Error('DB_NAME is not set');

  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db(process.env.DB_NAME);
  const articles = db.collection(COLLECTION);

  console.log(`Connected to ${process.env.DB_NAME}.${COLLECTION}`);

  await articles.createIndex({ slug: 1 }, { unique: true });
  await articles.createIndex({ status: 1, publishedAt: -1 });

  let upserts = 0;
  for (const article of ArticleList) {
    const { _id: _ignored, ...doc } = article;
    const result = await articles.updateOne(
      { slug: article.slug },
      { $set: doc },
      { upsert: true },
    );
    upserts += result.upsertedCount + result.modifiedCount;
    console.log(`  · ${article.slug}`);
  }

  const total = await articles.countDocuments();
  console.log(`\n✓ Seeded ${upserts} change(s). Collection now has ${total} docs.`);

  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
