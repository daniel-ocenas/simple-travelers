import { Metadata } from 'next';

import AboutPageSection from '@/components/about/about-page-section';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is about page.',
};

export default function AboutPage() {
  return (
    <>
      <h1 className="my-12 text-center text-3xl font-bold">O nás</h1>
      <div className="mb-12">
        <AboutPageSection />
      </div>
      <p className="mb-4 text-base">
        Sme Liv a Dan a spoločne tvoríme obsah ako Simple travelers. Sme mladý
        pár zo Slovenska, ktorý si zaumienil, že život je príliš krátky na to,
        aby ho presedeli doma. Príliš vzácny na to, aby sme nerobili to, čo nás
        robí šťastnými. Naše túlavé topánky nás vodia po všetkých možných kútoch
        sveta a doposiaľ sme spolu navštívili 25 krajín. Štyri mesiace sme žili
        vo Fínsku v extrémnych podmienkach, kde teploty málokedy dosiahli
        plusové hodnoty. V USA sme najazdili už cez 6 500 km po západnom aj
        východnom pobreží. Dva mesiace sme low-costovo cestovali po
        juhovýchodnej Ázii a zdolali niekoľko diaľkových trailov v Kyrgyzstáne,
        Špaielnsku a Škótsku, iba s batohom na pleciach.
      </p>
      <h3 className="my-4 text-2xl font-semibold">O blogu</h3>
      <p className="my-4 text-base">
        Vznikol spontánne, presne tak ako vznikajú naše dobrodružstvá.
        Prostredníctvom našej stránky by sme sa chceli s vami podeliť o naše
        zážitky a skúsenosti, ktoré sme počas našich ciest nadobudli. Okrem
        písania sa venujeme aj tvorbe videí, súvisiacich s naším cestovateľským
        životom, pri vašej vôli môžete byť súčasťou našich očí a súčasťou našich
        nôh. Možno vás niečo z našich zážitkov inšpiruje a bude motivovať vašu
        chuť objavovať svet. A ak sa pri tom budete usmievať, náš zámer bude
        naplnený.
      </p>
    </>
  );
}
