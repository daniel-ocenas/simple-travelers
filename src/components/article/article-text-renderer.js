'use client';

import React from 'react';

import ArticleLink from 'src/components/article/article-link';
import ArticleSimpleText from 'src/components/article/article-simple-text';

const KeysToComponentMap = {
  link: ArticleLink,
  simpleText: ArticleSimpleText,
};

function ArticleTextRenderer(config, idx) {
  console.log(config);
  if (typeof KeysToComponentMap[config.component] !== 'undefined') {
    return React.createElement(KeysToComponentMap[config.component], {
      key: idx,
      src: config.src,
      text: config.text,
      class: config.class,
      name: config.name,
      url: config.url,
      type: config.type,
    });
  }
}

export default ArticleTextRenderer;
