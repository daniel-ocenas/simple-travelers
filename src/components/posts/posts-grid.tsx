'use client';

import Card from '@/components/posts/card';
import { Article } from '@/store/Article/Article.types';

export default function PostsGrid({ allPosts }: { allPosts: Article[] }) {
  return (
    <section className="flex scroll-mt-12 flex-col items-center space-y-16">
      {allPosts.length ? (
        <ul
          id="posts-grid"
          className="grid w-full grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {allPosts.map((post) => (
            <li key={post.url}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-lg">No matching posts found</p>
      )}
    </section>
  );
}
