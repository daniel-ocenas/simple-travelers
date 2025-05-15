import React, { useState } from 'react';
import { Link } from 'UI/Link';
import { Text } from 'UI/Text';
import { useLarge } from 'utils/useBreakpoint';
import { CenterFlex, Flex } from '../Flex';
import Loader from '../Loader';
import { MarginBox } from '../MarginBox';
import { CardText, CategoryButton, SCard, SCardImage, SContent } from './Card.styled';

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

const CardWrapper = ({ title, date, text, image, category, edit }: CardWrapperProps) => {
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
              <Text color={'black'} type={'h5'}>
                {title}
              </Text>
              <Text color={'black'} size={14} weight={'light'}>
                {date}
              </Text>
              <MarginBox mb={6} />
              <CardText>
                <Text color={'black'}>{text}</Text>
              </CardText>
              <Flex direction={'row'}>
                {category.map((cat: string) => {
                  return (
                    <CategoryButton key={title + cat}>
                      <CenterFlex>
                        <Text type={'p'}>{cat}</Text>
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
