'use client';

import React from 'react';

import useFocus from '@/hooks/use-focus';

const Burger = ({
  showSidebar,
  buttonState,
}: {
  showSidebar: () => void;
  buttonState: boolean | undefined;
}) => {
  const { isFocusing, ref } = useFocus<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={() => {
        if (buttonState) {
          ref.current?.blur();
        }
        showSidebar();
      }}
      className=" group focus-within:bg-transparent"
    >
      <div className="outline-hidden flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-slate-700 transition-all duration-200">
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:rotate-[42deg]"></div>
          <div className="h-[2px] w-7 transform rounded bg-white transition-all duration-300 group-focus:-translate-x-10"></div>
          <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:-rotate-[42deg]"></div>
        </div>
      </div>
    </button>
  );
};

export default Burger;
