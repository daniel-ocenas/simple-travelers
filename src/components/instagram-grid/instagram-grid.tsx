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
    if (!token) {
        return [];
    }

    try {
        // Cache for 1 hour to prevent rate limiting
        const res = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`,
            { next: { revalidate: 3600 } }
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
}

export default async function InstagramGrid() {
    const posts = await fetchInstagramPosts();

    if (!posts || posts.length === 0) {
        // Return a placeholder or null if there is no token configured yet
        return (
            <section className="flex flex-col items-center justify-center p-4 my-12 text-center text-gray-500">
                <FaInstagram className="text-4xl mb-4 text-gray-300" />
                <p>Instagram token nie je nastavený.</p>
                <p className="text-sm">Pridajte INSTAGRAM_ACCESS_TOKEN do .env.local</p>
            </section>
        );
    }

    return (
        <section className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center gap-3 mb-8">
                <FaInstagram className="text-3xl text-pink-600" />
                <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-800 dark:text-gray-100">
                    Sledujte nás na Instagrame
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full max-w-5xl place-items-center">
                {posts.map((post) => {
                    const isVideo = post.media_type === 'VIDEO';
                    const imageUrl = isVideo ? post.thumbnail_url : post.media_url;

                    return (
                        <a
                            key={post.id}
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all block rounded-2xl md:rounded-xl shadow-sm hover:shadow-lg"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={imageUrl}
                                alt={post.caption || 'Instagram post'}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <FaInstagram className="text-white text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
