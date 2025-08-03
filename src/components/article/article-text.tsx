'use client';

import React from 'react';

import parse from 'html-react-parser';

import { ComponentType } from '@/store/Article/Article.types';


const ArticleText = ({ text }: ComponentType) => {
  if (!text) return null;

  return (
    <div className="flex flex-col">
      <div className="mb-4">{parse(text)}</div>
    </div>
  );
};

export default ArticleText;
