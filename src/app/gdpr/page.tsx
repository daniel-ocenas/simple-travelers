import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CustomPage from 'src/components/CustomPage';
import { MarginBox, Text } from 'src/UI';

export default function Page() {
  return (
    <CustomPage>
      <Head>
        <title>CustomPage, Simple Travelers</title>
        <meta property="og:title" content="CustomPage, Simple Travelers" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/Background.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/gdpr" />
        <meta property="og:type" content="articles" />
      </Head>
      <MarginBox mt={16} />
      <Text type={'h2'}>Zásady používania osobných údajov</Text>
      <Text>
        Ak ste návštevníkom nášho blogu, poskytujete nám svoje osobné údaje. My vaše údaje spracovávame a za ich
        bezpečnosť ručíme. Sľubujeme, že vaše údaje dostatočne chránime a podriaďujeme sa požiadavkám Nariadení o
        ochrane osobných údajov (CustomPage).
      </Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Použitie osobných údajov</Text>
      <Text>
        Aby sme mohli merať ako sa vám na našom blogu páči, kde trávite najviac času a kam klikáte, používame
        poskytovateľa služieb pre spracovateľský nástroj, ktorým je:
      </Text>
      <Text>Google – Google Analyzics, využívajúci merací kód.</Text>
      <Text>
        Tento nástroj je použitý v prípade, že vyjadríte súhlas so&nbsp;
        <Link href={'/page.tsx'}>Zásady používania osobných údajov</Link>, na blogu&nbsp;
        <Link href={'/public'}>simpletravelers.sk</Link>. Po potvrdení nástroj vygeneruje pomocné cookies súbory, s
        náhodným číslom, ktoré sú asociované s používateľovým prehliadačom. Týmto spôsobom je zaručená anonymizácia
        osobných údajov, ktoré používame pre zbieranie štatistík o prehliadaní nášho blogu.
      </Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Aké údaje spracovávame a prečo</Text>
      <Text>Vaše osobné údaje spracovávame z dôvodu zlepšenia poskytovania obsahu nášho blogu a jeho kvality. </Text>
      <Text>
        <b>
          Zbieranie osobných údajov môže znieť hrozivo, avšak jedná sa len o údaje prehliadania našich stránok vo forme
          cookies súborov.
        </b>
      </Text>
      <Text>
        Zoznam údajov, ktoré spracovávame po dobu trvania vášho súhlasu, maximálne však 26 mesiacov od jeho udelenia:
      </Text>
      <Text>COOKIES: Súbory cookies pre nástroj Google Analytics.</Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Správca osobných údajov</Text>
      <Text>
        Daniel Miloslav Očenáš <br />
        +421 915 358 175 <br />
        Terézie Vansovej 18 <br />
        97401, Banská Bystrica <br />
        danielm.ocenas@gmail.com <br />
      </Text>
      <Text>
        Správca prevádzkuje webové stránky simpletravelers.sk. Správca vaše údaje spravuje a určuje, ako dlho budú
        osobné údaje spracovávané a za akým účelom. Správca taktiež vyberá ďalších spracovateľov, ktorých k spracovaniu
        využíva.
      </Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Predávanie vašich dát mimo Európsku Úniu</Text>
      <Text>
        Vaše dáta spracovávame výhradne v Európskej Únii alebo v štátoch, ktoré zaisťujú rovnakú úroveň ochrany na
        základe rozhodnutia Európskej komisie.
      </Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Vaše práva v súvislosti s ochranou osobných údajov</Text>
      <Text>
        V súvislosti s ochranou osobných údajov máte radu práv. Ak budete chcieť využiť niektoré z týchto práv, prosím
        kontaktujte nás prostredníctvom e-mailu:
      </Text>
      <Text>Máte právo na informácie, ktoré si práve čítate.</Text>
      <Text>
        Právu na prístup – môžete náš požiadať o informáciu o tom, aké údaje o vás spracovávame a prečo. Následne do 30
        dní vám túto informáciu doložíme.
      </Text>
      <Text>
        Právo na obmedzenie spracovania – môžete využiť, ak se domnievate, že spracovávame vaše nepresné údaje,
        domnievate sa, že vykonávame spracovanie nezákonne, ale nechcete všetky údaje zmazať alebo ak máte námietku
        proti spracovávaniu. Obmedziť môžete rozsah osobných údajov alebo účelov spracovania.
      </Text>
      <Text>
        Právo na vymazanie: Vašim ďalším právom je právo požiadať nás o vymazanie údajov, ktoré o vás uchovávame. V
        takom prípade vymažeme všetky vaše osobné údaje, ktoré o vás uchovávame. Na vykonanie tohto práva potrebujeme 30
        dní.
      </Text>
      <MarginBox mt={32} />
      <Text type={'h3'}>Mlčanlivosť</Text>
      <Text>
        Sme povinní zachovávať mlčanlivosť o osobných údajoch, ktorých zverejnenie by ohrozilo zabezpečenie vašich
        osobných údajov. Táto mlčanlivosť pritom trvá aj po skončení záväzkových vzťahov s nami. Bez vášho súhlasu vaše
        údaje žiadnej inej tretej strane nevydáme.
      </Text>
      <MarginBox mt={32} />
      <Text>Dátum: 19.04.2020</Text>
    </CustomPage>
  );
}
