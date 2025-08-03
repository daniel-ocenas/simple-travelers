'use client';

import React from 'react';

import parse from 'html-react-parser';

const ArticleText = (props: any) => {
  return (
    <div className="flex flex-col">
      <p>{parse(props.text)}</p>
      <div className="mt-4"></div>
    </div>
  );
};

export default ArticleText;
