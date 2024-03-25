import { SBlogCardsContainer } from 'components/BlogCardsView/BlogCardsView.styled';
import React from 'react';
import Card from 'UI/Card';
import { useMedium } from 'utils/useBreakpoint';

interface Article {
  title: string;
  url: string;
  date: string;
  text: string;
  image: string;
  category: string[];
}

interface BlogCardsContainerProps {
  articles: Article[] | undefined;
}

const BlogCardsView = ({ articles }: BlogCardsContainerProps) => {
  const medium = useMedium();
  return (
    // <Row gutter={[16, 16]}>
    <SBlogCardsContainer>
      {articles?.map((card: any) => (
        // <Col
        //
        //   xs={{ flex: '100%' }}
        //   sm={{ flex: '50%' }}
        //   md={{ flex: '50%' }}
        //   lg={{ flex: '20%' }}
        //   xl={{ flex: '10%' }}
        // >
        <Card
          key={`card-home-${card.url}`}
          title={card.title}
          date={card.date}
          text={card.text}
          image={card.image}
          url={`/blog${card.url}`}
          category={card?.category ?? []}
          vertical={!medium}
        />
        // </Col>
      ))}
    </SBlogCardsContainer>
    // </Row>
  );
};
export default BlogCardsView;
