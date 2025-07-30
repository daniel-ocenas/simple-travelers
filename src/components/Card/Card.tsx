'use client';
import React, { useState } from 'react';
import { CardText, CategoryButton, SCard, SCardImage, SContent } from 'src/components/Card/Card.styled';
import { CenterFlex, Flex, Link, Loader, MarginBox, Text } from 'src/UI';
import { useLarge } from 'src/utils/useBreakpoint';

interface CardProps {
  title: string;
  date: string;
  text: string;
  image: string;
  url: string;
  category: string[];
  edit?: boolean;
}

type CardWrapperProps = Omit<CardProps, 'url'>;

const CardWrapper = ({ title, date, text, image, category }: CardWrapperProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const large = useLarge();
  const toggleLoading = () => {
    setIsLoading(true);
  };

  return (
    <SCard onClick={toggleLoading}>
      <Flex direction={large ? 'row' : 'column'} maxWidth={large ? 900 : '100%'}>
        <SCardImage $src={image} />
        {isLoading ? (
          <Flex align={'center'} justify={'center'} maxWidth={'60%'}>
            <MarginBox my={16}>
              <Loader />
            </MarginBox>
          </Flex>
        ) : (
          <SContent>
            <Flex direction={'column'}>
              <Text color={'black'} $size={20} $weight={'bold'}>
                {title}
              </Text>
              <Text color={'black'} $size={14} $weight={'light'}>
                {date}
              </Text>
              <MarginBox mb={6} />
              <CardText>
                <Text color={'black'} $weight={300} $size={16}>
                  {text}
                </Text>
              </CardText>
              <Flex direction={'row'}>
                {category.map((cat: string) => {
                  return (
                    <CategoryButton key={title + cat}>
                      <CenterFlex>
                        <Text $size={14} $weight={'bold'} color={'#646464'}>
                          {cat}
                        </Text>
                      </CenterFlex>
                    </CategoryButton>
                  );
                })}
              </Flex>
            </Flex>
          </SContent>
        )}
      </Flex>
    </SCard>
  );
};

const Card = ({ title, date, text, image, url, category, edit }: CardProps) => {
  return (
    <>
      {edit ? (
        <CardWrapper title={title} date={date} text={text} image={image} category={category} />
      ) : (
        <Link
          href={url}
          className={'linkNoDecoration'}
          style={{
            pointerEvents: edit ? 'none' : 'auto',
          }}
          passHref
        >
          <CardWrapper title={title} date={date} text={text} image={image} category={category} />
        </Link>
      )}
    </>
  );
};

export default Card;
