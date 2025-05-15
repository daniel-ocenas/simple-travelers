import { HomePageWelcomeDescription } from 'components/AboutUs/AboutUs.styled';
import Page from 'components/Page';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Flex, MarginBox } from 'UI';
import { useLarge } from 'utils/useBreakpoint';

export default function Onas() {
  const large = useLarge();
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
      <Page>
        <MarginBox my={32}>
          <Flex direction={large ? 'row' : 'column-reverse'} justify={'center'}>
            <Image
              width={400}
              height={400}
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                alignContent: 'center',
              }}
              alt="Liv a Dan"
              src="/static/images/photosFull/AboutUs.jpg"
            />
            <MarginBox mx={16} my={16} />
            <Flex align={'center'} justify={'center'} maxWidth={large ? '40vw' : 300}>
              <HomePageWelcomeDescription>
                Pocit z objavovania krás, ktoré nám svet ponúka je nádherný. No sila našich dobrodružstiev spočíva práve
                v tom, že všetko prežívame spolu.
              </HomePageWelcomeDescription>
            </Flex>
          </Flex>
        </MarginBox>
        <h3>Niečo o nás</h3>
        <p>
          Sme Liv a Dan a spoločne tvoríme obsah ako Simple travelers. Sme mladý pár zo Slovenska, ktorý si zaumienil,
          že život je príliš krátky na to, aby ho presedeli doma. Príliš vzácny na to, aby sme nerobili to, čo nás robí
          šťastnými. Naše túlavé topánky nás vodia po všetkých možných kútoch sveta a doposiaľ sme spolu navštívili 25
          krajín. Štyri mesiace sme žili vo Fínsku v extrémnych podmienkach, kde teploty málokedy dosiahli plusové
          hodnoty. V USA sme najazdili už cez 6 500 km po západnom aj východnom pobreží. Dva mesiace sme low-costovo
          cestovali po juhovýchodnej Ázii a zdolali niekoľko diaľkových trailov v Kyrgyzstáne, Špaielnsku a Škótsku, iba
          s batohom na pleciach.
        </p>
        {/*<p>*/}
        {/*  V každej krajine zanechávame malú spomienku aj na nás samotných v podobe malých popísaných zámok, ktoré*/}
        {/*  nejde prehliadnuť. Z jednej strany si ich totiž zdobíme malými hovienkami. Momentálne ich máme pripnutých 35*/}
        {/*  a už máme nachystané ďalšie.*/}
        {/*</p>*/}
        {/*<div className="articlePictureLandscape">*/}
        {/*  <img alt="ZamkaBrnoHovno" src="/static/images/photosFull/ZamkaBrnoHovno.jpg" />*/}
        {/*</div>*/}
        {/*<h3>Prečo práve hovienko?</h3>*/}
        {/*<p>*/}
        {/*  Je bežné, že ľudia vo vzťahu sa oslovuje milými prezývkami ako miláčik či chrobáčik. My sme si zaužívali*/}
        {/*  prezývku “poopie” čo v preklade z angličtiny znamená - hovienko. No nie je to romantické, dve hovienka*/}
        {/*  túlajúce sa po svete? :)*/}
        {/*</p>*/}
        <h3>O blogu</h3>
        <p>
          Vznikol spontánne, presne tak ako vznikajú naše dobrodružstvá. Prostredníctvom našej stránky by sme sa chceli
          s vami podeliť o naše zážitky a skúsenosti, ktoré sme počas našich ciest nadobudli. Okrem písania sa venujeme
          aj tvorbe videí, súvisiacich s naším cestovateľským životom, pri vašej vôli môžete byť súčasťou našich očí a
          súčasťou našich nôh. Možno vás niečo z našich zážitkov inšpiruje a bude motivovať vašu chuť objavovať svet. A
          ak sa pri tom budete usmievať, náš zámer bude naplnený.
        </p>
      </Page>
    </>
  );
}
