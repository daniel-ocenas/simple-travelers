'use client';
import React from 'react';
import { SVideo } from 'src/components/Video/Video.styled';

export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <SVideo>
      <iframe src={src} title={title} allow={'encrypted-media'} allowFullScreen />
    </SVideo>
  );
};
