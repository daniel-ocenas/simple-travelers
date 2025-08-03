'use client';

import { useEffect, useRef, useState } from 'react';

import { IoMdArrowRoundUp } from 'react-icons/io';

import { isTouchDevice } from '@/utils/isTouchDevice';


const SCROLL_THROTTLE = 10000;
const BUTTON_DURATION = 10000;
const SCROLL_THRESHOLD = 500;

function useScroll() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.addEventListener('mousedown', handleButtonClick);

    let timeId: NodeJS.Timeout | null;
    let durationId: NodeJS.Timeout | null;

    const handleScroll = () => {
      if (timeId) return;

      timeId = setTimeout(() => {
        timeId = null;

        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > SCROLL_THRESHOLD) {
          setShow(true);
          durationId && clearTimeout(durationId);
          durationId = setTimeout(() => {
            setShow(false);
          }, BUTTON_DURATION);
        } else {
          setShow(false);
        }
      }, SCROLL_THROTTLE);
    };

    const handleMouseOver = () => {
      durationId && clearTimeout(durationId);
    };

    const handleMouseLeave = () => {
      durationId = setTimeout(() => {
        setShow(false);
      }, BUTTON_DURATION);
    };

    document.addEventListener('scroll', handleScroll);
    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousedown', handleButtonClick);
      document.removeEventListener('scroll', handleScroll);
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonRef]);

  return { show, buttonRef };
}

export default function ScrollTop() {
  const { show, buttonRef } = useScroll();

  return (
    <button
      ref={buttonRef}
      className={`bg-inverted z-50 flex h-10 w-10 cursor-pointer items-center 
      justify-center rounded-full text-2xl text-white opacity-70 transition-all 
      duration-300 md:bottom-20 md:right-20 md:h-14 md:w-14 md:text-3xl ${
        !show && 'hidden'
      } ${!isTouchDevice() && 'hover:scale-110 hover:opacity-100'}`}
    >
      <IoMdArrowRoundUp />
    </button>
  );
}
