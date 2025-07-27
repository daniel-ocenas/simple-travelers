'use client';
import { Button } from 'antd';
import CreateArticle from 'components/ArticleEditor/CreateArticle';
import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import BlogCardsView from 'components/BlogCardsView';
import { notify } from 'components/Notification/notification';
import React, { useState } from 'react';
import { Flex, MarginBox } from 'UI';
import { useMedium } from 'utils/useBreakpoint';
import { useGetArticles } from 'utils/useGetArticles';

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
