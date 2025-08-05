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
  const { ref } = useFocus<HTMLButtonElement>();
  return (
    <button
      onClick={() => {
        if (buttonState) {
          ref.current?.blur();
        }
        showSidebar();
      }}
      className=" group focus-within:bg-transparent"
    >
      <div className="outline-hidden flex h-12 w-12 transform items-center justify-center rounded-full bg-slate-700 transition-all duration-200">
        <div className="flex h-5 w-5 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:rotate-[42deg]"></div>
          <div className="h-[2px] w-6 transform rounded bg-white transition-all duration-300 group-focus:-translate-x-10"></div>
          <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:-rotate-[42deg]"></div>
        </div>
      </div>
    </button>
  );
};

export default Burger;
