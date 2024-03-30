import Page from 'components/Page';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import ArticleRenderer from '../../components/Article';

export async function getServerSideProps({ query }: { query: any }) {
  const id = query.blog;
  const res = await fetch('https://simpletravelers.sk/api/articlecontent/' + id);
  const data = await res.json();

  return {
    props: {
      articleData: data,
    },
  };
}

const BlogPage = ({ articleData }: { articleData: any }) => {
  const [textAreaWidth, setTextAreaWidth] = useState(300);
  const refTextArea = React.useRef<any>();
  const articleTitle = articleData.tags.title;
  const getTextAreaWidth = () => {
    const newWidth = refTextArea.current.clientWidth;
    setTextAreaWidth(newWidth);
  };

  useEffect(() => {
    getTextAreaWidth();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getTextAreaWidth);
    return () => window.removeEventListener('resize', getTextAreaWidth);
  }, []);

  return (
    <>
      {articleData.tags && (
        <Head>
          <title>{articleTitle}, Simple Travelers</title>
          <meta property="og:title" content={articleData.tags.title ? articleData.tags.title : ''} />
          <meta property="og:description" content={articleData.tags.description ? articleData.tags.description : ''} />
          <meta name="description" content={articleData.tags.description ? articleData.tags.description : ''} />
          <meta
            property="og:image"
            content={articleData.tags.image ? 'https://simpletravelers.sk/static/' + articleData.tags.image : ''}
          />
          <meta property="og:type" content="article" />
          <meta name="keywords" content={articleData.tags.keywords ? articleData.tags.keywords : ''} />
          <meta property="og:url" content={'https://simpletravelers.sk/static/' + articleData.url} />
        </Head>
      )}
      <Page>
        <div ref={refTextArea} className="screen-reader-text">
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
