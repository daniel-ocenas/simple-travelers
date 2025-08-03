import React from 'react';

import ArticleHeader from './article-header';
import ArticleImage from './article-image';
import ArticleSectionHeader from './article-section-header';
import ArticleSubtitle from './article-subtitle';
import ArticleText from './article-text';

const KeysToComponentMap = {
  p: ArticleText,
  h2: ArticleHeader,
  h3: ArticleSectionHeader,
  h4: ArticleSubtitle,
  img: ArticleImage,
};

// interface ArticleConfig {
//   component: keyof typeof KeysToComponentMap;
//   src?: string[];
//   text?: string;
//   class?: string;
//   name?: string;
//   type?: string;
//   children?: React.ReactNode;
// }
// {
//   config,
//     idx,
//     textAreaWidth,
// }: {
//   config: ArticleConfig;
//   idx: number;
//   textAreaWidth: number;
// }

const ArticleRenderer = (props) => {
  const config = props.config;
  const Component = KeysToComponentMap[config.component];

  if (!Component) {
    return null;
  }

  return (
    <Component
      key={props.idx}
      src={config.src}
      text={config.text}
      class={config.class}
      name={config.name}
      type={config.type}
      idx={props.idx}
      width={props.textAreaWidth}
    >
      {config.children}
    </Component>
  );
};

export default ArticleRenderer;
