'use client';

import { IoMdArrowRoundUp } from 'react-icons/io';

import { scrollToTopSmooth, useScroll } from '@/hooks/use-scroll';
import { isTouchDevice } from '@/utils/isTouchDevice';

export default function ScrollTop() {
  const scroll = useScroll();
  const show = scroll > 200;
  return (
    <div className={'fixed bottom-[32px] right-0 z-[100] p-3'}>
      <button
        className={`bg-inverted z-100 flex h-12 w-12 cursor-pointer items-center justify-center 
      rounded-full  text-2xl text-white opacity-70 transition-all 
      duration-300  md:text-3xl ${!show && 'hidden'} ${
          !isTouchDevice() && 'hover:scale-110 hover:opacity-100'
        }`}
        onClick={() => scrollToTopSmooth()}
      >
        <IoMdArrowRoundUp />
      </button>
    </div>
  );
}
