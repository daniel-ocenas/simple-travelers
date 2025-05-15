import styles from 'components/Gallery/ImageGrid/ImageGrid.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useScreenSize } from 'utils/useBreakpoint';

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

//  rowHeight = 212, margin = 2 *
function ImageGrid({ id = 'ImageGridGallery', images }: ImageGridProps) {
  const [lightboxDisplay, setLightBoxDisplay] = useState<boolean>(false);
  const [imageToShow, setImageToShow] = useState<GalleryImageProps>(emptyImage);
  const { width } = useScreenSize();
  const small = width < 420;

  const refGallery = useRef<HTMLInputElement>(null);
  const refLightBox = useRef(null);

  function showImage(image: any) {
    setImageToShow(image);
    setLightBoxDisplay(true);
  }

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const handleNext = useCallback(() => {
    const currentIndex = images.indexOf(imageToShow);
    const nextImage = currentIndex === images.length - 1 ? images[0] : images[currentIndex + 1];
    setImageToShow(nextImage);
  }, [imageToShow, images]);

  const handlePrev = useCallback(() => {
    const currentIndex = images.indexOf(imageToShow);
    const nextImage = currentIndex !== 0 ? images[currentIndex - 1] : images[images.length - 1];
    setImageToShow(nextImage);
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
        default:
          return;
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxDisplay, handleNext, handlePrev]);

  const imageThumbnails = images.map((item: any, idx: any) => {
    return (
      <div
        id={id}
        key={idx + item.src}
        className={styles.galleryItem}
        onClick={() => showImage(item)}
        style={{
          backgroundImage: `url(/static/${item.thumbnail})`,
          minHeight: !small ? '300px' : '400px',
        }}
      />
    );
  });

  return (
    <div style={{ width: '100%' }} ref={refGallery}>
      <div
        className={styles.galleryWrapper}
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${!small ? '200px' : '300px'}, 1fr))`,
        }}
      >
        {imageThumbnails}
      </div>
      {lightboxDisplay && (
        <div className={styles.lightbox} ref={refLightBox}>
          {imageToShow && (
            <div className={styles.lightboxImgWrapper}>
              <img
                className={
                  imageToShow.thumbnailWidth < imageToShow.thumbnailHeight
                    ? styles.lightboxImgPortrait
                    : styles.lightboxImgLandscape
                }
                src={`/static/${imageToShow.src}`}
                alt={imageToShow.src}
              />
              <p className={styles.lightboxImgCaption}>{imageToShow.caption}</p>
            </div>
          )}
          <span className={styles.closeBtn} onClick={hideLightBox}></span>
          <button className={styles.lightboxButtonRight} onClick={handleNext}>
            <div className={styles.arrowRight}>
              <i></i>
            </div>
          </button>
          <button className={styles.lightboxButtonLeft} onClick={handlePrev}>
            <div className={styles.arrowLeft}>
              <i></i>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGrid;
