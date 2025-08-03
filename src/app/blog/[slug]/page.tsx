import Link from 'next/link';
import { notFound } from 'next/navigation';

import ArticleRenderer from '@/components/Article';
import RelatedPosts from '@/components/Posts/RelatedPosts';
import { getAllPosts } from '@/services/posts';
import { Article } from '@/store/Article/Article.types';


type Params = Promise<{ slug: string }>;

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();

  const post = allPosts.find((p) => p.url === slug);
  if (!post) {
    return notFound();
  }

  if (!post.isPublished) {
    return (
      <article
        data-revalidated-at={new Date().getTime()}
        className="mx-auto mt-40 text-center"
      >
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
      p.url !== slug &&
      p.isPublished &&
      p.categories.some((v) => post.categories.includes(v))
  );

  const recordMap = [];

  return (
    <>
      <div
        data-revalidated-at={new Date().getTime()}
        className="height-fit mt-12 flex flex-col items-center md:mt-20"
      >
        <div className="relative w-[90vw] max-w-[900px]">
          {post?.content === undefined ? (
            <h4>Article Could Not Be Found</h4>
          ) : (
            <>
              {post?.content.map((data: any, idx: any) => (
                <ArticleRenderer
                  key={idx}
                  idx={idx}
                  config={data}
                  textAreaWidth={900}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();

  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const allPosts = await getAllPosts();
//   const post = allPosts.find((p) => p.url === slug);
//
//   return post
//     ? {
//         title: post.title,
//         openGraph: {
//           images: [
//             {
//               url: post.url,
//               width: 400,
//               height: 300,
//             },
//           ],
//         },
//       }
//     : {};
// }
