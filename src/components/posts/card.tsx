'use client';

import Image from 'next/image';
import Link from 'next/link';

import CategoryList from '@/components/category/category-list';
import { Article } from '@/store/Article/Article.types';

export default function Card({
  post: { url, title, date, image, categories },
}: {
  post: Article;
}) {
  return (
    <Link href={`/blog/${url}`}>
      <article
        className="bg-glass z-0 mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl
      shadow-xl transition-all duration-100 ease-out hover:scale-[1.02] hover:shadow-2xl "
      >
        <div className="relative z-0 h-60">
          <Image
            className={'z-0'}
            src={image}
            alt="cover image"
            style={{ objectFit: 'cover' }}
            // placeholder="blur"
            fill
          />
        </div>
        <div className="flex h-48 flex-col p-4">
          <h3 className="line-clamp-2 h-16 text-2xl font-bold">{title}</h3>
          <time className="mb-4 mt-2 pl-2 text-sm text-gray-400">{date}</time>
          <CategoryList categories={categories} />
        </div>
      </article>
    </Link>
  );
}
