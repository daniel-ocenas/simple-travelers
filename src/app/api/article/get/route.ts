import { NextRequest } from 'next/server';

import Article from '@/lib/models/article.model';
import { connect } from '@/lib/mongodb/mongoose';

export const POST = async (req: NextRequest) => {
  console.log('req', req);
  await connect();
  const data = await req.json();
  console.log('data', data);
  const articleList = await Article.find();
  console.log('articleList', articleList);

  try {
    const startIndex = parseInt(data.startIndex) || 0;
    const limit = parseInt(data.limit) || 9;
    const sortDirection = data.order === 'asc' ? 1 : -1;
    const posts = await Article.find({
      ...(data.userId && { userId: data.userId }),
      ...(data.category &&
        data.category !== 'null' &&
        data.category !== 'undefined' && { category: data.category }),
      ...(data.slug && { slug: data.slug }),
      ...(data.postId && { _id: data.postId }),
      ...(data.searchTerm && {
        $or: [
          { title: { $regex: data.searchTerm, $options: 'i' } },
          { content: { $regex: data.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPosts = await Article.countDocuments();

    return new Response(JSON.stringify({ posts, totalPosts }), {
      status: 200,
    });
  } catch (error) {
    console.log('Error getting posts:', error);
  }
};
