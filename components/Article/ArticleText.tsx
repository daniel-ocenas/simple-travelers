import parse from 'html-react-parser';
import React from 'react';
import { Flex } from 'UI/Flex';
import { MarginBox } from 'UI/MarginBox';

const ArticleText = (props: any) => {
  return (
    <Flex direction={'column'}>
      {parse(props.text)}
      <MarginBox mt={16} />
    </Flex>
  );
};

export default ArticleText;
