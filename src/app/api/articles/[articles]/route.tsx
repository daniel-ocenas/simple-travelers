import { NextResponse } from 'next/server';
import ArticleGet from 'src/lib/mongodb/ArticleGet';

// GET /api/articles/[slug]
export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug; // dynamic segment from URL
    const result = await ArticleGet('sk', slug);

    return NextResponse.json(result.article, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Article could not be retrieved' }, { status: 500 });
  }
}
