import { ObjectId } from 'bson';
import { NextResponse } from 'next/server';
import { ArticleProps } from 'src/lib/domains/Article/Article.types';
import ArticleList from 'src/lib/mongodb/ArticleList';
import { connectToDatabase } from 'src/lib/mongodb/mongodb';

async function articleCreate(lang: string, article: ArticleProps) {
  article.date = new Date(Date.parse(article.dateCreated ?? '')).toLocaleDateString('sk', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  article.dateCreated = article.dateCreated ?? new Date().toLocaleDateString('sk');
  const { db } = await connectToDatabase();

  const _id = new ObjectId(article._id);
  const newArticle = {
    ...article,
    _id,
  };

  const query = { _id };
  const update = { $set: newArticle };
  const options = { upsert: true };
  return await db.collection('articles-' + lang).updateOne(query, update, options);
}

// Handle GET requests
export async function GET() {
  try {
    const articles = await ArticleList('sk');
    return NextResponse.json(articles, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Article could not be retrieved' }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await articleCreate('sk', body);
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Article could not be created' }, { status: 500 });
  }
}
