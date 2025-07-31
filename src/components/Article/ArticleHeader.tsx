'use client';
import parse from 'html-react-parser';
import React from 'react';

const ArticleHeader = (props: any) => {
  return (
    <div className="flex">
      <h2 className={`font-nunito text-4xl font-bold leading-tight mb-2 ${props.class}`}>{parse(props.text)}</h2>
    </div>
  );
};

export default ArticleHeader;
