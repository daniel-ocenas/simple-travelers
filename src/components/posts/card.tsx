'use client';

import Image from 'next/image';
import Link from 'next/link';

import CategoryList from '@/components/category/category-list';
import { Article } from '@/store/Article/Article.types';

const DATE_FORMATTER = new Intl.DateTimeFormat('sk-SK', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return DATE_FORMATTER.format(new Date(iso));
}

export default function Card({
  post: { slug, title, publishedAt, createdAt, hero, categories },
  external = false,
}: {
  post: Article;
  external?: boolean;
}) {
  const href = external ? slug : `/blog/${slug}`;

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <div
        className={`"bg-glass z-0 mx-auto flex max-w-100 flex-col overflow-hidden rounded-xl shadow-xl transition-all duration-100 ease-out hover:scale-[1.02] hover:shadow-2xl`}
      >
        <div className="relative z-0 h-60">
          <Image
            className="z-0"
            src={hero.src}
            alt={hero.alt}
            style={{ objectFit: 'cover' }}
            placeholder={hero.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={hero.blurDataURL}
            fill
          />
        </div>
        <div className="flex h-48 flex-col p-4">
          <div className="line-clamp-2 h-16 text-2xl font-bold">{title}</div>
          <time className="mb-4 mt-2 pl-2 text-sm text-gray-600">
            {formatDate(publishedAt ?? createdAt)}
          </time>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Link>
  );
}
