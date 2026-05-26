import NextImage from 'next/image';

import { ImageAsset, ImagePairBlock } from '@/store/Article/Article.types';

function Half({ asset, priority }: { asset: ImageAsset; priority?: boolean }) {
  return (
    <div className="relative aspect-4/5 flex-1 overflow-hidden rounded-[2px]">
      <NextImage
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        placeholder={asset.blurDataURL ? 'blur' : 'empty'}
        blurDataURL={asset.blurDataURL}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>
  );
}

export default function ImagePair({
  block,
  priority,
}: {
  block: ImagePairBlock;
  priority?: boolean;
}) {
  return (
    <div className="mb-4 flex flex-col gap-2 md:flex-row">
      <Half asset={block.left} priority={priority} />
      <Half asset={block.right} priority={priority} />
    </div>
  );
}
