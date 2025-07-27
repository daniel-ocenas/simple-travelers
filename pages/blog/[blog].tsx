import ArticleRenderer from 'components/Article';
import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import { Metadata } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'UI';
import { useScreenSize } from 'utils/useBreakpoint';

export async function getServerSideProps({ query }: { query: any }) {
  const id = query.blog;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}`).catch(() => {
    return undefined;
  });

  let data = await response?.json();

  return {
    props: {
      articleData: data,
    },
  };
}

export async function generateMetadata({ articleData }: { articleData: any }): Promise<Metadata> {
  const { title, description, image, keywords } = articleData;
  console.log(articleData);
  return {
    title: `${title}, Simple Travelers`,
    openGraph: {
      description: `${description ?? ''}`,
      title: `${title}, Simple Travelers`,
      images: [{ url: `${image ? process.env.NEXT_PUBLIC_BASE_URL + image : ''}` }],
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${articleData.url}`,
      type: 'article',
    },
    description: `${description ?? ''}`,
    keywords: `${keywords ?? ''}`,
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

  return (
    <>
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
