import { Col, Form, Row, Select } from 'antd';
import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Flex } from 'UI/Flex';
import Loader from 'UI/Loader';
import { MarginBox } from 'UI/MarginBox';
import { usePageMargin } from 'utils/useBreakpoint';
import { useGetArticles } from 'utils/useGetArticles';

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

function Blog() {
  const { isLoading, articlesList } = useGetArticles({});

  const pageMargin = usePageMargin();
  const [sortState, setSortState] = useState(optionsSel[0].value);
  const [filterOptions, setFilterOptions] = useState([]);
  const [articlesDisplay, setArticlesDisplay] = useState<ArticleProps[]>([]);

  useEffect(() => {
    setArticlesDisplay(articlesList);
  }, [articlesList]);

  const handleSortChange = () => {
    setSortState(sortState === optionsSel[0].value ? optionsSel[1].value : optionsSel[0].value);
    setArticlesDisplay(
      sortArticles(articlesDisplay, sortState === optionsSel[0].value ? optionsSel[1].value : optionsSel[0].value),
    );
  };

  const handleFilterChange = (categoriesList: any) => {
    let displayArticlesList: any = [];
    if (categoriesList.length === 0) {
      articlesList.forEach((article) => {
        displayArticlesList.push(article);
      });
    } else {
      let run = true;
      articlesList.forEach((article: any) => {
        article.category.forEach((category: any) => {
          if (run && categoriesList.includes(category)) {
            displayArticlesList.push(article);
            run = false;
          }
        });
        run = true;
      });
    }
    setArticlesDisplay(sortArticles(displayArticlesList, sortState));
  };

  return (
    <>
      <Head>
        <title>Blog, Simple Travelers</title>
        <meta property="og:text" content="Blog | Cestopisy | Cestovateľský blog" />
        <meta property="og:description" content="Články, rady a tipy o cestovaní po svete od Simple Travelers" />
        <meta name="description" content="Články, rady a tipy o cestovaní po svete od Simple Travelers" />
        <meta
          property="og:image"
          content="https://simpletravelers.sk/static/images/photosFull/BaliBlackBeachDroneUs.jpg"
        />
        <meta property="og:url" content="https://simpletravelers.sk/blog" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovatelsky blog, blog, cestopisy, rady a tipy na cestovanie, cestovanie, erasmus, USA roadtrip, roadtrip, slovenské srdcovky"
        />
      </Head>
      <Page mr={pageMargin}>
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
                <Select mode="multiple" allowClear onChange={handleFilterChange} style={{ minWidth: '150px' }}>
                  {filterOptions}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {isLoading ? (
          <Flex direction={'column'} align={'center'}>
            <Loader />
            <MarginBox mt={'130vh'} />
          </Flex>
        ) : (
          <BlogCardsView articles={articlesDisplay} />
        )}
      </Page>
    </>
  );
}

export default Blog;
