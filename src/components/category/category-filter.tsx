'use client';

import { useSelector } from 'react-redux';

import Category from '@/components/category/category';
import { RootState, useAppDispatch } from '@/store/AppStore';
import {
  getCategoriesState,
  setCategories,
} from '@/store/Article/Article.store';

export default function CategoryFilter({
  allCategories,
}: {
  allCategories: string[];
}) {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) =>
    getCategoriesState(state)
  );
  const clearAllActive = categories.selected.length > 0;

  const handleClearAll = () => {
    dispatch(
      setCategories({
        selected: [],
        active: [],
      })
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4 md:items-start">
      <div className="flex items-center">
        <h2 className="text-xl font-bold">Search by topics</h2>
        <button
          onClick={handleClearAll}
          className={`relative -right-10 text-xs ${
            !clearAllActive &&
            'pointer-events-none text-gray-300 dark:text-gray-600'
          }`}
        >
          Clear All
        </button>
      </div>
      <div className="flex min-h-[56px] w-[90vw] max-w-[36rem] flex-wrap justify-start gap-y-[0.3rem]">
        {allCategories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
