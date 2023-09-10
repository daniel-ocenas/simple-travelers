import React from 'react';
import Image from 'next/image';
import { Property } from 'csstype';
import ObjectFit = Property.ObjectFit;

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
	if (!Array.isArray(props?.src)) return null;

	let imageWidth = !isNaN(props.width) ? props.width : 300;
	if (props.src.length > 1) imageWidth = imageWidth / 2 - 10;

	const imageObjectFit = props.src.length === 1 ? ('contain' as ObjectFit) : undefined;
	const displaySingleImage = props.src.length === 1;
	const imageHeight = displaySingleImage ? (imageWidth / 3) * 2 : (imageWidth / 4) * 5;
	return (
		// <div className={ props.src.length === 1 ? props.class : 'twoPicInRowPortrait'}>
		<>
			{props.src?.map((image: any, idx: any) => {
				return (
					<Image
						key={image.name}
						alt={image.name}
						src={image.src.substring(2)}
						width={imageWidth}
						height={imageHeight}
						priority={props.idx < 4}
						style={{ objectFit: imageObjectFit, width: displaySingleImage ? '100%' : imageWidth, height: 'auto' }}
					/>
				);
			})}
		</>
	);
};
export default ArticleImage;
