import CreateArticle from 'components/ArticleEditor/CreateArticle';
import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import BlogCardsView from 'components/BlogCardsView';
import React, { useState } from 'react';
import { Flex } from 'UI/Flex';
import { useGetArticles } from 'utils/useGetArticles';

export const ArticleEditor = () => {
  const { articlesList } = useGetArticles({ showAll: true });
  const [articleToEdit, setArticleToEdit] = useState<ArticleProps | undefined>(undefined);

  return (
    <Flex direction={'column'}>
      <CreateArticle article={articleToEdit} setArticle={setArticleToEdit} />
      {!articleToEdit && (
        <BlogCardsView articles={articlesList} onClick={(article) => setArticleToEdit(article)} edit />
      )}
    </Flex>
  );
};
