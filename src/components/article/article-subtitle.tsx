'use client';

import React from 'react';

import parse from 'html-react-parser';

const ArticleSectionHeader = (props: any) => {
  return <h4 className={props.className}>{parse(props.text)}</h4>;
};

export default ArticleSectionHeader;
