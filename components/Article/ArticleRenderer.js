'use client';
import ArticleSubtitle from 'components/Article/ArticleSubtitle';
import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleImage from './ArticleImage';
import ArticleSectionHeader from './ArticleSectionHeader';
import ArticleText from './ArticleText';

const KeysToComponentMap = {
  p: ArticleText,
  h2: ArticleHeader,
  h3: ArticleSectionHeader,
  h4: ArticleSubtitle,
  img: ArticleImage,
};

function ArticleRenderer(config, idx, textAreaWidth) {
  if (typeof KeysToComponentMap[config.component] !== 'undefined') {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        key: idx,
        src: config.src,
        text: config.text,
        class: config.class,
        name: config.name,
        type: config.type,
        idx: idx,
        width: textAreaWidth,
      },
      config.children,
      // (typeof config.children === "string"
      // 	? config.children
      // 	: config.children.map((item,idx) => ArticleRenderer(item,idx))),
    );
  }
}

export default ArticleRenderer;
