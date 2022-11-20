const ArticleVideo = (props: any) => {
	return (
		<iframe
			src={props.src}
			frameBorder='0'
			allow='autoplay; encrypted-media'
			allowFullScreen
			title={props.name}
		/>
	);
};

export default ArticleVideo;
