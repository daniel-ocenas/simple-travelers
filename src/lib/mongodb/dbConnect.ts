import { Db, MongoClient } from 'mongodb';

type MongoConn = { client: MongoClient; db: Db };

type GlobalWithMongo = typeof globalThis & {
  mongo?: { conn: MongoConn | null; promise: Promise<MongoConn> | null };
};

const g = globalThis as GlobalWithMongo;
const cached = (g.mongo ??= { conn: null, promise: null });

const SERVER_SELECTION_TIMEOUT_MS = 3000;

export async function dbConnect(): Promise<MongoConn> {
  if (!process.env.DB_URL) {
    throw new Error('DB_URL is not set');
  }
  if (!process.env.DB_NAME) {
    throw new Error('DB_NAME is not set');
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: SERVER_SELECTION_TIMEOUT_MS,
    })
      .then((client) => ({
        client,
        db: client.db(process.env.DB_NAME),
      }))
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
