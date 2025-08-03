'use client';

import useMounted from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const iconCN = 'z-10 h-8 w-8 py-[0.1rem] px-[0.1rem]';

  return (
    <div
      className="relative flex h-8 w-[2rem] cursor-pointer items-center justify-between rounded-full bg-white  px-2 dark:bg-black">
      {mounted && (
        <>
          {theme === 'light' ? (
            <BsSun
              className={`${iconCN} text-black`}
              onClick={() => setTheme('dark')}
            />
          ) : (
            <BsMoonFill
              className={`${iconCN} text-white`}
              onClick={() => setTheme('light')}
            />
          )}
        </>
      )}
    </div>
  );
}
