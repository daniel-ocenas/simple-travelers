'use client';

import Image from 'next/image';
import React from 'react';

import { useLarge } from '@/hooks/useBreakpoint';

interface ImageProps {
  src: string;
  name: string;
}

const ArticleImage = (props: any) => {
  const large = useLarge();
  if (!Array.isArray(props?.src)) return null;
  let imageWidth = !isNaN(props.width) ? props.width - 2 : 300;
  if (props.src.length > 1 && large) imageWidth = imageWidth / 2;

  const singleImage = props.src.length === 1;
  const imageHeight = singleImage ? (imageWidth / 3) * 2 : (imageWidth / 4) * 5;

  return (
    <div className="flex flex-col">
      <div className={`flex ${large ? 'flex-row' : 'flex-col'} items-center`}>
        {props.src?.map((image: any) => {
          return (
            <div className="mx-1" key={image.name}>
              <Image
                alt={image.name}
                key={image.name}
                src={image.src}
                width={imageWidth}
                height={imageHeight}
                priority={props.idx < 4}
                className="rounded-[2px] object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4" />
    </div>
  );
};
export default ArticleImage;
