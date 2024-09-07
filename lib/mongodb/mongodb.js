import { MongoClient } from 'mongodb';

if (!process.env.DB_URL) {
  throw new Error('Please define the process.env.DB_URL environment variable inside .env.production.local');
}

if (!process.env.DB_NAME) {
  throw new Error('Please define the process.env.DB_NAME environment variable inside .env.production.local');
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(process.env.DB_URL, opts).then((client) => {
      return {
        client,
        db: client.db(process.env.DB_NAME),
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
