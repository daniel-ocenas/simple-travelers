import Image from 'next/image';
import React from 'react';
import { Flex, MarginBox } from 'UI';
import { useLarge } from 'utils/useBreakpoint';

interface ImageProps {
  src: string;
  name: string;
}

interface ArticleImage {
  src: ImageProps[];
  width: number;
  idx: number;
}

const ArticleImage = (props: any) => {
  const large = useLarge();
  if (!Array.isArray(props?.src)) return null;
  let imageWidth = !isNaN(props.width) ? props.width - 2 : 300;
  if (props.src.length > 1 && large) imageWidth = imageWidth / 2;

  const singleImage = props.src.length === 1;
  const imageHeight = singleImage ? (imageWidth / 3) * 2 : (imageWidth / 4) * 5;

  return (
    <Flex direction={large ? 'row' : 'column'} align={'center'}>
      {props.src?.map((image: any) => {
        return (
          <MarginBox mx={1} key={image.name}>
            <Image
              alt={image.name}
              key={image.name}
              src={image.src}
              width={imageWidth}
              height={imageHeight}
              priority={props.idx < 4}
              style={{
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </MarginBox>
        );
      })}
    </Flex>
  );
};
export default ArticleImage;
