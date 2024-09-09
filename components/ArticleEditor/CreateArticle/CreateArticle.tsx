'use client';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Switch } from 'antd';
import ArticleRenderer from 'components/Article';
import { ArticleComponent, ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import { ComponentPicker } from 'components/ArticleEditor/CreateArticle/ComponentSelector/ComponentPicker';
import { EditableComponent } from 'components/ArticleEditor/CreateArticle/ComponentSelector/EditableComponent';
import { notify } from 'components/Notification/notification';
import React, { useCallback, useEffect, useState } from 'react';
import { Flex } from 'UI/Flex';
import { FloatingTextInput } from 'UI/Inputs';
import { Link } from 'UI/Link';
import { MarginBox } from 'UI/MarginBox';
import { useMedium } from 'utils/useBreakpoint';

const PhotoStorageButton = () => (
  <MarginBox mx={8} my={8}>
    <Link
      href={
        'https://console.firebase.google.com/project/simpletravelers-5fb5b/storage/simpletravelers-5fb5b.appspot.com/files'
      }
      external
      newTab
    >
      <Button>Photo Storage</Button>
    </Link>
  </MarginBox>
);

export const emptyArticle: ArticleProps = {
  url: '',
  title: '',
  description: '',
  date: '',
  dateCreated: '',
  image: '',
  isPublished: false,
  keywords: undefined,
  category: undefined,
  content: [
    {
      component: 'h2',
      text: '',
      order: 0,
    },
  ],
};

const CreateArticle = ({
  article,
  setArticle,
}: {
  article?: ArticleProps;
  setArticle: (newArticle?: ArticleProps) => void;
}) => {
  const medium = useMedium();
  const [articleContent, setArticleContent] = useState<ArticleProps | undefined>(undefined);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setArticleContent(article);
  }, [article]);

  const addComponent = (newComponent: ArticleComponent) => {
    if (!articleContent) {
      return;
    }
    setArticleContent({
      ...articleContent,
      content: articleContent.content?.concat(newComponent),
    });
  };

  const updateValue = (
    value: string,
    articleContent: ArticleProps | undefined,
    attribute: 'title' | 'description' | 'date' | 'url' | 'keywords' | 'image',
  ) => {
    if (!articleContent) {
      return;
    }
    const updatedArticle = { ...articleContent };
    updatedArticle[attribute] = value;
    if (attribute === 'title') {
      updatedArticle.content.splice(0, 1, { component: 'h2', text: value, order: 0 });
    }
    setArticleContent(updatedArticle as ArticleProps);
  };

  const postArticles = async (articlesToPost: (ArticleProps | undefined)[]) => {
    articlesToPost.forEach((articleToPost) => {
      if (articleToPost) {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleToPost),
        })
          .then((response) => {
            var action = articleToPost.isPublished ? 'published' : 'saved';
            if (response.status === 200) {
              notify('info', `Article ${articleToPost.title} successfully ${action}`);
            } else {
              notify('error', `Article ${articleToPost.title} has not been ${action}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const PublishButton = useCallback(
    () => (
      <>
        {articleContent && (
          <MarginBox mx={8} my={8}>
            <Button
              onClick={() => {
                if (articleContent && articleContent !== emptyArticle) {
                  postArticles([{ ...articleContent, isPublished: true }]);
                }
              }}
              disabled={articleContent === emptyArticle}
            >
              Publish
            </Button>
          </MarginBox>
        )}
      </>
    ),
    [articleContent],
  );
  const SaveButton = useCallback(
    () => (
      <>
        {articleContent && (
          <MarginBox mx={8} my={8}>
            <Button
              onClick={() => {
                if (articleContent && articleContent !== emptyArticle) {
                  postArticles([{ ...articleContent, isPublished: false }]);
                }
              }}
              disabled={articleContent === emptyArticle}
            >
              Save
            </Button>
          </MarginBox>
        )}
      </>
    ),
    [articleContent],
  );

  const CreateNewButton = useCallback(
    () => (
      <>
        {!articleContent && (
          <MarginBox mx={8} my={8}>
            <Button onClick={() => setArticle(emptyArticle)} disabled={false}>
              Create New
            </Button>
          </MarginBox>
        )}
      </>
    ),
    [articleContent, setArticle],
  );

  const BackButton = useCallback(
    () => (
      <>
        {articleContent && (
          <Flex>
            <MarginBox mx={8} my={8}>
              <Button icon={<ArrowLeftOutlined />} onClick={() => setArticle(undefined)}>
                Back
              </Button>
            </MarginBox>
          </Flex>
        )}
      </>
    ),
    [articleContent, setArticle],
  );

  return (
    <Flex direction={'column'}>
      <MarginBox my={32}>
        <Flex direction={medium ? 'column' : 'row'} justify={'flex-end'}>
          <BackButton />
          <PhotoStorageButton />
          <SaveButton />
          <CreateNewButton />
          <PublishButton />
          {/*<Button onClick={() => postArticles(ArticlesList)} disabled={false}>*/}
          {/*  Publish All*/}
          {/*</Button>*/}
        </Flex>
      </MarginBox>
      {article && (
        <Flex direction={'column'}>
          <MarginBox mt={16} />
          <Flex direction={'column'}>
            <FloatingTextInput
              label={'Article Title'}
              value={articleContent?.title}
              onChange={(value) => updateValue(value, articleContent, 'title')}
            />
            <MarginBox mt={16} />
            <FloatingTextInput
              label={'Description'}
              value={articleContent?.description}
              onChange={(value) => updateValue(value, articleContent, 'description')}
            />
            <MarginBox mt={16} />
            <FloatingTextInput
              label={`url (cestahrdinovsnpzapisky)`}
              value={articleContent?.url}
              onChange={(value) => updateValue(value, articleContent, 'url')}
            />
            <MarginBox mt={16} />
            <FloatingTextInput
              label={'Article Image'}
              value={articleContent?.image}
              onChange={(value) => updateValue(value, articleContent, 'image')}
            />
            <MarginBox mt={16} />
            <FloatingTextInput
              label={'Keywords separated by comma'}
              value={articleContent?.keywords}
              onChange={(value) => updateValue(value, articleContent, 'keywords')}
            />
            <MarginBox mt={16} />
            <Input placeholder={'Categories separated by comma'} value={articleContent?.category} />
            <Divider />
            <MarginBox mt={16} />
            <div className="screen-reader-text">
              {articleContent?.content?.map((data: any, idx: number) => {
                return (
                  <div key={idx}>
                    {preview ? (
                      ArticleRenderer(data, idx, 500)
                    ) : (
                      <EditableComponent
                        item={data}
                        articleContent={articleContent.content}
                        setArticleContent={(content) => setArticleContent({ ...articleContent, content })}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            {!preview && (
              <ComponentPicker addComponent={addComponent} itemsCount={articleContent?.content.length ?? 0} />
            )}
          </Flex>
          <MarginBox mt={32} />
          <Flex direction={'row'} justify={'flex-end'} align={'center'}>
            {'Preview:'}
            <MarginBox mr={8} />
            <Switch onClick={() => setPreview((prev) => !prev)} checkedChildren="Hide" unCheckedChildren="Show" />
            <MarginBox mr={8} />
            <PublishButton />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default CreateArticle;
