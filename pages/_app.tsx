import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import SocialSideBar from '../components/SocialSideBar';
import Head from 'next/head';

import '../styles/styles.css';
import '../styles/min576.css';
import '../styles/min768.css';
import '../styles/min992.css';
import '../styles/min1200.css';
import '../styles/slider.css';
import '../styles/burger-menu.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link
					rel='icon'
					type='image/png'
					sizes='72x72'
					href='/icons/icon-72x72.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/icons/icon-96x96.png'
				/>
			</Head>
			<Header />
			<SideBar />
			<SocialSideBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
