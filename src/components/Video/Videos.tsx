'use client';

import React from 'react';

export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="mb-8 [&>iframe]:h-[60vh] [&>iframe]:w-full [&>iframe]:border-none">
      <iframe
        src={src}
        title={title}
        allow={'encrypted-media'}
        allowFullScreen
      />
    </div>
  );
};
