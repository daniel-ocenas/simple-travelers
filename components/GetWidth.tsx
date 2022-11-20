import { useLayoutEffect, useState } from 'react';

function GetWidth() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return { width: size[0], height: size[1] };
	// return { width: 1200, height: 800 };
}

export default GetWidth;
