import PropTypes from 'prop-types';
import Image from 'next/image';

function ArticleImage(props: any) {
	let imageWidth = 300;
	if (!isNaN(props.width)) imageWidth = props.width;
	if (props.src.length > 1) imageWidth = imageWidth / 2 - 10;

	if (!Array.isArray(props.src)) return null;
	const objectFit = props.src.length === 1 ? 'contain' : '';
	return (
		// <div className={ props.src.length === 1 ? props.class : 'twoPicInRowPortrait'}>
		<>
			{props.src &&
				props.src.map((image: any, idx: any) => {
					return (
						<div
							key={image.name + idx}
							style={
								props.src.length === 1
									? {
											position: 'relative',
											width: imageWidth,
											height: (imageWidth / 3) * 2,
											marginBottom: '10px',
									  }
									: {
											position: 'relative',
											width: imageWidth,
											height: (imageWidth / 4) * 5,
											display: 'inline-block',
											margin: '0 3px 3px',
									  }
							}
						>
							<Image
								alt={image.name}
								src={image.src.substring(2)}
								layout='fill'
								objectFit={objectFit}
								priority={props.idx < 4 ? true : false}
							/>
						</div>
					);
				})}
		</>
	);
}

// ArticleImage.propTypes = {
// 	class: PropTypes.string,
// 	width: PropTypes.number,
// 	src: PropTypes.array,
// };

export default ArticleImage;
