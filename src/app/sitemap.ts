import { MetadataRoute } from 'next';

import { ArticleList, sortArticlesByDate } from '@/data/article-list';

export const dynamic = 'force-static';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/blog',
  '/gallery',
  '/videos',
  '/gdpr',
  '/404',
  '/500',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = sortArticlesByDate(ArticleList);
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    (staticRoute) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${staticRoute}`,
        lastModified: currentDate,
        changeFreq: 'monthly',
        priority: staticRoute === '/' ? 1 : 0.9,
      };
    },
  );

  const dynamicRoutes: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.status === 'published')
    .map((post) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt ?? currentDate,
        changeFreq: 'monthly',
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...dynamicRoutes];
}
