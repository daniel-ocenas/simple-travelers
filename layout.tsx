import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SocialSideBar from './components/SocialSideBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

import * as gtag from './components/gtag';

declare global {
	interface Window {
		dataLayer: any;
		gtag: any;
	}
}
export default function Layout({ children }: { children: any }) {
	const router = useRouter();

	useEffect(() => {
		// function to get the current page url and pass it to gtag pageView() function
		const handleRouteChange = (url: string) => {
			gtag.pageView(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname
          });`,
				}}
			/>
			<Header />
			<SideBar />
			<SocialSideBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
