'use client';

import React, { useMemo, useState } from 'react';

import Gallery from '@/components/gallery/gallery';
import MultiSelect, { Option } from '@/components/multiselect/multiselect';
import {
  BALI_IMAGES,
  GalleryImage,
  IMAGES,
  OTHER_IMAGES,
  SNP_IMAGES,
} from '@/data/gallery-images';


type GallerySectionKey = 'all' | 'main' | 'snp' | 'bali' | 'other';

type GallerySection = {
  value: GallerySectionKey;
  label: string;
  images: GalleryImage[];
};

const GALLERY_SECTIONS: GallerySection[] = [
  {
    value: 'all',
    label: 'Všetky fotky',
    images: [...IMAGES, ...SNP_IMAGES, ...BALI_IMAGES, ...OTHER_IMAGES],
  },
  {
    value: 'main',
    label: 'Výber fotiek',
    images: IMAGES,
  },
  {
    value: 'snp',
    label: 'Cesta hrdinov SNP',
    images: SNP_IMAGES,
  },
  {
    value: 'bali',
    label: 'Bali',
    images: BALI_IMAGES,
  },
  {
    value: 'other',
    label: 'Ostatné',
    images: OTHER_IMAGES,
  },
];

export default function GalleryPage() {
  const [sel, setSel] = useState<string[]>([]);

  const sampleOptions: Option[] = useMemo(
    () =>
      GALLERY_SECTIONS.map((section) => ({
        value: section.value,
        label: section.label,
      })),
    []
  );

  const imagesToRender: { label: string; images: GalleryImage[] }[] =
    useMemo(() => {
      if (sel.length === 0 || sel.includes('all')) {
        const allSection = GALLERY_SECTIONS.find((s) => s.value === 'all');
        return allSection
          ? [{ label: allSection.label, images: allSection.images }]
          : [];
      }

      return GALLERY_SECTIONS.filter(
        (section) => section.value !== 'all' && sel.includes(section.value)
      ).map((section) => ({
        label: section.label,
        images: section.images,
      }));
    }, [sel]);

  return (
    <>
      <h1 className="my-12 text-center text-3xl font-bold">Galéria</h1>
      <div className="mb-6 flex flex-col items-baseline md:flex-row">
        <h3 className="mb-2 mr-4 text-nowrap text-lg font-medium">
          Filtrovať fotky podľa lokality
        </h3>
        <div className={'w-full max-w-[600px]'}>
          <MultiSelect
            options={sampleOptions}
            value={sel}
            onChange={setSel}
            placeholder="Vyber jednu alebo viac lokalít..."
          />
        </div>
      </div>
      {imagesToRender.map(({ label, images }) => (
        <section key={label} data-cy="gallery" className="mb-10">
          <h3 className="my-4 text-2xl font-bold">{label}</h3>
          <Gallery images={images} />
        </section>
      ))}
    </>
  );
}
