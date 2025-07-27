import { Button } from 'antd';
import {
  ArticleComponent,
  ArticleComponentType,
  emptyImgComponent,
  emptySectionTitleComponent,
  emptySubtitleComponent,
  emptyTextComponent,
} from 'lib/domains/Article/Article.types';
import React, { useCallback } from 'react';
import { Flex, MarginBox } from 'UI';
import { useMedium } from 'utils/useBreakpoint';

interface ComponentPickerProps {
  addComponent: (component: ArticleComponent) => void;
  itemsCount: number;
}

export const ComponentPicker = ({ addComponent, itemsCount }: ComponentPickerProps) => {
  const medium = useMedium();
  const handleSelectComponent = useCallback(
    (type: ArticleComponentType) => {
      const order = itemsCount;
      switch (type) {
        case 'h3':
          addComponent({
            ...emptySectionTitleComponent,
            order,
          });
          return;
        case 'h4':
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
    },
    [addComponent, itemsCount],
  );

  return (
    <Flex direction={medium ? 'column' : 'row'} justify={'center'}>
      <Button onClick={() => handleSelectComponent('h3')}>{'Section Title'}</Button>
      <MarginBox mx={4} my={4} />
      <Button onClick={() => handleSelectComponent('h4')}>{'Section Subtitle'}</Button>
      <MarginBox mx={4} my={4} />
      <Button onClick={() => handleSelectComponent('p')}>{'Text'}</Button>
      <MarginBox mx={4} my={4} />
      <Button onClick={() => handleSelectComponent('img')}>{'Picture'}</Button>
    </Flex>
  );
};
