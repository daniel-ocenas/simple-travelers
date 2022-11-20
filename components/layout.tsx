import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import SocialSideBar from './SocialSideBar';

export default function Layout({ children }: { children: any }) {
	return (
		<>
			<Header />
			<SideBar />
			<SocialSideBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
