import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Loader from '../../UI/Loader';
import styles from './InstagramFeed.module.css';

function InstagramFeed(props: any) {
	const placeholder = useRef<any>();
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [showImage, setShowImage] = useState<boolean>(false);

	let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${props.token}`;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			fetch(url)
				.then((response) => response.json())
				.then((result) => {
					setData(result.data);
					console.log(
						'JavaScript version is here https://codecanyon.net/item/instaget-javascript-library-for-instagram/26300578'
					);
				})
				.catch(() => setIsError(true))
				.finally(() => {
					setIsLoading(false);
				});
		};

		fetchData();

		const callback = (entries: any) => {
			entries.forEach((entry: any) => {
				if (entry.isIntersecting) {
					setShowImage(true);
				}
			});
		};

		const options = {
			threshold: 1.0,
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(placeholder.current);

		// intersection observer set-up
		return () => observer.disconnect();
	}, [url]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<p className='errorMessage'> the access token is not valid</p>
			) : (
				<div className={styles.instagramItems} ref={placeholder}>
					{showImage &&
						data &&
						data.slice(0, props.counter).map((item: any, index: any) => (
							<div key={index} className={styles.instagramItem}>
								<a
									key={index}
									href={item.permalink}
									className='ig-instagram-link'
									target='_blank'
									rel='noreferrer'
								>
									{item.media_type === 'IMAGE' ||
									item.media_type === 'CAROUSEL_ALBUM' ? (
										<img
											className={styles.instagramImg}
											key={index}
											src={item.media_url}
											alt='description'
										/>
									) : (
										<video
											className={styles.instagramImg}
											key={index}
											src={item.media_url}
										/>
									)}
									<div className={styles.instagramIcon}>
										<Image
											src='/icons/icon-instagram.png'
											alt='ig'
											width={24}
											height={24}
										/>
									</div>
								</a>
							</div>
						))}
				</div>
			)}
		</>
	);
}
export default InstagramFeed;
