import ArticleRenderer from 'components/Article';
import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'UI';
import { useScreenSize } from 'utils/useBreakpoint';

export async function getServerSideProps({ query }: { query: any }) {
  const id = query.blog;
  // TODO local / vs prod url
  const response = await fetch(`/api/articles/${id}`).catch(() => {
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
  const [textAreaWidth, setTextAreaWidth] = useState(300);
  const refTextArea = useRef<any>(null);
  const { width } = useScreenSize();
  const { title, description, image, keywords } = articleData;

  const getTextAreaWidth = () => {
    const newWidth = refTextArea.current.clientWidth;
    setTextAreaWidth(newWidth);
  };

  useEffect(() => {
    getTextAreaWidth();
  }, [width]);

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
      <Page>
        <WithSidebar>
          <div ref={refTextArea}>
            {articleData.content === undefined ? (
              <Text type={'h4'}>Article Could Not Be Found</Text>
            ) : (
              <>{articleData.content.map((data: any, idx: any) => ArticleRenderer(data, idx, textAreaWidth))}</>
            )}
          </div>
        </WithSidebar>
      </Page>
    </>
  );
};

export default BlogPage;
