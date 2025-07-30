import Head from 'next/head';
import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import ScrollToTopButton from 'src/components/ScrollToTopButton';
import WelcomePhoto from 'src/components/WelcomePhoto';
// import './global.css';

// const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
// const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Simple Travelers, cestovateľský blog',
  description: 'Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Simple Travelers, cestovateľský blog</title>
        <link rel={'manifest'} href={'/manifest.json'} />
        <meta name={'theme-color'} content={'#ffffff'} />
      </Head>
      <body>
        <Header />
        <WelcomePhoto />
        <ScrollToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
