import Head from 'next/head';
import React from 'react';
import AboutUsPageSection from 'src/components/AboutUs/AboutUsPageSection';
import CustomPage from 'src/components/CustomPage';
import { MarginBox, Text } from 'src/UI';

export default function Page() {
  return (
    <>
      <Head>
        <title>O nás, Simple Travelers</title>
        <meta property="og:title" content="Simple Travelers - O nás" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/AboutUs.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/onas" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="$OG_KEYWORDS" />
      </Head>
      <CustomPage>
        <AboutUsPageSection />
        <MarginBox mt={32} />
        <Text type={'h3'}>Niečo o nás</Text>
        <Text>
          Sme Liv a Dan a spoločne tvoríme obsah ako Simple travelers. Sme mladý pár zo Slovenska, ktorý si zaumienil,
          že život je príliš krátky na to, aby ho presedeli doma. Príliš vzácny na to, aby sme nerobili to, čo nás robí
          šťastnými. Naše túlavé topánky nás vodia po všetkých možných kútoch sveta a doposiaľ sme spolu navštívili 25
          krajín. Štyri mesiace sme žili vo Fínsku v extrémnych podmienkach, kde teploty málokedy dosiahli plusové
          hodnoty. V USA sme najazdili už cez 6 500 km po západnom aj východnom pobreží. Dva mesiace sme low-costovo
          cestovali po juhovýchodnej Ázii a zdolali niekoľko diaľkových trailov v Kyrgyzstáne, Špaielnsku a Škótsku, iba
          s batohom na pleciach.
        </Text>
        <MarginBox mt={16} />
        <Text type={'h3'}>O blogu</Text>
        <Text>
          Vznikol spontánne, presne tak ako vznikajú naše dobrodružstvá. Prostredníctvom našej stránky by sme sa chceli
          s vami podeliť o naše zážitky a skúsenosti, ktoré sme počas našich ciest nadobudli. Okrem písania sa venujeme
          aj tvorbe videí, súvisiacich s naším cestovateľským životom, pri vašej vôli môžete byť súčasťou našich očí a
          súčasťou našich nôh. Možno vás niečo z našich zážitkov inšpiruje a bude motivovať vašu chuť objavovať svet. A
          ak sa pri tom budete usmievať, náš zámer bude naplnený.
        </Text>
        <MarginBox mt={32} />
      </CustomPage>
    </>
  );
}
