import React from 'react';
import { SVideo } from './Video.styled';

export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <SVideo>
      <iframe src={src} title={title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
    </SVideo>
  );
};
