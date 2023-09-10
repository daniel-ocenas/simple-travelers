import React, { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Image from 'next/image'

function ImageGrid(props: any) {
  const [imagesState, setImagesState] = useState<any[]>(props.images)
  // const [galleryWidth, setGalleryWidth] = useState(300);
  const [lightboxDisplay, setLightBoxDisplay] = useState<boolean>(false)
  const [imageToShow, setImageToShow] = useState<any>(0)

  const refGallery = useRef<HTMLInputElement>(null)
  const refLightBox = useRef(null)

  // const updateGalleryWidth = () => {
  // 	if (refGallery.current && refGallery.current.clientWidth) {
  // 		const width = refGallery.current.clientWidth - 1;
  // 		// setGalleryWidth(width);

  // 		console.log(width);
  // 		setImagesState(renderThumbs(width, props.images));
  // 	}
  // };

  // useEffect(() => {
  // 	window.addEventListener('resize', updateGalleryWidth);
  // 	// window.addEventListener('keydown', handleKeyDown);

  // 	updateGalleryWidth();

  // 	return () => {
  // 		window.removeEventListener('resize', updateGalleryWidth);
  // 		// window.removeEventListener('keydown', handleKeyDown);
  // 	};
  // }, [updateGalleryWidth]);

  // function handleKeyDown(e: KeyboardEvent) {
  // 	switch (e.key) {
  // 		case 'Escape': // esc
  // 			hideLightBox();
  // 			break;
  // 		// case 37: // left arrrow
  // 		// 	break;
  // 		// case 39: // right arrow
  // 		// 	break;
  // 	}
  // }

  // useEffect(() => {
  //     setImagesState(renderThumbs(galleryWidth,props.images))
  // }, [galleryWidth])

  // const setThumbScale = (item: any) => {
  // 	item.scaleWidth = Math.floor(
  // 		props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight)
  // 	);
  // };

  // const calculateCutOff = (len: any, delta: any, items: any): any[] => {
  // 	if (len === 0 || items === undefined) return [];
  // 	var cutoff: any[] = [];
  // 	var cutsum = 0;
  // 	for (let i = 0; i < items.length; i++) {
  // 		var item = items[i];
  // 		var fractOfLen = item.scaleWidth / len;
  // 		cutoff[i] = Math.floor(fractOfLen * delta);
  // 		cutsum += cutoff[i];
  // 	}

  // 	var stillToCutOff = delta - cutsum;
  // 	while (stillToCutOff > 0) {
  // 		for (const i of cutoff) {
  // 			cutoff[i]++;
  // 			stillToCutOff--;
  // 			if (stillToCutOff < 0) break;
  // 		}
  // 	}
  // 	return cutoff;
  // };

  // const buildImageRow = (items: any, containerWidth: any) => {
  // 	var row = [];
  // 	var len = 0;
  // 	var imgMargin = 2 * props.margin;
  // 	while (items.length > 0 && len < containerWidth) {
  // 		var item = items.shift();
  // 		row.push(item);
  // 		len += item.scaleWidth + imgMargin;
  // 	}

  // 	var delta = len - containerWidth;
  // 	if (row.length > 0 && delta > 0) {
  // 		var cutoff = calculateCutOff(len, delta, row);
  // 		for (let i = 0; i < row.length; i++) {
  // 			var pixelsToRemove = cutoff[i];
  // 			item = row[i];
  // 			item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
  // 			item.vwidth = item.scaleWidth - pixelsToRemove;
  // 		}
  // 	} else {
  // 		for (var j in row) {
  // 			item = row[j];
  // 			item.marginLeft = 0;
  // 			item.vwidth = item.scaleWidth;
  // 		}
  // 	}
  // 	return row;
  // };

  // const renderThumbs = (containerWidth: any, images: any): any => {
  // 	if (!images) return [];
  // 	if (containerWidth == 0) return [];

  // 	var items = images.slice();
  // 	for (var t in items) {
  // 		setThumbScale(items[t]);
  // 	}

  // 	var thumbs = [];
  // 	var rows = [];
  // 	while (items.length > 0) {
  // 		rows.push(buildImageRow(items, containerWidth));
  // 	}

  // 	for (var r in rows) {
  // 		for (var i in rows[r]) {
  // 			var item = rows[r][i];
  // 			thumbs.push(item);
  // 		}
  // 	}
  // 	return thumbs;
  // };

  function showImage(image: any) {
    setImageToShow(image)
    setLightBoxDisplay(true)
  }

  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  const handleNext = () => {
    const currentIndex = imagesState.indexOf(imageToShow)
    const nextImage =
      currentIndex === imagesState.length - 1
        ? imagesState[0]
        : imagesState[currentIndex + 1]
    setImageToShow(nextImage)
  }

  const handlePrev = () => {
    const currentIndex = imagesState.indexOf(imageToShow)
    const nextImage =
      currentIndex !== 0
        ? imagesState[currentIndex - 1]
        : imagesState[imagesState.length - 1]
    setImageToShow(nextImage)
  }

  const imageThumbnails1 = imagesState.map((item, idx) => {
    return (
      <div
        key={idx + item.src}
        style={{
          display: 'initial',
          margin: props.margin,
          cursor: 'pointer',
          position: 'relative',
          padding: '0px',
        }}
        onClick={() => showImage(item)}
      >
        <Image
          src={item.thumbnail}
          alt={item.thumbnail}
          width={item.thumbnailWidth}
          height={props.rowHeight}
        />
      </div>
    )
  })

  const imageThumbnails = props.images.map((item: any, idx: any) => {
    return (
      <div
        key={idx + item.src}
        className="galleryItem"
        onClick={() => showImage(item)}
        style={{
          backgroundImage: `url(https://simpletravelers.sk${item.thumbnail})`,
        }}
      />
    )
  })

  return (
    <div style={{ width: '100%' }} ref={refGallery}>
      <div className="galleryWrapper">{imageThumbnails}</div>
      {lightboxDisplay && (
        <div className="lightbox" ref={refLightBox}>
          {imageToShow && (
            <div className={`lightbox-img-wrapper`}>
              <img
                className={`lightbox-img-${
                  imageToShow.thumbnailWidth < imageToShow.thumbnailHeight
                    ? 'portrait'
                    : 'landscape'
                }`}
                src={imageToShow.src}
                alt={imageToShow.src}
              />
              <p>{imageToShow.caption}</p>
            </div>
          )}
          <span className="close-btn" onClick={hideLightBox}></span>
          <button className="lightbox-button-right" onClick={handleNext}>
            <i className="arrow right"></i>
          </button>
          <button className="lightbox-button-left" onClick={handlePrev}>
            <i className="arrow left"></i>
          </button>
        </div>
      )}
    </div>
  )
}

ImageGrid.defaultProps = {
  id: 'ImageGridGallery',
  rowHeight: 212,
  margin: 2,
}

export default ImageGrid
