'use client';

import { Button, DatePicker, Divider, Input, Switch } from 'antd';
import ArticleRenderer from 'components/Article';
import { ComponentSelector, EditableComponent } from 'components/CreateArticle/ComponentSelector/ComponentSelector';
import { ArticleComponent } from 'components/CreateArticle/ComponentSelector/ComponentType';
import React, { useState } from 'react';
import { Flex } from 'UI/Flex';
import { TextArea, TextInput } from 'UI/Inputs';
import { MarginBox } from 'UI/MarginBox';

const dayjs = require('dayjs');

const emptyArticle: Article = {
  title: undefined,
  text: undefined,
  date: undefined,
  url: undefined,
  image: undefined,
  keywords: undefined,
  category: undefined,
  content: [
    {
      component: 'h3',
      text: '',
      order: 0,
    },
  ],
};

const updateValue = (
  value: string,
  articleContent: Article,
  setArticleContent: (article: Article) => void,
  attribute: 'title' | 'text' | 'date' | 'url' | 'keywords',
) => {
  const updatedArticle = articleContent;
  updatedArticle[attribute] = value;
  if (attribute === 'title') {
    updatedArticle.content.splice(0, 1, { component: 'h2', text: value, order: 0 });
  }
  setArticleContent(updatedArticle);
};

interface Article {
  title?: string;
  text?: string; // description
  date?: string;
  url?: string;
  image?: string;
  keywords?: string;
  category?: string[];
  content: ArticleComponent[];
}

const CreateArticle = () => {
  const [articleContent, setArticleContent] = useState<Article>(emptyArticle);
  const [date, setDate] = useState(undefined);
  const [preview, setPreview] = useState(false);
  console.log(articleContent);

  const addComponent = (newComponent: ArticleComponent) => {
    setArticleContent({
      ...articleContent,
      content: articleContent.content?.concat(newComponent),
    });
  };

  return (
    <Flex direction={'column'} maxWidth={500}>
      <Flex direction={'column'}>
        <TextInput
          value={articleContent?.title}
          placeholder={'Article Name'}
          onChange={(value) => updateValue(value, articleContent, setArticleContent, 'title')}
        />
        <MarginBox mt={16} />
        <TextArea
          placeholder={'Description'}
          value={articleContent?.text}
          onChange={(value) => updateValue(value, articleContent, setArticleContent, 'text')}
        />
        <MarginBox mt={16} />
        <TextInput
          placeholder={`url (/cestahrdinovsnpzapisky)`}
          value={articleContent?.url}
          onChange={(value) => updateValue(value, articleContent, setArticleContent, 'url')}
        />
        <MarginBox mt={16} />
        <DatePicker
          value={date}
          onChange={(date: typeof dayjs) => {
            const newDate = dayjs(date).add(2, 'h');
            updateValue(newDate.toString(), articleContent, setArticleContent, 'date');
            setDate(newDate);
          }}
        />
        <MarginBox mt={16} />
        <TextInput
          placeholder={'Keywords separated by comma'}
          value={articleContent?.keywords}
          onChange={(value) => updateValue(value, articleContent, setArticleContent, 'keywords')}
        />
        <MarginBox mt={16} />
        <Input placeholder={'Categories separated by comma'} value={articleContent?.category} />
        <Divider />
        <MarginBox mt={16} />
        <div className="screen-reader-text">
          {articleContent.content?.map((data: any, idx: number) => {
            return preview ? (
              ArticleRenderer(data, idx, 500)
            ) : (
              <>
                <EditableComponent
                  item={data}
                  articleContent={articleContent.content}
                  setArticleContent={(content) => setArticleContent({ ...articleContent, content })}
                />
                <MarginBox mt={16} />
              </>
            );
          })}
        </div>
        <ComponentSelector addComponent={addComponent} itemsCount={articleContent.content.length} />
      </Flex>
      <MarginBox mt={32} />
      <Flex direction={'row'} justify={'flex-end'} align={'center'}>
        {'Preview:'}
        <MarginBox mr={8} />
        <Switch onClick={() => setPreview((prev) => !prev)} checkedChildren="Hide" unCheckedChildren="Show" />
        <MarginBox mr={8} />
        <Button size={'large'} disabled>
          {'Save'}
        </Button>
        <MarginBox mr={8} />
        <Button size={'large'} disabled>
          {'Publish'}
        </Button>
      </Flex>
    </Flex>
  );
};
export default CreateArticle;
