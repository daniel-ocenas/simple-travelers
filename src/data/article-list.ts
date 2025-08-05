import { Article } from '@/store/Article/Article.types';

export function sortArticlesByDate(articleList: Article[]): Article[] {
  return articleList?.sort((a: Article, b: Article) => {
    return +new Date(b.dateCreated) - +new Date(a.dateCreated);
  });
}

export const ArticleList: Article[] = [
  {
    _id: '',
    url: 'najkrajsie-vyhlady-na-bali',
    title:
      'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
    description:
      'Ostrov Bali v Indonézii, známy aj ako „Ostrov bohov,“ ponúka množstvo nádherných miest s úchvatnými výhľadmi. Pre tých, ktorí milujú panoramatické scenérie, východy a západy slnka, je Bali skutočným rajom. V tomto článku vám dáme tipy na päť (must visit) miest, ktoré by ste nemali vynechať, pokiaľ si chcete vychutnať jedny z najočarujúcejších miest na Bali.',
    date: '8. júl 2024',
    dateCreated: '07. 08. 2024',
    image: '/static/images/photosFull/BaliLahanganPointing.jpg',
    keywords:
      'bali, vyhlady na bali, zapady slnka na bali, vychody slnka na bali, turistika na bali, foto miesta na bali, instagramové miesta na bali, bali instagram',
    categories: ['Ázia', 'Rady a Tipy', 'Hiking'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
      },
      {
        component: 'p',
        text: 'Ostrov Bali v Indonézii, známy aj ako „Ostrov bohov,“ ponúka množstvo nádherných miest s úchvatnými výhľadmi. Pre tých, ktorí milujú panoramatické scenérie, východy a západy slnka, je Bali skutočným rajom. V tomto článku vám dáme tipy na päť (must visit) miest, ktoré by ste nemali vynechať, pokiaľ si chcete vychutnať jedny z najočarujúcejších miest na Bali.',
      },
      {
        component: 'h3',
        text: '1. Lahangan Sweet',
      },
      {
        component: 'p',
        text: 'Lahangan Sweet je menej známe, ale rýchlo sa stávajúce populárne miesto pre nádherné výhľady na Bali. Nachádza sa v oblasti Karangasem a ponúka pokoj a nádherné panoramatické scenérie.',
      },
      {
        component: 'p',
        text: '<b>Prečo navštíviť:</b><ul><li><strong>Pokojné prostredie:</strong> Lahangan Sweet je ideálnym miestom pre tých, ktorí hľadajú únik od turistického ruchu. Môžete tu relaxovať a užívať si kľud a krásu prírody.</li><li><strong>Výhľad na horu Agung:</strong> Jedným z hlavných lákadiel je úžasný výhľad na majestátnu horu Agung. Pohľad na túto posvätnú horu, obklopenú zeleňou a dedinami, je fascinujúci, najmä pri západe slnka.</li><li><strong>Fotografické príležitosti:</strong> Lahangan Sweet je obľúbené medzi fotografmi vďaka svojim jedinečným výhľadom a fotogenickým miestam, vrátane hojdačiek a bambusových plošín, ktoré ponúkajú dokonalý rám pre vaše fotografie.</li></ul>',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BaliLahanganPointing.jpg',
            name: 'BaliLahanganPointing',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '2. Campuhan Ridge Walk',
      },
      {
        component: 'p',
        text: 'Campuhan Ridge Walk je obľúbenou turistickou trasou v srdci Ubudu, ktorá ponúka nádherné výhľady na okolité údolia a ryžové polia.',
      },
      {
        component: 'p',
        text: `<b>Prečo navštíviť:</b><ul><li><strong>Malebná prechádzka:&nbsp;</strong>Trasa je ideálna na rannú alebo večernú prechádzku, keď je slnko nízko a svetlo je mäkké a zlatisté. Pohľad na zelené kopce a údolia je skutočne upokojujúci.</li><li><strong>Blízko Ubudu:</strong>&nbsp;Nachádza sa len kúsok od centra Ubudu, čo z neho robí ľahko dostupné miesto pre turistov, ktorí chcú uniknúť z mestského ruchu.</li><li><strong>Kaviarne a reštaurácie:&nbsp;</strong>Po prechádzke môžete navštíviť niektorú z okolitých kaviarní alebo reštaurácií, kde si môžete vychutnať osviežujúci nápoj alebo chutné jedlo s nádherným výhľadom.</li></ul>`,
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BaliCampuhanRidgeWalk.jpg',
            name: 'BaliCapunhanRidgeWalk',
          },
          {
            src: '/static/images/photosFull/BaliCampuhanPool.jpg',
            name: 'BaliCapunhanPool',
          },
        ],
      },
      {
        component: 'h3',
        text: `3. Tegallalang Rice Terrace`,
      },
      {
        component: 'p',
        text: `Tegallalang Rice Terrace je jedným z najznámejších a najfotogenickejších miest na Bali. Nachádza sa v blízkosti Ubudu a ponúka nádherné výhľady na terasovité ryžové polia.`,
      },
      {
        component: 'p',
        text: `<b>Prečo navštíviť:</b><ul><li><strong>Nádherné scenérie:</strong> Tegallalang ponúka úchvatný pohľad na zelené ryžové polia usporiadané do terás, ktoré sa tiahnú do diaľky. Pohľad na tieto terasy, najmä pri východe alebo západe slnka, je skutočne nádherný.</li><li><strong>Kultúrne zážitky:</strong> Návšteva Tegallalang vám poskytne aj pohľad do života miestnych farmárov, ktorí pracujú na poliach. Môžete sa tiež dozvedieť viac o tradičných poľnohospodárskych technikách, ktoré sa na Bali používajú po stáročia.</li><li><strong>Fotografické príležitosti:</strong> Tegallalang je obľúbené miesto pre fotografov vďaka svojim malebným výhľadom a jedinečným terasám. Mnoho návštevníkov sa tu zastaví, aby si urobili krásne fotografie, ktoré zachytávajú krásu balijskej krajiny.</li></ul>`,
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BaliRiceFieldsUs.jpg',
            name: 'BaliRiceFieldsUs',
          },
          {
            src: '/static/images/photosFull/BaliRiceFieldsHatLiv.jpg',
            name: 'BaliRiceFieldsHatLiv',
          },
        ],
      },
      {
        component: 'h3',
        text: '4. Východ slnka na hore Batur',
      },
      {
        component: 'p',
        text: 'Hora Batur je aktívny vulkán nachádzajúci sa v severovýchodnej časti Bali a je jedným z najpopulárnejších miest na ostrove pre turistov, ktorí milujú dobrodružstvo a nádherné výhľady. Vyjsť na Batur bez sprievodcu je prakticky nemožné. My sme sa o to pokúsili, ale všetky cestičky na vrchol sú pod sú pod prísnym dohľadom miestnych obyvateľov, ktorých sme nazvali Batúrska mafia. Ich hlavnou snahou je vytiahnuť od turistov, čo najviac peňazí. Sú teda len dve možnosti ako sa dostať na vrchol. Prvá je, že si zarezervujete výlet online, v rámci ktorého dostanete balík služieb, vrátane odvozu/dovozu z hotela, „služby“ sprievodcu pri výstupe, malé občerstvenie na vrchole. Cena takéhoto balíku sa pohybuje okolo 30€/osoba. Druhá možnosť, ktorú sme zvolili aj my, je, že sa vydáte na horu po vlastnej réžii. Mali sme so sebou len malý obnos hotovosti (20€) a tvárili sme sa, že sme netušili, že sa bez sprievodcu nedá vyjsť. ',
      },
      {
        component: 'p',
        text: `<b>Prečo navštíviť:</b><ul><li><strong>Východ slnka:</strong> Výstup na vrchol hory Batur začína ešte za tmy, aby ste mohli zažiť úchvatný východ slnka. Keď sa obloha začína zafarbovať do oranžových a ružových odtieňov, pohľad na vychádzajúce slnko nad Balijským morom a okolité hory je nezabudnuteľný.</li><li><strong>Panoramatický výhľad:</strong> Z vrcholu Baturu môžete vidieť aj jazero Batur, ktoré sa nachádza v kráteri vulkánu. Pohľad na jazero zhora, obklopené zeleňou a so stúpajúcou parou z teplých prameňov, je skutočne magický.</li><li><strong>Dobrodružný zážitok:</strong> Výstup je stredne náročný a trvá približne dve hodiny. Cesta vedie cez rôzne terény, vrátane lesov a skalnatých úsekov, čo robí tento zážitok ešte vzrušujúcejším.</li></ul>`,
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BaliSunriseBaturs.jpg',
            name: 'BaliSunriseBaturs',
          },
        ],
      },
      {
        component: 'h3',
        text: '5. Východ slnka na hore Agung',
      },
      {
        component: 'p',
        text: 'Mount Agung je najvyšším vrcholom na Bali a je považovaná za posvätnú horu, ktorá hrá dôležitú úlohu v balijskej kultúre a náboženstve.',
      },
      {
        component: 'p',
        text: `<b>Prečo navštíviť:</b><ul><li><strong>Úchvatné scenérie:</strong> Východ slnka z hory Agung ponúka jedinečný pohľad na celý ostrov Bali, vrátane hory Batur a Lomboku na horizonte. Slnko stúpajúce nad horizontom a postupne osvetľujúce ostrov je zážitok, ktorý sa vryje do pamäti.<li><strong>Duchovný význam:</strong> Pre mnohých Balijčanov je hora Agung miestom duchovného významu. Výstup na horu nie je len fyzickým, ale aj duchovným zážitkom.</li><li><strong>Výzva pre horolezcov:</strong> Výstup na Agung je náročnejší ako na Batur a vyžaduje dobrú fyzickú kondíciu. Cesta začína v noci a trvá približne šesť až sedem hodín. Odmenou za námahu je úžasný výhľad z vrcholu.</li></ul>`,
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BaliAgungView.jpg',
            name: 'BaliAgungView',
          },
        ],
      },
      {
        component: 'h3',
        text: 'Tipy na návštevu',
      },
      {
        component: 'p',
        text: `<b>Pripravte sa:</b> Nezabudnite si vziať teplé oblečenie, keďže teploty na vrcholoch môžu byť nízke, najmä pred východom slnka. Tiež si nezabudnite vziať dostatok vody a občerstvenia.`,
      },
      {
        component: 'p',
        text: `<b>Sprevádzači:</b> Pre výstupy na hory Batur a Agung sa odporúča najatie miestneho sprievodcu, ktorý vás bezpečne prevedie a poskytne cenné informácie o okolí.`,
      },
      {
        component: 'p',
        text: `<b>Časovanie:</b> Na dosiahnutie vrcholov pred východom slnka je potrebné začať výstup veľmi skoro ráno, často okolo 2-3 hodiny ráno. Zvážte rezerváciu výletu vopred.`,
      },
      {
        component: 'p',
        text: `Bali je skutočným rajom pre tých, ktorí milujú nádherné výhľady a dobrodružstvo. Či už sa rozhodnete pre východ slnka na niektorej z posvätných hôr alebo pre pokojný výhľad z Tegallalang Rice Terrace, tieto miesta vám ponúknu nezabudnuteľné zážitky a krásne scenérie, ktoré budete chcieť zdieľať s ostatnými.`,
      },
    ],
  },
  {
    _id: '',
    url: 'slovenskesrdcovky',
    title: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
    date: '7. júl 2020',
    dateCreated: '07. 07. 2020',
    description:
      'Slovensko je taká krásna a rozmanitá krajina, že by nám nestačil ani rok na to, aby sme objavili všetky krásy, ktoré nám ponúka. Zbierka slovenských srdcoviek sa nám pomaly, ale isto rozširuje. Prostredníctvom týchto príspevkov sa predovšetkým chceme o tieto miesta podeliť s tebou a motivovať ťa navštíviť ich. Ak máš nadšenie spoznávať Slovensko, možno práve v tomto príspevku nájdeš niečo nové a úchvatné.',
    image: '/static/images/photosFull/srdcovky/SlovenskeSrdcovky.jpg',
    keywords:
      'slovenské srdcovky, cestovanie po slovensku, rady a tipy, kam na výlet, výlet s rodinou',
    categories: ['Slovensko', 'Rady a Tipy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
      },
      {
        component: 'p',
        text: 'Slovensko je taká krásna a rozmanitá krajina, že by nám nestačil ani rok na to, aby sme objavili všetky krásy, ktoré nám ponúka. Zbierka slovenských srdcoviek sa nám pomaly, ale isto rozširuje. Prostredníctvom týchto príspevkov sa predovšetkým chceme o tieto miesta podeliť s tebou a motivovať ťa navštíviť ich. Ak máš nadšenie spoznávať Slovensko, možno práve v tomto príspevku nájdeš niečo nové a úchvatné.',
      },
      {
        component: 'p',
        text: 'Aj my sme zrušili nejednu cestu do zahraničia, ale rozhodli sme sa na celú situáciu pozrieť z pozitívnej strany. Ani zatvorené hranice nepovažujeme za dostatočnú bariéru pri spoznávaní krás, ktoré nám svet ponúka. Slovensko je nimi preplnené a&nbsp; práve teraz máme čas na to, aby sme začali objavovať poklady, ktoré máme na dosah ruky, a&nbsp;začali si vážiť to, čo máme doma.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/SlovenskeSrdcovky.jpg',
            name: 'SlovenskeSrdcovkyArticle',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Inšpiráciou Slovenských srdcoviek sú miesta, ktoré oplývajú neskutočnou krásou a na ktoré môžeme byť my Slováci právom hrdí. Každý mesiac zverejníme päť miest, ktoré nás uchvátili a ktoré by mohli zaujať aj teba. ',
      },
      {
        component: 'h3',
        text: '1. Krížna (1574 m n. m.)',
      },
      {
        component: 'p',
        text: 'Celé Slovensko ako na dlani je vskutku veľkolepý pohľad, na ktorý len tak ľahko nezabudneš. Vrchol Krížnej ti ponúka bohatú odmenu v&nbsp;podobe fascinujúceho panoramatického výhľadu na celé Slovensko. Na juhu sa týčia Kremnické a&nbsp;Starohorské vrchy. Východná časť zachytáva hrebene Nízkych Tatier s&nbsp;kulisou Slovenského rudohoria. Na severovýchodnom horizonte hrdo vyčnieva Majerova skala so siluetami nášho najvyššieho pohoria – Vysokých Tatier. Severnú časť tvoria Chočské vrchy a&nbsp;360-stupňovú panorámu zo západnej časti uzatvárajú rozpínajúce sa končiare Malej Fatry. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KriznaPano.jpg',
            name: 'KriznaPano',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Dominanta Národného parku Veľká Fatra leží (ľudovo povedané) za humnami Banskej Bystrice (cca 16&nbsp;km smerom na Ružomberok). Okrem iného je významným uzlom prepájajúcim viaceré turistické chodníky z&nbsp;banskobystrickej, liptovskej a&nbsp;turčianskej strany (z toho je odvodený aj názov). Najrýchlejší výstup sa začína v&nbsp;oci Turecká a vedie po zjazdovke bývalého lyžiarskeho strediska Turecká-Krížna. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KriznaJumpLiv.jpg',
            name: 'KriznaJumpLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KriznaUs.jpg',
            name: 'KriznaUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '2. Kľak (1351 m n. m.)',
      },
      {
        component: 'p',
        text: 'Podľa nás najfotogenickejší vrch pohoria Malá Fatra patrí medzi veľmi obľúbené turistické trasy. Výstup na Kľak je možné absolvovať v&nbsp;ktoromkoľvek ročnom období, čo ti zabezpečí diametrálne odlišný, ale vo všetkých prípadoch znamenitý zážitok. Na vrchole je umiestnený mohutný dvojkríž a&nbsp;môžeš sa tu dosýta nabažiť výhľadmi na našu malebnú krajinu.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KlakView.jpg',
            name: 'KlakView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Najrýchlejšia trasa na vrch Kľaku vedie z&nbsp;Fačkovského sedla a&nbsp;trvá približne 2 hodiny. Samotný výstup je pomerne jednoduchý a&nbsp;je vhodný aj pre menej zdatných turistov. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KlakForest.jpg',
            name: 'KlakForest',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KlakUs.jpg',
            name: 'KlakUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KlakCross.jpg',
            name: 'KlakCross',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '3. Králický vodopád',
      },
      {
        component: 'p',
        text: 'Sedem metrov vysoký vodopád sa nachádza na náučnom chodníku naprieč Králickou tiesňavou pri obci Králiky. Napriek tomu, že nepatrí medzi velikánov, môže ťa prekvapiť a&nbsp;súčasne potešiť svojou prírodnou veľkoleposťou. Unikni z&nbsp;víru veľkomesta, vytiahni slúchadlá z&nbsp;uší a&nbsp;namiesto toho sa započúvaj do šumenia vody v&nbsp;obklopení prekrásnej prírody. Takto podľa nás vyzerá dokonalý oddych.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KralickyVodopadHang.jpg',
            name: 'KralickyVodopadHang',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KralickyVodopadLandscape.jpg',
            name: 'KralickyVodopadLandscape',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KralickyVodopadPrirodaLiv.jpg',
            name: 'KralickyVodopadPrirodaLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KralickyVodopadPriroda.jpg',
            name: 'KralickyVodopadPriroda',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '4. Badínsky prales',
      },
      {
        component: 'p',
        text: 'Unikátna časť slovenskej prírody, ktorá doposiaľ nebola nijakým spôsobom ovplyvnená človekom, si ťa získa svojou pokojnou atmosférou a&nbsp;všade prítomným tichom. Nachádza sa 6 km od obce Badín (na úpätí Kremnických vrchov v&nbsp;Banskobystrickom kraji).',
      },
      {
        component: 'p',
        text: 'Badínskym pralesom sa môžeš pokochať len z&nbsp;turistického chodníka. Z&nbsp;dôvodu zachovania nedotknutej prírodnej rozmanitosti je vstup dovnútra pralesu povolený len so sprievodcom a vo vyhradený čas. Turistika sa tu však ani zďaleka nekončí. Po turistickom chodníku sa dá pokračovať až na hrebeň Kremnických vrchov, odkiaľ vedú ďalšie nádherné turistické trasy.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'BadinskyVodopad',
            src: '/static/images/photosFull/srdcovky/BadinskyVodopad.jpg',
          },
          {
            name: 'BadinskyLes',
            src: '/static/images/photosFull/srdcovky/BadinskyLes.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/KremnickeVrchy.jpg',
            name: 'KremnickeVrchy',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '5. Súľovské skaly a&nbsp;Súľovská pyramída',
      },
      {
        component: 'p',
        text: 'Patria medzi jedny z&nbsp;najkrajších prírodných úkazov severozápadnej časti Slovenska (10&nbsp;km južne od mesta Bytče) a&nbsp;aj na našom zozname slovenských srdcoviek im patrí čestné miesto. Strednou časťou vedie 7,5 km dlhý turistický okruh, ktorý ťa prevedie zákutiami mohutných skál rôznych veľkostí a&nbsp;tvarov. Poriadne si vychutnaj širokú paletu mimoriadne krásnych scenérii. Určite nevynechaj ani Súľovskú zrakovú pyramídu – unikátnu drevenú expozíciu v&nbsp;tvare ležatého ihlana. Ponúka nezabudnuteľný zážitok v&nbsp;podobe naživo premietajúceho kina s&nbsp;výhľadom na Súľovské skaly. Odporúčame počkať si na západ slnka, keď dolina oplýva najkrajšími farbami.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/ZrakovaPyramida.jpg',
            name: 'ZrakovaPyramida',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Exhibíciu plánujú rozobrať na jeseň&nbsp; roku 2020, preto si tam určite sprav výlet čím skôr, aby si nepremeškal možnosť vidieť tento jedinečný architektonický kúsok. Update: pyramída je od konca mája 2020 rozobratá a nieje možné ju navštíviť.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/SulovViewLiv.jpg',
            name: 'SulovViewLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/SulovView.jpg',
            name: 'SulovView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Veľký Choč (1611 m n. m.)',
      },
      {
        component: 'p',
        text: 'Turistika po slovenských kopcoch patrí medzi naše najobľúbenejšie aktivity. Sloboda, čarovné ticho a&nbsp;nekonečná krása, ktoré hory ponúkajú, sú pre nás doslova balzamom na dušu. Zrazu si človek uvedomí, aké sú jeho problémy malé, často nepodstatné, a&nbsp;že sa netreba zapodievať zbytočnými malichernosťami. Treba si vychutnávať čaro prítomného okamihu a&nbsp;užívať si život plnými dúškami.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/ChocHold.jpg',
            name: 'ChocHold',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Veľký Choč je jeden z&nbsp;najkrajších výhľadových vrchov na Slovensku. Poskytuje 360-stupňový pohľad na okolité pohoria, ako sú: Západné Tatry, Malá a&nbsp;Veľká Fatra, Nízke Tatry a&nbsp;nádherne rozprestierajúca sa Podtatranská kotlina. Na vrchole Veľkého Choča by sme dokázali sedieť hodiny a stále by sa nám málilo. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/ChocPano.jpg',
            name: 'ChocPano',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Na vrchol vedie viacero trás. My sme si zvolili začiatok v obci&nbsp;Valaská Dubová, ktorá je známa tým, že v&nbsp;nej chytili zbojníka Juraja Jánošíka. Trasa je pomerne náročná s&nbsp;neustále meniacim sa terénom. Je to neprestajný výstup hore kopcom s&nbsp;prevýšením takmer tisíc výškových metrov, s&nbsp;minimom roviniek na oddych. ',
      },
      {
        component: 'h3',
        text: 'Ostrá (1247 m n. m.)',
      },
      {
        component: 'p',
        text: 'Ako už názov napovedá, turistika na Ostrú je naozaj ostrá. Nejde však o&nbsp;extrémne náročnú a&nbsp;dlhú turistiku, ale skôr o&nbsp;poriadne strmé stúpanie. Turistickú značku s&nbsp;predpokladaným časom 2 hod. 45 min. sa nám podarilo prekonať o&nbsp;vyše polhodiny. Na Ostrú sa dá dostať dvomi turistickými chodníkmi z&nbsp;Blatnickej a&nbsp;Gaderskej doliny. Kúsok pod vrcholom v&nbsp;sedle Ostrej sa tieto dve cesty spoja a&nbsp;nasleduje najzaujímavejšia časť turistiky, stúpanie na samotný vrchol. Na tomto krátkom a&nbsp;poriadne strmom úseku sú na istenie primontované reťaze. Pomyselnú cieľovú bránu na vrchole tvorí úzke „okno“ v&nbsp;skale, za ktorým sa rozprestrie výhľad na celý Turiec a&nbsp;časť Veľkej Fatry. Turistiku na Ostrú je možné spojiť s&nbsp;prechodom po hrebeni na vrchol Tlstej, na ktorú vedie ďalší turistický chodník z&nbsp;Gaderskej doliny.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'OstraScarp',
            src: '/static/images/photosFull/srdcovky/OstraScarp.jpg',
          },
          {
            name: 'OstraSteps',
            src: '/static/images/photosFull/srdcovky/OstraSteps.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/OstraEastDan.jpg',
            name: 'OstraEastDan',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/OstraKriz.jpg',
            name: 'OstraKriz',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/OstraSide.jpg',
            name: 'OstraSide',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/OstraVrchol.jpg',
            name: 'OstraVrchol',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Hradisko na Kláštore',
      },
      {
        component: 'p',
        text: 'Zašli sme si do Nórska. V&nbsp;našich predstavách tam zablúdime pomerne často, ale chceli sme povedať, že sme našli kúsoček Nórska na Slovensku. Prižmúr jedno oko a&nbsp;možno kúsok aj to druhé. Nepripomína ti tento skalný útvar v&nbsp;Ponickej pahorkatine vychýrený zaseknutý balvan Kjeragbolten v&nbsp;Nórsku? ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'KjeragboltenPoniky',
            src: '/static/images/photosFull/srdcovky/KjeragboltenPoniky.jpg',
            text: 'Hradisko na Kláštore',
          },
          {
            name: 'KjeragboltenNorway',
            src: '/static/images/photosFull/srdcovky/KjeragboltenNorway.jpg',
            text: 'Kjeragbolten, Nórsko',
          },
        ],
      },
      {
        component: 'p',
        text: 'Neďaleko obce Ponická Huta sa nachádza zaujímavý náučný chodník, ktorý vedie cez západný hrebeň vrchu Učovník (759 m n. m.). Približne v&nbsp;polovici trasy sa nachádza mohutné keltské hradisko ktorého najzaujímavejšou časťou je práve kamenná akropola. Toto miesto dýcha zvláštnou tajuplnou atmosférou a&nbsp;určite stojí za návštevu.',
      },
      {
        component: 'p',
        text: 'Kúsok od areálu hradiska sa vypína&nbsp;mohutné bralo Baba&nbsp;ozdobené veľkým železným krížom, ktoré je ideálnym miestom na pozorovanie západu slnka.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/PonikyKriz.jpg',
            name: 'PonikyKriz',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Rebrík do neba',
      },
      {
        component: 'p',
        text: 'V&nbsp;jednoduchosti je krása. O&nbsp;tom ťa presvedčí aj unikátne dielo vizuálneho umelca Mateja Rosmányho. „Rebrík do neba“ vyčnieva na kopci za dedinou Dúbravica (okres Banská Bystrica). Zvláštnosťou je práve to, že sa o&nbsp;nič neopiera. ',
      },
      {
        component: 'p',
        text: 'Napriek tomu, že táto unikátna atrakcia je vysoká len päť metrov, vďaka svojej polohe a&nbsp;kompozícii ponúka skvelý výhľad na okolité dediny a&nbsp;v&nbsp;pozadí rozprestierajúce sa Nízke Tatry. ',
      },
      {
        component: 'p',
        text: 'Cesta k&nbsp;rebríku nie je označená, ale dá sa k&nbsp;nemu dostať pomerne jednoducho. Hneď za tabuľou označujúcou začiatok obce Dúbravica (v&nbsp;smere od Poník) treba odbočiť doprava. Hore vedie asfaltová cesta, avšak v&nbsp;dosť zúboženom stave, ktorú vystrieda poľná cesa. Odporúčame zaparkovať auto v&nbsp;dedine, odkiaľ to je približne 1 km. ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'RebrikAlone',
            src: '/static/images/photosFull/srdcovky/RebrikAlone.jpg',
          },
          {
            name: 'RebrikUs',
            src: '/static/images/photosFull/srdcovky/RebrikUs.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/RebrikLiv.jpg',
            name: 'RebrikLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Malachovské skalky',
      },
      {
        component: 'p',
        text: 'Malachovské skalky sú jedinečným miestom na relax a&nbsp;oddych. Krátka nenáročná trasa sa začína v&nbsp;obci Malachov, neďaleko autobusovej zastávky Stupy.',
      },
      {
        component: 'p',
        text: 'Napriek tomu, že je to chránená krajinná oblasť s&nbsp;bohatou faunou a flórou, vplyv ľudskej činnosti sa negatívne odzrkadlil na atraktívnosti bezprostredného okolia lokality.',
      },
      {
        component: 'p',
        text: 'Totomiesto sme si však zamilovali pre pôsobivý výhľad na našu milovanú Banskú Bystricu, Urpín a&nbsp;okolité pohoria.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/MalachovSkalyBBus.jpg',
            name: 'MalachovSkalyBBus',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/MalachovSkalyBB.jpg',
            name: 'MalachovSkalyBB',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Chodník korunami stromov Bachledka',
      },
      {
        component: 'p',
        text: 'Turisticky obľúbená atrakcia v&nbsp;podobe chodníka vo výške stromov sa rozprestiera uprostred lesov Bachledovej doliny. Prechádzka vo výške 4 metrov naberá úplne iný rozmer. Pohľad z&nbsp;tejto perspektívy na okolitú prírodu s hrebeňom Belianskych Tatier v&nbsp;pozadí je pastvou pre oči. Záver chodníka tvorí točitá vyhliadková veža, uprostred ktorej je natiahnutá obrovská sieť. Môžeš sa na nej vyblázniť, vyskákať alebo len tak vegetiť, a&nbsp;to vo výške 32 metrov. Tak čo, trúfneš si?',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/BachledkaView.jpg',
            name: 'BachledkaView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Ako sa dostať ku chodníu?',
      },
      {
        component: 'p',
        text: 'Na výber máš dva varianty. Tým rýchlejším je lanovka, ktorá ťa pohodlne vyvezie na vrchol kopca. Cena pre dospelého je 11 € a&nbsp;pre deti 9 €. Náročnejším variantom je pešia túra v&nbsp;strmom teréne, ktorú si musíš krvopotne odmakať. Nám to trvalo približne jednu hodinu. Pokiaľ si aj ty zvolíš túto možnosť, určite oceníš kvalitnú a&nbsp;pevnú obuv.',
      },
      {
        component: 'h4',
        text: 'Otváracie hodiny',
      },
      {
        component: 'p',
        text: 'Veľkou výhodou chodníka korunami stromov je jeho celoročná prevádzka. ',
      },
      {
        component: 'h4',
        text: 'Lístky',
      },
      {
        component: 'p',
        text: `Lístok odporúčame zakúpiť si v&nbsp;dostatočnom predstihu online, vďaka čomu ušetríš vystávanie v&nbsp;nekonečnom rade pri pokladniach. <a href='https://chodnikkorunamistromov.sk/#vstupne' rel="noopener noreferrer" target="_blank">Ceny lístkov nájdeš na tomto odkaze.</a>`,
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/BachledkaNet.jpg',
            name: 'BachledkaNet',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/BachledkaTower.jpg',
            name: 'BachledkaTower',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Poľana (1458 m n. m.) a vodopád Bystré',
      },
      {
        component: 'p',
        text: 'Jedného dňa sme rozmýšľali, ktoré miesto navštívime najbližšie. Náš kamarát Edo prišiel s&nbsp;návrhom turistiky na Poľanu. Nebolo nás treba dlho presviedčať, pretože Poľana už dlhší čas zastávala čestné miesto na našom bucketliste slovenských srdcoviek. Zbalili sme sa partička piatich kamarátov a&nbsp;vybrali sa spoznávať krásy stredného (možno srdce) Slovenska. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/PolanaLadder.jpg',
            name: 'PolanaLadder',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/PolanaGroup.jpg',
            name: 'PolanaGroup',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Približne po troch kilometroch od začiatku turistickej trasy v&nbsp;smere od Hriňovej sa na južných svahoch Poľany nachádza majestátny vodopád Bystré. Svojou mohutnosťou a&nbsp;dvadsať metrovou výškou patrí medzi najväčšie vodopády na Slovensku. Podľa nás je najlepší čas na návštevu vodopádu v&nbsp;jarných mesiacoch, keď sa začína roztápať sneh a&nbsp;vodopád oplýva veľkým množstvom vody.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/VodopadBystreLiv.jpg',
            name: 'VodopadBystreLiv',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/IMG_3764.jpg',
            name: 'IMG_3764',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Výstup na Poľanu nám trval približne 3 hodiny. Celou cestou lahodila nášmu oku skutočne krásna a&nbsp;nedotknutá príroda. Trasa je vcelku náročná, lebo sme museli zdolať pomerne veľké prevýšenie s&nbsp;výrazným stúpaním najmä v&nbsp;záverečnej časti. Dkonca sa nám podarilo zablúdiť a&nbsp;chvíľku trvalo, kým sme sa vrátili naspäť na značenú trasu.',
      },
      {
        component: 'p',
        text: 'Vrch Poľany zdobí malá čistinka, kde sme si s&nbsp;radosťou vychutnali zaslúžený obed. Odmena v&nbsp;podobe znamenitého výhľadu sa nachádza o&nbsp;pár metrov ďalej na vyhliadke Katruška, ktorá je vzdialená cca 15 minút chôdze od vrcholu Poľany.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/PolanaUs.jpg',
            name: 'PolanaUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Skalka Via ferrata',
      },
      {
        component: 'p',
        text: 'Ak máš chuť na poriadnu dávku adrenalínu, tak Via ferrata Komín na Skalke je tým správnym miestom pre teba. Novovybudovanú lezeckú časť tvorí šesť trás rôznych obťažností a tie sa postarajú o&nbsp;zážitok, na ktorý tak rýchlo nezabudneš. Na svoje si prídu aj úplní začiatočníci, ale aj skúsení lezci. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/FerrataLiv.jpg',
            name: 'FerrataLiv',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/FerrataView.jpg',
            name: 'FerrataView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'My sme si vyskúšali zdolať 110 m dlhý most upevnený vo výške 20 m nad zemou. Slimačím tempom som prešľapovala z&nbsp;priečky na priečku po rozkývanom moste. Sdce mi búšilo až kdesi v&nbsp;hrdle. Mám panický strach z&nbsp;výšok, preto považujem prekonanie tohto úseku ferratovej trasy za obrovské víťazstvo. Doteraz som na seba patrične hrdá.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/srdcovky/FerrataBridge.jpg',
            name: 'FerrataBridge',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Na vstup na ferratu je potrebný tzv. ferratový set, ktorý si môžeš za relatívne nízku cenu zapožičať v&nbsp;Relax centre na Skalke.',
      },
      {
        component: 'p',
        text: 'Keď sa rozhodneš preskúmať niektorú z&nbsp;našich slovenských srdcoviek, budeme radi, ak nám napíšeš na facebook alebo instagram, ako sa ti tam páčilo, čo ťa zaujalo, aký zážitok si si stade odniesol a&nbsp;čo všetko si popritom objavil. ',
      },
    ],
  },
  {
    _id: '',
    url: 'erasmusvofinsku',
    title:
      'Erasmus vo Fínsku: extrémne výzvy, nezabudnuteľné zážitky a fínsky humor',
    description:
      'Erasmus je továreň na nezabudnuteľné zážitky. Niet pochýb o tom, že Erasmus vo Fínsku bola pre nás neskutočná jazda. Priniesol so sebou množstvo výziev a nových skúseností vďaka ktorým sme získali nový pohľad na svet...',
    date: '20. máj 2020',
    dateCreated: '05. 20. 2020',
    image: '/static/images/photosFull/Erasmus/ErasmusSnowBorder.jpg',
    keywords:
      'erasmus, erazmus, oulu, rady a tipy, cestopisy, cestovateľský blog',
    categories: ['Európa', 'Cestopisy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Erasmus vo Fínsku: extrémne výzvy, nezabudnuteľné zážitky a fínsky humor',
      },
      {
        component: 'p',
        text: 'Erasmus je továreň na nezabudnuteľné zážitky. Niet pochýb o tom, že Erasmus vo Fínsku bola pre nás neskutočná jazda. Priniesol so sebou množstvo výziev a nových skúseností, vďaka ktorým sme získali úplne iný pohľad na svet. Z obrovského kvanta zážitkov sa chceme s tebou podeliť o naše NAJ momenty, ktoré sme zažili za polárnym kruhom.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/ErasmusHeart.jpg',
            name: 'ErasmusHeart',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'NAJmrazivejšie',
      },
      {
        component: 'p',
        text: 'Začiatky boli veľmi náročné. V jednej vete som veľmi slušne a stručne zhodnotila priebeh všetkých zmien, ktorým sme čelili prvé dni nášho pobytu. Chvíľku nám trvalo, kým sme sa ako-tak adaptovali na extrémne podmienky, ktorými nás Fínsko teda vôbec nešetrilo. Najnižšia denná teplota sa pohybovala okolo -45 °C a pocitová teplota dosahovala neuveriteľných -50 °C. V boji proti ukrutnej zime sme využili všetky dostupné prostriedky. Zvolili sme stratégiu á la „cibuľa,“ čo v preklade znamená, nahádž na seba pol šatníka (keby bolo stále málo, tak pridaj) a dúfaj, že nezamrzneš. Vonku sme dokázali vydržať v priemere 27 minút. Po ich uplynutí sa prechádzka zasneženými uličkami premenila na „boj o život.“ V končatinách nám prestávala cirkulovať krv. Vdychovať ten ľadový vzduch bolo ako prehĺtať ihličie. Pichľavá bolesť sa niesla celým dýchacím ústrojenstvom. Dych nám zamŕzal priamo na tvári v podobe ľadových krúpok. Ledva sa nám podarilo rozlepiť mihalnice od seba. Make-up nebol potrebný, pretože tuhý mráz sa sám postaral o typický fínsky winter look.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusFrozenLiv',
            src: '/static/images/photosFull/Erasmus/ErasmusFrozenLiv.jpg',
          },
          {
            name: 'ErasmusFrozenDan',
            src: '/static/images/photosFull/Erasmus/ErasmusFrozenDan.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'NAJnáročnejšie',
      },
      {
        component: 'p',
        text: 'Zvyknúť si na nekonečnú tmu, ktorá nás obklopovala, bola takmer nemožná výzva, s ktorou sme sa museli popasovať. Prvú polovicu Erasmu (január, február) sme zažívali polárne noci, čo znamenalo, že slnko sa pri veľkom šťastí ráčilo ukázať na štyri hodiny denne, aj to len vo vzdialenom horizonte. Prvý mesiac sme slnečné svetlo zahliadli presne 24 hodín. Náš typický deň vyzeral takto: o deviatej ráno sme kráčali do školy za tmy a o druhej poobede sme sa zo školy vracali opäť za tmy. Na našu smolu sme práve v čase slnečných hodín sedeli v škole ako päť peňazí a svetelnými lúčmi nás obdaroval akurát tak projektor nainštalovaný v učebni. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/ErasmusZapadIntrak.jpg',
            name: 'ErasmusZapadIntrak',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'NAJočarujúcejšie',
      },
      {
        component: 'p',
        text: 'Prvotné očakávania boli, že polárnu žiaru budeme vidieť na dennom poriadku. Však sme sa nachádzali pri polárnom kruhu... Na naše sklamanie sa nám ju podarilo zahliadnuť ani nie päťkrát za celý náš pobyt, avšak o to väčšou radosťou sme prekypovali.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/ErasmusArcticCircle.jpg',
            name: 'ErasmusArcticCircle',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Každý erasmák mal posťahovaných milión aplikácii, ktoré „predpovedali“ výskyt polárnej žiary pre danú oblasť. Len čo sa index intenzity dostal do zelených hodnôt, vedelo sa, že v tú noc sa tak skoro spať nepôjde. Všetci sme netrpezlivo čakali s nosom pritlačeným na okne, kedy sa konečne začne to farebné divadlo. Najväčším sklamaním bolo, keď sa tá koťuha ani na tridsiaty deň neráčila ukázať. Od samého zúfalstva sme si ju dokresľovali na obrázky.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusArcticCircle',
            src: '/static/images/photosFull/Erasmus/ErasmusAuroraFake.jpg',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Keď už sme strácali všetku nádej, konečne nastal ten vytúžený okamih a obloha sa roztancovala zeleno-fialovými farbami. Bez rozmyslu sme vybehli von, nech nepremeškáme ani minútu tohto spektakulárneho predstavenia. Niektorí erasmáci boli takí natešení, že sa v tom zhone nestihli prezliecť a vybiehali von len v papučiach a pyžame (podotýkame, že vonku bolo tak -30 °C). Polárna žiara tancovala nad našimi hlavami tak blízko, že sme mali chuť natiahnuť ruku a dotknúť sa jej.  ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusAurora',
            src: '/static/images/photosFull/Erasmus/ErasmusAurora.jpg',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'NAJfínskejšie',
      },
      {
        component: 'p',
        text: 'Prvá vec, ktorá napadne azda každému v spojitosti s Fínskom, je fínska sauna. Nachádzala sa na každom kroku uprostred lesa, v škole, v bare, na strechách firiem, a dokonca aj na pobočke Burger Kingu.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusSaunaSompa',
            src: '/static/images/photosFull/Erasmus/ErasmusSaunaSompa.jpg',
          },
          {
            name: 'ErasmusSauna',
            src: '/static/images/photosFull/Erasmus/ErasmusSauna.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: 'Krédo zimy krédo Fínov sa tiahne v znamení „alkohol, sauna a sex“ (presne v takomto poradí). Hneď sme pochopili, prečo miera pôrodnosti vo Fínsku narastá práve v letných mesiacoch. Fíni sa medzi sebou pretekajú, kto vymyslí v saune väčšiu blbinu, čím premenili oddychové saunové posedenie na nezabudnuteľný zážitok.',
      },
      {
        component: 'p',
        text: 'Prvou netradičnou saunovou seansou, ktorou sme boli počastovaní, bolo poliatie žeravých kameňov pivom. Suchý vzduch okamžite nasiakol pivovou arómou. Po chvíli vdychovania pivných výparov mal človek pocit totálnej opitosti.',
      },
      {
        component: 'p',
        text: 'Druhou nezvyčajnou saunovou aktivitou, ktorej sme sa zúčastnili úplnou náhodou v jednom z barov, bolo tzv. kolo smrti. Ľudia sediaci v saune si kolujú fľašu vodky s jediným pravidlom: „Zo sauny sa nevychádza, dokým fľaša nie je dopitá.“ Piť vodku je hrôza, ale piť vodku v 90 °C je šialenstvo. Ešte teraz nás striasa, keď na to čo i len pomyslíme. Ako sme dopadli v ten večer, si pamätáme len matne, ale nie je ťažké si to domyslieť.',
      },
      {
        component: 'h3',
        text: 'NAJnezrozumiteľnejšie',
      },
      {
        component: 'p',
        text: 'Učiť sa cudzie jazyky nám nikdy nerobilo veľký problém, ale fínčina bola tvrdým orieškom. „Hei, pyydän sinulta yhden oluen,“ takto znie po fínsky veta: „Dobrý deň, prosím si jedno pivo.“ Kým sme sa to naučili, aj nás prešla chuť. Keby Fíni nevedeli tak dobre po anglicky, asi by sme sa k tomu pivu nedostali inak ako posunkovou rečou. ',
      },
      {
        component: 'p',
        text: 'Zapísali sme sa do kurzu fínskeho jazyka, ale vzdali sme to hneď po prvej hodine. Okrem pozdravov, nadávok a počítania do desať sme nič iné z tohto ugrofínskeho jazyka nepochytili. Naše najobľúbenejšie slovo je „vitu“, čo v preklade do angličtiny znamená F*ck a je možné použiť ho v 150 slovných spojeniach.',
      },
      {
        component: 'h3',
        text: 'NAJroztomilejšie',
      },
      {
        component: 'p',
        text: 'Najroztomilejšie stvorenia, s akými sme prišli do kontaktu, boli huňatí sobíci. Pripomínali malé huňaté teľatá s tým rozdielom, že sobom z hlavy trčalo obrovské parožie. Boli to totálni flegmatici, ktorí prevažnú časť dňa strávili prežúvaním sena. Hoci ja som sa nadchýnala nad roztomilosťou týchto stvorení, naša parťáčka Rachel mala na nich trochu iný názor. Hovorievala: „Najlepší sob je tepelne upravený sob.“ Na spresnenie, mala na mysli steak s delikátnou brusnicovou omáčkou a pečenými zemiakmi. ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusReindeerParohy',
            src: '/static/images/photosFull/Erasmus/ErasmusReindeerParohy.jpg',
          },
          {
            name: 'ErasmusReindeerWhite',
            src: '/static/images/photosFull/Erasmus/ErasmusReindeerWhite.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusReindeer',
            src: '/static/images/photosFull/Erasmus/ErasmusReindeer.jpg',
          },
          {
            name: 'ErasmusReindeerLiv',
            src: '/static/images/photosFull/Erasmus/ErasmusReindeerLiv.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'NAJintenzívnejšie',
      },
      {
        component: 'p',
        text: 'Hovorí sa: „Kto bol vo Fínsku a nevyskúšal „ice dipping“, akoby tam ani nebol.“ Preto sme to nemohli vynechať ani my. Pohľad na postaršie panie vchádzajúce do mrazivej vody s blaženým úsmevom na perách nám dodal kúsok odvahy. Bez najmenších problémov plávali z jednej strany na druhú, ako keby sa nachádzali v termálnom kúpalisku a voda mala ideálnu teplotu. Presviedčame sa, že to nemôže byť také strašné, a keď to zvládli ony, zvládneme to aj my. Jediný rozdiel medzi nami a nimi bol v tom, že ony to praktizujú celý život a my sme to išli vyskúšať po prvýkrát v živote.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusIceDipRovaniemi',
            src: '/static/images/photosFull/Erasmus/ErasmusIceDipRovaniemi.jpg',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Bolo to najintenzívnejších 60 sekúnd, ktoré sme vo Fínsku strávili. Vonku bolo -24 °C, keď sme vyšli zo šatne len v plavkách a papučkách. Voda mohla mať „príjemné“ 3 °C. V okamihu, keď sme sa do nej ponorili, vyrazilo nám dych a ostali sme úplne paralyzovaní. Po troch sekundách som stade vybehla ako raketová strela a priamočiaro smerovala do šatne. Mixlujem kľučkou, ale márne. Dvere boli zabuchnuté, rovnako všetko moje teplé oblečenie. Kľúče sme nemali. Bolo ich treba vyzdvihnúť na nejakej vrátnici, ktorá bola na míle vzdialená. Zuby mi drkotali tak silno, že som mala pocit, že sa o seba porozbíjajú. Z intenzívnych 60 sekúnd sa stáva celá večnosť. Našťastie ma v poslednej chvíli zachránila vysmiata babička, ktorá na mňa hľadela ako na najväčšiu cintľavku, ktorá nevie vydržať pár stupňov pod nulou.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusIceDipLiv',
            src: '/static/images/photosFull/Erasmus/ErasmusIceDipLiv.jpg',
          },
          {
            name: 'ErasmusIceDipDan',
            src: '/static/images/photosFull/Erasmus/ErasmusIceDipDan.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'NAJprekvapujúcejšie',
      },
      {
        component: 'p',
        text: 'Chytanie rýb neznie ako veľmi zábavná činnosť (teda pre väčšinu z nás). Ice fishing náš však veľmi rýchlo vyviedlo z omylu. Proces prípravy je ešte zábavnejší ako samotné chytanie rýb. Pomocou veľkých vrtákov sme hĺbili malé diery (v priemere 10 cm) do hrubej ľadovej vrstvy. Udice boli miniatúrne, pripomínali detské hračky. Miestami to vyzeralo, že ideme chytať planktón, a nie poriadne fínske pstruhy. ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'ErasmusIceFishingDan',
            src: '/static/images/photosFull/Erasmus/ErasmusIceFishingDan.jpg',
          },
          {
            name: 'ErasmusIceFishCatch',
            src: '/static/images/photosFull/Erasmus/ErasmusIceFishCatch.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: 'Prvým krokom bolo napichnutie hnusnej hemžiacej sa larvy na malý háčik. Vyprskávali ako paradajky a ich mazľavé vnútro sa nám lepilo po prstoch. Postupne sme spúšťali háčiky s návnadou do vody a netrpezlivo čakali na prvé úlovky. Rada by som napísala, že sa nám podarilo nachytať plné vedrá rýb. Bolo ich len zopár a ešte k tomu boli drobunké, nie väčšie ako dlaň, takže sme ich aj tak museli vrátiť naspäť do vody. Aj napriek tomu, že sme si žiadnu večeru neulovili, o zábavu sme mali postarané. ',
      },
    ],
  },
  {
    _id: '',
    url: 'roadtrip-usa-1',
    title: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
    date: '1. apríl 2020',
    dateCreated: '04. 01. 2020',
    description:
      'Prvá časť roadtripu o tom, ako sme 18 dní žili v aute a cestovali po západnom pobreží Ameriky. Zo San Francisca do Monument Valley, kde sa snažíme pochodiť čo najviac národných parkov Ameriky a zaujímavých miest.',
    image: '/static/images/photosFull/SFGoldenGateArticle.jpg',
    keywords:
      'cestovateľský blog, roadtrip, usa, národné parky, san francisco, yosemite, sequoje, death valley, údolie smrti, las vegas, valey of fire, zion, angels landing, bryce canyon, monument valley',
    categories: ['Cestopisy', 'Hiking', 'Amerika'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
      },
      {
        component: 'p',
        text: 'Po pracovnom lete v Colorade, sme sa nevedeli dočkať zahájenia tej zábavnejšej, cestovateľskej časti programu Work&Travel. Posledné dni sme už o ničom inom nehovorili. Nič sme nenechali na náhodu a detailne sme si naplánovali pomerne dlhý a časovo náročný roadtrip po západe USA, veď ako sa hovorí, dobrý plán je polovica úspechu. Samozrejme už v druhý deň sme od neho upustili a takmer všetko plánovali za jazdy, veď spontánne nápady sú tie najlepšie, či?',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MtPrincetonView.jpg',
            name: 'MtPrincetonView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Pre lepšiu predstavivosť opíšeme náš výlet v číslach. Na ceste sme strávili 17 dní, v aute sme spali 8 nocí, najazdili sme autom 5 100 km, nachodili sme 160 km, navštívili sme 4 štáty (Kalifornia, Utah, Nevada, Arizona), zastavili sa v 8 národných parkoch, dohromady sme vypili 16 litrov kávy, teplotné výkyvy sa pohybovali od -1°C do +45°C, zažili sme 8 dychvyrážajúcich východov slnka a získali sme nekonečne veľa krásnych zážitkov.',
      },
      {
        component: 'p',
        text: 'Čísla neklamú, veru bolo to poriadne dobrodružstvo!',
      },
      {
        component: 'h3',
        text: 'Deň 1',
      },
      {
        component: 'p',
        text: 'Ráno, v nekresťansky skorú hodinu, sme skupinovo vyrážali na denverské letisko z rezortu, v ktorom sme cez leto pracovali. Pod oknom na nás čakalo auto, ktoré nám miesto príjemnej jazdy, zabezpečilo trojhodinové bubnovanie v ušiach. Zadné okno sa totižto nedalo zavrieť. Provizórne sme ho zakamuflovali posteľnou plachtou, ktorá pod náporom vetru ustavične plieskala. Na diaľnici sme vyzerali ako praví piráti. Do toho na nás fúkala pokazená klíma s príjemnými 37°C, prelínajúc sa s marihuanovou arómou. O prvý zážitok z výletu sme mali postarané a to sme ešte ani roadtrip nezahájili.',
      },
      {
        component: 'p',
        text: 'Oficiálnu časť výletu sme odštartovali v San José. Požičali sme si auto a cez Sillicon Valley sa presunuli do <b>San Francisca</b>. Privítalo nás typické sanfranciscské počasie. Počas jazdy jasná slnečná obloha a v okamihu po príjazde do centra hustá hmla zahalila všetko navôkol. Bolo vidno ledva na pár metrov. Ani výrazná červená farba dominantného <b>Golden Gate</b>u cez ňu neprenikla. Na záver dňa sme sa zastavili pri mozaikovitých schodoch <b>Tiled Steps</b>, na ktorých bol z malých úlomkov vyobrazený mesačný svit.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/TiledSteps.jpg',
            name: 'TiledSteps',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFNoBridgeView.jpg',
            name: 'SFNoBridgeView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFHeart.jpg',
            name: 'SFHeart',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 2',
      },
      {
        component: 'p',
        text: 'Na druhý deň sme už mali väčšie šťastie. V San Francicsu je priemerne 70 slnečných dní ročne a toto bol jeden z nich. Kúpili sme si raňajkové muffiny a vychutnali si ich na pláži <b>Baker Beach</b>. Vlastne sme si ich ani nevychutnali, skôr by sa dalo povedať, že sme ich rýchlo zhltli, pretože sa nad nami začali združovať nenažrané čajky, čakajúce na vhodnú príležitosť zaútočiť a získať svoju korisť.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFBakerBeach.jpg',
            name: 'SFBakerBeach',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFGoldenGateArticle.jpg',
            name: 'SFGoldenGateArticle',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFBernalHeights.jpg',
            name: 'SFBernalHeights',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Ďalšou zastávkou bola kľukatá strmá ulička <b>Lombardi Street</b>, ktorá potrápi nejedného skúseného vodiča. Sanfranciscské ulice sú veľmi strmé a dlhé, pre väčšinu dopravných prostriedkov takmer nezdolateľné. To však neplatí pre električku <b>Cable Car</b>, ktorej pravidlá počas jazdy dovoľujú cestujúcim vytŕčať svoje ruky, nohy ba aj hlavy. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFLombardiStreetBus.jpg',
            name: 'SFLombardiStreetBus',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFLombardiStreet.jpg',
            name: 'SFLombardiStreet',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFCableCar.jpg',
            name: 'SFCableCar',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Záver dňa sme strávili v prístave <b>Pier 39</b>. Nachádzali sa tu kolotoče, prímorské reštaurácie, kaviarničky a zaujímavé obchodíky plné suvenírov. Zovšadiaľ hrala živá hudba, ktorú prehlušovalo jedine mľaskanie ľudí pochutnávajúcich si na daroch mora. Najnezvyčajnejšou atrakciou boli leňošiace tulene. Vyhrievali sa na slnku, vydávali pračudesné zvuky a mali všetkých totálne na háku.  To je život! ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFPier39Liv.jpg',
            name: 'SFPier39Liv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFPier39Lunch.jpg',
            name: 'SFPier39Lunch',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SFPier39Seals.jpg',
            name: 'SFPier39Seals',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 3 ',
      },
      {
        component: 'p',
        text: 'Z veľkomesta sme sa presunuli do <b>Národného parku Yosemite</b>. Vybrali sme si trasu na vyhliadku <b>Glacier Point</b>. Na samý vrchol sa dá pohodlne vyviezť autom, ale my sme si povedali, že nebudeme „bábovky“ a pekne si to odmakáme. Výstup nám trval 2,5 hodiny, bol dosť náročný ale ten famózny výhľad bol dostatočnou odmenou.',
      },
      {
        component: 'p',
        text: 'Keď už sme schádzali naspäť k autu, znenazdajky počujeme strašné kriky. Vŕtalo nám hlavou, odkiaľ sa asi tak berú. O pár metrov ďalej zbadáme útleho chlapíka. Rozhadzoval rukami a kráčal hore-dolu akoby sa nevedel rozhodnúť, ktorým smerom sa má vydať. Zrazu namieste zmeravel, zahľadel sa do kríkov a my sme jeho pohľad nasledovali. Hneď sme pochopili, čo je vo veci. Medveď! Obrovitánsky, čierny, huňatý medveď. Všetci sme ostali stáť a v napätí čakali čo sa bude diať. Prvý zareagoval štvornohý „kamoš“, ktorý nám na naše počudovanie bez váhania nastrčil svoju zadnicu a zmizol kdesi v lese. Doposiaľ nevieme, kto mal z koho väčší strach. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/YosemiteHalfDome.jpg',
            name: 'YosemiteHalfDome',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/YGlacierPointTrail3.jpg',
            name: 'YGlacierPointTrail3',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            name: 'YGlacierPoint',
            src: '/static/images/photosFull/YGlacierPoint.jpg',
          },
          {
            name: 'YGlacierPointTrail2',
            src: '/static/images/photosFull/YGlacierPointTrail2.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'Deň 4 ',
      },
      {
        component: 'p',
        text: 'Začínali sme prechádzkou v <b>Sequoiskom národnom parku</b>. Nie nadarmo dostávajú sekvoje prívlastky ako obrovitánske či gigantické. Podobali sa na mamutie nohy, nie len veľkosťou ale aj chlpatosťou. Pokúšali sme sa objať kmeň najväčšieho stromu, ktorý mal priemer 10m, no chýbalo nám tak 20 párov ďalších rúk.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'SeqMamut',
            src: '/static/images/photosFull/SeqMamut.jpg',
          },
          {
            name: 'SeqHug',
            src: '/static/images/photosFull/SeqHug.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SeqHeart.jpg',
            name: 'SeqHeart',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Nasledoval dlhý presun do Death Valley. Únava stúpala a s ňou sa astronomicky zvyšovali aj litre vypitej kávy. Bola veľká objemom a nie pôžitkom, no na to aby sme dokázali udržať oči otvorené, poslúžila vynikajúco. ',
      },
      {
        component: 'p',
        text: '<b>Death Valley</b> je známe ako jedno z najteplejších miest v severnej Amerike, široko ďaleko samá púšť a step. V celom národnom parku sa nachádzal len hotelík s maličkým obchodíkom (vlastne ešte jeden obrovský rezort pripomínajúci oázu, ale to je nepodstatné). Izbu v hoteli sme si rezervovať nestihli, čo nám zabezpečilo unikátny zážitok. Spali sme v aute, na mieste, kde ručička teplomeru o jedenástej v noci ukazovala 40°C. Išli sme sa rozpustiť ako také čokoládové figúrky. Nebyť žiarivej hviezdnej oblohy, dalo by sa povedať, že to bolo dosť naprd. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVZabrisky.jpg',
            name: 'DVZabrisky',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVSunsetRoad.jpg',
            name: 'DVSunsetRoad',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVPlain.jpg',
            name: 'DVPlain',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Podarilo sa nám zhotoviť pár záberov nádhernej nočnej oblohy. Keď hovoríme pár, myslíme presne štyri. Liv mala totiž strašnú paranoju z kojotov a iných nočných živočíchov, ktorí nám (našťastie) nevenovali žiadnu pozornosť.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVNightSkyBad.jpg',
            name: 'DVNightSkyBad',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVSunrise.jpg',
            name: 'DVSunrise',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 5 ',
      },
      {
        component: 'p',
        text: 'Zavčasu ráno sme sa vydali hlbšie do údolia. Naplánované body sme chceli stihnúť obzrieť skôr než udrie poludnie, kedy už teplota dosahovala „príjemných“ 45°C. Spotení sme boli, len čo sme vystúpili z auta. Vznášajúci sa sivastý opar na teplote len pridával. ',
      },
      {
        component: 'p',
        text: 'Učarovalo nám <b>Badwater Basin</b> nachádzajúce sa 85m pod morskou hladinou. Ide o obrovské vysušené jazero, po ktorom ostali rozsiahle soľné ostrovčeky. Vydali sme sa do jeho stredu, vzdialeného zhruba 1km od parkoviska. Trvalo nám to večnosť, slimačím tempom sme prešľapovali z nohy na nohu. Ozývalo sa len praskanie drobných soľných kryštálikov. V ústach sme mali úplne vysušené, aj slinné žľazy pozastavili svoju produkciu. Sily nám rapídne ubúdali.',
      },
      {
        component: 'p',
        text: 'Keď sme konečne dorazili do stredu vysušeného jazera, nevedno odkiaľ sa v nás vzalo toľko energie, že sme začali vymýšľať všelijaké fotokreácie. Vyskakovali sme a tancovali. Bola to však len krátkodobá ilúzia. Po 3 minútach nám energia klesla tak rýchlo ako výdrž baterky na iPhone a vzájomnou pomocou sme sa ledva doplazili naspäť do auta, kde sme hltavo vypili všetky zásoby vody.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVBadWater.jpg',
            name: 'DVBadWater',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVScvrkol.jpg',
            name: 'DVScvrkol',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/DVjump.jpg',
            name: 'DVjump',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 6 ',
      },
      {
        component: 'p',
        text: 'Kontrast medzi <b>Las Vegas</b> a širokým okolím nám bil do očí. Vysvietené preplnené hlučné mesto vybudované uprostred púšte. Vzduchom sa niesla trpká vôňa hazardu a kubánskych cigár. Ľudia skúšali svoje šťastie a peniaze sa len točili a točili ako koliesko na rulete. Pristavili sme sa pri jednom pokrovom stole. Chlapík vedľa nás vyťahoval z vrecka tučnú rolku bankoviek, blafoval až do samého konca, nedal na sebe nič poznať. Šťastena mu opäť nepriala a peniaze boli v okamihu nenávratne preč. Ticho sme zastonali, pri pomyslení na všetky tie letenky, ktoré by sme si za tú sumu mohli kúpiť...',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVNY.jpg',
            name: 'LVNY',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVCasinoLiv.jpg',
            name: 'LVCasinoLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Prechádzka po najznámejšej ulici <b>Las Vegas Strip</b> pripomínala menšiu cestu okolo sveta. Nadštandardné hotely boli ladené do rôznych tematík, z jedného sa na nás usmievala socha Slobody, z iného už z diaľky mával gondolier z benátskeho kanálu. Nás najviac zaujal hotel <b>Bellagio</b>, ktorý sa pýši fontánovou show v sprievode hudby. Každú hodinu sa tu priženú húfy turistov a s nadšením tlieskajú a výskajú. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVCircus.jpg',
            name: 'LVCircus',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVLivNight.jpg',
            name: 'LVLivNight',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVBellagio.jpg',
            name: 'LVBellagio',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Vychýrená uvítacia tabuľa „<b>Welcome to Las Vegas</b>“ nás nemilo prekvapila nekonečným radom čakateľov na vytúžený záber. Kvôli neznesiteľnému teplu sa nám tam trčať nechcelo a tak sme sa cvakli iba z ľavej strany a fičali sme na veľkú porciu zmrzliny.',
      },
      {
        component: 'p',
        text: 'Naša fotka spred kaplnky s vyrobeným prsteňom vyvolala (najmä doma) nejednu prekvapenú reakciu. Svadba sa však nekonala, naše ÁNO by sme si predsa nepovedali pred nagélovaným Elvisom Presleym.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'LVSignQueue',
            src: '/static/images/photosFull/LVSignQueue.jpg',
          },
          {
            name: 'LVChapelRing',
            src: '/static/images/photosFull/LVChapelRing.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LVChapel.jpg',
            name: 'LVChapel',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 7 ',
      },
      {
        component: 'p',
        text: 'Nasledujúce ráno sme sa prebúdzali vo <b>Valley of Fire</b> – Ohnivom údolí. Pri rannom slnku sa celé údolie premenilo na ohnivú krásu, z ktorej sme onemeli od úžasu. Až do tohto momentu sme ani len netušili, koľko odtieňov červenej v prírode existuje.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VoFRoad.jpg',
            name: 'VoFRoad',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VoFView.jpg',
            name: 'VoFView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VoFRoadView.jpg',
            name: 'VoFRoadView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Ďalšou zastávkou bol <b>Národný park Zion</b>, z ktorého máme tie najkrajšie spomienky. Zvolili sme si výstup na <b>Angles Landing</b>. V druhej polovici trasy nám adrenalín v žilách poriadne stúpol. Chodník sa zúžil natoľko, že ak sme sa chceli vyhnúť oproti idúcim turistom, jednou nohou sme viseli zo strmého 130m vysokého zrázu. Jedinou oporou nám bola vykývaná reťaz a pevná vôľa. Na vrchole sa nám naskytol pohľad na celé údolie, osvietené poslednými slnečnými lúčmi. Razom sme zabudli na strach z výšky a začali si vychutnávať pohľad na nádhernú krajinu, akoby nemal nikdy skončiť. Spoločnosť nám robili neustále hladní čipmankovia a partička skvelých Slovákov. Paradoxne,  sme ich tu stretli viac ako v slovenských Tatrách. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/ZionAngelsLanding.jpg',
            name: 'ZionAngelsLanding',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/ZionClimb.jpg',
            name: 'ZionClimb',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/ZionChipmunk.jpg',
            name: 'ZionChipmunk',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 8 ',
      },
      {
        component: 'p',
        text: 'V Zione sa nám páčilo tak veľmi, že sme sa tam rozhodli ostať ešte jeden deň navyše. Zvolili sme menej náročnú túru <b>Watchman Trail</b> a dali si obed na málo frekventovanej turistickej vyhliadke.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/ZionWatchman.jpg',
            name: 'ZionWatchman',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/ZionCanyonLow.jpg',
            name: 'ZionCanyonLow',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Plán cesty bol nabitý a kvôli vykonaným zmenám sme sa ocitli v menšej časovej tiesni. Aby sme stihli všetky zvyšné naplánované body, museli sme sa rýchlo presunúť do <b>Bryce Canyonu</b>. ',
      },
      {
        component: 'p',
        text: 'Našli sme tiché miesto na kempovanie a vďaka nízkemu svetelnému smogu nám noc ponúkla nádherné pohľady na našu galaxiu – Mliečnu dráhu. V noci teplota klesla na -1°C, nepríjemná zima zachádzala hlboko pod kožu. Útočisko sme našli v spacákoch, z ktorých nám ostali trčať iba nosy.',
      },
      {
        component: 'p',
        text: 'Prvé slnečné lúče, dopadajúce na tzv. <b>Hoodoos</b> (nepravidelné kamenné stĺpy), vdýchli celému kaňonu život. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BryceSunrise.jpg',
            name: 'BryceSunrise',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/BryceSunrise2.jpg',
            name: 'BryceSunrise2',
          },
        ],
        class: 'articlePictureLandscpe',
      },
      {
        component: 'h3',
        text: 'Deň 9 ',
      },
      {
        component: 'p',
        text: 'Neodmysliteľnou zastávkou na našej ceste bol meander rieky Colorado, pripomínajúci podkovu – <b>Horseshoe Bend</b>. Žasli sme nad širokou škálou farieb, ktorými oplýval. Prelínanie odtieňov modrej, zelenej, žltej, zvýrazňovala tmavo oranžová kulisa mohutných skál. Bol to veľkolepý obraz, jediný svojho druhu a my sme razom pochopili, prečo je tu také množstvo turistov ako v zaplnených uliciach Manhattenu.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/HorseShoeUs.jpg',
            name: 'HorseShoeUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/HorseShoePeople.jpg',
            name: 'HorseShoePeople',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Zavŕšenie dňa nám ponúklo ďalší jedinečný zážitok v krajine Indiánov – <b>Mounument Valley</b>, známej aj z filmu Forest Gump. Z každej strany nás v diaľke obklopovali mohutné červené skalné útvary, ktoré svojím tvarom výrazne vytŕčali z krajinného rázu, akoby sem ani nepatrili. Sedeli sme uprostred cesty, smiali sa, užívali si scenériu  a občas sa uhýbali oproti idúcemu autu. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MVRoad.jpg',
            name: 'MVRoad',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MVRoadJump.jpg',
            name: 'MVRoadJump',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MVSunrise.jpg',
            name: 'MVSunrise',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Taaak a sme v polovici nášho roadtripu, pokračovanie nájdeš v článku&nbsp;<a href="/blog/roadtrip-usa-2">Roadtrip USA: z Monument Valley do San Diega - 2. časť </a>',
      },
    ],
  },
  {
    _id: '',
    url: 'roadtrip-usa-2',
    title: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
    date: '4. apríl 2020',
    dateCreated: '04. 04. 2020',
    description:
      'Pokračovanie roadtripu z Monument Valley až do San Diega. Cestovateľský sen sa stal skutočnosťou a mohli sme si odfajknúť vytúženú vec z nášho bucketlistu –  Grand Canyon.',
    image: '/static/images/photosFull/GCLivPano.jpg',
    keywords:
      'cestovateľský blog, monument valley, grand canyon, grand kanon, route 66, púšť mojave, mojave desert, universal studios, holywood sign,  los angeles, san diego',
    categories: ['Amerika', 'Cestopisy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
      },
      {
        component: 'p',
        text: '<a href="/blog/roadtrip-usa-1">Roadtrip USA: zo San Francisca do Monument Valley - 1. časť</a>',
      },
      {
        component: 'h3',
        text: 'Deň 9 ',
      },
      {
        component: 'p',
        text: 'Cestovateľský sen sa stal skutočnosťou a&nbsp;my sme si&nbsp;mohli odfajknúť dlho vytúženú vec na našom bucketliste – <b>Grand Canyon</b>. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCLivPano.jpg',
            name: 'GCLivPano',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Z&nbsp;internetu sme mali napozeraných veľa fotiek a&nbsp;videí tohto miesta, ale ani zďaleka nezobrazovali tú mohutnosť a nádheru, ktorými v&nbsp;skutočnosti oplývalo. Kaskádovitá priepasť rozprestierajúca sa všade, kam len oko dovidelo. Zemité farby medzi sebou ladili tón v&nbsp;tóne, akoby ich kombinoval samotný Leonardo da Vinci, každý pohľad bol pastvou pre oči.',
      },
      {
        component: 'p',
        text: 'Stáli sme na vrchu kaňonu, márne dúfajúc, že&nbsp;ten veľkolepý výhľad budeme v&nbsp;tichosti zdieľať len s&nbsp;pár ďalšími jedincami. Hemžilo sa to turistami ako v&nbsp;marakéšskych uličkách počas sezónneho výpredaja a bol to neskutočný boj dostať sa z&nbsp;jedného miesta na druhé. Na žiadané vyhliadky sa tvorili 20-minútové rady. Každý nervózne prešľapoval a&nbsp;hundral, keď ste si dovolili spraviť o&nbsp;jednu fotku viac, ako bolo povolené. ',
      },
      {
        component: 'p',
        text: 'Keď sa už zdalo, že&nbsp;sme našli náš secret spot, do piatich minút tam bola nasáčkovaná skupina Číňančekov a&nbsp;jasne nám dávali najavo, že&nbsp;sú v&nbsp;značnej prevahe a&nbsp;nemienia sa z&nbsp;tadeto pohnúť skôr, pokým nebudú mať spravených aspoň tisíc selfíčok.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCLivAlone.jpg',
            name: 'GCLivAlone',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCWaitingSpot.jpg',
            name: 'GCWaitingSpot',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCNightSky.jpg',
            name: 'GCNightSky',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 10',
      },
      {
        component: 'p',
        text: 'Nechceli sme byť len mainstreamoví turisti, a&nbsp;tak sme sa zavčasu ráno vydali okúsiť pravú tvár tohto Velikána. Vybrali sme si menší trek „<b>South Kaibab Trail</b>“ a&nbsp;vydali sa objavovať zákutia kaňonu. Nazvali sme to inverznou turistikou, keďže sme na začiatku zostupovali smerom nadol, čo išlo celkom rýchlo a&nbsp;ľahko. Tá náročnejšia časť nastala potom, keď sme sa otočili a&nbsp;celý úsek sme museli krvopotne vystúpať naspäť.',
      },
      {
        component: 'p',
        text: 'Prvým míľnikom bol „<b>Ooh Aah Point</b>“ (treba to vysloviť veľmi pomaly a&nbsp;precítene). Ako názov naznačuje, toto sú citoslovcia, ktoré človek neustále vydával pri pohľade na toľkú nádheru.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCSunrise.jpg',
            name: 'GCSunrise',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCOohAah.jpg',
            name: 'GCOohAah',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCInverseTrek.jpg',
            name: 'GCInverseTrek',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Boli sme hrdinovia, veselo sme si vykračovali, však už sme nejaké tie kopce zdolali. Naše hrdinstvo skončilo v&nbsp;polovici plánovanej cesty pri stretnutí s&nbsp;miestnym rangerom, ktorý nás vysmial na plnej čiare. Hovoril: „Vy nie ste odtiaľto, však? Tie 3 litre vody, čo máte v&nbsp;batohu (v&nbsp;skutočnosti sme mali iba dva) vám vydržia tak na pol míle, o chvíľu udrie poludnie a&nbsp;kaňon sa premení na horúce peklo. Dobre vám radím, rozmyslite si to.“ Rozmysleli sme si to. Napriek tomu, že&nbsp;sa nám nepodarilo zliezť až ku rieke Colorado, odchádzali sme spokojní, pretože sme si našli miesto, kde kaňon patril iba nám a&nbsp;patrične sme si ho užili. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCContrastView.jpg',
            name: 'GCContrastView',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCViewUs.jpg',
            name: 'GCViewUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/GCViewDown.jpg',
            name: 'GCViewDown',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 11',
      },
      {
        component: 'p',
        text: 'Hodný úsek našej cesty sme brázdili po legendárnej <b>CustomPage 66</b>. Začali sme v mestečku Williams kúsok od Grand Canyonu a prešli až na samý koniec v <b>Santa Monice</b>. Miestami sme si pripadali ako vo westernovke, rovná cesta a&nbsp;široko ďaleko len chumáče vysušenej trávy. Ale nie, až také vyprahnuté to nebolo, možno len máme napozeraných príliš veľa amerických filmov. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RD66Road.jpg',
            name: 'RD66Road',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RD66MuseumBus.jpg',
            name: 'RD66MuseumBus',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RD66MuseumWall.jpg',
            name: 'RD66MuseumWall',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Pravidelne sme nachádzali reštaurácie v tradičnom americkom štýle. Bielo-čierne kachličkové podlahy, nepohodlné stoličky a dlhý bar, pri ktorom vždy sedel chlapík s&nbsp;pivom v ruke. Hudba zo 70. rokov bola neodmysliteľnou súčasťou. Čašníčky, s&nbsp;úsmevom vhodným do reklamy na Collgate pastu, neúnavne pobehovali a&nbsp;dolievali zákazníkom prepraženú kávu. Menu ponúkalo tie najchutnejšie americké delikatesy, ako sú hranolčeky, hot-dogy, hamburgery a pollitrové milkshakey s&nbsp;dvojitou porciou šľahačky. To, že&nbsp;na konci cesty vyzeráte ako michelinský panáčik, je druhá vec. Adios bikini!',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RD66Bar.jpg',
            name: 'RD66Bar',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            name: 'RD66Selfie',
            src: '/static/images/photosFull/RD66Selfie.jpg',
          },
          {
            name: 'RD66Bar2',
            src: '/static/images/photosFull/RD66Bar2.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: ' Rýchlu zastávku sme spravili aj v&nbsp;<b>Národnej rezervácii Mojave</b>, ktorá je známa predovšetkým poľami s&nbsp;nezvyčajnými kaktusmi – <b>Joshua Trees</b>. Bola to akási zmiešanina stromu a&nbsp;ostnatej palmy rôznej veľkosti a&nbsp;výšky. V&nbsp;celom parku sme boli iba my a&nbsp;jeden motorkár, ktorý vyzeral ako po dobrej opici, a&nbsp;tiež bol prekvapený,že&nbsp;sme svedkami jeho trápenia.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MojaveTreesDetail.jpg',
            name: 'MojaveTreesDetail',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MojaveWalk.jpg',
            name: 'MojaveWalk',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/MojaveJoshuaTreeDetail.jpg',
            name: 'MojaveJoshuaTreeDetail',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 12',
      },
      {
        component: 'p',
        text: 'Po dlhšej odmlke sa dostávame naspäť do „civilizácie“. Predposlednou časťou nášho roadtripu je mesto anjelov – <b>Los Angeles</b>. ',
      },
      {
        component: 'p',
        text: 'Nebude žiadnym prekvapením, že&nbsp;prvou zastávkou, kam sme si to namierili, bol <b>Hollywood Sign</b>. To by sme neboli my, keby sme si nevybrali tú najzložitejšiu, najdlhšiu a najneupravenejšiu cestu, aká sa len dala. S naším „šťastím“ sme vygooglili, že&nbsp;najvhodnejšie miesto, kde môžeme zaparkovať auto, je vzdialené 5 km od nápisu. Pomysleli sme si: „Najskôr práca, potom odmena v podobe znamenitého výhľadu. Nemáme na výber, musíme si to poctivo odmakať.“ Joj, keby sme len tušili, ako veľmi sme sa mýlili. ',
      },
      {
        component: 'p',
        text: 'Kráčali sme po prašnej a strmej ceste na vrchol kopca. Doposiaľ nám je záhadou, čo viedlo Liv obuť si najnovšie bielučičké tenisky Converse, ale v polovici cesty svoje rozhodnutie trpko oľutovala, biele tenisky už nikdy neboli bielymi. ',
      },
      {
        component: 'p',
        text: 'Vonku bolo nepríjemne dusno a navôkol nebolo jediného stromu, ktorý by nám poskytol ochranu pred pálivým slnkom. Po takmer dvoch hodinách sme sa konečne dotrepali na vrchol kopca nad Hollywood sign. Spokojní sme sa kochali výhľadom na celé mesto, bol naozaj zaslúžený. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LASign.jpg',
            name: 'LASign',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAHollywoodSignUs.jpg',
            name: 'LAHollywoodSignUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAToweWings.jpg',
            name: 'LAToweWings',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Zrazu sa nám pohľad zabodol na parkovisko nachádzajúce sa priamo pod nami. Autá celkom frekventovane prichádzali a odchádzali a vyfintení ľudia z nich vyskakovali a fotili sa s nápisom bez vynaloženia jediného úsilia. Úsmev nám zmeravel v trpkom úškľabku, neverili sme vlastným očiam. Ako sa sem mohli dokelu dostať, keď spoľahlivý Google nám radil ten zapadákov? O malú chvíľu schádzame k tej skupine ľudí oplývajúcej sviežim výzorom. My dopotení, unavení, vediac, že&nbsp;nás čaká ďalších 5 km naspäť k autu, sme najskôr nevedeli, či sa máme smiať alebo plakať nad touto absurdnou situáciou. Zvolili sme smiech, však takúto túričk k Hollywood sign nezažije len tak hocikto. ',
      },
      {
        component: 'h3',
        text: 'Deň 13',
      },
      {
        component: 'p',
        text: 'Napriek tomu, že&nbsp;sme sa osobne so žiadnu hollywoodskou hviezdou nestretli, na <b>Walk of Fame</b> sme ich vyobzerali takmer všetky. Všetci turisti vrátane nás poctivo hladkali každý kúsok chodníku a zhotovovali pamätné fotky s hviezdami našich filmových/speváckych idolov. ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'LAWalkFameDan',
            src: '/static/images/photosFull/LAWalkFameDan.jpg',
          },
          {
            name: 'LAWalkFameLiv',
            src: '/static/images/photosFull/LAWalkFameLiv.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: 'Na ulici panoval ruch. Každý sa snažil presadiť svoj talent najlepšie, ako vedel. Pouliční maliari, taneční, speváci aj predajcovia, každý sa venoval svojmu biznisu. ',
      },
      {
        component: 'p',
        text: 'Zaujala nás skupinka umelcov veľmi podobná tej na Karlovom moste, kde maľujú portréty alebo karikatúry. Títo však zvečňovali tváre ľudí modelovaním z hliny. ',
      },
      {
        component: 'p',
        text: 'Nápad netradičného darčeka sa veľmi zapáčil Liv, tak sa rozhodla jeden si zadovážiť. Napriek všetkej snahe pána umelca, k podobnosti medzi výtvorom a Liv nedošlo. Črty tváre, nos aj oči boli na míle vzdialené od reality (pozri foto). Možno to bol pokus o karikatúru, ktovie?',
      },
      {
        component: 'p',
        text: 'Liv bola spočiatku nadšená svojím originálom. Celej rodine poposielala fotky svojej vymodelovanej hlavy uloženej v krabici na zadnom sedadle auta. Reakcie nenechali na seba dlho čakať. „To čo ste našli za hlavu?“ reagovala mama. „Dúfam, že&nbsp;to nie je darček pre mňa, veď sa budem báť,“ bola reakcia ocina. Táto umelecká tvorba sa s pochopením a pozitívnou odozvou nestretla. ',
      },
      {
        component: 'img',
        src: [
          {
            name: 'LAHeadLiv',
            src: '/static/images/photosFull/LAHeadLiv.jpg',
          },
          {
            name: 'LAHeadLiv',
            src: 'static/image/photosFull/LAHeadLiv.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'Deň 14',
      },
      {
        component: 'p',
        text: 'Na chvíľu sme sa vrátili do detských čias v <b>Universal Studios</b>. Štúdiá ponúkali neskutočný zážitok v podobe 5D kín, animácií, atrakcií, pozoruhodne detailných rekvizít, ktoré návštevníkov vtiahnu do deja obľúbených filmov a rozprávok.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAUniversal.jpg',
            name: 'LAUniversal',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Naháňali nás dinosaury z Jurského parku, bojovali sme s Transformermi, Harry Potter nás previedol celým Rokfortom, triediaci klobúk nám priradil fakultu (samozrejme Chrabromil), lietali sme na metle aj na hipogryfovi. Ochutnali sme ďatelinové pivo v Rockville, nastúpili na rokfortský expres. So Simpsonovcami sme ochutnali povestné ružové donuty a zabávali sa na show Itchyho & Scratchyho. Blúdili sme po Imhotepovej hrobke (Múmia 2), obklopení stovkami mäožravých skarabeov. ',
      },
      {
        component: 'p',
        text: 'Tento deň sme si ohromne užili a zabávali sa.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAUniversalDonkey.jpg',
            name: 'LAUniversalDonkey',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            name: 'LAUniversalAle',
            src: '/static/images/photosFull/LAUniversalAle.jpg',
          },
          {
            name: 'LAUniversalKrusty',
            src: '..images/photosFull/LAUniversalKrusty.jpg',
          },
        ],
      },
      {
        component: 'h3',
        text: 'Deň 15',
      },
      {
        component: 'p',
        text: 'Výrazných kontrastov sme našli v LA neúrekom. Napríklad, prepychová luxusná štvrť <b>Beverly Hills</b> prekypovala pozoruhodnými vilami. To, že&nbsp;ich hodnota sa pohybuje v miliónoch dolárov, nemusíme ani zdôrazňovať. Pred každou stáli zo dve luxusné autíčka a ani si nechceme predstaviť, čo bolo ukryté zraku verejnosti v garážach. Tráva bola zarovnaná s milimetrovou presnosťou a zavlažovacie systémy v pravidelných cykloch jemne rozprskávali vodu aj na palmy. ',
      },
      {
        component: 'p',
        text: 'Hneď vedľa sa nachádzala nákupná ulička <b>Rodeo Drive</b> so svetoznámymi módnymi značkami. Na jednu kabelku od Louisa Vuittona by sme nemali, ani keby sme obaja predali po jednej obličke.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'LABeverlyHillsUs',
            src: '/static/images/photosFull/LABeverlyHillsUs.jpg',
          },
          {
            name: 'LARodeoDriveLiv',
            src: '/static/images/photosFull/LARodeoDriveLiv.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LARodeoDrive.jpg',
            name: 'LARodeoDrive',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAGriffith.jpg',
            name: 'LAGriffith',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Na druhej strane v silnom kontraste stojí celý <b>LA Downton</b>. Bordel, špina, smrad. Porozhadzované smeti, porozbíjané fľaše, bezdomovci okupujúci lavičky, stany rozložené uprostred ulice a zo všadiaľ sa na nás valil gandžový smrad. ',
      },
      {
        component: 'p',
        text: 'Človek by ani neveril, že&nbsp;tieto dve miesta môžu byť súčasťou jedného mesta.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LAPalms.jpg',
            name: 'LAPalms',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LATent.jpg',
            name: 'LATent',
          },
        ],
        class: 'articlPictureLandscape',
      },
      {
        component: 'h3',
        text: 'Deň 16',
      },
      {
        component: 'p',
        text: '<b>San Diego</b>',
      },
      {
        component: 'p',
        text: 'Bolo niečo po polnoci a my, totálne vyšťavení a prepotení, sme ešte zúfalo blúdili na diaľnici niekde medzi LA a San Diegom s jediným cieľom – nájsť miesto na prenocovanie. Všetko bolo pozatvárané alebo maximálne predražené. V jednom kempe od nás chceli šialených 95 dolárov za parkovanie auta. Začali sme podliehať beznádeji. Dokelu, my dnes oka nezažmúrime.',
      },
      {
        component: 'p',
        text: 'O hodinu alebo dve (človek, v&nbsp;tom zúfalstve čas vôbec nesledoval) sa pred nami zjaví vysvietené prícestné odpočívadlo. „ Áno! Sme zachránení,“ pomysleli sme si. Našou spásou bolo parkovisko preplnené mexickými kamionistami a podobnými zúfalcami, ako sme boli my. ',
      },
      {
        component: 'p',
        text: 'Ukladali sme sa spať a mysľou nám blúdili tie najstrašnejšie scenáre, ktoré by sa tej noci mohli prihodiť. Čo keď sa nám niekto začne dobíjať do auta, zoberie nám všetky veci a nás prepašujú v jednom z tých kamiónov do Mexika a my zvyšok života strávime lúpaním fazule... ',
      },
      {
        component: 'p',
        text: 'Popravde, vyspali sme sa ako bábätká pekne do ružovučka a týmto sa ospravedlňujeme všetkým tým mexickým kamionistom za krivý úsudok.  ',
      },
      {
        component: 'p',
        text: 'Ráno sme dorazili do San Diega. Nemali sme dopredu pripravený plán, a tak sme sa riadili tým, čo nám poradil strýčko Google. Navigoval nás do nádhernej farebnej časti <b>Spanish Village Art Center</b>, preplnenej maličkými dielničkami zasvätenými umeleckej tvorbe. Hneď vedľa bol obrovský areál s botanickou záhradou.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSVAC.jpg',
            name: 'SDSVAC',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSWTiles.jpg',
            name: 'SDSWTiles',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSWTilesLiv.jpg',
            name: 'SDSWTilesLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDBotanicGarden.jpg',
            name: 'SDBotanicGarden',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/LASWHouse.jpg',
            name: 'LASWHouse',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Po tomto umeleckom zážitku naše kroky smerovali na pláž. Konečne si ideme užiť more a nič nerobenie. Na <b>Ocean Beach</b> panovala idylická atmosféra. Slnko príjemne hrialo, všade sa ozýval nádherný šum mora, pláž bola čistá a takmer nikto na nej nebol. Pôvodne sme chceli napísať, že&nbsp; zvyšok dňa sme strávili surfovaním, chillovaním a povaľovaním sa na pláži. Pravda je však taká, že&nbsp;po desiatich minútach sme od vyčerpania zaspali (tie dva týždne na cestách si vyžiadali svoju daň). Ani sme sa nestihli natrieť opaľovacím krémom, a tak sa naše telá po dvojhodinovom spánku na priamom slnku premenili na paradajkový pretlak. ',
      },
      {
        component: 'p',
        text: 'K surfovaniu sme sa vôbec nedostali. Voda bola taká ľadová, že&nbsp;sme si v nej omočili ledva prsty na nohách. Do San Diega sme si skrátka prišli pospať na pláž. No nestálo to za to? ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSwim.jpg',
            name: 'SDSwim',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSunsetChill.jpg',
            name: 'SDSunsetChill',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SDSunsetSiluethe.jpg',
            name: 'SDSunetSiluethe',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Priestor pre tvoje otázky',
      },
    ],
  },
  {
    _id: '',
    url: 'cestahrdinovsnpzapisky',
    title: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
    date: '27. október 2020',
    dateCreated: '10. 27. 2020',
    description:
      'Počas cesty sme sa snažili zdokumentovať každý deň nášho putovania. Pocity, dojmy, zážitky, nečakané zvraty. Taká bola pôvodná predstava, ale nebudeme klamať. Entuziazmus z písania denníka nás veľmi rýchlo opustil. Postupne sa stávali z \tdenníka krátke zápisky, zo zápiskov odrážky, z \todrážok slovné spojenia a \tzo slovných spojení ostali už len citoslovcia a \tsmajlíky. Na napísanie nasledujúceho článku nám to bohato stačilo.',
    image: '/static/images/photosFull/SNPDuklaPamatnik.jpg',
    keywords:
      'cestovateľský blog, cesta hrdinov, snp, dukla, devín, turistika, diaľková turistika, prechod, tatry',
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPDuklaPamatnik.jpg',
            name: 'SNPDuklaPamatnik',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: ' Počas celej cesty som si poctivo písala denník. Dokumentácia celého dňa, od zobúdzania až po zaspávanie. Pocity, dojmy, zážitky, nečakané zvraty. Taká bola moja predstava, ale nebudem klamať, entuziazmus z&nbsp;písania denníka ma veľmi rýchlo opustil. Presnejšie povedané, po troch dňoch. ',
      },
      {
        component: 'p',
        text: 'Len si to predstav, každý deň kráčaš 30&nbsp;km s&nbsp;ťažkým hebedom na chrbte. Si spotený, hladný, zablatený od hlavy až po päty, do nitky premočený, doštípaný rojom komárov a&nbsp;inou háveďou, vystrašený, že z&nbsp;každej strany ťa sleduje krvilačný živočích, ktorý čaká na správny okamih zaútočiť. A&nbsp;večer, keď konečne dorazíš na miesto odpočinku, si rád, že zvládneš postaviť stan a&nbsp;navariť si večeru. Písať denník pri biednom svetle čelovky je posledná vec, ktorú som mala v&nbsp;tú chvíľu chuť urobiť. A&nbsp;tak sa postupne stávali z&nbsp;denníka krátke zápisky, zo zápiskov odrážky, z&nbsp;odrážok slovné spojenia a&nbsp;zo slovných spojení ostali už len citoslovcia a&nbsp;smajlíky. Aby om však napísala článok o&nbsp;našich najzaujímavejších zážitkoch a&nbsp;postrehoch z&nbsp;cesty, mi však bohato postačia. ',
      },
      {
        component: 'h3',
        text: 'Deň pred začiatkom',
      },
      {
        component: 'p',
        text: 'Napriek poctivej príprave, tréningu, radám od skúsených SNPčkárov, načítaným blogom s&nbsp;blížiacim sa dátumom odchodu gradovali vo mne obavy a&nbsp;pochybnosti. Naozaj máme na to pokoriť túto výzvu? Chodiť na jednodňové turistiky je jedna vec, ale prejsť 760&nbsp;km za 30 dní bolo pre mňa niečo nepredstaviteľné.',
      },
      {
        component: 'p',
        text: 'Poslednú noc pred odchodom som spala ako na ihlách. Predstavovala som si tie najdivnejšie, najstrašnejšie a&nbsp;najvtipnejšie scenáre, ktoré by sa nám na našich potulkách po Slovensku mohli prihodiť. Zvieratá mám rada, ale stretu s&nbsp;medveďom/diviakom by som sa naozaj radšej vyhla. Ako prvú pomoc mi mamina chcela zadovážiť slzný sprej na medvede (silne koncentrovaný pepřák). Oceňujem jej dobrý úmysel, ale keď som si predstavila situáciu, keď obrovský medveď čumí na mňa kdesi z&nbsp;kríkov a&nbsp;ja v&nbsp;sebaobrane začnem dolovať zo spodku naprataného ruksaku tubičku slzného spreju, ktorý treba vzápätí namieriť na jeho čierne oči situované 10 cm od eho veľkej papule, vyzeralo to viac ako komicky. Takže slzák tentoraz vynechám a&nbsp;boj s&nbsp;medveďom budeme musieť vyhrať svojpomocne.',
      },
      {
        component: 'h3',
        text: 'Začíname',
      },
      {
        component: 'p',
        text: 'Po celodennom presune v aute sme konečne dorazili do cieľového bodu, ktorý je zároveň východzím bodom našej Cesty hrdinov – Dukliansky priesmyk. Prvý významný medzník na ceste je symbolický pamätník postavený na počesť padlým sovietskym a&nbsp;česko-slovenským vojakom z&nbsp;druhej svetovej vojny. Chodníkom nás sprevádzali tanky, lietadlá, náhrobné kamene, busty padlých generálov. Pochmúrne počasie zvýrazňovalo atmosféru, ktorou toto historicky významné miesto dýchalo.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPLietadlo.jpg',
            name: 'SNPLietadlo',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPTank.jpg',
            name: 'SNPTank',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Doposiaľ som si nestíhala ani uvedomovať, na čo sme sa to vlastne odhodlali. Zvuk naštartovaného auta a&nbsp;krátke zatrúbenie na pozdrav mi razom všetko vyjasnili. Niet cesty späť. Ostali sme tam stáť sami dvaja. Len ja, Dan a&nbsp;naše 15-kilové prenosné bývanie na chrbte. 770 km pred nami. Presun z&nbsp;východu na západ Slovenska. Pešo. Pomoc!   ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPKranieVDzungli.jpg',
            name: 'SNPKranieVDzungli',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'h3',
        text: 'Neskúsenosť svine prináša',
      },
      {
        component: 'p',
        text: 'Ako čerstvo začínajúci SNPčkári sme uznali za vhodné vyraziť na cestu o&nbsp;šiestej večer. Cieľ je dedinka Medvedie vzdialená 13 km. Blúdime lesom. Stmieva sa. Konáre vrhajú strašidelné tiene a&nbsp;každé šuchnutie lístia je čím ďalej tým desivejšie. Celý čas si v&nbsp;duchu opakujem: Nemôžeš byť pokakaná už na prvom kilometri, Devín je ešte ďaleko. ',
      },
      {
        component: 'p',
        text: 'Je potrebné vyriešiť otázku prvého spania v&nbsp;„divočine“. Popri ceste vidíme zopár posedov či prístreškov, avšak nie sú určené na prenocovanie. Jeden je zbúraný, druhý zamknutý a&nbsp;z&nbsp;tretieho nás pre istotu vyhadzuje poľovník s&nbsp;nabitou puškou.',
      },
      {
        component: 'p',
        text: 'Keď nie v&nbsp;posede, rozkladáme stan pod ním. Rozumný človek isto dobre vie, že posedy všeobecne slúžia na pozorovanie divej zveri. V&nbsp;túto noc sme to pochopili aj my, keď sa namosúrený diviak rútil dolu kopcom, vydávajúc pačudesné zvuky, ktorými nám dával jasne najavo, že nie sme vítaní na jeho teritóriu. Jedinou zábranou od stretu s&nbsp;diviakom bol náš pancierový úkryt – dvojvrstvový stan.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPPosed.jpg',
            name: 'SNPPosed',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Ranná rutina',
      },
      {
        component: 'p',
        text: '5:30 Zvoní budík <br />Odkladáme ho 3-krát.<br />6:40 Konečne sa nám podarilo vyhrabať sa zo spacákov<br />7:58 Končíme s rannou prípravou: hygiena, raňajky, balíme veci<br />8:00 Vyrážame na cestu<br />Celkový čas 2,5 hodiny <br />',
      },
      {
        component: 'p',
        text: ' Podľa vyššie uvedeného harmonogramu je ľahké vydedukovať, že ranné vstávanie nebola naša silná stránka. Väčšina SNPčkárov sa snaží vyraziť v&nbsp;čo najskorších ranných hodinách v&nbsp;snahe prejsť čo najviac kilometrov, a aby sa vyhli pečúcemu slnku. My si radšej pospíme o&nbsp;dve hodiny viac a&nbsp;potom sa celý deň škvaríme. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPMagura.jpg',
            name: 'SNPMagura',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Voňaví na 4 minúty',
      },
      {
        component: 'p',
        text: 'Nás ako SNPčkárov by si rozpoznal už z&nbsp;diaľky. Obrovské batohy na pleciach. Nosíme dve tričká dokola. Vôkol nás sa šíri poctivý prepotený púšik, ktorý neprebíja žiadna vôňa deodorantu (takú zbytočnú záťaž nosí len máloktorý SNPčkár). Vlasy máme také mastné, že stačí vyklepať rezne a&nbsp;môžeme vyprážať. Presne takto vyzerá človek, ktorý sa päť dní nesprchoval a&nbsp;jeho jediná záchrana sú vlhčené utierky. Občas sa pošťastí a&nbsp;nájdeme prameň či potôčik, v&nbsp;ktorých si doprajeme výdatnú ľadovú sprchu. Je to vskutku blažený pocit byť opäť čistý. Nie však nadlho. Po pár minútach kráčania sa všetko vracia do starých koľají. Už aj zabúdame, že nejaká sprcha bola.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPSuseniePradla.jpg',
            name: 'SNPSuseniePradla',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPckarskaSprcha.jpg',
            name: 'SNPckarskaSprcha',
            text: 'Aj na takomto mieste sme sa "sprchovali"',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Tichá domácnosť',
      },
      {
        component: 'p',
        text: 'Začíname 4. deň cesty. Míňame mesto Bardejov, čím sme sa definitívne rozlúčili s&nbsp;možnosťou sadnúť na priamy spoj domov. Nemáme bohvieaké šťastie na pekné počasie. Leje od rána do večera. Napriek tomu, sa snažíme udržať si dobrú náladu. Darilo sa nám to až do chvíle, kým sme neprešli dedinu Hervartov. Zjavil sa pred nami strmý tiahly kopec, ktorý je náročné zdolať aj za normálnych podmienok, nie keď dážď spravil z&nbsp;terénu blatovú šmýkačku. S&nbsp;vypätím všetkých síl sa po malých krôčikoch posúvame nahor. Začínal sa ma zmocňovať nepríjemný pocit, že toto sa neskončí dobre. Skôr ako som stihla svoje obavy povedať nahlas, stratila som pevnú pôdu pod nohami. Možno bez tej ťarchy na chrbte by som to ustála. Gravitácia však vyhráva nad váhou môjho batohu, ktorý ma nemilosrdne ťahá so sebou dolu. Ležím na chodníku ako taká rozpučená žaba. Som zablatená až po uši a&nbsp;neviem, či sa mám začať smiať alebo plakať. Som na neho strašne nahnevaná. Po zvyšok dňa máme tichú domácnosť.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'SNPHojdacka',
            src: '/static/images/photosFull/SNPHojdacka.jpg',
          },
          {
            name: 'SNPPadDoBlata',
            src: '/static/images/photosFull/SNPPadDoBlata.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: 'Sily nám rapídne ubúdajú. Cieľ cesty je v&nbsp;nedohľadne, sme do nitky premočení, trasieme sa od zimy. Nie sme jediní, čo majú plné zuby daždivého počasia. Z&nbsp;kríkov na seba upozorní diviak. Za taký šprintérsky výkon, ako sme následne predviedli, by sa nemusel hanbiť ani samotný Usain Bolt.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'SNPHervartov',
            src: '/static/images/photosFull/SNPHervartov.jpg',
          },
          {
            name: 'SNPBlatovaCesta',
            src: '/static/images/photosFull/SNPBlatovaCesta.jpg',
          },
        ],
      },
      {
        component: 'p',
        text: 'Svetlom dnešného dňa boli teplá sprcha a páperové periny &nbsp;na chate Čergov, presne také, pod akými sme kedysi spávali u&nbsp;starej mamy. Keď sme sa nimi zababušili, ostali mám trčať iba nosy. Konečne si začínam cítiť prsty na nohách.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPCergov.jpg',
            name: 'SNPCergov',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: '<a href="/blog/cestahrdinovsnpzapisky2" >Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť</a>',
      },
      {
        component: 'p',
        text: '<a href="/galeria?view=cestahrdinovsnp" >Galéria z našej Cesty hrdinov SNP</a>',
      },
    ],
  },
  {
    _id: '',
    url: 'cestahrdinovsnpzapisky2',
    title: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
    date: '7. november 2020',
    dateCreated: '11. 07. 2020',
    description:
      'Poznáš ten nepríjemný pocit, keď ti začne krútiť črevá, sociálne zariadenie je na míle ďaleko a ty v snahe zabrániť blížiacej sa pohrome prekrižuješ nohy a zatínaš ritné polky. Na SNPčke takýto problém nastať nemôže. Záchod nájdeš na každom kroku. Kedykoľvek to na teba príde, môžeš si jednoducho odskočiť za najbližší krík.',
    image: '/static/images/photosFull/SNPPortraitVT.jpg',
    keywords:
      'cestovateľský blog, cesta hrdinov, snp, dukla, devín, turistika, diaľková turistika, prechod, tatry',
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
      },
      {
        component: 'h3',
        text: 'Príroda volá',
      },
      {
        component: 'p',
        text: 'Poznáš ten nepríjemný pocit, keď ti začne krútiť črevá, sociálne zariadenie je na míle ďaleko a&nbsp;ty v&nbsp;snahe zabrániť blížiacej sa pohrome prekrižuješ nohy a&nbsp;zatínaš ritné polky. Na SNPčke takýto problém nastať nemôže. Záchod nájdeš na každom kroku. Kedykoľvek to na teba príde, môžeš si jednoducho odskočiť za najbližší krík. Jedna z&nbsp;takýchto situácií nastala, keď sme sa presúvali do Kysaku – dediny neďaleko Košíc. Kráčame v&nbsp;dobrej nálade, diskutujeme o tom, čo si dáme na večeru a&nbsp;kde budeme spať. Po chvíli mi Dan prestane odpovedať. Obzriem sa za seba a&nbsp;vidím ho skrúteného vo veľmi zvláštnej polohe s&nbsp;utrápeným výrazom na tvári. Mierne predklonený sa podopiera o&nbsp;palice a&nbsp;nahlas predycháva. Neviem, čo sa deje. Nevládze? Má kŕč? Bolí ho niečo? Snažím sa ho povzbudiť, cieľ je už na dosah, tak nech to nevzdáva. Stále nič. Jeho letmý pokus o&nbsp;pohyb skončil neúspešne. Po chvíli vykríkne: „Už nemôžem spraviť ani krok navyše, musím sa ísť vys*ať!“ V&nbsp;momente zhodil batoh a&nbsp;zmizol kdesi v lese. Musím povedať, že mi poriadne odľahlo. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPNaPosratie.jpg',
            name: 'SNPNaPosratie',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'h3',
        text: 'Pripíjame na Volovec',
      },
      {
        component: 'p',
        text: 'Schádzame z&nbsp;vyznačenej trasy a&nbsp;máme namierené na chatu Volovec. Po celodennom kráčaní nám padne vhod teplý guľáš na zohriatie. Nemáme v&nbsp;pláne zdržať sa nadlho, vyhliadli sme si skvelé miesto na spanie, odkiaľ si budeme môcť vychutnať západ slnka. Ledva sme vykročili z&nbsp;chaty, obklopila nás veselá partička Trnavákov a&nbsp;dali sme sa do reči. Ani sme sa nestihli predstaviť a už sme mali štamperlík domácej slivovice v&nbsp;ruke. Vzápätí nasledoval ešte jeden, do druhej nohy. Potom ešte jeden, ako sa vraví „kapurkový.“ Nemusím ani hovoriť, že nebol dobrý nápad hádzať takto zhurta do seba toľké panáky silnej pálenky. Naše žalúdky neboli na túto tekutinu vôbec pripravené. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPVolovecGulas.jpg',
            name: 'SNPVolovecGulas',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Chtiac-nechtiac nakoniec ostávame spať na chate. Celý večer sme spievali, tancovali a&nbsp;zabávali sa, chata sa len tak otriasala. Panáky veselo štrngali. Alkohol začal pomaly opantávať naše zmysly, až nás napokon opantal úplne celých. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPVolovecOpica.jpg',
            name: 'SNPVolovecOpica',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Nasledujúce ráno som si privstala a&nbsp;vyšla na vrch Skalisko, odkiaľ som pozorovala jeden z najkrajších východov slnka, aké som doposiaľ zažila. Naschvál píšem v&nbsp;jednotnom čísle, pretože Dan po prehýrenej noci nebol schopný vstať z&nbsp;postele. Bol biely ako stena a svet sa mu točil pred očami.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPSkalisko.jpg',
            name: 'SNPSkalisko',
            text: 'Východ slnka s krásnou inverziou na Skalisku.',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Na počudovanie, vôbec som sa na neho nehnevala, práve naopak, bolo mi ho ľúto. Svoj kalich horkosti si vypil sám až do dna. Jeho trestom za včerajšie žúrovanie bolo celodenné kráčanie so silnou opicou a&nbsp;suchotami v&nbsp;ústach. Myslím si, že pálenky sa tak skoro nedotkne.',
      },
      {
        component: 'p',
        text: 'Napriek plánovaným 27 km sme si dnešný hike skrátili takmer o&nbsp;polovicu. Zaujala nás útulňa Gálová, v&nbsp;ktorej sme skrátka museli ostať. Na SNPčkárske pomery sme si pripadali ako v&nbsp;Grand hoteli. Nádherná drevenička s&nbsp;pieckou, plne vybavenou kuchynkou a čistým záchodom. Dokonca nás čakalo vychladené pivo, ktorému by sa Dan dozaista potešil, nebyť včerajšej noci.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPGalovaUtulna.jpg',
            name: 'SNPGalovaUtulna',
            text: 'Utulňa Gálová.',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Búrka ',
      },
      {
        component: 'p',
        text: 'Celý deň kráčame v&nbsp;otrasnom teple, je dusno a&nbsp;ja sa cítim ako vo fínskej saune. Ťažko sa mi dýcha a&nbsp;pot mi steká prúdom po tvári. Dala by som všetko za vylihovanie pri bazéne, s&nbsp;osviežujúcim drinkom v&nbsp;jednej ruke a&nbsp;s&nbsp;kýbľom zmrzliny v druhej. Z môjho rozjímania ma vytrhne silný úder blesku, ktorý nás upozorní na blížiace sa mračná. ',
      },
      {
        component: 'p',
        text: 'Skontrolujeme predpoveď počasia. Všetko sa zdá v&nbsp;poriadku. Búrka je od nás na míle vzdialená a&nbsp;vietor taktiež fúka opačným smerom. ',
      },
      {
        component: 'p',
        text: 'Akosi sme pozabudli na fakt, že počasie na horách sa dokáže zmeniť z&nbsp;minúty na minútu. Tak aj bolo. Asi po polhodine kráčania sa smer vetra otočil a&nbsp;fúkal priamo na nás. Skôr než sme si stihli obliecť pršiplášť, spustil sa hustý lejak (tak mi bolo dopriate to vytúžené schladenie, o&nbsp;ktorom som pol dňa básnila). Blesky šľahali ako besné všade navôkol. Jeden udrel tak blízko nás, že sme počuli, ako elektrické výboje svištia vzduchom. Búrka na horách je odlišná od tej, čo zažívame v meste. Všetko je mnohonásobne hlasnejšie, silnejšie, intenzívnejšie. Človek si hneď uvedomí, aká veľká je sila prírody.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPGolgotaUkryt.jpg',
            name: 'SNPGolgotaUkryt',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Našťastie vieme, čo robiť v lese počas búrky, a&nbsp;pohotovo reagujeme. Odhadzujeme kovové palice. Vypíname telefóny. Bežíme čo nám sily stačia a&nbsp;snažíme sa nájsť úkryt, v&nbsp;ktorom by sme mohli prečkať túto smršť. Sme odkázaní iba sami na seba. Po istej chvíli sa ako zázrakom pred nami zjaví drevený altánok. Neváhame ani sekundu a&nbsp;bežíme sa schovať. Síce sa klepeme ako osiky (od zimy aj od strachu), ale sme ako-tak v bezpečí. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPNTPrsiplast.jpg',
            name: 'SNPNTPrsiplast',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Pre búrku nemôžme pokračovať ďalej. Ani jeden z&nbsp;nás si netrúfa odhadnúť, ako dlho budeme musieť čakať. Stretnú sa nám pohľay a&nbsp;je nám jasné, že obaja myslíme na to isté. Bez slov začneme vyťahovať z&nbsp;batoha ešus, horák a&nbsp;poháre. Nič nenapraví pokazenú náladu lepšie ako teplá instantná káva 3 v 1.',
      },
      {
        component: 'h3',
        text: 'Mimozemšťania na Chopku',
      },
      {
        component: 'p',
        text: 'Titulné stránky časopisov zaplavili správy o&nbsp;pristátí ufa na Chopku. Len žiadna panika, nijaké sci-fi sa nekonalo. Jediní mimozemšťania pobehujúci po Kamennej chate sme my dvaja, teda aspoň my sme sa tak cítili. Ako jedni z&nbsp;mála sme na chrbte niesli obrovské turistické ruksaky, sme prepotení, pretože už piaty deň po sebe nosíme jedno a&nbsp;to isté tričko. Zapáchame aj sami sebe. Obzriem sa po miestnosti a mám pocit, že sme sa dostali na nejakú fashion show. Všetci sú vyobliekaní ako z&nbsp;kultového módneho časopisu. Pôvabné šaty, luxusné kabelky, kožené sandáliky, značkové vestičky či lakované topánky. Uvažujem nad tým, ako nepohodlne by sa v&nbsp;takýchto outfitoch turistikovalo. Jediný spôsob, ako sa mohli dostať hore, je predražená lanovka. Spravili si pár fotiek na Instagram a&nbsp;svoj výlet zavŕšili obedom s&nbsp;nemalou vysokohorskou prirážkou. Keď sme im rozprávali, akej výzve čelíme a&nbsp;čím všetkým sme si už prešli, len nechápavo krútili hlavami nad naším „zvláštnym koníčkom“. ',
      },
      {
        component: 'h3',
        text: 'Votrelec na útulni Žľab',
      },
      {
        component: 'p',
        text: 'Nájsť strechu nad hlavou bolo vždy príjemnou zmenou po niekoľkých dňoch prespávania v stane. Na ceste sme našli niekoľko útulní, nie všetky sa však dajú nazvať útulnými. Na luxus si nepotrpíme, ale útulňa Žľab bola silný kaliber aj pre nás.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPZlab.jpg',
            name: 'SNPZlab',
            text: 'Utulňa Žľab.',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Po stenách liezli čiernočierne pavúky veľké ako moja päsť. Tí, ktorí ma poznajú, vedia, že z&nbsp;pavúkov mám panický strach, ale po dvadsiatich dňoch strávených v prírode som rezignovala a&nbsp;dočasne som sa naučila s&nbsp;nimi žiť. To však neznamená, že nespravím všetko preto, aby som zabránila akémukoľvek kontaktu s nimi. Najväčšiu hrôzu som mala z&nbsp;toho, že mi vlezú do spacáku alebo nebodaj do úst. Zababušila som sa od hlavy po päty tak, že ostal len malý otvor na prísun vzduchu. Niekde som čítala, že vedci predpokladajú, že priemerne zjeme v&nbsp;spánku 8 pavúkov ročne. Na útulni Žľab by bol tento počet dosiahnutý za jedinú noc.',
      },
      {
        component: 'p',
        text: 'Všetko je zahalené v&nbsp;tme. Počuť iba šum listov a&nbsp;praskanie konárov vo vetre. To ticho preruší zvláštne cupkanie po streche. Zmeravela som. Nedýcham, len načúvam a&nbsp;čakám, čo sa ide diať. Dan to isté. V&nbsp;tom začne rinčať železná sieťka natiahnutá pozdĺž strechy. Schmatneme prvé, čo nám príde do ruky. Dan turistickú palicu, ja topánku a&nbsp;čelovku. V&nbsp;rohu zbadáme reflektujúce oči obrovského hlodavca, ktorého nevieme vôbec identifikovať. Má chvost ako potkan, huňatú sivú srsť ako činčila, uši a&nbsp;oči ako netopier a&nbsp;pysk ako myš. Neskôr sme si to vygooglili a&nbsp;zistili, že spoločnosť nám prišiel robiť plch. Postavil sa na zadné, akoby nám chcel dať najavo, kto je tu pánom. Dan využil svoje dlhoročné šermiarske skúsenosti a&nbsp;vydal sa do boja s&nbsp;votrelcom. Nechceli sme ho zabiť, len poriadne vystrašiť, aby dal pokoj nám aj našim veciam. Chudák chlpáč, vôbec nechápal, čo sa deje. Splašene pobehoval z&nbsp;jednej strany chaty na druhú. Zaliezol do diery a po chvíľke opäť vyliezol skontrolovať situáciu. Posvietili sme si na neho bližšie a&nbsp;uvideli evidentne ľudskou rukou vytvorený brloh. Veď on je tu považovaný za domáceho miláčika. Súboj so spolubývajúcim prehrávame n plnej čiare. Nedal nám spať ďalšiu hodinu a&nbsp;pol, ako sa neustále približoval k našim spacákom. Hodinky ukazujú 3:10. Od úplného vyčerpania konečne zaspávame. Ranné vstávanie bude dosť náročné.',
      },
      {
        component: 'h3',
        text: 'Komáre a iné (h)ovady ',
      },
      {
        component: 'p',
        text: 'Z&nbsp;duše neznášam otravný hmyz. Sprevádzal nás počas celej cesty a&nbsp;nech som sa snažila akokoľvek, zvyknúť som si naň nedokázala. Extrém extrémov bol záverečný výstup na Devínsku Kobylu. Hotová invázia besných krvovyciciavačov. Naše zbrane sú neúčinné. Štípancami sme posiati, akoby sme dostali ovčie kiahne. Zaháňam sa a&nbsp;snažím sa ich všetky rozplesnúť, skôr než zaboria ten hnusný sosák do mojej kože. Cítim sa ako hlavný hrdina rozprávky Sedem jednou ranou. Na mojom pleci sa vytvoril symbolický cintorín padlých komárov ako výstraha pre ostatné príživnícke (h)ovady. Už by mohli pochopiť, že nie som žiaden darca krvi na takéto účely ani neprevádzkujem hromadnú taxislužbu.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'SNPKomare',
            src: '/static/images/photosFull/SNPKomare.jpg',
          },
          {
            name: 'SNPFotenie',
            src: '/static/images/photosFull/SNPFotenie.jpg',
            text: 'Na záver náš verný kamarát, ktorý s nami zvládol prejsť celú cestu a vždy na slovíčko počúval.',
          },
        ],
      },
      {
        component: 'p',
        text: '<a href="/blog/cestahrdinovsnpzapisky" >Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť.</a>',
      },
      {
        component: 'p',
        text: '<a href="/galeria?view=cestahrdinovsnp" >Galéria z našej Cesty hrdinov SNP</a>',
      },
    ],
  },
  {
    _id: '',
    url: 'cestahrdinovsnp',
    title: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
    date: '9. september 2020',
    dateCreated: '09. 09. 2020',
    description:
      'Najdlhšia turistická magistrála na území Slovenska. Začína sa v Duklianskom priesmyku a končí sa na hrade Devín. Jej dĺžka je 770 kilometrov. Celú túto trasu sme sa rozhodli prejsť peši a aj sa nám to podarilo. V tomto článku sa dočítaš základne informácie o našom putovaní na Ceste hrdinov SNP.',
    image: '/static/images/photosFull/SNPNTKosariska.jpg',
    keywords:
      'cestovateľský blog, cesta hrdinov, snp, dukla, devín, turistika, diaľková turistika, prechod, tatry, rady a tipy',
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
      },
      {
        component: 'p',
        text: 'Naša cesta zhrnutá v&nbsp;číslach. Prešli sme 770 km za 30 dní s&nbsp;výškovým prevýšením 30&nbsp;000 metrov. Denne sme nachodili v&nbsp;priemere 27 km s&nbsp;batohmi vážiacimi plus-mínus 15&nbsp;kg. Zodrali sme 3 páry topánok a&nbsp;5 párov ponožiek. 21 nocí sme spali v&nbsp;stane pod šírym nebom. Dokopy sme zjedli 34 vifoniek, 56 horaliek a&nbsp;vypili 10 litrov kofoly. Počas cesty sme stretli 2 diviakov, 10 srniek, 46 kamzíkov a 1 medveďa. Zdolali sme 19 slovenských pohorí (Laborecká vrchovina, Ondavská vrchovina, Busov, Čergov, Šarišská vrchovina, Čierna hora, Volovské vrchy, Spišsko-gemerský kras, Stolické vrchy, Nízke Tatry, Starohorské vrchy, Veľká Fatra, Kremnické vrchy, Žiar, Malá Fatra, Strážovské vrchy, Biele Karpaty, Myjavská pahorkatina a&nbsp;Malé Karpaty). Celé toto dobrodružstvo nás každého stálo cca 400&nbsp;€.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPDuklaVojak.jpg',
            name: 'SNPDuklaVojak',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Čo je Cesta hrdinov SNP?',
      },
      {
        component: 'p',
        text: 'Najdlhšia turistická magistrála na Slovensku, dlhá 770 km, vedie od Duklianskeho priesmyku na severovýchode krajiny až po hrad Devín pri Bratislave. Cesta kopíruje trasy, po ktorých sa počas Slovenského národného povstania pohybovali partizánske jednotky, a prechádza miestami, kde sa odohrali dôležité udalosti spojené s oslobodzovaním Slovenska v rokoch 1944 – 1945. Táto trasa je preto nielen fyzickou výzvou, ale aj cestou po dejinách a pamiatkach Slovenska.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPznacka.jpg',
            name: 'SNPznacka',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Prečo sme sa na ňu vydali my?',
      },
      {
        component: 'p',
        text: 'Tak ako každý rok mali sme naplánované najrôznejšie cestovateľské dobrodružstvá po celom svete. Smutné je, že Slovensko v&nbsp;nich zahrnuté nebolo. Nepríjemná situácia spôsobená novým koronavírusom však v&nbsp;okamihu všetko zmenila. Spočiatku nám to bolo všetko ľúto. Ako budeme cestovať, keď sú hranice zatvorené?  ',
      },
      {
        component: 'p',
        text: 'Na celú situáciu sme sa pozreli z&nbsp;úplne iného uhla. Možno práve teraz je čas, keď sa máme spomaliť a&nbsp;ostať na chvíľku doma. Nemám na mysli ostať sedieť na zadku, ale vydať sa spoznávať krásu našej domoviny.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPChopok.jpg',
            name: 'SNPChopok',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'h3',
        text: 'Boli sme na cestu pripravení?',
      },
      {
        component: 'p',
        text: 'Minulý rok padlo zopár slov o Ceste hrdinov, že jedného dňa ju určite zdoláme, ale nikto nečakal, že sa na ňu vydáme tak rýchlo. Hlavne naše mamy nie. Dievča z&nbsp;mesta ide žiť 30 dní v&nbsp;lese, keď chytá panický záchvat z&nbsp;pavúka na záchode? Viete založiť oheň? Kde budete spať? Viete, čo máte urobiť, keď stretnete medveďa? To nemáte šancu zvládnuť. Všetci len neveriacky krútili hlavami a&nbsp;modlili sa, nech si tento šialený nápad rýchlo vyhodíme z&nbsp;hlavy.',
      },
      {
        component: 'p',
        text: 'Popravde aj ja som miestami pochybovala. Nikdy predtým sme neabsolvovali poriadnu viacdňovú túru. Teda týždeň pred SNPčkou sme išli na dvojdňový prechod Veľkofatranskou magistrálou, po ktorej som vyhlásila, že na viacdňovú túru už nikdy v&nbsp;živote nepôjdem. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPStanMorning.jpg',
            name: 'SNPStanMorning',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Aká bola Cesta hrdinov SNP pre nás dvoch?',
      },
      {
        component: 'p',
        text: 'Cesta hrdinov SNP bola obrovská životná skúsenosť, ktorú vrelo odporúčame každému dobrodruhovi. Ani sme len netušili, do akého šialeného dobrodružstva sa vrháme. Počas našej cesty sme si prešli kadečím. Tým lepším, ale nevyhli sme sa ani kritickým a&nbsp;náročným situáciám. Na mesiac sme vystúpili zo svojej komfortnej zóny. Spávali sme v&nbsp;stane, na lavičke, na zemi, ale opodiaľ latríny. Z&nbsp;môjho pohľadu je Cesta hrdinov SNP najmä o&nbsp;mentálnej sile. Nohy vládzu, ale treba o&nbsp;tom presvedčiť aj hlavu. Kráčali sme v&nbsp;silných búrkach, keď sme si museli siahnuť na svoje dno a nájsť v sebe silu a chuť pokračovať ďalej. Zažili sme aj neúprosné horúčavy, keď nám chýbala voda a&nbsp;jedlo a&nbsp;z&nbsp;posledných síl sme dokráčali k&nbsp;najbližšiemu motorestu, aby sme sa občerstvili. Počas celej cesty sme stretávali rôznych ľudí, ktorí dodávali našej ceste tie správne grády. Niektorí ľudia boli veľmi prekvapení, keď zistili, že kráčame 770 kilometrov naprieč Slovenskom, a&nbsp;naše dobrodružstvo opisovali ako veľmi zvláštny koníček. Iní ľudia boli na turistov – SNPčkárov zvyknutí a&nbsp;rovno nás vítali s&nbsp;naplnenými štamprlíkmi a&nbsp;prestretým stolom. O&nbsp;týchto zážitkoch sa viac dozvieš v&nbsp;pripravovaných príspevkoch, ktoré budú písané formou denníkových záznamov. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/SNPNTKosariska.jpg',
            name: 'SNPNTKosariska',
          },
        ],
        class: 'articlePictureLandscape',
      },
    ],
  },
  {
    _id: '',
    url: 'radyatipyerasmus',
    title: '5 dôvodov prečo (NE)ísť na ERASMUS',
    date: '16. máj 2020',
    dateCreated: '05. 16. 2020',
    description:
      'V článku 5 dôvodov prečo (NE)ísť na Erasmus sme spísali najčastejšie (NE)podstatné dôvody, ktoré odrádzajú študentov zúčastniť sa Erasmu. Zároveň ti ukážeme, že ani jeden z nich nie je dostatočnou prekážkou na to, aby si nevyužil jednu z najlepších cestovateľských príležitostí, aká sa ti na vysokej škole ponúka.',
    image: '/static/images/photosFull/Erasmus/OuluNalikari.jpg',
    keywords: 'erasmus, erazmus, oulu, rady a tipy, prečo ísť na erazmus',
    categories: ['Európa', 'Rady a Tipy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: '5 dôvodov prečo (NE)ísť na ERASMUS ',
      },
      {
        component: 'p',
        text: 'Často sa stretávame s rôznymi otázkami na naše cestovanie, napr.: „Ako je možné, že toľko cestujete? Odkiaľ beriete na to peniaze? Ako dokážete skĺbiť cestovanie so štúdiom?“',
      },
      {
        component: 'p',
        text: 'To, že sme študenti, nie je predsa žiadna nevýhoda a&nbsp;už vôbec nie bariéra pri plnení svojich snov. Práve naopak, je to jedinečné obdobie plné príležitostí a&nbsp;benefitov (nielen tých cestovateľských), ktoré treba využiť na maximum. ',
      },
      {
        component: 'p',
        text: 'Jednou z&nbsp;najdostupnejších príležitostí vycestovať na vysokej škole je program Erasmus+, ktorý umožňuje študentom stráviť až jeden rok na študijnom pobyte v&nbsp;zahraničí. Napriek tomu túto možnosť nevyužívajú študenti naplno.',
      },
      {
        component: 'p',
        text: 'V&nbsp;tomto článku sa zameriame na päť najčastejších (NE)podstatných dôvodov, ktoré odrádzajú študentov od Erasmu, ale zároveň ti ukážeme, že ani jeden z&nbsp;nich nie je dostatočnou prekážkou na to, aby si nevyužil jednu z&nbsp;najlepších cestovateľských príležitostí, aká sa ti na vysokej šole ponúka.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/OuluLakeJump.jpg',
            name: 'OuluLakeJump',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: '1. Povinné papierovačky',
      },
      {
        component: 'p',
        text: 'Veľké množstvo papierovačiek patrí medzi najmenej zábavné časti celého programu, ale, bohužiaľ, nedá sa im nijak vyhnúť. Je to jeden z&nbsp;najčastejších dôvodov, pre ktoré sa študenti vyhýbajú podať prihlášku na Erasmus.',
      },
      {
        component: 'p',
        text: 'Aj my sme mali na začiatku obavy. Tŕpli sme, či niečo nepopletieme alebo na niečo nezabudneme. Z&nbsp;každej strany sa na nás valili papiere, ktoré bolo treba spracovať, podpísať, odoslať, odovzdať. Človek nevedel, čo má vybavovať skôr. Celý proces prebehol na naše prekvapenie veľmi hladko a&nbsp;rýchlo, bez zbytočných komplikácii, takže si naozaj netreba navodzovať zbytočný stres hneď v&nbsp;úvode.',
      },
      {
        component: 'p',
        text: 'O&nbsp;tom, čo všetko je potrebné vybaviť pri podávaní prihlášky na Erasmus a ako vyzerali naše jednotlivé kroky, sa dočítaš v&nbsp;článku <a href="/blog/radyatipyerasmusvybavovacky">Erasmus vybavovačky krok za krokom</a>',
      },
      {
        component: 'p',
        text: 'Upozorňujem, že každá univerzita môže mať iné podmienky, iné termíny aj&nbsp;iný zoznam partnerských univerzít. ',
      },
      {
        component: 'h3',
        text: '2. Neuznané kredity',
      },
      {
        component: 'p',
        text: 'Obava z&nbsp;predlžovania bakalárskeho štúdia pre neuznané kredity je veľkým strašiakom pre nejedného študenta. Niekto má to šťastie, že mu uznajú všetky, iný má tu smolu, že ani jeden. ',
      },
      {
        component: 'p',
        text: 'Uznanie kreditov závisí na tvojom výbere predmetov z&nbsp;ponuky hosťujúcej univerzity, ktoré by mali v&nbsp;čo najväčšej miere korešpondovať so študovanými predmetmi na domácej univerzite. ',
      },
      {
        component: 'p',
        text: 'Pokiaľ by sa ti predsa len nepodarilo nájsť adekvátne predmety, stále to nie je dôvod na paniku z&nbsp;predĺženia štúdia. Zájdi za svojimi profesormi a&nbsp;pozisťuj si všetky možnosti týkajúce sa ukončenia jednotlivých predmetov. Väčšinu sú profesori veľmi ústretoví a&nbsp;snažia sa nájsť spôsob, ako ti danú situáciu uľahčiť. Najčastejším spôsobom býva zadanie semestrálnych prác počas tvojho výjazdu a po návrate ti poskytnú priestor na vykonanie chýbajúcich skúšok.',
      },
      {
        component: 'h3',
        text: '3. Osamelosť ',
      },
      {
        component: 'p',
        text: 'Pre niekoho to môže byť desivá predstava vyraziť úplne sám, do krajiny vzdialenej niekoľko sto kilometrov od domova. Napriek tomu, že budeš obklopený hromadou nových ľudí, môžeš sa na začiatku cítiť trochu osamelo. Nebudem ti klamať, prvé dni môžu byť stresujúcejšie a&nbsp;náročnejšie. Je to celkom prirodzené po príchode do nového prostredia a pri množstve zmien: nástup do novej školy, noví ľudia, noví profesori, nová krajina. To je však hlavná myšlienka programu Erasmus – zažiť a&nbsp;naučiť sa niečo nové. ',
      },
      {
        component: 'p',
        text: 'Nemaj strach, všetci prichádzajúci študenti prežívajú rovnaký mix pocitov. Začínajú od nuly, nikto sa s nikým nepozná, nikto nevie, čo má očakávať. Neboj sa urobiť prvý krok a nadviaž kontakt s&nbsp;novými ľuďmi. Neistota a&nbsp;hanblivosť po istom čase začnú opadávať, vzťahy sa začnú utužovať a&nbsp;kamarátstva stmelovať. Garantujem ti, že pocit osamelosti ti už po zvyšok pobytu nepríde ani len na um.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/OuluTripToPetersburg.jpg',
            name: 'OuluTripToPetersburg',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Na každej univerzite zapojenej do programu Erasmus+ nájdeš sekciu ESN (Erasmus Student Network). Je to študentská organizácia, ktorá pomáha rozvíjať mobilitu študentov po celej Európe. Funguje na báze dobrovoľníctva a&nbsp;jej členmi sú študenti, ktorí sa usilujú prichádzajúcim študentom pomôcť pri adaptácii na nové prostredie. Organizujú rôzne aktivity, party, výlety, pri ktorých študenti majú možnosť navzájom sa spoznať. Rovnako ti ukážu priestory školy, vysvetlia ti, ako funguje školský systém, dajú cenné rady (napríklad kam si zájsť na dobré pivko), poprípade zorganizujú tour de mesto, aby si na začiatok trafil aspoň do potravín a&nbsp;na autobusovú zastávku.',
      },
      {
        component: 'p',
        text: 'Buddy program čiže každý člen sekcie má možnosť stať sa buddym (parťákom) pre zahraničného študenta. Je to osoba, na ktorú sa môžeš kedykoľvek obrátiť, keď si nebudeš vedieť s&nbsp;niečím poradiť. ',
      },
      {
        component: 'p',
        text: 'Naša skúsenosť: Môj buddy sa volal Caleb. Bol to vysmiaty chalan z&bsp;Arizony, ktorý bol veľmi milý a ochotný. Hneď v&nbsp;prvý deň nás s&nbsp;Danom zachránil tým, že po nás prišiel na letisko o&nbsp;tretej v&nbsp;noci, keď už nepremávali žiadne spoje a nemali sme sa ako dostať na intrák.',
      },
      {
        component: 'h3',
        text: '4. Výučba v cudzom jazyku',
      },
      {
        component: 'p',
        text: 'Ako sa mám vzdelávať v&nbsp;cudzom jazyku, keď niekedy nerozumiem výkladu ani v&nbsp;materinskom jazyku? Učiť sa v&nbsp;cudzom jazyku sa ti môže zdať nereálne. Ja si však myslím, že vo väčšine prípadov môže ísť o&nbsp;podvedomý strach z&nbsp;niečoho nového, neznámeho.',
      },
      {
        component: 'p',
        text: 'To, že na prvých hodinách nerozumieš ani slovo, je viac-menej úplne normálne. Aj ja som prvý týždeň sedela schúlená v&nbsp;zadnej lavici dúfajúc, že si ma nikto nebude všímať, nie to ešte očakávať nejakú zmysluplnú odpoveď a&nbsp;účasť v diskusii. ',
      },
      {
        component: 'p',
        text: 'Študovať v&nbsp;cudzom jazyku je iné, chvíľami náročné, ale po istom čase sa do toho dostaneš a&nbsp;začneš to brať ako prirodzenú vec.',
      },
      {
        component: 'p',
        text: 'Veľmi nápomocní prekonať jazykovú bariéru boli samotní profesori, ktorí boli maximálne zhovievaví, milí a&nbsp;trpezliví. Rozprávali primeraným tempom a&nbsp;vždy sa uistili, že všetkému rozumieme. ',
      },
      {
        component: 'p',
        text: 'Ak máš obavy, že tvoje jazykové schopnosti nie sú na takej úrovni, aby si zvládol výučbu v&nbsp;cudzom jazyku, vždy máš veľa možností, ako sa v&nbsp;ňom môžeš zdokonaliť:',
      },
      {
        component: 'p',
        text: '• Kurzy (online, jazykové školy, súkromné doučovnie) <br />• Pozeranie filmu v&nbsp;angličtine alebo aspoň s&nbsp;anglickými titulkami<br />• Čítaj všetko, čo sa v&nbsp;angličtine čítať dá<br />• Každý deň rozšír svoju slovnú zásobu o&nbsp;5 nových slovíčok<br />• Vyskúšaj mobilné aplikácie<br />',
      },
      {
        component: 'h3',
        text: '5. Financie',
      },
      {
        component: 'p',
        text: 'Otázka financií je veľmi dôležitou pri plánovaní každého cestovania. Raz mi jedna kamarátka povedala, že by musela predať obidve obličky, aby si mohla dovoliť cestovať toľko ako my. Mám pre teba skvelú správu, účasť na Erasme ťa nebude stáť žiaden svoj orgán. Jedinečnosť tohto programu spočíva v&nbsp;získaní nemalého príspevku na svoj pobyt v&nbsp;zahraničí od Európskej Únie, ktorý by mal pokryť väčšiu časť tvojich výdajov. Zvykne to byť okolo 70%. Samozrejme, je potrebné mať aj nejaké vlasné finančné prostriedky. Malo by ti stačiť toľko, koľko minieš na život v bežných podmienkach počas štúdia. ',
      },
      {
        component: 'p',
        text: 'Finančné náklady spojené s&nbsp;Erasmom sa líšia podľa výberu krajiny aj konkrétneho mesta. Je samozrejmé, že vo veľkých metropolitných mestách, ako je Paríž, Štokholm či Kodaň, sú náklady na život oveľa vyššie ako napríklad v&nbsp;balkánskych krajinách. Podotýkam, že menšie mesto nie je zárukou nižších nákladov. ',
      },
      {
        component: 'p',
        text: 'Dan vytvoril prehľadnú mapu, na ktorej si nájdeš sumy udeľovaných grantov pre jednotlivé krajiny',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/Erasmus/ErasmusMap.jpg',
            name: 'ErasmusMap',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Dôvodov, prečo nevyraziť, je neúrekom, sks však nájsť svetlú stránku každého z&nbsp;nich a&nbsp;vykroč v&nbsp;ústrety nezabudnuteľnému dobrodružstvu.',
      },
      {
        component: 'p',
        text: 'Tak na čo čakáš? Kam vyrážaš na svoj ERASMUS?',
      },
    ],
  },
  {
    _id: '',
    url: 'radyatipyerasmusvybavovacky',
    title: 'Erasmus vybavovačky krok za krokom',
    date: '16. máj 2020',
    dateCreated: '05. 16. 2020',
    description:
      'Podrobný rozpis o tom, ako prebieha prihlasovanie na Erasmus. Nezabudni, tie najdôležitejšie a najaktuálnejšie informácie nájdeš na webových stránkach svojej univerzity.',
    image: '/static/images/photosFull/Erasmus/ErasmusFlight.jpg',
    keywords: 'erasmus, erazmus, oulu, rady a tipy, prečo ísť na erazmus',
    categories: ['Európa', 'Rady a Tipy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Rady a tipy - Erasmus vybavovačky krok za krokom',
      },
      {
        component: 'h3',
        text: '1. Pozorne si naštuduj pokyny uvedené na webových stránkach tvojej univerzity',
      },
      {
        component: 'p',
        text: 'Tie najdôležitejšie a&nbsp;najaktuálnejšie informácie nájdeš na webových stránkach v&nbsp;zložke zahraničné cesty/ zahraničné pobyty/ výjazdy/ Eramus+.',
      },
      {
        component: 'h3',
        text: '2. Pozor na dôležité termíny',
      },
      {
        component: 'p',
        text: 'Skôr než sa vrhneš do akýchkoľvek vybavovačiek, zisti si dôležité termíny, aby si všetky potrebné dokumenty stihol odovzdať načas.',
      },
      {
        component: 'h3',
        text: '3. Výber hosťujúcej univerzity',
      },
      {
        component: 'p',
        text: 'Zo zoznamu partnerských univerzít (nájdeš na webových stránkach) máš možnosť vybrať si až 4 univerzity, na ktorých by si rád študoval počas svojho pobytu v zahraničí. Zoradíš ich podľa preferencii od 1-4. Môže sa stať, že si viac záujemcov si vyberie rovnakú univerzitu. Z&nbsp;kapacitných dôvodov sa všetci nemusia zmestiť na univerzitu, ktor je uvedená na prvom mieste a v&nbsp;tomto prípade môže byť vybraná nasledujúca univerzita. ',
      },
      {
        component: 'p',
        text: 'Dobre si naštuduj zoznam ponúkaných predmetov aby si potom nemal problém pri uznávaní kreditov za povinné predmety na tvojej univerzite.',
      },
      {
        component: 'h3',
        text: '4. Podanie prihlášky',
      },
      {
        component: 'p',
        text: 'Prihláška na Erasmus môže byť vyžadovaná v&nbsp;obidvoch formách – „papierová“ alebo online, prostredníctvom univerzitného informačného systému. V&nbsp;prihláške je nutné uviesť dĺžku študijného pobytu a&nbsp;informácie o&nbsp;hosťujúcej univerzite.',
      },
      {
        component: 'h3',
        text: '5. Skontaktuj sa s partnerskou univerzitou ',
      },
      {
        component: 'p',
        text: 'Zisti si čo najviac informácii o&nbsp;podmienach prijatia, požadovaných dokumentoch ale aj celkovo o priebehu&nbsp;štúdia. Odporúčame zistiť informácie o&nbsp;možnostiach ubytovania. Ubytovacie zariadenia zvyknú zaplniť svoju kapacitu veľmi rýchlo, tak nech nezostaneš neskôr zaskočený, že v&nbsp;univerzitnom kampuse nie je miesto. ',
      },
      {
        component: 'h3',
        text: '6. Potrebné dokumenty',
      },
      {
        component: 'p',
        text: 'Learning agreement (LA) –  stiahneš si ho na stránkach univerzity. Ide o&nbsp;plánovaný študijný program v&nbsp;rámci mobility, do ktorého zapisuješ zoznam predmetov, ktoré chceš počas tvojho pobytu študovať. Po ukončení mobility sa do neho zapisujú dosiahnuté výsledky, ktoré môžu slúžiť ako náhrada pri uznávaní predmetov v rámci domácej univerzity.',
      },
      {
        component: 'p',
        text: 'Musí byť podpísaný všetkými 3 stranami (tebou, domácou univerzitou, hosťujúcou univerzitou)',
      },
      {
        component: 'p',
        text: 'Transcript of records (nie je vždy podmienkou prihlášky) – ide o&nbsp;výpis absolvovaných predmetov na tvojej univerzite. Na požiadanie ti ho vytlačia na študijnom oddelení. ',
      },
      {
        component: 'p',
        text: 'Potvrdenie o&nbsp;poistení – niektoré školy môžu vyžadovať aj potvrdenie o&nbsp;cestovnom poistení, ktoré pokryje celý študijný pobyt. Poistenie určite odporúčame aj v&nbsp;prípade, že nie je vyžadované školou. Výška krytia samozrejme je samozrejme individuálna.',
      },
      {
        component: 'h3',
        text: '7. Jazykový test z anglického jazyka ',
      },
      {
        component: 'p',
        text: 'Nemusíš sa báť, nie je známkovaný a&nbsp;ani nijak sa ti nezarátava do tvojho študijného hodnotenia. Nie je nejak zvlášť náročný, povedala by som že je to úroveň B1 a&nbsp;je vo forme krúžkovacích a&nbsp;doplňovacích otázok. Absolvuješ ho dvakrát, na začiatku a&nbsp;na konci študijného pobytu, pre porovnanie tvojich jazykových schopností pred a&nbsp;po mobilite. ',
      },
      {
        component: 'h3',
        text: '8. Kontaktuj zahraničné oddelenie tvojej univerzity',
      },
      {
        component: 'p',
        text: 'V&nbsp;prípade akýchkoľvek otázok je najlepšie obrátiť sa na zahraničné oddelenie, kde ti poskytnú všetky dôležité informácie a&nbsp;zodpovedajú všetky otázky.',
      },
      {
        component: 'h3',
        text: '9. Absolventi študijného pobytu',
      },
      {
        component: 'p',
        text: 'Informácie z&nbsp;prvej ruky môžeš získať jedine od študentov, ktorí sa už mobility zúčastnili. Neváhaj ich osloviť. Môžeš získať cenné informácie neformálneho charakteru, o&nbsp;ktorých sa nedočítaš na žiadnych webových stránkach.',
      },
    ],
  },
  {
    _id: '',
    url: 'radyatipyusa',
    title: 'Cestovanie po USA: užitočné rady a tipy',
    date: '12. apríl 2020',
    dateCreated: '04. 12. 2020',
    description:
      'Ako môžeš kúpiť annual pass za najnižšiu cenu?  Čo sa oplatí/neoplatí? Jedny z mála otázok, na ktoré ti ponúkame odpovede v našich článkoch. Možno zopár z nich využiješ aj pri plánovaní tvojho výletu po USA.',
    image: '/static/images/photosFull/VoFRoad.jpg',
    // todo zmenit foto
    keywords:
      'cestovanie, amerika, cestovanie po amerike, rady a tipy, usa, roadtrip',
    categories: ['Amerika', 'Rady a Tipy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Cestovanie po USA: užitočné rady a tipy',
      },
      {
        component: 'p',
        text: 'Návšteva Spojeých štátov je sen nejedného cestovateľa. My sme už absolvovali dva veľké roadtripy po východnom aj západnom pobreží USA, vďaka čomu sme nadobudli cenné skúsenosti, o&nbsp;ktoré by sme sa s&nbsp;vami radi podelili. Ponúkame ti zopár užitočných rád a tipov, aby si predišiel zbytočným komplikáciám počas tvojho cestovania po USA.',
      },
      {
        component: 'h3',
        text: 'Plán cesty',
      },
      {
        component: 'p',
        text: 'Nie je nič jednoduchšie, ako sa zbaliť a&nbsp;vyraziť na cestu. My sme za spontánne nápady všetkými desiatimi, avšak v&nbsp;tomto prípade treba zvážiť svoje časové možnosti a&nbsp;tomu prispôsobiť aj celú prípravu. Nie nadarmo sa hovorí: „Dobre vypracovaný plán je polovica úspechu.“',
      },
      {
        component: 'p',
        text: 'Nie je podmienkou striktne dodržiavať každý bod programu, ale treba mať určitú predstavu o&bsp;miestach, ktoré by si rád navštívil. Stačí si načrtnúť stručný harmonogram, podľa ktorého sa budeš vedieť ľahšie orientovať a&nbsp;tomu prispôsobiť aj rezervácie ubytovania alebo kúpu lístkov na podujatia/atrakcie v&nbsp;dostatočnom predstihu. Zároveň budeš mať predstavu, koľko času potrebuješ na presun z&nbsp;jedného miesta na druhé.',
      },
      {
        component: 'h3',
        text: 'Auto',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTUSA2.jpg',
            name: 'RTUSA2',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Ak je zámerom tvojho cestovania spoznávanie, na presun jednoznačne odporúčame auto. Spravidla najväčšou položkou cestovateľkých výdajov býva práve jeho zapožičanie. Na lepšiu prehľadnosť sme sa rozhodli napísať samostatný článok a zdôrazniť najdôležitejšie body, na ktoré si treba dať pozor pri požičiavaní auta v Spojených štátoch. <a href="/blog/radyatipyusapozicanieauta">Požičiavanie auta v USA: kompletný sprievodca</a>',
      },
      {
        component: 'h3',
        text: 'Online lístky',
      },
      {
        component: 'p',
        text: 'S&nbsp;radou kúpiť lístky online si sa už určite stretol aj pri plánovaní iných výletov. Lístok kúpený online ti častokrát môže ušetriť nejaké tie drobné, ale čo je ešte dôležitejšie, ušetrí ti hromadu času. Vyhneš sa nekonečnému radu nervóznych ľudí pred vstupom a&nbsp;ušetrený čas môžeš yužiť zmysluplnejšie, napríklad na dobrom obede či kávičke. Je dôležité myslieť na to, že vychýrené atrakcie sú mesiace dopredu vybookované a&nbsp;šanca zohnať lístok na mieste je takmer nulová. Niektoré atrakcie sú dokonca také žiadané, že sa najprv prihlasuješ do online lotérie dúfajúc, že práve ty budeš ten šťastlivec, ktorému sa ujde miesto. ',
      },
      {
        component: 'h3',
        text: 'Ubytovanie',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTUSA3.jpg',
            name: 'RTUSA3',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Asi najbežnejším a&nbsp;najlacnejším spôsobom je Airbnb, ktoré aj my s&nbsp;obľubou využívame. Ceny sa líšia od mesta a&nbsp;od vzdialenosti od centra.',
      },
      {
        component: 'p',
        text: 'Ďalšími alternatívami sú couchsurfing, hotely, motely, ktoré odporúčame zarezervovať v&nbsp;dostatočnom predstihu, keď cena za izbu vie byť o&nbsp;niekoľko desiatok dolárov lacnejšia ako zakúpenie v&nbsp;daný deň. Aj pri využívaní lacnejších foriem ubytovania sa finálna cena za 2 – 3 týždne môže vyšplhať na celkom vysokú sumu.',
      },
      {
        component: 'p',
        text: 'Naším najlepším rozhodnutím bolo kempovanie. Nielenže sme ušetrili nemalé peniaze za ubytovanie, ale zažili sme aj to, čo nám (takmer) žiaden hotel ponúknuť nedokáže – prespávanie nie v&nbsp;päť-, ale miliónhviezdičkovom hoteli. Je to naozaj lukratívny zážitok, ktorý odporúčame všetkými desiatimi. ',
      },
      {
        component: 'p',
        text: 'V&nbsp;rámci národných parkov sa nachádza široká sieť kempingov, za ktoré sa platí minimálny alebo žiaden poplatok.',
      },
      {
        component: 'p',
        text: 'Väčšina z&nbsp;nich prevádzkuje sociálne zariadenia a&nbsp;dokonca aj sprchy (po celom dni únavného chodenia nie je lepšej investície ako tri doláre do osemminútovej teplej sprchy). Odporúčame stiahnuť si aplikáciu The Dyrt, ktorá zobrazuje prehľadnú mapu s&nbsp;vyznačenými lokalitami kempov naprieč USA.',
      },
      {
        component: 'p',
        text: 'Stan, spacáky, arimatky a všetky potrebné veci na kempovanie odporúčame nakúpiť vo Walmarte, v&nbsp;ktorom sa dá väčšina vecí po skončení výletu vrátiť bez ohľadu na miesto zakúpenia (platí aj pre rôzne pobočky vo všetkých štátoch v USA). Pokiaľ cestujete vo dvojici, môžete vyskúšať prespávať v&nbsp;aute, čo koniec koncov nie je také nekomfortné, ako sa na prvý pohľad zdá.',
      },
      {
        component: 'h3',
        text: 'Jedlo',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTUSA4.jpg',
            name: 'RTUSA4',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Čo sa týka low-cost spôsobu stravovania, popredné miesta výrazne obsadzujú fastfoody. Hamburger za 1 &#36;, hranolky za 1,3 &#36;, k&nbsp;tomu pollitra sýteného nápoja a&nbsp;obed máme za sebou. Pokiaľ sa rozhodneš pre túto alternatívu, naše odporúčania sú: Chick-fil-A, 5 guys, IHOP, Subway.',
      },
      {
        component: 'p',
        text: 'Strava v&nbsp;reštauráciách je celkom drahá záležitosť. Aj v&nbsp;cenovo prijateľných reštauráciách sa cena za jedlo pohybuje od 10 do 20 &#36;. Túto možnosť sme využívali naozaj zriedkavo.',
      },
      {
        component: 'p',
        text: 'Potraviny v&nbsp;supermarketoch sú cenovo prijateľné a&nbsp;vo väčších bchodných reťazcoch býva veľký výber. Nie je pravda, že Američanom sú pojmy zelenina a&nbsp;ovocie cudzie. Práve naopak, regály sú nimi preplnené a&nbsp;sú naozaj chutné a čerstvé. Kúpou potravín v&nbsp;supermarketoch si sám navolíš, ako bude vyzerať tvoja strava, na čo máš chuť a&nbsp;ešte k&nbsp;tomu päťkrát lacnejšie a zdravšie ako v&nbsp;reštauráciách.',
      },
      {
        component: 'h3',
        text: 'Sociálne siete',
      },
      {
        component: 'p',
        text: 'Sociálne siete sú plné skupín zameraných na cestovanie i cestovateľské rady a&nbsp;tipy. Študenti/waťaci/cestovatelia sa v&nbsp;nich delia o&nbsp;svoje zážitky a&nbsp;skúsenosti s&nbsp;ostatnými členmi. Ak aj ty si nevieš s&nbp;niečím poradiť alebo sa chceš o&nbsp;niečom informovať, častokrát je toto najrýchlejší spôsob, ako nájsť odpovede na svoje otázky. Alebo môžeš napísať rovno nám, radi ti poradíme.',
      },
      {
        component: 'p',
        text: 'Odporúčame pridať sa do: WAT USA, czech-us Work and Travel USA, Work and Travel USA, Work and Travel USA (J1 Visa International Help Group).',
      },
      {
        component: 'h3',
        text: 'Annual pass',
      },
      {
        component: 'p',
        text: 'V&nbsp;USA sú vstupy do národných parkov spoplatnené. Jednorazový vstup sa pohybuje okolo 35 – 50 &#36;.  ',
      },
      {
        component: 'p',
        text: 'Annual pass je preukaz, ktorý povoľuje vstup do väčšiny národných parkov bez ďalších poplatkov. Pokiaľ ho budeš kupovať priamo v&nbsp;USA, cena je 80 &#36; (stačí jeden do auta). Platí jeden rok od zakúpenia s&nbsp;tým, že oprávňuje mať dvoch držiteľov. Ak plánujete návštevu viacerých NP, Annual Pass určite odporúčame. ',
      },
      {
        component: 'p',
        text: 'Ako ho kúpiť najlacnejšie? Zakúp si AP, kým si doma. Väčšina waťákov po skončení ich zážitkového leta predáva ten svoj prostredníctvom facebookových skupín, ktoré sme zmienili už vyšši, za 40 - 50 &#36; priamo v SR alebo v&nbsp;ČR.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'RTUSAAP1',
            src: '/static/images/photosFull/RTUSAAP1.jpg',
          },
          {
            name: 'RTUSAAP2',
            src: '/static/images/photosFull/RTUSAAP2.jpg',
          },
        ],
      },
    ],
  },

  {
    _id: '',
    url: 'radyatipyusapozicanieauta',
    title: 'Požičiavanie auta v USA: kompletný sprievodca',
    date: '12. apríl 2020',
    dateCreated: '04. 12. 2020',
    description:
      'Čo všetko potrebuješ, aby si si mohol požičať auto? Koľko stojí požičanie auta keď ešte nemáš 25 rokov? Koľko stojí nafta v USA? Aj na tieto otázky nájdeš odpoveď práve v tomto článku.',
    keywords:
      'roadtrip, usa, požičanie auta, lowcost cestovanie, kemping, glamping',
    image: '/static/images/photosFull/RTUSA2.jpg',
    categories: ['Amerika', 'Rady a Tipy'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Požičiavanie auta v USA: kompletný sprievodca',
      },
      {
        component: 'p',
        text: 'Pokiaľ plánuješ cestovanie po USA a chceš sa zamerať na spoznávanie, auto je najlepšou voľbou pre pohodlný a flexibilný presun. Tu sú všetky dôležité informácie, ktoré potrebuješ vedieť pri požičiavaní auta v USA.',
      },
      {
        component: 'h3',
        text: 'Cesty',
      },
      {
        component: 'p',
        text: 'V USA sú jedny z najkvalitnejšie spravených diaľnic, na akých sme doposiaľ jazdili. Cesty sú dlhé, rovné a široké, vďaka čomu je zabezpečená plynulá premávka. Napriek tomu je tam zavedené obmedzenie rýchlosti na 110km/hod.',
      },
      {
        component: 'p',
        text: 'Šoférovanie vo veľkých mestách ako Los Angeles či Denver už takým pôžitkom nebolo. Veľa áut, neohľaduplní vodiči, sedemprúdové cesty a dlhé kolóny, boli pre nás (hlavne pre Liv) veľmi stresujúce.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTUSA2.jpg',
            name: 'RTUSA2',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Čo budeš potrebovať na požičanie auta',
      },
      {
        component: 'p',
        text: '<ul><li><b>Medzinárodný vodičský preukaz:</b> je nevyhnutný pre identifikáciu a prevádzkovanie auta. Skontroluj, či je platný v štátoch, ktoré navštíviš.</li><li><b>Pas:</b> potrebný na overenie tvojej identity pri prenájme auta.</li><li><b>Kreditná karta:</b> výhoda kreditnej karty je najmä pri požičiavaní auta, vďaka ktorej požičovne nevyžadujú dodatočné poplatky za poistenie.</li><li><b>Číslo spiatočnej letenky: </b>môže byť požadované pri registrácii auta, ale aj pri pasovej kontrole pri vstupe do USA.</li></ul>',
      },
      {
        component: 'h3',
        text: 'Rezervácia auta',
      },
      {
        component: 'p',
        text: '<ul><li>Rezerváciu je najlepšie vykonať online prostredníctvom webových stránok požičovní. Odporúča sa rezervovať auto 2-3 mesiace vopred na zabezpečenie najlepších cien.</li><li>Ceny sa pohybujú od 10 do 130 USD za deň v závislosti od typu auta a počtu dní prenájmu; dlhšie prenájmy zvyčajne znamenajú nižšiu cenu za deň.</li><li>Medzi obľúbené spoločnosti na prenájom áut patria Alamo, Enterprise, National, Dollar a Sixt. Porovnaj ich ponuky pomocou online nástrojov na porovnávanie cien a služieb.</li></ul>',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTCAR1.jpg',
            name: 'RTCAR1',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'h3',
        text: 'Poplatky a poistenie',
      },
      {
        component: 'p',
        text: '<ul><li><b>Poplatok za mladého vodiča:</b> pre vodičov mladších ako 25 rokov je poplatok približne 20 USD za deň; vodiči mladší ako 21 rokov môžu čeliť ešte vyšším poplatkom alebo môžu mať problémy s prenájmom auta.</li><li><b>Poplatky za ďalších vodičov:</b> za každého ďalšieho vodiča sa zvyčajne účtuje 13USD za deň. Je dôležité nahlásiť všetkých vodičov pri rezervácii, aby si sa vyhol problémom a pokutám.</li><li><b>Poistenie:</b> poistenie je v USA dobrovoľné, ale odporúča sa vybaviť si plné krytie. Zváž zahrnúť krytie na odťahovanie, opravy a zodpovednosť za škody. Bez poistenia môžu byť náklady na odťahovanie a opravy veľmi vysoké (150-300 USD za odťah, 400-600 USD za servis).</li></ul>',
      },
      {
        component: 'h3',
        text: 'Vybavenie auta',
      },
      {
        component: 'p',
        text: '<ul><li>V USA väčšina áut má automatickú prevodovku a klimatizáciu, ktorá je veľmi dôležitá.</li><li>Ak nemáš vlastnú navigáciu, môžeš si ju požičať za poplatok. Skontroluj, či má auto aj USB porty a ďalšie vybavenie, ktoré môžeš potrebovať.</li><li><b>E-Z Pass:</b> Tento elektronický systém na platenie mýta je bežný na východnom pobreží USA. Ak plánuješ cestovanie v týchto oblastiach, zisti, či má auto tento systém alebo si ho môžeš prenajať.</li></ul>',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/RTCAR2.jpg',
            name: 'RTCAR2',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'h3',
        text: 'Cesty a ceny nafty',
      },
      {
        component: 'p',
        text: '<ul><li>Cesty v USA sú známe svojou kvalitou: dlhé, rovné a široké s obmedzením rýchlosti väčšinou na 110 km/h. Avšak, jazda v veľkých mestách môže byť náročná kvôli hustej premávke a kolónam.</li><li>Cena nafty sa pohybuje medzi 2,79 a 4,5 USD za galón, pričom ceny sú vyššie v Kalifornii a nižšie na Floride. V odľahlých oblastiach sú pumpy menej časté a cena nafty môže byť vyššia.</li><li><b>Tip:</b> Maj so sebou rezervnú bandasku na naftu pre prípad núdze, najmä ak plánuješ cestovať do menej osídlených oblastí.</li></ul>',
      },
      {
        component: 'h3',
        text: 'Alkohol v aute',
      },
      {
        component: 'p',
        text: '<ul><li>Šoférovanie pod vplyvom alkoholu je v USA považované za závažný trestný čin, a to aj pre cestujúcich s alkoholom v otvorených nádobách. Pokuty sú vysoké a pravidlá sú prísne, preto sa uistite, že sa vyhýbaš porušovaniu tohto zákona.</li></ul>',
      },
      {
        component: 'h3',
        text: 'Vrátenie auta',
      },
      {
        component: 'p',
        text: '<ul><li>Mnoho požičovní umožňuje vrátenie auta na inej pobočke ako je miesto, kde si auto vyzdvihol, čo môže byť veľmi praktické pre flexibilitu v cestovaní. Uvedom si však, že táto služba môže byť spoplatnená, aj keď poplatok je zvyčajne nízky.</li></ul>',
      },
      {
        component: 'h3',
        text: 'Naše skúsenosti',
      },
      {
        component: 'p',
        text: '<ul><li><b>Alamo:</b> Vďaka ISIC zľave sme ušetrili na poplatkoch za mladého a druhého vodiča, získali plnú nádrž a možnosť vrátiť auto na inej pobočke – výhodný deal!</li><li><b>Enterprise:</b> Získali sme auto vyššej kategórie bez dodatočných nákladov vďaka ústretovosti pracovníka.</li></ul>',
      },
    ],
  },
  {
    _id: '',
    url: 'velkofatranskamagistrala',
    title: 'Veľkofatranská magistrála',
    date: '12. júl 2020',
    dateCreated: '07. 12. 2020',
    description:
      'Článok o tom, čo sme zažili počas túry cez Veľkofatranskú magistrálu. Dvanásť kilové batohy na chrbtoch. Krvopotne odmakané kilometre. V daždi, v hmle. Cez deň, ale aj za tmy. Výškové prevýšenie by sme prirovnali k húsenkovej drahé. Prudko hore-dole, až človeku príde nevoľno 😀. Podarilo sa nám pokoriť Veľkofatranskú magistrálu (Ľubochňa-Turecká) dlhú 46km a s celkovým prevýšením 2 500m.',
    image: '/static/images/photosFull/VFPloskaBorisovUs.jpg',
    keywords:
      'veľkofatranská magistrála, ľubochňa, krížna, ostredok, borišov, turistika, viacdenná turistika',
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    isPublished: true,
    content: [
      {
        component: 'h2',
        text: 'Veľkofatranská magistrála',
      },
      {
        component: 'p',
        text: 'Toto leto sa chystáme pokoriť jednu z&nbsp;najnáročnejších výziev, akej sme doposiaľ čelili. Chceme zdolať najdlhšiu turistickú magistrálu na území Slovenska – Cestu hrdinov SNP. Trasa má približne 780 km. Je to ako ísť z&nbsp;Banskej Bystrice do Plzne, len s&nbsp;tým rozdielom, že na Cest hrdinov SNP je celkové prevýšenie 30&nbsp;000 metrov. ',
      },
      {
        component: 'p',
        text: 'Tie čísla vzbudzujú rešpekt. Nechceli sme preto nič podceniť a&nbsp;všetko sme si dômyselne naplánovali. Príprava je v&nbsp;plnom prúde a jednou z&nbsp;jej hlavných fáz bolo zdolať Veľkofatranskú magistrálu. Ide o&nbsp;moju prvú dvojdňovú turistiku s&nbsp;prespávaním v&nbsp;stane, kde som razom pochopila, že toto veru nebude med lízať. Trasu so začiatkom v&nbsp;obci Ľubochňa a&nbsp;s&nbsp;koncom v&nbsp;obci Turecká s celkovou dĺžkou 46 km sa nám podarilo zvládnuť za dva dni. ',
      },
      {
        component: 'h3',
        text: '1. Deň (Ľubochňa – Jarabiná)',
      },
      {
        component: 'p',
        text: 'Batohy sme naplnili tak, že praskali vo švíkoch. Vážili približne štrnásť kíl. Nevieme, ktoré veci sú nevyhnutné, a&nbsp;tak radšej berieme všetko. ',
      },
      {
        component: 'p',
        text: 'Čo všetko je súčasťou našej výbavy, sa môžeš dočítať v&nbsp;nasledujúcom článku .....Pripravujeme.....',
      },
      {
        component: 'p',
        text: 'Plní entuziazmu sme ráno o&nbsp;siedmej nasadli na vlak a&nbsp;o&nbsp;dve hodiny vystúpili v&nbsp;obci Ľubochňa. Začíname. Rýchlo dopĺňame sily na kávičke a&nbsp;predstavujem si to, čo nás najbližšie dni čaká. Náš dnešný cieľ je vrch Malý Lysec vzdialený približne 21 km.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFLubochna.jpg',
            name: 'VFLubochna',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Po prejdení Ľubochnianskej doliny nás privítalo prudké stúpanie na vrch hrebeňa Veľkej Fatry. Očakávali sme nádherné výhľady, ale na naše prekvapenie sa nič nekonalo. Prvá polovica trasy vedie cez hustý les, ktorý ledva prepustil pár lúčov svetla. Naša najpoužívanejšia veta bola: „Je to tu ako v&nbsp;džungli!“ pretože celý čas sme sa brodili húštinou cez popadané stromy, blato a&nbsp;šmykľavý terén. Na niektorých úsekoch bola cesta veľmi zle značená a&nbsp;ťažko priechodná.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'VFDzungle',
            src: '/static/images/photosFull/VFDzungle.jpg',
          },
          {
            name: 'VFDzungle3',
            src: '/static/images/photosFull/VFDzungle3.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFDzungle2.jpg',
            name: 'VFDzungle2',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Prvým vyhliadkovým bodom na našej trase bol vrch Kľak. Cez hustú trávu sme totižto nevideli, kam stúpame. Urobili sme dva kroky hore, ale tri dolu. Pri stúpaní na vrchol sme si poriadne pohundrali. A&nbsp;keď poviem, že aj Dan, tak to už naozaj muselo byť veľmi zlé. Keď sa nám podarilo dostať na vrchol Kľaku, žiaden výhľad na okolitú krajinu sa neodohral. Na zem sadla taká hustá hmla, že sme nevideli ani na meter pred seba. ',
      },
      {
        component: 'p',
        text: 'Náročné to bolo nielen po fyzickej stránke, ale najmä po psychickej. Veľkou chybou bolo, že za celý deň sme si nespravili jedinú dlhšiu prestávku. Sily nám rapídne ubúdali a&nbsp;nechuť pokračovať v&nbsp;chôdzi stúpala. ',
      },
      {
        component: 'p',
        text: 'Cieľom dňa bol už spomínaný Malý Lysec, ktorý sa nám, žiaľ, nepodarilo splniť. Po 18 km dnešnú turistiku ukončujeme. Vyčerpaní a&nbsp;hladní sme zakempovali na vrchu Jarabiná. Stan sme si rozložili na okraji lesa medzi čučoriedkovými kríkmi. Dnes už nespravím ani krok navyše. Dokelu, voda! Treba doplniť zásoby. Šťastie v&nbsp;nešťastí bolo, že zdroj pitnej vody, ktorý nám poslúžil aj ako provizórna sprcha, sa nachádzal len 350 m od nás. Nenastalo žiadne prekvapenie, že sme sa k&nbsp;nemu museli brodiť hustými kriakmi a&nbsp;vysokou trávou. Nabudúce už budeme vedieť, že je potrebné pribaliť si mačetu či rovno motorovú pílu.',
      },
      {
        component: 'img',
        src: [
          {
            name: 'VFKlak',
            src: '/static/images/photosFull/VFKlak.jpg',
          },
          {
            name: 'VFZapad',
            src: '/static/images/photosFull/VFZapad.jpg',
          },
        ],
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFStan.jpg',
            name: 'VFStan',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Hostina v podobe wifonky a&nbsp;kávičky bola priam kráľovská. Nasýtení a „voňaví“ sa ukladáme spať niečo po deviatej hodine. Len čo sme zatvorili stan, začuli sme pravidelné šuchotanie kríkov len pár metro od našich hláv. Vietor to nemohol byť, pretože po chvíli sa k&nbsp;šuchotaniu pridalo aj tlmené dupanie. Krv nám stuhla v&nbsp;žilách. Naozaj som na 30 sekúnd prestala dýchať. Čo teraz? Máme začať robiť hluk? Byť ticho? Kričať o&nbsp;pomoc? ',
      },
      {
        component: 'p',
        text: 'Ostali sme ticho. Dan mal šialený nápad, že sa ide pozrieť von a&nbsp;zistiť, kto prišiel na návštevu, ale v&nbsp;momente som ho zahriakla, že ho nikam nepustím. Dedukujeme, že nám prišli robiť spoločnosť srny, ktoré okupovali náš stan až do samého rána. Podarilo sa nám zaspať niečo po tretej hodine.',
      },
      {
        component: 'h3',
        text: '2. Deň (Jarabiná – Turecká)',
      },
      {
        component: 'p',
        text: 'Budíček sme mali natiahnutý na piatu ráno. Tajne sme dúfali, že stihneme východ slnka. Po nočnom dobrodružstve sme však neboli schopní vstať skôr ako o&nbsp;siedmej. Čo je na naše pomery aj tak slušný výkon. ',
      },
      {
        component: 'p',
        text: 'Opatrne vyliezame zo stanu a&nbsp;Dan kontroluje okolie. Čisté. Pomaly ho nasledujem a&nbsp;teším sa na ranné lúče, ktoré symbolizujú začiatok úspešného dňa. Na moje sklamanie jediná vec, ktorá nám „spríjemňuje“ ráno, je hustá mliečna hmla, ktorá dodala tomuto miestu hororový nádych. ',
      },
      {
        component: 'p',
        text: 'Bez raňajok sa vydávame opäť na cestu. Brodenie džungľou sa nekončí. Nasledovala strmá cesta dolu, na ktorej sa nám párkrát podarilo zísť z&nbsp;chodníka. Našťastie má Dan výborné orientačné zmysly a&nbsp;cestu sa mu vždy podarilo nájsť. Ja by som bola dávno stratená. Asi by som doteraz sedela na voľajakom pníku a&nbsp;čakala na záchranu.',
      },
      {
        component: 'p',
        text: 'Okolo 10:00 sme dorazili na náš včerajší plánovaný cieľ – Malý Lysec. Hmla sa nadobro vyparila a&nbsp;my si konečne vychutnávame výhľad na okolitú prírodu. Vyťahujeme varič a&nbsp;pripravujeme si raňajky à la „čo batoh dá.“ Ovsená kaša s&nbsp;rozpučeným banánom a&nbsp;ryžovými čokochlebíčkami – to bola dobrota. ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFBreakfast.jpg',
            name: 'VFBreakfast',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Práve tu nastal zlomový okamih a&nbsp;nevyhnutné rozhodovanie. Pokračujeme ďalej po Veľkofatranskej magistrále, na ktorej nás čaká ešte 20 km, alebo to tu zabalíme a&nbsp;v&nbsp;najbližšej dedine (Belá-Dulice cca 11 km) nasadáme na autobus a&nbsp;fičíme domov. Bola to ťažká dilema, ale zhodnotili sme, že predošlú časť trasy si tak skoro zopakovať nemienime, takže sme sa zaťali, že dnes to dotiahneme do konca, aj keby padali traktory. ',
      },
      {
        component: 'p',
        text: 'Pri rázcestníku sme ešte na malý moment zaváhali, či predsa ten autobus nebude lepšou voľbou. Po pár minútach kráčania sme už vedeli, že sme spravili dobré rozhodnutie. Terén sa zmenil o&nbsp;180° a&nbsp;z&nbsp;húštiny sa stala nádherná prechádzka lesnou alejou. Stretli sme aj pár ďalších dobrodruhov, s&nbsp;ktorými sme sa podelili o&nbsp;náš včerajší zážitok.  ',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFPloskaBorisov.jpg',
            name: 'VFPloskaBorisov',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFPloskaBorisovUs.jpg',
            name: 'VFPloskaBorisovUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Obednú prestávku si robíme na Chate pod Borišovom, kde sa to hemžilo veselými turistami. Pôvodne sme mali v&nbsp;pláne navariť si cestoviny s&nbsp;tuniakom, ale vôňa kapustnice nás veľmi rýchlo presvedčila. Spolu s&nbsp;pollitrovou kofolou sme ich zhltli na jeden šup.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFBorisovLiv.jpg',
            name: 'VFBorisovLiv',
          },
        ],
        class: 'articlePicturePortrait',
      },
      {
        component: 'p',
        text: 'Pre menší časový sklz sme sa rozhodli výstup na Ploskú vynechať a&nbsp;pokračovali sme priamo na Ostredok – najvyšší vrchol Veľkej Fatry. Po jeho zdolaní sme šmarili ruksaky na zem a&nbsp;úplne vyšťavení sme ležali dolu pupkom a&nbsp;nečerpávali sily.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFOstredokLiv.jpg',
            name: 'VFOstredokLiv',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFOstredokDan.jpg',
            name: 'VFOstredokDan',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFOstredokUs.jpg',
            name: 'VFOstredokUs',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Predposlednou zastávkou na našej ceste bola Krížna, cez ktorú prechádza aj Cesta hrdinov SNP. Nohy už máme úplne ubolené. Každý si šúcha svoje otlaky a&nbsp;zbiera posledné kúsky síl na strmý 5 km dlhý zostup, ktorý nás delí od vytúženého cieľa. Čo je pre nás najlepším dopingom? No predsa kávička. Vyťahujeme varič a&nbsp;po pár minútach si ju vychutnávame s&nbsp;výhľadom na našu milovanú Banskú Bystricu.',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFKrizna.jpg',
            name: 'VFKrizna',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'img',
        src: [
          {
            src: '/static/images/photosFull/VFKriznacoffe.jpg',
            name: 'VFKriznacoffe',
          },
        ],
        class: 'articlePictureLandscape',
      },
      {
        component: 'p',
        text: 'Pred odchodom z&nbsp;Krížnej sa ešte poslednýkrát obzrieme za chrbát. Hľadáme vrcholky kopcov, po ktorých sme kráčali, a&nbsp;pomenúvame ich. Na mnohé z&nbsp;nich ani nedovidíme. Teraz sa zdajú také maličké, avšak dali nám poriadne zabrať. Nech nadávame po ceste akokoľvek, na vrchole vždy pochopíme, že tvrdá drina stojí za to.',
      },
      {
        component: 'p',
        text: 'Pomaly kráčame dolu a&nbsp;naše kolená dostávajú poriadne zabrať. Najradšej by sme sa tým kopcom už len skotúľali priamo do auta. Na poslednej rovinke sme sa cítili ako Usain Bolt, keď prebieha cieľovou čiarou. Zvládli sme to! Zdolali sme Veľkofatranskú magistrálu. Za dva dni sme prešli 46 km na nastúpali 2&nbsp;500 výškových metrov. Sme na seba hrdí.',
      },
    ],
  },
];
