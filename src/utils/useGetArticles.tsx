'use client';
import { useEffect, useState } from 'react';
import { ArticleProps } from 'src/lib/domains/Article/Article.types';

interface UseGetArticlesProps {
  maxCount?: number;
  showAll?: boolean;
}

export const useGetArticles = ({ maxCount, showAll }: UseGetArticlesProps) => {
  const [articlesList, setArticlesList] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortArticles = (articles: ArticleProps[], order: 'asc' | 'desc') => {
    return [...articles].sort((a, b) => {
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };

  useEffect(() => {
    // TODO local / vs prod url
    const fetchArticles = async () => {
      const response = await fetch(`/api/articles`).catch(() => {
        setIsLoading(false);
        return undefined;
      });
      if (!response?.ok) {
        setIsLoading(false);
        return undefined;
      }
      let data = await response?.json();

      const articles: ArticleProps[] = data?.articles ?? [];
      const publishedArticles = showAll ? articles : articles?.filter((artcl) => artcl.isPublished);
      const sortedArticles = sortArticles(publishedArticles, 'desc');
      const trimmedArticles: ArticleProps[] = maxCount ? [...sortedArticles]?.slice(0, maxCount) : sortedArticles;

      setIsLoading(false);
      setArticlesList(trimmedArticles ?? []);
    };

    fetchArticles();
  }, [maxCount, showAll]);

  return { isLoading, articles: articlesList };
};
