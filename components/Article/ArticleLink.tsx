import Link from 'next/link';

const ArticleLink = (props: any) => {
	if (props.type === 'external')
		return (
			<a href={props.url} target='_blank' rel='noopener noreferrer'>
				{props.text}
			</a>
		);

	return (
		<Link className='inline-link' href={props.url} passHref>
			{props.text}
		</Link>
	);
};

export default ArticleLink;
