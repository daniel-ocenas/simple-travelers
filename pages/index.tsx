import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import { ArticlesList } from 'data/ArticlesListConst';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Loader from 'UI/Loader';

export default function Home() {
  const [articlesList, setArticlesList] = useState([]);
  // const [furtherArticlesList, setFurtherArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(`https://simpletravelers.sk/api/articles`).catch((e) => {
        return undefined;
      });

      let data = await response?.json();
      if (response?.status !== 200) {
        data = {
          articleList: ArticlesList,
        };
      }

      let sortedArticleList = data?.articleList?.sort((a: any, b: any) => {
        const start = +new Date(b.dateCreated);
        return start - +new Date(a.dateCreated);
      });
      // let newArticleList = sortedArticleList?.slice(0, 3);
      // let newFurtherArticleList = sortedArticleList?.slice(3);

      // newArticleList?.forEach((article: any) => {
      //   // article['url'] = '/blog' + article['url'];
      //   article['class'] = 'slider-content';
      // });

      setIsLoading(false);
      setArticlesList(sortedArticleList ?? []);
      // setFurtherArticlesList(newFurtherArticleList);
      return data;
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Head>
        <title>Simple Travelers, cestovateľský blog</title>
        <meta property="og:title" content="Simple Travelers" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovateľský blog, cestuj po svete, erasmus, roadtrip, lacné cestovanie, cestovanie bez cestovky"
        />
      </Head>
      <Page>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/*<Slider slides={articlesList} />*/}
            <BlogCardsView articles={articlesList} />
          </>
        )}
      </Page>
    </>
  );
}
