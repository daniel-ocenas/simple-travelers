'use client';
import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import { SBlogCardsContainer } from 'components/BlogCardsView/BlogCardsView.styled';
import Card from 'components/Card';
import React from 'react';

interface BlogCardsContainerProps {
  articles: ArticleProps[] | undefined;
  edit?: boolean;
  onClick?: (article: ArticleProps) => void;
}

const BlogCardsView = ({ articles, edit, onClick }: BlogCardsContainerProps) => {
  const handleOnClick = (article: ArticleProps) => {
    edit && onClick && onClick(article);
  };

  return (
    <SBlogCardsContainer>
      {articles?.map((card: ArticleProps) => (
        <div key={`card-${card.url}`} onClick={() => handleOnClick(card)}>
          <Card
            title={card.title}
            date={card.date}
            text={card.description}
            image={card.image}
            url={`/blog/${card.url}`}
            category={card?.category ?? []}
            edit={edit}
          />
        </div>
      ))}
    </SBlogCardsContainer>
  );
};
export default BlogCardsView;
