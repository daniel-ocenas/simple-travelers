import About from '@/components/about';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPosts } from '@/services/posts';

export const metadata = {
  title: 'Simple Travelers',
};

export default async function HomePage() {
  const allPosts = await getAllPosts();
  //
  // try {
  //   const result = await fetch(
  //     process.env.NEXT_PUBLIC_BASE_URL + '/api/article/get',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({ limit: 9, order: 'desc' }),
  //       cache: 'no-store',
  //     }
  //   );
  //   const data = await result.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log('Error getting post:', error);
  // }

  return (
    <>
      <div className="my-12">
        <About />
      </div>
      <div className="my-12">
        <PostsGrid allPosts={allPosts} />
      </div>
    </>
  );
}
