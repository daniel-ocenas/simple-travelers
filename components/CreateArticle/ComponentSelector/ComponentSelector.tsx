import { ArrowDownOutlined, ArrowUpOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import ArticleHeader from 'components/Article/ArticleHeader';
import {
  ArticleComponent,
  ArticleComponentType,
  emptyImgComponent,
  emptySubtitleComponent,
  emptyTextComponent,
} from 'components/CreateArticle/ComponentSelector/ComponentType';
import { useState } from 'react';
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

interface ComponentSelectorProps {
  addComponent: (component: ArticleComponent) => void;
  itemsCount: number;
}

export const ComponentSelector = ({ addComponent, itemsCount }: ComponentSelectorProps) => {
  const handleClick = (type: ArticleComponentType) => {
    const order = itemsCount;
    switch (type) {
      case 'h3':
        addComponent({
          ...emptySubtitleComponent,
          order,
        });
        return;
      case 'img':
        addComponent({
          ...emptyImgComponent,
          order,
        });
        return;
      default:
        addComponent({
          ...emptyTextComponent,
          order,
        });
        return;
    }
  };

  return (
    <Flex direction={'row'} justify={'center'}>
      <Button onClick={() => handleClick('h3')}>{'Section Title'}</Button>
      <MarginBox mr={8} />
      <Button onClick={() => handleClick('p')}>{'Text'}</Button>
      <MarginBox mr={8} />
      <Button onClick={() => handleClick('img')}>{'Picture'}</Button>
    </Flex>
  );
};

interface EditableComponentSelectorProps {
  item: ArticleComponent;
  articleContent: ArticleComponent[];
  setArticleContent: (content: ArticleComponent[]) => void;
}

export const EditableComponent = ({ item, articleContent, setArticleContent }: EditableComponentSelectorProps) => {
  const [fileList, setFileList] = useState<any>([]);
  console.log(fileList);
  const move = (direction: 'up' | 'down', order?: number) => {
    if (order) {
      const tmpContent = [...articleContent];
      const start = direction === 'up' ? order - 1 : order;
      const end = direction === 'up' ? order : order + 1;
      const previous = tmpContent.splice(start, 1)[0];
      const current = tmpContent.splice(start, 1)[0];
      tmpContent.splice(order, 0, { ...current, order: start });
      tmpContent.splice(order, 0, { ...previous, order: end });
      setArticleContent(tmpContent.sort((a, b) => (Number(a.order) > Number(b.order) ? 1 : -1)));
    }
  };

  const updateH3 = (text: string, order?: number) => {
    if (order) {
      const tmpContent = [...articleContent];
      const current = tmpContent.splice(order, 1)[0];
      setArticleContent(tmpContent.splice(order, 0, { ...current, text }));
    }
  };

  const updateP = (text: string, order?: number) => {
    console.log('UPDATE P', order);
    console.log(text);
    if (order) {
      console.log(articleContent);
      const tmpContent = [...articleContent];
      const current = tmpContent.splice(order, 1)[0];
      console.log('current', current);
      console.log(tmpContent);
      tmpContent.splice(order, 0, { ...current, text });
      setArticleContent(tmpContent);
    }
  };

  const getEditableComponent = () => {
    switch (item.component) {
      case 'img':
        const uploadFile = (file: UploadFile) => {
          console.log(file);
          const formData = new FormData();
          formData.append('file', file.originFileObj ?? '');
          console.log(formData);
          fetch('/api/image', {
            method: 'POST',
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        };
        return (
          <Flex background={'white'}>
            <MarginBox mx={8} my={8}>
              <Upload
                listType={'picture'}
                maxCount={2}
                multiple
                onRemove={(file) => {
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  setFileList(newFileList);
                }}
                beforeUpload={(file, fileList) => {
                  setFileList([...fileList]);
                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 2)</Button>
              </Upload>
            </MarginBox>
          </Flex>
        );
      case 'h2':
        return (
          <Flex justify={'center'}>
            <ArticleHeader text={item.text} />
          </Flex>
        );
      case 'h3':
        return <TextInput value={item.text} onChange={(value) => updateH3(value, item.order)} />;
      case 'p':
        return (
          <Flex direction={'column'}>
            <RichTextEditor theme={'snow'} value={item.text} onChange={(richText) => updateP(richText, item.order)} />
            <MarginBox mt={64} />
          </Flex>
        );
      default:
        return <></>;
    }
  };

  return (
    <Flex direction={'row'}>
      {getEditableComponent()}
      {item.order !== 0 && (
        <MarginBox ml={8}>
          <Flex direction={'row'} justify={'flex-end'}>
            <Button onClick={() => move('up', item.order)} icon={<ArrowUpOutlined />} disabled={item.order === 1} />
            <MarginBox mr={8} />
            <Button
              onClick={() => move('down', item.order)}
              icon={<ArrowDownOutlined />}
              disabled={item.order === articleContent.length - 1}
            />
          </Flex>
        </MarginBox>
      )}
    </Flex>
  );
};
