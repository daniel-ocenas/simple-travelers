import Image from 'next/image';

const SocialSidebar = () => {
	return (
		<div className='social-sidebar'>
			<a
				className='instagram'
				href='https://www.instagram.com/simple__travelers'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					src='/icons/icon-instagram.png'
					alt='ig'
					width={40}
					height={40}
				/>
			</a>
			<a
				className='facebook'
				href='https://www.facebook.com/WeAreSimpleTravelers'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image src='/icons/icon-facebook.png' alt='fb' width={40} height={40} />
			</a>
		</div>
	);
};

export default SocialSidebar;
