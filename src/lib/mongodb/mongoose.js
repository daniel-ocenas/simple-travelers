import mongoose from 'mongoose';

if (!process.env.DB_URL) {
  throw new Error(
    'Please define the DB_URL environment variable inside env file'
  );
}

if (!process.env.DB_NAME) {
  throw new Error(
    'Please define the DB_NAME environment variable inside env file'
  );
}

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('Already connected to MongoDB');
    return;
  }
  try {
    console.log('Trying to connect to MongoDB...');
    await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
    });
    console.log('Connected to MongoDB');
    initialized = true;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};
