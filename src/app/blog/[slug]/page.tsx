import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ArticleRenderer from '@/components/article/article-renderer';
import RelatedPosts from '@/components/posts/related-posts';
import { getAllPosts, getPost } from '@/services/posts';
import { Article } from '@/store/Article/Article.types';

type Params = Promise<{ slug: string }>;

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPost(slug);

  if (!article) {
    return notFound();
  }

  return {
    metadataBase: process.env.NEXT_PUBLIC_BASE_URL
      ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
      : undefined,
    title: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.hero.src],
      url: process.env.NEXT_PUBLIC_BASE_URL
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${article.slug}`
        : `/blog/${article.slug}`,
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (post.status !== 'published') {
    return (
      <article className="mx-auto mt-40 text-center">
        <h2 className="mb-4 text-3xl font-bold">Post Not Found</h2>
        <Link href="/blog">
          <span className="mr-2">&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }

  const relatedPosts: Article[] = allPosts.filter(
    (p) =>
      p.slug !== slug &&
      p.status === 'published' &&
      p.categories.some((v) => post.categories.includes(v)),
  );

  return (
    <>
      <div
        data-revalidated-at={new Date().getTime()}
        className="height-fit mt-12 flex flex-col items-center md:mt-20"
      >
        <div className="relative w-[90vw] max-w-screen-xl">
          <ArticleRenderer body={post.body} />
        </div>
      </div>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
