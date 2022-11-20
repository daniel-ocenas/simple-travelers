import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SocialSideBar from './components/SocialSideBar';

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
