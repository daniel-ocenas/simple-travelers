'use client';

import { IoMdArrowRoundUp } from 'react-icons/io';

import useScroll from '@/hooks/useScroll';
import { isTouchDevice } from '@/utils/isTouchDevice';

export default function ScrollToTop() {
  const { show, buttonRef } = useScroll();

  return (
    <button
      ref={buttonRef}
      className={`bg-inverted flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl text-white opacity-70 transition-all duration-300 md:bottom-20 md:right-20 md:h-14 md:w-14 md:text-3xl ${
        !show && 'hidden'
      } ${!isTouchDevice() && 'hover:scale-110 hover:opacity-100'}`}
    >
      <IoMdArrowRoundUp />
    </button>
  );
}
