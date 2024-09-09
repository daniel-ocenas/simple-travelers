import { ConfigProps } from 'lib/domains/config/Config.types';
import { connectToDatabase } from 'lib/mongodb/mongodb';

async function InstagramTokenGet(): Promise<{
  config?: ConfigProps;
  message: string;
  status: number;
  errorMap?: unknown;
}> {
  const { db } = await connectToDatabase();

  try {
    const result = await db.collection('config').findOne({ name: 'config' });

    if (result === undefined) {
      return {
        config: undefined,
        message: 'Config Not Found',
        status: 500,
      };
    }
    return {
      config: result as ConfigProps,
      message: 'Config found',
      status: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      config: undefined,
      message: 'There was a problem loading config from the database',
      status: 500,
      errorMap: e,
    };
  }
}

export default InstagramTokenGet;
