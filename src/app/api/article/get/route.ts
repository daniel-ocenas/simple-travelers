import { NextRequest } from 'next/server';

import articleList from '@/lib/mongodb/article-list';
import { dbConnect } from '@/lib/mongodb/dbConnect';

export const GET = async (_req: NextRequest) => {
  try {
    await dbConnect();
    const result = await articleList();
    const totalPosts = result.articles?.length;

    return new Response(
      JSON.stringify({ articles: result.articles, totalPosts }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log('Error getting posts:', error);
  }
};
