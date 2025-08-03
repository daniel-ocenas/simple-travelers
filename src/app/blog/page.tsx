import PostsGrid from '@/components/Posts/PostsGrid';
import { getAllPosts } from '@/services/posts';
import { toUniqueArray } from '@/utils/toUniqueArray';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.isPublished)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <h1 className="my-12 text-center text-3xl font-bold">Blog</h1>
      {/*<section className="mb-16 mt-0 space-y-8 md:mt-20">*/}
      {/*  <SearchBar />*/}
      {/*  <CategoryFilter allCategories={allCategories} />*/}
      {/*</section>*/}
      <PostsGrid allPosts={allPosts} />
    </>
  );
}
