import NextImage from 'next/image';

import { ImageBlock } from '@/store/Article/Article.types';

const ASPECT_CLASS: Record<ImageBlock['aspect'], string> = {
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[2/3]',
  auto: '',
};

export default function Image({
  block,
  priority,
}: {
  block: ImageBlock;
  priority?: boolean;
}) {
  const { asset, aspect, caption } = block;
  return (
    <figure className="mb-4">
      <div
        className={`relative overflow-hidden rounded-[2px] ${ASPECT_CLASS[aspect]}`}
      >
        <NextImage
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          placeholder={asset.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={asset.blurDataURL}
          priority={priority}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="text-customGray-600 dark:text-customGray-400 mt-2 text-center text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
