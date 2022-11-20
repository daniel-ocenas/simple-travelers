import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Slider(props: any) {
	const [sliderState, setSliderState] = useState(props.slides);

	const [currentPicState, setCurrentPicState] = useState(0);
	const [nextPicState, setNextPicState] = useState(1);
	const [prevPicState, setPrevPicState] = useState(2);
	const [dirState, setDirState] = useState('');
	const [isMoving, setIsMoving] = useState(false);

	useEffect(() => {
		const autoplay = setTimeout(() => {
			handleNext();
		}, 7000);
		return () => {
			clearTimeout(autoplay);
		};
	}, []);
	// eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setSliderState(props.slides);
		setPrevPicState(props.slides.length - 1);
	}, [props]);

	const getPrevId = (id: number) => {
		return id === 0 ? sliderState.length - 1 : id - 1;
	};

	const getNextId = (id: number) => {
		return id === sliderState.length - 1 ? 0 : id + 1;
	};

	const setIndexes = (idx: number) => {
		setCurrentPicState(idx);
		setPrevPicState(getPrevId(idx));
		setNextPicState(getNextId(idx));
		setDirState('');
	};

	const transitionSlide = (direction: any) => {
		if (isMoving) return;

		setIsMoving(true);
		setDirState(direction);

		const timer = setTimeout(() => {
			setIsMoving(false);
			if (direction === 'next') {
				setIndexes(getNextId(currentPicState));
			} else {
				setIndexes(getPrevId(currentPicState));
			}
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
			<div className='slider-container'>
				<div
					className={`slider-wrapper ${isMoving && 'move'} ${
						dirState && dirState + '-dir'
					} `}
				>
					<div className='prev pic'>
						<div style={{ position: 'relative' }}>
							<Image
								src={sliderState[prevPicState].image}
								alt='Prev Slider Picture'
								layout='fill'
								objectFit={'cover'}
								priority={true}
							/>
							<div className={sliderState[prevPicState].class}>
								<p className='header-moto'>{sliderState[prevPicState].title}</p>
								{sliderState[prevPicState].class !==
									'slider-content-header' && (
									<span className='slider-link'>
										<Link className='slider-link' href={''} passHref>
											Prečítať
										</Link>
									</span>
								)}
							</div>
						</div>
					</div>
					<div className='current pic'>
						<div style={{ position: 'relative' }}>
							<Image
								src={sliderState[currentPicState].image}
								alt='Current Slider Picture'
								layout='fill'
								objectFit={'cover'}
								priority={true}
							/>
							<div className={sliderState[currentPicState].class}>
								<p className='header-moto'>
									{sliderState[currentPicState].title}
								</p>
								{sliderState[currentPicState].class !==
									'slider-content-header' && (
									<Link
										className='slider-link'
										href={sliderState[currentPicState].url}
										passHref
									>
										<span className='slider-link'>Prečítať</span>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className='next pic'>
						<div style={{ position: 'relative' }}>
							<Image
								src={sliderState[nextPicState].image}
								alt='Next Slider Picture'
								layout='fill'
								objectFit='cover'
								priority={true}
							/>
							<div className={sliderState[nextPicState].class}>
								<p className='header-moto'>{sliderState[nextPicState].title}</p>
								{sliderState[nextPicState].class !==
									'slider-content-header' && (
									<Link className='slider-link' href={''} passHref>
										<span className='slider-link'>Prečítať</span>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className='sliderButtons'>
						<button className='sliderButtonRight' onClick={handleNext}>
							<i className='arrow right'></i>
						</button>
						<button className='sliderButtonLeft' onClick={handlePrev}>
							<i className='arrow left'></i>
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

export default Slider;
