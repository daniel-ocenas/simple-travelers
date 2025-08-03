'use client';

import React from 'react';

import parse from 'html-react-parser';

const ArticleHeader = (props: any) => {
  return (
    <h2 className={`mb-8 text-4xl font-bold leading-tight`}>
      {parse(props.text)}
    </h2>
  );
};

export default ArticleHeader;
