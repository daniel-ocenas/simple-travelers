import { Metadata } from 'next';

import Gallery from '@/components/gallery/gallery';
import {
  BALI_IMAGES,
  IMAGES,
  OTHER_IMAGES,
  SNP_IMAGES,
} from '@/data/gallery-images';

export const metadata: Metadata = {
  title: 'Galéria',
  description:
    'Prehliadni si výber našich najlepších fotiek z cestovania po celom svete.',
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="my-12 text-center text-3xl font-bold">Galéria</h1>
      <Gallery
        images={[...IMAGES, ...SNP_IMAGES, ...BALI_IMAGES, ...OTHER_IMAGES]}
      />
    </>
  );
}
