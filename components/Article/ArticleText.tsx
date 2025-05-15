import parse from 'html-react-parser';
import React from 'react';
import { Flex } from 'UI/Flex';
import { MarginBox } from 'UI/MarginBox';
import { Text } from 'UI/Text';

const ArticleText = (props: any) => {
  return (
    <Flex direction={'column'}>
      <Text>{parse(props.text)}</Text>
      <MarginBox mt={16} />
    </Flex>
  );
};

export default ArticleText;
