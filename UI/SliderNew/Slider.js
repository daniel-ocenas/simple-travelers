import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Slider.module.css';
import { useSpring } from 'react-spring';

const sliderStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

function Slider(props) {
	const [sliderState, setSliderState] = useState(props.slides);

	const [currentPicState, setCurrentPicState] = useState(0);
	const [nextPicState, setNextPicState] = useState(1);
	const [prevPicState, setPrevPicState] = useState(2);
	const [dirState, setDirState] = useState('');
	const [isMoving, setIsMoving] = useState(false);

	const divStyle = useSpring({
		position: 'absolute',
		top: 0,
		height: '100vh',
		width: '300px',
	});

	const prevRef = useRef();
	const currentRef = useRef();
	const nextRef = useRef();

	useEffect(() => {
		const autoplay = setTimeout(() => {
			handleNext();
		}, 6000);
		return () => {
			clearTimeout(autoplay);
		};
	}, []);
	// eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setSliderState(props.slides);
		setPrevPicState(props.slides.length - 1);
	}, [props]);

	const getPrevId = (id) => {
		return id === 0 ? sliderState.length - 1 : id - 1;
	};

	const getNextId = (id) => {
		return id === sliderState.length - 1 ? 0 : id + 1;
	};

	const setIndexes = (idx) => {
		setCurrentPicState(idx);
		setPrevPicState(getPrevId(idx));
		setNextPicState(getNextId(idx));
		setDirState('');
	};

	const transitionSlide = (direction) => {
		if (isMoving) return;

		setIsMoving(true);
		setDirState(direction);

		const timer = setTimeout(() => {
			setIsMoving(false);
			direction === 'next'
				? setIndexes(getNextId(currentPicState))
				: setIndexes(getPrevId(currentPicState));
		}, 1000);
		return () => clearTimeout(timer);
	};

	const handlePrev = () => {
		transitionSlide('prev');
	};

	const handleNext = () => {
		transitionSlide('next');
	};

	if (sliderState.length !== 0) {
		return (
			<div className={styles.sliderWrapper}>
				{props.slides.map((slide) => {
					<div className={sliderStyle}>
						<Image
							src={slide.image}
							alt='Prev Slider Picture'
							layout='fill'
							objectFit={'cover'}
							priority={true}
						/>
					</div>;
				})}
				<div className={styles.sliderButtons}>
					<button className={styles.sliderButtonRight} onClick={handleNext}>
						<i className={`${styles.arrow} ${styles.right}`}></i>
					</button>
					<button className={styles.sliderButtonLeft} onClick={handlePrev}>
						<i className={`${styles.arrow} ${styles.left}`}></i>
					</button>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

export default Slider;
