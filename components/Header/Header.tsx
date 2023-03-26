import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import useScreenSize from '../useScreenSize';
import Burger from './BurgerButton';

const SidebarData = [
	{
		title: 'Úvodná stránka',
		path: '/',
		listTab: true,
	},
	{
		title: 'O nás',
		path: '/onas',
		listTab: true,
	},
	{
		title: 'Blog',
		path: '/blog',
		listTab: true,
	},
	{
		title: 'Galéria',
		path: '/galeria',
		listTab: true,
	},
	{
		title: 'Videá',
		path: '/videa',
		listTab: true,
	},
];

function NavList() {
	return (
		<div className='tabs-container'>
			<div className='nav-list'>
				{SidebarData.map((item, index) => {
					if (item.listTab) {
						return (
							<div key={index} className='nav-list__item'>
								<div className='nav-link'>
									<Link href={item.path} passHref>
										{item.title}
									</Link>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}

function NavMenu() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Burger showSidebar={showSidebar} buttonState={sidebar} />
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className='nav-text'>
								<Link href={item.path} passHref>
									{item.title}
								</Link>
							</li>
						);
					})}
					<div className='social-menu'>
						<a
							className='instagram'
							href='https://www.instagram.com/simple__travelers'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								className='image'
								src='/icons/icon-instagram.png'
								alt='instagram'
								width={55}
								height={55}
							/>
						</a>
						<a
							className='facebook'
							href='https://www.facebook.com/WeAreSimpleTravelers'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								className='image'
								src='/icons/icon-facebook.png'
								alt='facebook'
								width={55}
								height={55}
							/>
						</a>
					</div>
				</ul>
			</nav>
			{sidebar && (
				<div
					style={{
						position: 'absolute',
						width: '100vw',
						height: '100vh',
						zIndex: '-1',
					}}
					onClick={showSidebar}
				/>
			)}
		</>
	);
}

function Header() {
	const { width } = useScreenSize();
	const RenderTabs = () => {
		if (width < 768) return <NavMenu />;
		return <NavList />;
	};
	return (
		<>
			<div className='titleContainer'>
				<Link href='/' passHref>
					<img
						className='title-travelers'
						alt='title'
						src='/icons/SimpleTravelers.svg'
					/>
				</Link>
				<p>Travel simply, simply love traveling</p>
			</div>
			{RenderTabs()}
			{/* <img className="logo-travelers" alt="logo" src="/icons/travelers.png" /> */}
		</>
	);
}

export default Header;
