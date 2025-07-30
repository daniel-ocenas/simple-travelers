import { NextResponse } from 'next/server';
import UserGet from 'src/lib/mongodb/UserGet';
import UserPost from 'src/lib/mongodb/UserPost';

const bcrypt = require('bcrypt');

// GET /api/users
export async function GET(req: Request) {
  try {
    const body = await req.json().catch(() => ({})); // handle empty body
    const users = await UserGet(body);
    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'User could not be retrieved' }, { status: 500 });
  }
}

// POST /api/users
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Example: hash password if present
    if (body.password) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      body.password = hashedPassword;
    }

    const result = await UserPost(body);
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'User could not be created' }, { status: 500 });
  }
}
