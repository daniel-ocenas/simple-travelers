import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from 'UI/Card/Card.module.css';
import { useMedium } from '../components/useBreakpoint';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import Slider from '../UI/Slider';

export default function Home() {
  const [articlesList, setArticlesList] = useState([]);
  const [furtherArticlesList, setFurtherArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const medium = useMedium();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const data = await response.json();
      let sortedArticleList = data.articleList.sort((a: any, b: any) => {
        const start = +new Date(b.dateCreated);
        return start - +new Date(a.dateCreated);
      });
      let newArticleList = sortedArticleList.slice(0, 3);
      let newFurtherArticleList = sortedArticleList.slice(3);

      newArticleList.forEach((article: any) => {
        article['url'] = '/blog' + article['url'];
        article['class'] = 'slider-content';
      });

      setArticlesList(newArticleList);
      setFurtherArticlesList(newFurtherArticleList);
      setIsLoading(false);
      return data;
    };

    fetchArticles();
  }, []);

  return (
    <div className="page">
      <Head>
        <title>Simple Travelers | Cestovateľský blog</title>
        <meta property="og:title" content="Simple Travelers" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/" />
        <meta
          name="keywords"
          content="cestovateľský blog, cestuj po svete, erasmus, roadtrip, lacné cestovanie, cestovanie bez cestovky"
        />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Slider slides={articlesList} />
          <div className={styles.gridContainer}>
            {furtherArticlesList.map((card: any, key: any) => (
              <Card
                key={key}
                title={card.title}
                date={card.date}
                text={card.text}
                image={card.image}
                url={card.url}
                category={card.category ?? []}
                vertical={!medium}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
