import ArticleRenderer from 'components/Article';
import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import { ArticleProps } from 'lib/domains/Article/Article.types';
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
      article: data,
    },
  };
}

const BlogPage = ({ article }: { article: ArticleProps }) => {
  const [textAreaWidth, setTextAreaWidth] = useState(300);
  const refTextArea = useRef<any>(null);
  const { width } = useScreenSize();

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
            {article?.content === undefined ? (
              <Text type={'h4'}>Article Could Not Be Found</Text>
            ) : (
              <>{article?.content.map((data: any, idx: any) => ArticleRenderer(data, idx, textAreaWidth))}</>
            )}
          </div>
        </WithSidebar>
      </Page>
    </>
  );
};

export default BlogPage;
