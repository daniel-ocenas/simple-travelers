'use client';
import { Col, Form, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { SBlogCardsContainer } from 'src/components/BlogCardsView/BlogCardsView.styled';
import Card from 'src/components/Card';
import { ArticleProps } from 'src/lib/domains/Article/Article.types';
import { Flex, Loader, Text } from 'src/UI';
import { useGetArticles } from 'src/utils/useGetArticles';

const { Option } = Select;
const optionsSel = [
  { value: 'asc', text: 'najnovšie' },
  { value: 'dsc', text: 'najstaršie' },
];

const sortArticles = (articles: any, order: any) => {
  return order === 'asc'
    ? articles?.sort((a: any, b: any) => {
        const start = +new Date(b.dateCreated);
        return start - +new Date(a.dateCreated);
      })
    : articles?.sort((a: any, b: any) => {
        const start = +new Date(a.dateCreated);
        return start - +new Date(b.dateCreated);
      });
};

interface BlogCardsView {
  header?: string;
  maxCount?: number;
  edit?: boolean;
  onClick?: (article: ArticleProps) => void;
  enableFilters?: boolean;
}

const BlogCardsView = ({ header, maxCount, edit, onClick, enableFilters }: BlogCardsView) => {
  const { isLoading, articles } = useGetArticles({ maxCount: maxCount });

  const handleOnClick = (article: ArticleProps) => {
    edit && onClick && onClick(article);
  };

  const [sortState, setSortState] = useState(optionsSel[0].value);
  const [filterOptions, setFilterOptions] = useState<{ label: string; value: string }[]>([]);
  const [articlesDisplay, setArticlesDisplay] = useState<ArticleProps[]>([]);

  // Extract unique sorted categories on load/update
  useEffect(() => {
    setArticlesDisplay(articles);

    const uniqueCategories = Array.from(new Set(articles?.flatMap((a) => a.category || []))).sort();

    setFilterOptions(uniqueCategories.map((cat) => ({ label: cat, value: cat })));
  }, [articles]);

  // Toggle sorting and apply it
  const handleSortChange = () => {
    const nextSort = sortState === optionsSel[0].value ? optionsSel[1].value : optionsSel[0].value;
    setSortState(nextSort);
    setArticlesDisplay(sortArticles(articlesDisplay, nextSort));
  };

  // Filter articles by selected categories
  const handleFilterChange = (selectedCategories: string[]) => {
    const filtered =
      selectedCategories.length === 0
        ? articles
        : articles.filter((article) => article.category?.some((cat: string) => selectedCategories.includes(cat)));

    setArticlesDisplay(sortArticles(filtered, sortState));
  };

  return (
    <Flex direction={'column'}>
      {enableFilters && (
        <Flex direction={'row'} align={'flex-start'}>
          <Form layout="horizontal">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row">
                <Form.Item label="Zoradiť">
                  <Select defaultValue="najnovšie" onChange={handleSortChange}>
                    <Option value={0}>najnovšie</Option>
                    <Option value={1}>najstaršie</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="gutter-row">
                <Form.Item label="Filtrovať">
                  <Select
                    mode="multiple"
                    allowClear
                    onChange={handleFilterChange}
                    style={{ minWidth: '150px' }}
                    options={filterOptions}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Flex>
      )}
      {header && (
        <Text $size={20} $weight={'bold'}>
          {header}
        </Text>
      )}
      <Flex align={'flex-start'}>
        {isLoading ? (
          <Loader />
        ) : (
          <SBlogCardsContainer>
            {articlesDisplay?.map((card: ArticleProps) => (
              <div key={`card-${card.url}`} onClick={() => handleOnClick(card)}>
                <Card
                  title={card.title}
                  date={card.date}
                  text={card.description}
                  image={card.image}
                  url={`/blog/${card.url}`}
                  category={card?.category ?? []}
                  edit={edit}
                />
              </div>
            ))}
          </SBlogCardsContainer>
        )}
      </Flex>
    </Flex>
  );
};
export default BlogCardsView;
