'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import process from 'process';
import React, { PropsWithChildren } from 'react';
import FacebookPage from 'src/components/FacebookPage';

const DISABLED_URLS = ['/', '/onas', '/editor'];

export const WithSidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-row justify-center items-start max-w-[1200px]">
      <div className="flex flex-col max-w-[900px]">{children}</div>
      <SideBar />
    </div>
  );
};

const SideBar = () => {
  const pathname = usePathname();
  const disabled = DISABLED_URLS.some((url) => url === pathname);

  return (
    <div className="w-[300px] p-4">
      {/*<MarginBox mt={WELCOME_PHOTO_HEIGHT} />*/}
      {/*TODO zmenit fotku z faerov s lepsou kvalitou*/}
      {!disabled && (
        <>
          <div className="text-center">
            <Image
              width={250}
              height={250}
              className="m-[5px] object-cover rounded-full"
              alt="Liv a Dan"
              src="/static/images/photosFull/AboutUs.jpg"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-nunito text-2xl font-bold text-center mb-2">My sme Liv a Dan</h4>
            <p className="font-nunito text-lg text-center">
              Mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo. Na našom blogu a
              sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že cestovať sa dá
              jednoducho a lacno.
            </p>
            <div className="mt-4" />
          </div>
        </>
      )}
      <div className="border-t border-gray-200 my-4 text-center">Facebook</div>
      <FacebookPage token={process.env.NEXT_PUBLIC_FB_APP_ID} />
      <div className="mt-4" />
    </div>
  );
};

export default SideBar;
