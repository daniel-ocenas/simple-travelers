'use client';

import Link from 'next/link';
import React from 'react';

const ArticleLink = (props: any) => {
  return (
    <Link
      className="inline-link"
      href={props.url}
      // external={props.type === 'external'}
      // newTab={props.type === 'external'}
      passHref
    >
      {props.text}
    </Link>
  );
};

export default ArticleLink;
