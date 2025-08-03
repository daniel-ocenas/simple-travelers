import { MetadataRoute } from 'next';

import { getAllPosts } from '@/services/posts';

export default async function sitemap() {
  const allPosts = await getAllPosts();
  const sitemap: MetadataRoute.Sitemap = [];

  for (const post of allPosts) {
    sitemap.push({
      url: `${process.env.SITE_URL}/blog/${post.url}`,
      // lastModified: new Date(post.dateCreated).toISOString(),
      lastModified: new Date().toISOString(),
    });
  }

  return sitemap;
}
