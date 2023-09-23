import Link from 'next/link';
import React, { useState } from 'react';
import { Flex } from '../Flex';
import Loader from '../Loader';
import { MarginBox } from '../MarginBox';
import styles from './Card.module.css';

function CardHeader({ title, image, vertical }: CardProps) {
  return <img className={vertical ? styles.cardHeaderImgVertical : styles.cardHeaderImg} src={image} alt={title} />;
}

function CardBody({ title, date, text, category, vertical }: CardProps) {
  return (
    <div className={styles.cardBody}>
      <MarginBox mx={vertical ? 16 : 0}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCategoryRow}>
          {category &&
            category.map((category: any) => {
              return <span key={title + category}>{category}</span>;
            })}
        </p>
        <div className="screen-reader-text">
          <p className={styles.cardText}>{text} </p>
        </div>
      </MarginBox>
    </div>
  );
}

interface CardProps {
  title: string;
  date: string;
  text: string;
  image: string;
  url: string;
  category: string[];
  vertical?: boolean;
}

function Card({ title, date, text, image, url, category, vertical }: CardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(true);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Link className={styles.articleLink} href={url} passHref>
      <div className={styles.card} onClick={toggleLoading}>
        <Flex direction={vertical ? 'row' : 'column'}>
          <CardHeader
            title={title}
            date={date}
            text={text}
            image={image}
            url={url}
            category={category}
            vertical={vertical}
          />
          <CardBody
            title={title}
            date={date}
            text={text}
            image={image}
            url={url}
            category={category}
            vertical={vertical}
          />
        </Flex>
      </div>
    </Link>
  );
}

export default Card;
