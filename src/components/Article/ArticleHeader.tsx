'use client';

import React from 'react';

import parse from 'html-react-parser';

const ArticleHeader = (props: any) => {
  return (
    <div className="flex">
      <h2
        className={`font-nunito mb-2 text-4xl font-bold leading-tight ${props.class}`}
      >
        {parse(props.text)}
      </h2>
    </div>
  );
};

export default ArticleHeader;
