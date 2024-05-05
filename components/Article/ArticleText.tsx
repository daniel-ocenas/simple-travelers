import parse from 'html-react-parser';
import React from 'react';

const ArticleText = (props: any) => {
  return <p>{parse(props.text)}</p>;
};

export default ArticleText;
