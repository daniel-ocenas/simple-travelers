import parse from 'html-react-parser';
import React from 'react';
import { Flex, Text } from 'UI';

const ArticleHeader = (props: any) => {
  return (
    <Flex>
      <Text type={'h2'} className={props.class}>
        {parse(props.text)}
      </Text>
    </Flex>
  );
};

export default ArticleHeader;
