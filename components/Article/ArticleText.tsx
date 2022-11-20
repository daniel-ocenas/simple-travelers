import ArticleTextRenderer from './ArticleTextRenderer';

const ArticleText = (props: any) => {
	return (
		<p className={props.className}>
			{props.children.map((data: any, idx: any) =>
				ArticleTextRenderer(data, idx)
			)}
		</p>
	);
};

export default ArticleText;
