import { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../UI/Card';
import Slider from '../UI/Slider';
import Loader from '../UI/Loader';

export default function Home() {
	const [articlesList, setArticlesList] = useState([]);
	const [furtherArticlesList, setFurtherArticlesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchArticles = async () => {
			const response = await fetch('/api/articles');
			const data = await response.json();
			let sortedArticleList = data.articleList.sort((a: any, b: any) => {
				const start = +new Date(b.dateCreated);
				return start - +new Date(a.dateCreated);
			});
			let newArticleList = sortedArticleList.slice(0, 3);
			let newFurtherArticleList = sortedArticleList.slice(3, 7);

			newArticleList.forEach((article: any) => {
				article['url'] = '/blog' + article['url'];
				article['class'] = 'slider-content';
			});
			newArticleList = [
				{
					title: 'Cestovateľský blog, ktorý nakopne tvoju chuť objavovať svet',
					image: '/images/photosFull/ZionAngelsLanding16-9.jpg',
					url: '/blog',
					class: 'slider-content-header',
				},
				...newArticleList,
			];
			setArticlesList(newArticleList);
			setFurtherArticlesList(newFurtherArticleList);
			setIsLoading(false);
			return data;
		};

		fetchArticles();
	}, []);

	const ArticleListView = (articles: any) => {
		return (
			<div className='grid-container'>
				{articles.map((card: any, key: any) => (
					<div key={key} className='grid-item'>
						<Card
							title={card.title}
							date={card.date}
							text={card.text}
							image={card.image}
							url={`/blog${card.url}`}
							category={card.category}
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className='page'>
			<Head>
				<title>Simple Travelers | Cestovateľský blog</title>
				<meta property='og:title' content='Simple Travelers' />
				<meta
					property='og:description'
					content='Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet.'
				/>
				<meta
					name='description'
					content='Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet.'
				/>
				<meta
					property='og:image'
					content='https://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg'
				/>
				<meta property='og:url' content='https://simpletravelers.sk/' />
				<meta
					name='keywords'
					content='cestovateľský blog, cestuj po svete, erasmus, roadtrip, lacné cestovanie, cestovanie bez cestovky'
				/>
			</Head>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Slider slides={articlesList} />
					{ArticleListView(furtherArticlesList)}
				</>
			)}
		</div>
	);
}
