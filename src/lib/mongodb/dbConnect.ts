import { Db, MongoClient } from 'mongodb';

type MongoConn = { client: MongoClient; db: Db };

type GlobalWithMongo = typeof globalThis & {
  mongo?: { conn: MongoConn | null; promise: Promise<MongoConn> | null };
};

const g = globalThis as GlobalWithMongo;
const cached = (g.mongo ??= { conn: null, promise: null });

export async function dbConnect(): Promise<MongoConn> {
  if (!process.env.DB_URL) {
    throw new Error(
      'Please define the process.env.DB_URL environment variable',
    );
  }
  if (!process.env.DB_NAME) {
    throw new Error(
      'Please define the process.env.DB_NAME environment variable',
    );
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(process.env.DB_URL).then((client) => ({
      client,
      db: client.db(process.env.DB_NAME),
    }));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
