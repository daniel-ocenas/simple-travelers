import { NextRequest, NextResponse } from 'next/server';

import { createArticle } from '@/lib/mongodb/create-article';


// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await createArticle('sk', body);
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: 'Article could not be created' },
      { status: 500 }
    );
  }
}
