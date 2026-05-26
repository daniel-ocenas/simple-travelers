import React from 'react';

import { FaInstagram } from 'react-icons/fa';

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

const fetchInstagramPosts = async (): Promise<InstagramPost[]> => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token || token.length === 0) {
    return [];
  }

  try {
    // Cache for 1 hour to prevent rate limiting
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      console.error('Failed to fetch Instagram posts', await res.text());
      return [];
    }

    const data = await res.json();
    return data.data ? data.data.slice(0, 6) : []; // Return top 6 posts
  } catch (error) {
    console.error('Error fetching Instagram posts', error);
    return [];
  }
};

export default async function InstagramGrid() {
  const posts = await fetchInstagramPosts();

  if (!posts || posts.length === 0) {
    // Return a placeholder or null if there is no token configured yet
    return (
      <section className="my-12 flex flex-col items-center justify-center p-4 text-center text-gray-500">
        <FaInstagram className="mb-4 text-4xl text-gray-300" />
        <p>Instagram grid momentálne nieje dostupný.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex items-center gap-3">
        <FaInstagram className="text-3xl text-pink-600" />
        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 dark:text-gray-100">
          Sledujte nás na Instagrame
        </h2>
      </div>
      <div className="grid w-full max-w-5xl grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {posts.map((post) => {
          const isVideo = post.media_type === 'VIDEO';
          const imageUrl = isVideo ? post.thumbnail_url : post.media_url;

          return (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xs transition-all hover:shadow-lg dark:bg-gray-800 md:rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={post.caption || 'Instagram post'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-colors duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <FaInstagram className="scale-50 transform text-4xl text-white transition-transform duration-300 group-hover:scale-100" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
