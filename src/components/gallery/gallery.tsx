'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  BALI_IMAGES,
  IMAGES,
  OTHER_IMAGES,
  SNP_IMAGES,
} from '@/data/gallery-images';
import { useScreenSize } from '@/hooks/use-breakpoint';

interface GalleryOption {
  title: string;
  option: string;
  images: GalleryImageProps[];
}

const galleryOptions: GalleryOption[] = [
  {
    title: 'Výber našich najlepších fotiek',
    option: 'vyberfotiek',
    images: IMAGES,
  },
  {
    title: 'Bali',
    option: 'bali',
    images: BALI_IMAGES,
  },
  {
    title: 'Cesta hrdinov SNP',
    option: 'cestahrdinovsnp',
    images: SNP_IMAGES,
  },
  {
    title: 'Ďalšie fotky',
    option: 'dalsiefotky',
    images: OTHER_IMAGES,
  },
];

export interface GalleryImageProps {
  src: string;
  thumbnail: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  caption?: string;
}

const emptyImage: GalleryImageProps = {
  src: '',
  thumbnail: '',
  thumbnailHeight: 0,
  thumbnailWidth: 0,
  caption: '',
};

interface ImageGridProps {
  id?: string;
  rowHeight?: number;
  margin?: number;
  images: GalleryImageProps[];
}

function Gallery({ id = 'ImageGridGallery', images }: ImageGridProps) {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState<GalleryImageProps>(emptyImage);
  const { width } = useScreenSize();
  const small = width < 420;

  const refGallery = useRef<HTMLDivElement>(null);
  const refLightBox = useRef<HTMLDivElement>(null);

  const showImage = (image: GalleryImageProps) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const handleNext = useCallback(() => {
    const currentIndex = images.indexOf(imageToShow);
    const nextImage =
      currentIndex === images.length - 1 ? images[0] : images[currentIndex + 1];
    setImageToShow(nextImage);
  }, [imageToShow, images]);

  const handlePrev = useCallback(() => {
    const currentIndex = images.indexOf(imageToShow);
    const prevImage =
      currentIndex !== 0 ? images[currentIndex - 1] : images[images.length - 1];
    setImageToShow(prevImage);
  }, [imageToShow, images]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxDisplay) return;
      switch (e.key) {
        case 'ArrowRight':
          handleNext();
          return;
        case 'ArrowLeft':
          handlePrev();
          return;
        case 'Escape':
          hideLightBox();
          return;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxDisplay, handleNext, handlePrev]);

  return (
    <div className="w-full" ref={refGallery}>
      <div
        className="relative grid w-full auto-rows-auto gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${
            !small ? '200px' : '300px'
          }, 1fr))`,
          gridAutoFlow: 'dense',
        }}
      >
        {images.map((item, idx) => (
          <div
            id={id}
            key={idx + item.src}
            onClick={() => showImage(item)}
            style={{
              backgroundImage: `url(/static/${item.thumbnail})`,
              minHeight: !small ? '300px' : '400px',
            }}
            className="cursor-pointer rounded bg-cover bg-center hover:opacity-80"
          />
        ))}
      </div>
      {lightboxDisplay && (
        <div
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-[rgba(100,100,100,0.7)]"
          ref={refLightBox}
        >
          {imageToShow && (
            <div className="absolute inset-0 m-auto flex max-h-full max-w-full flex-col items-center justify-center">
              <Image
                src={`/static/${imageToShow.src}`}
                alt={imageToShow.src}
                fill
                className="max-h-[80vh] max-w-[70vw] object-contain"
              />
              {imageToShow.caption && (
                <p className="px-[15vw] text-center text-base text-white">
                  {imageToShow.caption}
                </p>
              )}
            </div>
          )}

          {/* Close button */}
          <span
            className="absolute right-0 top-0 m-1 h-[50px] w-[50px] cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-90"
            onClick={hideLightBox}
          >
            <span className="absolute left-1/2 top-1/2 h-[40px] w-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-100" />
            <span className="absolute left-1/2 top-1/2 h-[40px] w-[5px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-100" />
          </span>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute bottom-0 right-4 top-0 z-[1010] m-auto h-[70%] w-12 cursor-pointer bg-transparent transition-transform duration-300 hover:scale-110 active:scale-90"
          >
            <div className="rotate-[-45deg] border-b-[4px] border-l-0 border-r-[4px] border-t-0 border-solid border-gray-100 p-2" />
          </button>

          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute bottom-0 left-4 top-0 z-[1010] m-auto h-[70%] w-12 cursor-pointer bg-transparent transition-transform duration-300 hover:scale-110 active:scale-90"
          >
            <div className="rotate-[135deg] border-b-[4px] border-l-0 border-r-[4px] border-t-0 border-solid border-gray-100 p-2" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
