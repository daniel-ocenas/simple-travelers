import { User } from 'lib/domains/User/User.types';
import { connectToDatabase } from 'lib/mongodb/mongodb';
import { NextResponse } from 'next/server';

const bcrypt = require('bcrypt');

function isValidPass(hashedPass: string, unhashedPass: string) {
  return new Promise((resolve) => {
    bcrypt.compare(unhashedPass, hashedPass, function (err: any, result: any) {
      if (err) {
        resolve(false);
      }
      if (result) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export default async function Login(req: any, res: any) {
  const { db } = await connectToDatabase();
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'POST':
      try {
        const { userName, password }: { userName: string; password: string } = req.body;
        const user = await db.collection('users').findOne({ userName });
        if (user === undefined) {
          res.status(400).json({ user: user, message: 'There was a problem during loging in' });
        }

        const isValid = await isValidPass(user.password, password);
        if (isValid) {
          res.status(200).json({ user: user as User, message: 'OK' });
        }

        res.status(401).json({ user: undefined, message: 'User Not Authorized' });
      } catch (e) {
        console.error(e);
        return NextResponse.json(
          {
            user: undefined,
            message: 'There was a problem during loging in',
          },
          { status: 404 },
        );
      }
      break;
  }
}
