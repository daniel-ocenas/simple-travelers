import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import { useEffect, useState } from 'react';

interface UseGetArticlesProps {
  maxCount?: number;
  showAll?: boolean;
}

export const useGetArticles = ({ maxCount, showAll }: UseGetArticlesProps) => {
  const [articlesList, setArticlesList] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO local / vs prod url
    const fetchArticles = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`).catch((e) => {
        return undefined;
      });

      let data = await response?.json();
      // if (!data.articles || response?.status !== 200) {
      //   console.log('pushing static data');
      //   data = {
      //     articles: sortArticlesByDate(
      //       maxCount ? (ArticlesList as ArticleProps[]) : (ArticlesList as ArticleProps[]),
      //     ),
      //   };
      // }
      console.log(data);

      const articles: ArticleProps[] = maxCount ? [...data?.articles]?.slice(0, maxCount) : data?.articles;
      const publishedArticles = showAll ? articles : articles.filter((artcl) => artcl.isPublished);

      let sortedArticleList = publishedArticles?.sort((a: any, b: any) => {
        const start = +new Date(b.dateCreated);
        return start - +new Date(a.dateCreated);
      });

      setIsLoading(false);
      setArticlesList(sortedArticleList ?? []);
    };

    fetchArticles();
  }, [maxCount]);

  return { isLoading, articlesList };
};
