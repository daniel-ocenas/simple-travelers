import Parser from 'html-react-parser';
import React from 'react';

const ArticleText = (props: any) => {
  return <>{Parser(props.text)}</>;
};

export default ArticleText;
