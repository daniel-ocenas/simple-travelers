import { Col, Form, Row, Select } from 'antd';
import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import { ArticlesList } from 'data/ArticlesListConst';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

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
  const [sortState, setSortState] = useState(optionsSel[0].value);
  const [filterOptions, setFilterOptions] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [articlesDisplay, setArticlesDisplay] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      // Load articles from database
      const response = await fetch('/api/articles');
      let data = await response.json();
      if (response.status !== 200) {
        data = {
          articleList: ArticlesList,
        };
      }
      // Set all articles list
      setArticlesList(data.articleList);

      // set display articles
      setArticlesDisplay(sortArticles(data.articleList, 'asc'));

      // load categories for filtering
      let filterCategories: any = [];
      data.articleList?.forEach((article: any) => {
        article.category?.forEach((category: any) => {
          if (!filterCategories.includes(category)) {
            filterCategories.push(category);
          }
        });
      });

      // set categories
      setFilterOptions(
        filterCategories.map((option: any) => {
          return <Option key={option}>{option}</Option>;
        }),
      );
    };
    fetchArticles();
  }, []);

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
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/blog" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovatelsky blog, blog, cestopisy, rady a tipy na cestovanie, cestovanie, erasmus, USA roadtrip, roadtrip, slovenské srdcovky"
        />
      </Head>
      <Page>
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
        <BlogCardsView articles={articlesDisplay} />
      </Page>
    </>
  );
}

export default Blog;
