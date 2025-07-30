'use client';
import React from 'react';
import ArticleHeader from 'src/components/Article/ArticleHeader';
import ArticleImage from 'src/components/Article/ArticleImage';
import ArticleSectionHeader from 'src/components/Article/ArticleSectionHeader';
import ArticleSubtitle from 'src/components/Article/ArticleSubtitle';
import ArticleText from 'src/components/Article/ArticleText';

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
