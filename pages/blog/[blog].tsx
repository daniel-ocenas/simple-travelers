import ArticleRenderer from 'components/Article';
import Page from 'components/Page';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { usePageMargin } from 'utils/useBreakpoint';

export async function getServerSideProps({ query }: { query: any }) {
  const id = query.blog;
  // TODO local / vs prod url
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}`).catch((e) => {
    return undefined;
  });

  let data = await response?.json();
  // if (response?.status !== 200) {
  //   data = ArticlesList.find((article) => article.url === id);
  // }

  return {
    props: {
      articleData: data,
    },
  };
}

const BlogPage = ({ articleData }: { articleData: any }) => {
  const pageMargin = usePageMargin();
  const [textAreaWidth, setTextAreaWidth] = useState(300);
  const refTextArea = React.useRef<any>();
  const { title, description, image, keywords } = articleData;

  const getTextAreaWidth = () => {
    const newWidth = refTextArea.current.clientWidth;
    setTextAreaWidth(newWidth);
  };

  useEffect(() => {
    getTextAreaWidth();
  }, [pageMargin]);

  useEffect(() => {
    window.addEventListener('resize', getTextAreaWidth);
    return () => window.removeEventListener('resize', getTextAreaWidth);
  }, []);

  const head = {
    title: `${title}, Simple Travelers`,
    articleTitle: `${title ?? ''}`,
    description: `${description ?? ''}`,
    image: `${image ? 'https://simpletravelers.sk' + image : ''}`,
    keywords: `${keywords ?? ''}`,
    url: `https://simpletravelers.sk/blog/${articleData.url}`,
  };

  return (
    <>
      {articleData.tags && (
        <Head>
          <title>{head.title}</title>
          <meta property="og:title" content={head.articleTitle} />
          <meta property="og:description" content={head.description} />
          <meta name="description" content={head.description} />
          <meta property="og:image" content={head.image} />
          <meta property="og:url" content={head.url} />
          <meta property="og:type" content={'article'} />
          <meta name="keywords" content={head.keywords} />
        </Head>
      )}
      <Page mr={pageMargin}>
        <div ref={refTextArea} className="screen-reader-text article">
          {articleData.content === undefined ? (
            <h4>Article Could Not Be Found</h4>
          ) : (
            <>{articleData.content.map((data: any, idx: any) => ArticleRenderer(data, idx, textAreaWidth))}</>
          )}
        </div>
      </Page>
    </>
  );
};

export default BlogPage;
