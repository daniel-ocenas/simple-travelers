import { ArrowDownOutlined, ArrowUpOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ArticleHeader } from 'components/Article';
import { ArticleComponent } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import EditableImageComponent from 'components/ArticleEditor/CreateArticle/ComponentSelector/EditableComponents/EditableImageComponent';
import React, { useCallback, useState } from 'react';
import { Flex } from 'UI/Flex';
import { TextInput } from 'UI/Inputs';
import { MarginBox } from 'UI/MarginBox';
import { RichTextEditor } from 'UI/RichTextEditor';

export interface UploadFile<T = any> extends Blob {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: 'done' | 'uploading' | 'error' | 'removed';
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  response?: T;
  error?: any;
  linkProps?: any;
  type: string;
  xhr?: T;
  preview?: string;
}

interface EditableComponentSelectorProps {
  item: ArticleComponent;
  articleContent: ArticleComponent[];
  setArticleContent: (content: ArticleComponent[]) => void;
}

export const EditableComponent = ({ item, articleContent, setArticleContent }: EditableComponentSelectorProps) => {
  const [fileList, setFileList] = useState<any>([]);

  const deleteItem = useCallback(
    (positionToDelete?: number) => {
      if (positionToDelete) {
        const nextPosition = positionToDelete + 1;
        const newArticleList = articleContent
          .filter((it) => it.order !== positionToDelete)
          .map((it) => {
            if (it.order === nextPosition) {
              return {
                ...it,
                order: positionToDelete,
              };
            }
            return it;
          });
        setArticleContent(newArticleList);
      }
    },
    [articleContent, setArticleContent],
  );

  const moveItem = useCallback(
    (direction: 'up' | 'down', order?: number) => {
      if (order) {
        const newPosition = direction === 'up' ? order - 1 : order + 1;
        const newArticlesList = articleContent.map((it) => {
          if (it.order === order) {
            return {
              ...it,
              order: newPosition,
            };
          } else if (it.order === newPosition) {
            return {
              ...it,
              order,
            };
          }
          return it;
        });
        setArticleContent(newArticlesList.sort((a, b) => (Number(a.order) > Number(b.order) ? 1 : -1)));
      }
    },
    [articleContent, setArticleContent],
  );

  const updateText = (text: string, order?: number) => {
    if (order) {
      const newArticleList = articleContent.map((article) => {
        if (article.order === order) {
          return { ...article, text };
        }
        return article;
      });
      console.log(order);
      console.log(newArticleList);
      // console.log(tmpContent);
      // const current = [...tmpContent].find(order, 1)[0];
      // console.log(current);
      // console.log(tmpContent);
      // tmpContent.splice(order, 0, { ...current, text })
      setArticleContent(newArticleList);
    }
  };

  const getEditableComponent = () => {
    switch (item.component) {
      case 'img':
        return <EditableImageComponent />;
      case 'h2':
        return (
          <Flex justify={'center'}>
            <ArticleHeader text={item.text} />
          </Flex>
        );
      case 'h3':
        return <TextInput value={item.text} onChange={(value) => updateText(value, item.order)} />;
      case 'h4':
        return <TextInput value={item.text} onChange={(value) => updateText(value, item.order)} />;
      case 'p':
        return (
          <Flex direction={'column'}>
            <RichTextEditor
              theme={'snow'}
              value={item.text}
              onChange={(richText) => updateText(richText, item.order)}
            />
            <MarginBox mt={64} />
          </Flex>
        );
      default:
        return <></>;
    }
  };

  return (
    <Flex direction={'column'}>
      <Flex direction={'row'}>
        {getEditableComponent()}
        {item.order !== 0 && (
          <MarginBox ml={8}>
            <Flex direction={'row'} justify={'flex-end'}>
              <Button
                onClick={() => moveItem('up', item.order)}
                icon={<ArrowUpOutlined />}
                disabled={item.order === 1}
              />
              <MarginBox mr={8} />
              <Button
                onClick={() => moveItem('down', item.order)}
                icon={<ArrowDownOutlined />}
                disabled={item.order === articleContent.length - 1}
              />
              <MarginBox mr={8} />
              <Button
                onClick={() => deleteItem(item.order)}
                icon={<DeleteOutlined />}
                disabled={articleContent.length === 1}
              />
            </Flex>
          </MarginBox>
        )}
      </Flex>
      <MarginBox mt={16} />
    </Flex>
  );
};
