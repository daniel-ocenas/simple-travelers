'use client';
import React from 'react';

const ArticleVideo = (props: any) => {
  return <iframe src={props.src} allow="autoplay; encrypted-media" allowFullScreen title={props.name} />;
};

export default ArticleVideo;
