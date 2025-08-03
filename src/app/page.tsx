import AboutUs from '@/components/AboutUs';
import PostsGrid from '@/components/Posts/PostsGrid';
import { getAllPosts } from '@/services/posts';

export const metadata = {
  title: 'Simple Travelers',
};

export default async function HomePage() {
  const allPosts = await getAllPosts();

  return (
    <>
      <div className="my-12">
        <AboutUs />
      </div>
      <div className="my-12">
        <PostsGrid allPosts={allPosts} />
      </div>
    </>
  );
}
