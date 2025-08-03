'use client';

import { useState } from 'react';

import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '@/store/AppStore';
import {
  getCategoriesState,
  setCategories,
} from '@/store/Article/Article.store';
import { isTouchDevice } from '@/utils/isTouchDevice';


export default function Category({ category }: { category: string }) {
  const categories = useSelector((state: RootState) =>
    getCategoriesState(state)
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(0);
  const checked = categories.selected.includes(category);
  const active = categories.active.includes(category);

  const handleCategoryClick = (category: string) => () => {
    dispatch(
      setCategories({
        ...categories,
        selected: categories.selected.includes(category)
          ? categories.selected.filter((value: string) => value !== category)
          : [...categories.selected, category],
      })
    );

    setPage(1);
  };

  return (
    <button
      onClick={handleCategoryClick(category)}
      className={`my-2 mr-6 cursor-pointer rounded-full px-6 py-2 ring-red-500 transition-all duration-300 hover:ring-offset-4 dark:ring-offset-customGray-dark ${
        checked
          ? 'bg-black text-white ring-[3px] ring-offset-4 dark:bg-white dark:text-black'
          : 'bg-secondary'
      } ${!active && 'pointer-events-none opacity-25'} ${
        active && !isTouchDevice() && 'hover:ring-[3px]'
      }`}
    >
      {category}
    </button>
  );
}
