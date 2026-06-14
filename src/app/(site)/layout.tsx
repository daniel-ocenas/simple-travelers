import React from 'react';

import ScrollTop from '@/components/buttons/scroll-top';
import Footer from '@/components/footer';
import Header from '@/components/header';
import WelcomePhoto from '@/components/welcome-photo';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WelcomePhoto />
      <Header />
      <main className="mx-auto mb-10 mt-[360px] w-full max-w-(--breakpoint-xl) px-[5vw] xl:px-0">
        {children}
      </main>
      <ScrollTop />
      <Footer />
    </>
  );
}
