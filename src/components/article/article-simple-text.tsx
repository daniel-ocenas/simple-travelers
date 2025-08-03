'use client';
import parse from 'html-react-parser';
import React from 'react';

const ArticleSimpleText = (props: any) => {
  return <>{parse(props.text)}</>;
};

export default ArticleSimpleText;
