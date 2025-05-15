import React from 'react';
import { Text } from 'UI';

const ArticleSectionHeader = (props: any) => {
  return (
    <Text type={'h4'} className={props.className}>
      {props.text}
    </Text>
  );
};

export default ArticleSectionHeader;
