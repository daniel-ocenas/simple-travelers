import Article from '/src/lib/mongodb/models/article.model';
import { connect } from '/src/lib/mongodb/mongoose';

export const POST = async (req) => {
  try {
    await connect();
    const data = await req.json();
    // console.log('data', data);
    // if (
    //   !user ||
    //   user.publicMetadata.userMongoId !== data.userMongoId ||
    //   user.publicMetadata.isAdmin !== true
    // ) {
    //   return new Response('Unauthorized', {
    //     status: 401,
    //   });
    // }

    const newPost = await Article.create({
      ...data,
    });
    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 200,
    });
  } catch (error) {
    console.log('Error creating post:', error);
    return new Response('Error creating post', {
      status: 500,
    });
  }
};
