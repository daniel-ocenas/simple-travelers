import React, { useState } from 'react';
import { Link } from 'UI/Link';
import { CenterFlex, Flex } from '../Flex';
import Loader from '../Loader';
import { MarginBox } from '../MarginBox';
import { CategoryRow, SCard, SCardImage } from './Card.styled';

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

  return (
    <Link href={url} className={'linkNoDecoration'} passHref>
      <SCard onClick={toggleLoading}>
        {/*<Flex direction={'column'} maxHeight={600}>*/}
        <Flex direction={'column'}>
          <SCardImage $src={image} />
          {isLoading ? (
            <CenterFlex>
              <Loader />
            </CenterFlex>
          ) : (
            <MarginBox mx={16}>
              <h3>{title}</h3>
              <h6>{date}</h6>
              <CategoryRow>
                {category.map((cat: string) => {
                  return <span key={title + cat}>{cat}</span>;
                })}
              </CategoryRow>
              <div className="screen-reader-text">
                <p>{text}</p>
              </div>
            </MarginBox>
          )}
        </Flex>
      </SCard>
    </Link>
  );
}

export default Card;
