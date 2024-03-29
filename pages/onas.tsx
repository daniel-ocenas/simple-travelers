import Page from 'components/Page';
import Head from 'next/head';
import React from 'react';
import { Link } from 'UI/Link';

export default function Onas() {
  return (
    <>
      <Head>
        <title>O nás, Simple Travelers</title>
        <meta property="og:title" content="Simple Travelers - O nás" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/AboutUs.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/onas" />
        <meta name="keywords" content="$OG_KEYWORDS" />
      </Head>
      <Page>
        <div className="screen-reader-text">
          <h2>O nás</h2>
          <div className="articlePictureLandscape">
            <img alt="Liv a Dan" src="/static/images/photosFull/AboutUs.jpg" />
          </div>
          <p>
            Pocit z objavovania krás, ktoré nám svet ponúka je nádherný. No sila našich dobrodružstiev spočíva práve v
            tom, že všetko prežívame spolu.
          </p>
          <h3>Niečo o nás</h3>
          <p>Milujeme cestoviny každého druhu a na všetky spôsoby. Sú lacné a ich príprava zaberie pár minút.</p>
          <p>
            Aktívne sa venujeme športu v akejkoľvek podobe. Viac ako 10 rokov sme súťažne plávali, vďaka čomu sme sa
            naučili disciplíne a vytrvalosti a dokonca aj vstávať o šiestej ráno.
          </p>
          <p>
            Cestujeme low-cost - neprespávame v drahých hoteloch a ani sa nestravujeme vo fancy reštauráciach. Napriek
            tomu sa považujeme za bohatých cestovateľov - čo sa týka zážitkov.
          </p>
          <h3>Kto vlastne sme?</h3>
          <p>
            Dvaja študenti, ktorí si zaumienili, že život je príliš krátky na to, aby ho presedeli doma. Príliš vzácny
            na to, aby sme nerobili to, čo nás robí šťastnými. Naše túlavé topánky nás vodia po všetkých možných kútoch
            sveta a doposiaľ sme spolu navštívili sedemnásť krajín. Štyri mesiace sme žili vo Fínsku v extrémnych
            podmienkach, kde teploty málokedy dosiahli plusové hodnoty. V USA sme najazdili už cez 6 500 km po západnom
            aj východnom pobreží. Mesiac sme pracovali ako roznášači jedla v Mníchove napriek nulovej schopnosti
            rozprávať po nemecky. A to je len začiatok.
          </p>
          <p>
            V každej krajine zanechávame malú spomienku aj na nás samotných v podobe malých popísaných zámok, ktoré
            nejde prehliadnuť. Z jednej strany si ich totiž zdobíme malými hovienkami. Momentálne ich máme pripnutých 35
            a už máme nachystané ďalšie.
          </p>
          <div className="articlePictureLandscape">
            <img alt="ZamkaBrnoHovno" src="/static/images/photosFull/ZamkaBrnoHovno.jpg" />
          </div>
          <h3>Prečo práve hovienko?</h3>
          <p>
            Je bežné, že ľudia vo vzťahu sa oslovuje milými prezývkami ako miláčik či chrobáčik. My sme si zaužívali
            prezývku “poopie” čo v preklade z angličtiny znamená - hovienko. No nie je to romantické, dve hovienka
            túlajúce sa po svete? :)
          </p>
          <h3>O blogu</h3>
          <p>
            Vznikol spontánne, presne tak ako vznikajú naše dobrodružstvá. Prostredníctvom našej stránky by sme sa
            chceli s vami podeliť o naše zážitky a skúsenosti, ktoré sme počas našich ciest nadobudli. Okrem písania sa
            venujeme aj tvorbe videí, súvisiacich s naším cestovateľským životom, pri vašej vôli môžete byť súčasťou
            našich očí a súčasťou našich nôh. Možno vás niečo z našich zážitkov inšpiruje a bude motivovať vašu chuť
            objavovať svet. A ak sa pri tom budete usmievať, náš zámer bude naplnený.
          </p>
          <div className="about-us-container">
            <div className="about-liv">
              <img
                className="about-us-portrait-picture"
                src={`/static/images/photosMobile/AboutLiv.jpg`}
                alt="Portrait Liv"
              />
              <div className="about-us-portrait-container">
                <h4>Liv</h4>
                <Link href={'https://www.facebook.com/leewee.banska'} external newTab>
                  <img
                    className="about-us-container-icon"
                    src={'/static/icons/icon-facebook.png'}
                    alt={'facebook-icon'}
                  />
                </Link>
                <Link href={'https://www.instagram.com/liv__traveller/'} external newTab>
                  <img
                    className="about-us-container-icon"
                    src={'/static/icons/icon-instagram.png'}
                    alt={'instagram-icon'}
                  />
                </Link>
                <Link href={'https://www.sashe.sk/Liv_creates'} external newTab>
                  <img className="about-us-container-icon" src={'/static/icons/icon-sashe.png'} alt={'sashe-icon'} />
                </Link>
              </div>
              <p>
                Vyštudovala som francúzske bilingválne gymnázium v Banskej Bystrici a momentálne študujem medzinárodný
                obchod na Vysokej škole ekonomickej v Prahe. Od mala bol môj život prepojený so športom. Mojou najväčšou
                vášňou bolo plávanie. Zúčastnila som sa niekoľkých MSR a zahraničných pretekoch, kde mi občas podarili
                aj medailové umiestnenia. V roku 2017 som sa rozhodla vymeniť plavecké plutvy za trekové topánky a
                vydala sa objavovať svet. Vo voľnom čase rada ručne vyrábam náušnice a brošne prevažne z polymérovej
                hmoty a hačkovaním.
              </p>
            </div>
            <div className="about-dan">
              <img
                className={'about-us-portrait-picture'}
                src={'/static/images/photosMobile/AboutDan.jpg'}
                alt="Portrait Dan"
              />
              <div className="about-us-portrait-container">
                <h4>Dan</h4>
                <Link href={'https://www.facebook.com/danielm.ocenas'} external newTab>
                  <img
                    className="about-us-container-icon"
                    src={'/static/icons/icon-facebook.png'}
                    alt="facebook-icon"
                  />
                </Link>
                <Link href={'https://www.instagram.com/daniel_ocenas/'} external newTab>
                  <img
                    className="about-us-container-icon"
                    src={'/static/icons/icon-instagram.png'}
                    alt="instagram-icon"
                  />
                </Link>
              </div>
              <p>
                Momentálne som až po uši zahltený programovaním. Svoju kreativitu sa snažím čerpať pri tvorení blogu,
                vlogových videií, krajinných a našich spoločných fotografií. Výplňou môjho voľného času je aj tréning na
                ultra trail behy, pri ktorých môžem prekonávať sám seba. Únik z tohto kolobehu rád nachádzam počas
                turistík na vrcholoch hôr, kde si môžem vychutnať prírodu ale rovnako sú pre mňa zdroj novej energie.
                Avšak zo všetkého mám najradšej moju Liv a spoznávanie sveta s ňou.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
