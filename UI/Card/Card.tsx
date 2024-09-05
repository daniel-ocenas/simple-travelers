import React, { useState } from 'react';
import { Link } from 'UI/Link';
import { CenterFlex, Flex } from '../Flex';
import Loader from '../Loader';
import { MarginBox } from '../MarginBox';
import { CardText, SCard, SCardImage } from './Card.styled';

interface CardProps {
  title: string;
  date: string;
  text: string;
  image: string;
  url: string;
  category: string[];
  edit?: boolean;
}

function Card({ title, date, text, image, url, category, edit }: CardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(true);
  };

  return (
    <Link
      href={url}
      className={'linkNoDecoration'}
      style={{
        pointerEvents: edit ? 'none' : 'auto',
      }}
      passHref
    >
      <SCard onClick={toggleLoading}>
        <Flex direction={'column'}>
          <SCardImage $src={image} />
          {isLoading ? (
            <CenterFlex>
              <Loader />
            </CenterFlex>
          ) : (
            <MarginBox mx={16} mt={8}>
              <p>{date}</p>
              <h3>{title}</h3>
              {/*<CategoryRow>*/}
              {/*  {category.map((cat: string) => {*/}
              {/*    return <span key={title + cat}>{cat}</span>;*/}
              {/*  })}*/}
              {/*</CategoryRow>*/}
              <CardText>
                <p>{text}</p>
              </CardText>
            </MarginBox>
          )}
        </Flex>
      </SCard>
    </Link>
  );
}

export default Card;
