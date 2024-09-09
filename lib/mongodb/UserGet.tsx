import { User } from 'lib/domains/User/User.types';
import { connectToDatabase } from 'lib/mongodb/mongodb';

async function UserGet(userName: string): Promise<{
  user: User | undefined;
  message: string;
  status: number;
  errorMap?: unknown;
}> {
  const { db } = await connectToDatabase();

  try {
    const result = await db.collection('user').findOne({ userName });
    if (result === undefined) {
      return {
        user: undefined,
        message: 'User Not Found',
        status: 500,
      };
    }
    return {
      user: result as User,
      message: 'User found',
      status: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      user: undefined,
      message: 'There was a problem loading user from the database',
      status: 500,
      errorMap: e,
    };
  }
}

export default UserGet;
