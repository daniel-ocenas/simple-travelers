'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

const Slider = (props: any) => {
  const [sliderState, setSliderState] = useState(props.slides);
  const [currentPicState, setCurrentPicState] = useState(0);
  const [nextPicState, setNextPicState] = useState(1);
  const [prevPicState, setPrevPicState] = useState(2);
  const [dirState, setDirState] = useState('');
  const [isMoving, setIsMoving] = useState(false);

  const getPrevId = useCallback(
    (id: number) => {
      return id === 0 ? sliderState.length - 1 : id - 1;
    },
    [sliderState.length],
  );

  const getNextId = useCallback(
    (id: number) => {
      return id === sliderState.length - 1 ? 0 : id + 1;
    },
    [sliderState.length],
  );

  const setIndexes = useCallback(
    (idx: number) => {
      setCurrentPicState(idx);
      setPrevPicState(getPrevId(idx));
      setNextPicState(getNextId(idx));
      setDirState('');
    },
    [getNextId, getPrevId],
  );

  const transitionSlide = useCallback(
    (direction: any) => {
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
    },
    [currentPicState, getNextId, getPrevId, isMoving, setIndexes],
  );

  const handlePrev = () => {
    transitionSlide('prev');
  };

  const handleNext = useCallback(() => {
    transitionSlide('next');
  }, [transitionSlide]);

  useEffect(() => {
    const autoplay = setTimeout(() => {
      handleNext();
    }, 7000);
    return () => {
      clearTimeout(autoplay);
    };
  }, [handleNext]);
  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSliderState(props.slides);
    setPrevPicState(props.slides.length - 1);
  }, [props]);

  if (sliderState?.length !== 0) {
    return (
      <div className={'slider-container'}>
        <div className={`slider-wrapper ${isMoving && 'move'} ${dirState && dirState + '-dir'} `}>
          <div className={'prev pic'}>
            <div style={{ position: 'relative' }}>
              <Image
                src={`/static${sliderState[prevPicState].image}`}
                alt={'Prev Slider Picture'}
                style={{ objectFit: 'contain' }}
                fill
                priority={true}
              />
              <div className={sliderState[prevPicState].class}>{sliderState[prevPicState].title}</div>
            </div>
          </div>
          <div className={'current pic'}>
            <div style={{ position: 'relative' }}>
              <Link className={'slider-link'} href={`/blog${sliderState[currentPicState].url}`} passHref>
                <Image
                  src={`/static${sliderState[currentPicState].image}`}
                  alt={'Current Slider Picture'}
                  style={{ objectFit: 'contain' }}
                  fill
                  priority={true}
                />
                <div className={sliderState[currentPicState].class}>{sliderState[currentPicState].title}</div>
                <div className={'tooltip'}>Prečítať</div>
              </Link>
            </div>
          </div>
          <div className={'next pic'}>
            <div style={{ position: 'relative' }}>
              <Image
                src={`/static${sliderState[nextPicState].image}`}
                alt={'Next Slider Picture'}
                style={{ objectFit: 'contain' }}
                fill
                priority={true}
              />
              <div className={sliderState[nextPicState].class}>{sliderState[nextPicState].title}</div>
            </div>
          </div>
          <div className={'sliderButtons'}>
            <button className={'sliderButtonRight'} onClick={handleNext}>
              <i className={'arrow right'}></i>
            </button>
            <button className={'sliderButtonLeft'} onClick={handlePrev}>
              <i className={'arrow left'}></i>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Slider;
