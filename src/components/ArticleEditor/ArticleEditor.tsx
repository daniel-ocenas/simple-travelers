'use client';
import { Button } from 'antd';
import React, { useState } from 'react';
import CreateArticle from 'src/components/ArticleEditor/CreateArticle';
import BlogCardsView from 'src/components/BlogCardsView';
import { notify } from 'src/components/Notification/notification';
import { ArticleProps } from 'src/lib/domains/Article/Article.types';
import { Flex, MarginBox } from 'src/UI';
import { useMedium } from 'src/utils/useBreakpoint';
import { useGetArticles } from 'src/utils/useGetArticles';

const CopyArticlesButton = ({ articles }: { articles: ArticleProps[] }) => (
  <Flex justify={'flex-end'}>
    <MarginBox my={8} mx={8}>
      <Button
        onClick={() => {
          if (articles) {
            navigator.clipboard.writeText(JSON.stringify(articles));
            notify('success', 'Articles copied to clipboard');
          } else {
            notify('error', 'No Articles present');
          }
        }}
      >
        Copy Articles to Clipboard
      </Button>
    </MarginBox>
  </Flex>
);

export const ArticleEditor = () => {
  const medium = useMedium();
  const { articlesList } = useGetArticles({ showAll: true });
  const [articleToEdit, setArticleToEdit] = useState<ArticleProps | undefined>(undefined);

  return (
    <Flex direction={'column'} maxWidth={medium ? 300 : 800}>
      <CopyArticlesButton articles={articlesList} />
      <CreateArticle article={articleToEdit} setArticle={setArticleToEdit} />
      {!articleToEdit && (
        <BlogCardsView articles={articlesList} onClick={(article) => setArticleToEdit(article)} edit />
      )}
      <MarginBox mt={200} />
    </Flex>
  );
};
