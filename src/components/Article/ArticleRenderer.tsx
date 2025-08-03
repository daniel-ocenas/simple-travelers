import React from 'react';

import ArticleHeader from './ArticleHeader';
import ArticleImage from './ArticleImage';
import ArticleSectionHeader from './ArticleSectionHeader';
import ArticleSubtitle from './ArticleSubtitle';
import ArticleText from './ArticleText';

const KeysToComponentMap = {
  p: ArticleText,
  h2: ArticleHeader,
  h3: ArticleSectionHeader,
  h4: ArticleSubtitle,
  img: ArticleImage,
};

interface ArticleConfig {
  component: keyof typeof KeysToComponentMap;
  src?: string[];
  text?: string;
  class?: string;
  name?: string;
  type?: string;
  children?: React.ReactNode;
}

const ArticleRenderer = ({
  config,
  idx,
  textAreaWidth,
}: {
  config: ArticleConfig;
  idx: number;
  textAreaWidth: number;
}) => {
  const Component = KeysToComponentMap[config.component];

  if (!Component) {
    return null;
  }

  return (
    <Component
      key={idx}
      src={config.src}
      text={config.text}
      class={config.class}
      name={config.name}
      type={config.type}
      idx={idx}
      width={textAreaWidth}
    >
      {config.children}
    </Component>
  );
};

export default ArticleRenderer;
