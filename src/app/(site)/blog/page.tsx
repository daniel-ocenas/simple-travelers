import { Metadata } from 'next';

import PostsGrid from '@/components/posts/posts-grid';
import { getAllPosts } from '@/services/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  // const allCategories = toUniqueArray(
  //   allPosts
  //     .filter((post) => post.isPublished)
  //     .map((post) => post.categories)
  //     .flat()
  // ).sort();

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
