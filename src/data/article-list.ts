import { Article } from '@/store/Article/Article.types';

export function sortArticlesByDate(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    const da = a.publishedAt ?? a.createdAt;
    const db = b.publishedAt ?? b.createdAt;
    return +new Date(db) - +new Date(da);
  });
}

export const ArticleList: Article[] = [
  {
    _id: '',
    slug: 'najkrajsie-vyhlady-na-bali',
    title:
      'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
    description:
      'Ostrov Bali v Indonézii, známy aj ako „Ostrov bohov,“ ponúka množstvo nádherných miest s úchvatnými výhľadmi. Pre tých, ktorí milujú panoramatické scenérie, východy a západy slnka, je Bali skutočným rajom. V tomto článku vám dáme tipy na päť (must visit) miest, ktoré by ste nemali vynechať, pokiaľ si chcete vychutnať jedny z najočarujúcejších miest na Bali.',
    hero: {
      src: '/static/images/photosFull/BaliLahanganPointing.jpg',
      alt: 'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
      width: 4413,
      height: 2482,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//zWm6tX/v94XRfpzyAr4yAhoG6jrqTJwAAAyJgK1BHsFUUAAAAASUVORK5CYII=',
    },
    categories: ['Ázia', 'Rady a Tipy', 'Hiking'],
    keywords: [
      'bali',
      'vyhlady na bali',
      'zapady slnka na bali',
      'vychody slnka na bali',
      'turistika na bali',
      'foto miesta na bali',
      'instagramové miesta na bali',
      'bali instagram',
    ],
    status: 'published',
    publishedAt: '2024-07-08T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2024-07-08T12:00:00.000Z',
    updatedAt: '2024-07-08T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '306baa3b7308',
        level: 2,
        spans: [
          {
            text: 'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e5cfefe8bb2f',
        spans: [
          {
            text: 'Ostrov Bali v Indonézii, známy aj ako „Ostrov bohov,“ ponúka množstvo nádherných miest s úchvatnými výhľadmi. Pre tých, ktorí milujú panoramatické scenérie, východy a západy slnka, je Bali skutočným rajom. V tomto článku vám dáme tipy na päť (must visit) miest, ktoré by ste nemali vynechať, pokiaľ si chcete vychutnať jedny z najočarujúcejších miest na Bali.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'ff119712745d',
        level: 3,
        spans: [
          {
            text: '1. Lahangan Sweet',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9184199aad23',
        spans: [
          {
            text: 'Lahangan Sweet je menej známe, ale rýchlo sa stávajúce populárne miesto pre nádherné výhľady na Bali. Nachádza sa v oblasti Karangasem a ponúka pokoj a nádherné panoramatické scenérie.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '835b4280f92e',
        spans: [
          {
            text: 'Prečo navštíviť:',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'list',
        _key: '61042ea2940a',
        style: 'bullet',
        items: [
          [
            {
              text: 'Pokojné prostredie:',
              marks: ['bold'],
            },
            {
              text: ' Lahangan Sweet je ideálnym miestom pre tých, ktorí hľadajú únik od turistického ruchu. Môžete tu relaxovať a užívať si kľud a krásu prírody.',
            },
          ],
          [
            {
              text: 'Výhľad na horu Agung:',
              marks: ['bold'],
            },
            {
              text: ' Jedným z hlavných lákadiel je úžasný výhľad na majestátnu horu Agung. Pohľad na túto posvätnú horu, obklopenú zeleňou a dedinami, je fascinujúci, najmä pri západe slnka.',
            },
          ],
          [
            {
              text: 'Fotografické príležitosti:',
              marks: ['bold'],
            },
            {
              text: ' Lahangan Sweet je obľúbené medzi fotografmi vďaka svojim jedinečným výhľadom a fotogenickým miestam, vrátane hojdačiek a bambusových plošín, ktoré ponúkajú dokonalý rám pre vaše fotografie.',
            },
          ],
        ],
      },
      {
        _type: 'image',
        _key: '74ac7c8d2f35',
        asset: {
          src: '/static/images/photosFull/BaliLahanganPointing.jpg',
          alt: 'Najkrajšie výhľady na Bali: západy a východy slnka, ktoré vás očaria',
          width: 4413,
          height: 2482,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//zWm6tX/v94XRfpzyAr4yAhoG6jrqTJwAAAyJgK1BHsFUUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '29af7ed6a7ce',
        level: 3,
        spans: [
          {
            text: '2. Campuhan Ridge Walk',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cf7be1accfa0',
        spans: [
          {
            text: 'Campuhan Ridge Walk je obľúbenou turistickou trasou v srdci Ubudu, ktorá ponúka nádherné výhľady na okolité údolia a ryžové polia.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e8f3504dcfee',
        spans: [
          {
            text: 'Prečo navštíviť:',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'list',
        _key: '5633e2da2381',
        style: 'bullet',
        items: [
          [
            {
              text: 'Malebná prechádzka: ',
              marks: ['bold'],
            },
            {
              text: 'Trasa je ideálna na rannú alebo večernú prechádzku, keď je slnko nízko a svetlo je mäkké a zlatisté. Pohľad na zelené kopce a údolia je skutočne upokojujúci.',
            },
          ],
          [
            {
              text: 'Blízko Ubudu:',
              marks: ['bold'],
            },
            {
              text: ' Nachádza sa len kúsok od centra Ubudu, čo z neho robí ľahko dostupné miesto pre turistov, ktorí chcú uniknúť z mestského ruchu.',
            },
          ],
          [
            {
              text: 'Kaviarne a reštaurácie: ',
              marks: ['bold'],
            },
            {
              text: 'Po prechádzke môžete navštíviť niektorú z okolitých kaviarní alebo reštaurácií, kde si môžete vychutnať osviežujúci nápoj alebo chutné jedlo s nádherným výhľadom.',
            },
          ],
        ],
      },
      {
        _type: 'imagePair',
        _key: '72ff7890efe0',
        left: {
          src: '/static/images/photosFull/BaliCampuhanRidgeWalk.jpg',
          alt: 'BaliCapunhanRidgeWalk',
          width: 667,
          height: 1000,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOTl5Ojr6////wCqs6iYoIyntpYAFSwAGikAABEAAB46AD5ADispAcVFD/O/GTEiAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/BaliCampuhanPool.jpg',
          alt: 'BaliCapunhanPool',
          width: 667,
          height: 1000,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMjS1OHz/e3//wA8ORhbVkFWVzoAIiQFQDsnDQgAAKKtqZmoobC7vYTnEZXZrRQlAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'heading',
        _key: 'daba718ca412',
        level: 3,
        spans: [
          {
            text: '3. Tegallalang Rice Terrace',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'b6776e194130',
        spans: [
          {
            text: 'Tegallalang Rice Terrace je jedným z najznámejších a najfotogenickejších miest na Bali. Nachádza sa v blízkosti Ubudu a ponúka nádherné výhľady na terasovité ryžové polia.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ac93a77e52f8',
        spans: [
          {
            text: 'Prečo navštíviť:',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'list',
        _key: 'bdfa455a0c90',
        style: 'bullet',
        items: [
          [
            {
              text: 'Nádherné scenérie:',
              marks: ['bold'],
            },
            {
              text: ' Tegallalang ponúka úchvatný pohľad na zelené ryžové polia usporiadané do terás, ktoré sa tiahnú do diaľky. Pohľad na tieto terasy, najmä pri východe alebo západe slnka, je skutočne nádherný.',
            },
          ],
          [
            {
              text: 'Kultúrne zážitky:',
              marks: ['bold'],
            },
            {
              text: ' Návšteva Tegallalang vám poskytne aj pohľad do života miestnych farmárov, ktorí pracujú na poliach. Môžete sa tiež dozvedieť viac o tradičných poľnohospodárskych technikách, ktoré sa na Bali používajú po stáročia.',
            },
          ],
          [
            {
              text: 'Fotografické príležitosti:',
              marks: ['bold'],
            },
            {
              text: ' Tegallalang je obľúbené miesto pre fotografov vďaka svojim malebným výhľadom a jedinečným terasám. Mnoho návštevníkov sa tu zastaví, aby si urobili krásne fotografie, ktoré zachytávajú krásu balijskej krajiny.',
            },
          ],
        ],
      },
      {
        _type: 'imagePair',
        _key: 'f0588646009a',
        left: {
          src: '/static/images/photosFull/BaliRiceFieldsUs.jpg',
          alt: 'BaliRiceFieldsUs',
          width: 800,
          height: 1000,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO48/DKj/8/DpzYxqCgJxiaqGFow8Agochg7cLAyMvAEJ0c3dldwS/BAABXegz7FgthHwAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/BaliRiceFieldsHatLiv.jpg',
          alt: 'BaliRiceFieldsHatLiv',
          width: 800,
          height: 1000,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNYv7z1/79PF4+vZzCxYwwKMGTgZmCwdWGY1B1TUevB4GyhWBhre279DABWiQ9WWLtc/AAAAABJRU5ErkJggg==',
        },
      },
      {
        _type: 'heading',
        _key: 'ff2b16b98dba',
        level: 3,
        spans: [
          {
            text: '4. Východ slnka na hore Batur',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c233aca6d1d7',
        spans: [
          {
            text: 'Hora Batur je aktívny vulkán nachádzajúci sa v severovýchodnej časti Bali a je jedným z najpopulárnejších miest na ostrove pre turistov, ktorí milujú dobrodružstvo a nádherné výhľady. Vyjsť na Batur bez sprievodcu je prakticky nemožné. My sme sa o to pokúsili, ale všetky cestičky na vrchol sú pod sú pod prísnym dohľadom miestnych obyvateľov, ktorých sme nazvali Batúrska mafia. Ich hlavnou snahou je vytiahnuť od turistov, čo najviac peňazí. Sú teda len dve možnosti ako sa dostať na vrchol. Prvá je, že si zarezervujete výlet online, v rámci ktorého dostanete balík služieb, vrátane odvozu/dovozu z hotela, „služby“ sprievodcu pri výstupe, malé občerstvenie na vrchole. Cena takéhoto balíku sa pohybuje okolo 30€/osoba. Druhá možnosť, ktorú sme zvolili aj my, je, že sa vydáte na horu po vlastnej réžii. Mali sme so sebou len malý obnos hotovosti (20€) a tvárili sme sa, že sme netušili, že sa bez sprievodcu nedá vyjsť. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ea02b7bb6151',
        spans: [
          {
            text: 'Prečo navštíviť:',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'list',
        _key: '86fa892d3129',
        style: 'bullet',
        items: [
          [
            {
              text: 'Východ slnka:',
              marks: ['bold'],
            },
            {
              text: ' Výstup na vrchol hory Batur začína ešte za tmy, aby ste mohli zažiť úchvatný východ slnka. Keď sa obloha začína zafarbovať do oranžových a ružových odtieňov, pohľad na vychádzajúce slnko nad Balijským morom a okolité hory je nezabudnuteľný.',
            },
          ],
          [
            {
              text: 'Panoramatický výhľad:',
              marks: ['bold'],
            },
            {
              text: ' Z vrcholu Baturu môžete vidieť aj jazero Batur, ktoré sa nachádza v kráteri vulkánu. Pohľad na jazero zhora, obklopené zeleňou a so stúpajúcou parou z teplých prameňov, je skutočne magický.',
            },
          ],
          [
            {
              text: 'Dobrodružný zážitok:',
              marks: ['bold'],
            },
            {
              text: ' Výstup je stredne náročný a trvá približne dve hodiny. Cesta vedie cez rôzne terény, vrátane lesov a skalnatých úsekov, čo robí tento zážitok ešte vzrušujúcejším.',
            },
          ],
        ],
      },
      {
        _type: 'image',
        _key: '1ff17c72e21d',
        asset: {
          src: '/static/images/photosFull/BaliSunriseBaturs.jpg',
          alt: 'BaliSunriseBaturs',
          width: 1000,
          height: 667,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+3s/xvbHlw4svXAcQZ3G2VHHQl1OS5mBgYA01QLfUVX8K4AAAAASUVORK5CYII=',
        },
        aspect: 'auto',
      },
      {
        _type: 'heading',
        _key: '2cc79af6b207',
        level: 3,
        spans: [
          {
            text: '5. Východ slnka na hore Agung',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '56e730de7995',
        spans: [
          {
            text: 'Mount Agung je najvyšším vrcholom na Bali a je považovaná za posvätnú horu, ktorá hrá dôležitú úlohu v balijskej kultúre a náboženstve.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'b9d13cbf692d',
        spans: [
          {
            text: 'Prečo navštíviť:',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'list',
        _key: 'a70fa8f8cd9c',
        style: 'bullet',
        items: [
          [
            {
              text: 'Úchvatné scenérie:',
              marks: ['bold'],
            },
            {
              text: ' Východ slnka z hory Agung ponúka jedinečný pohľad na celý ostrov Bali, vrátane hory Batur a Lomboku na horizonte. Slnko stúpajúce nad horizontom a postupne osvetľujúce ostrov je zážitok, ktorý sa vryje do pamäti.',
            },
          ],
          [
            {
              text: 'Duchovný význam:',
              marks: ['bold'],
            },
            {
              text: ' Pre mnohých Balijčanov je hora Agung miestom duchovného významu. Výstup na horu nie je len fyzickým, ale aj duchovným zážitkom.',
            },
          ],
          [
            {
              text: 'Výzva pre horolezcov:',
              marks: ['bold'],
            },
            {
              text: ' Výstup na Agung je náročnejší ako na Batur a vyžaduje dobrú fyzickú kondíciu. Cesta začína v noci a trvá približne šesť až sedem hodín. Odmenou za námahu je úžasný výhľad z vrcholu.',
            },
          ],
        ],
      },
      {
        _type: 'image',
        _key: '4aaad9178b36',
        asset: {
          src: '/static/images/photosFull/BaliAgungView.jpg',
          alt: 'BaliAgungView',
          width: 1000,
          height: 667,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4/eX/odNPL93/9vXbfwZzLU1zLQ0zTVVJJgYA4JoMlEGfnFwAAAAASUVORK5CYII=',
        },
        aspect: 'auto',
      },
      {
        _type: 'heading',
        _key: '179815d1ece4',
        level: 3,
        spans: [
          {
            text: 'Tipy na návštevu',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '24978a66d451',
        spans: [
          {
            text: 'Pripravte sa:',
            marks: ['bold'],
          },
          {
            text: ' Nezabudnite si vziať teplé oblečenie, keďže teploty na vrcholoch môžu byť nízke, najmä pred východom slnka. Tiež si nezabudnite vziať dostatok vody a občerstvenia.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f997b62d1560',
        spans: [
          {
            text: 'Sprevádzači:',
            marks: ['bold'],
          },
          {
            text: ' Pre výstupy na hory Batur a Agung sa odporúča najatie miestneho sprievodcu, ktorý vás bezpečne prevedie a poskytne cenné informácie o okolí.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e767a71cfe46',
        spans: [
          {
            text: 'Časovanie:',
            marks: ['bold'],
          },
          {
            text: ' Na dosiahnutie vrcholov pred východom slnka je potrebné začať výstup veľmi skoro ráno, často okolo 2-3 hodiny ráno. Zvážte rezerváciu výletu vopred.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd9d407733ce4',
        spans: [
          {
            text: 'Bali je skutočným rajom pre tých, ktorí milujú nádherné výhľady a dobrodružstvo. Či už sa rozhodnete pre východ slnka na niektorej z posvätných hôr alebo pre pokojný výhľad z Tegallalang Rice Terrace, tieto miesta vám ponúknu nezabudnuteľné zážitky a krásne scenérie, ktoré budete chcieť zdieľať s ostatnými.',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'slovenskesrdcovky',
    title: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
    description:
      'Slovensko je taká krásna a rozmanitá krajina, že by nám nestačil ani rok na to, aby sme objavili všetky krásy, ktoré nám ponúka. Zbierka slovenských srdcoviek sa nám pomaly, ale isto rozširuje. Prostredníctvom týchto príspevkov sa predovšetkým chceme o tieto miesta podeliť s tebou a motivovať ťa navštíviť ich. Ak máš nadšenie spoznávať Slovensko, možno práve v tomto príspevku nájdeš niečo nové a úchvatné.',
    hero: {
      src: '/static/images/photosFull/srdcovky/SlovenskeSrdcovky.jpg',
      alt: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
      width: 2000,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AIGw2NL//7vQrRkRAAB3cSL/zLn/483Dxm7IFA9wucYuaAAAAABJRU5ErkJggg==',
    },
    categories: ['Slovensko', 'Rady a Tipy'],
    keywords: [
      'slovenské srdcovky',
      'cestovanie po slovensku',
      'rady a tipy',
      'kam na výlet',
      'výlet s rodinou',
    ],
    status: 'published',
    publishedAt: '2020-07-07T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-07-07T12:00:00.000Z',
    updatedAt: '2020-07-07T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: 'f1b030c322b7',
        level: 2,
        spans: [
          {
            text: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd5c285c6b343',
        spans: [
          {
            text: 'Slovensko je taká krásna a rozmanitá krajina, že by nám nestačil ani rok na to, aby sme objavili všetky krásy, ktoré nám ponúka. Zbierka slovenských srdcoviek sa nám pomaly, ale isto rozširuje. Prostredníctvom týchto príspevkov sa predovšetkým chceme o tieto miesta podeliť s tebou a motivovať ťa navštíviť ich. Ak máš nadšenie spoznávať Slovensko, možno práve v tomto príspevku nájdeš niečo nové a úchvatné.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '89970b4ab7f2',
        spans: [
          {
            text: 'Aj my sme zrušili nejednu cestu do zahraničia, ale rozhodli sme sa na celú situáciu pozrieť z pozitívnej strany. Ani zatvorené hranice nepovažujeme za dostatočnú bariéru pri spoznávaní krás, ktoré nám svet ponúka. Slovensko je nimi preplnené a  práve teraz máme čas na to, aby sme začali objavovať poklady, ktoré máme na dosah ruky, a začali si vážiť to, čo máme doma.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '0b90f760da96',
        asset: {
          src: '/static/images/photosFull/srdcovky/SlovenskeSrdcovky.jpg',
          alt: 'Slovenské srdcovky: tipy na cestovanie po Slovensku',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AIGw2NL//7vQrRkRAAB3cSL/zLn/483Dxm7IFA9wucYuaAAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '28d045403dd0',
        spans: [
          {
            text: 'Inšpiráciou Slovenských srdcoviek sú miesta, ktoré oplývajú neskutočnou krásou a na ktoré môžeme byť my Slováci právom hrdí. Každý mesiac zverejníme päť miest, ktoré nás uchvátili a ktoré by mohli zaujať aj teba. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '19c22f693d95',
        level: 3,
        spans: [
          {
            text: '1. Krížna (1574 m n. m.)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cc14dd62c74a',
        spans: [
          {
            text: 'Celé Slovensko ako na dlani je vskutku veľkolepý pohľad, na ktorý len tak ľahko nezabudneš. Vrchol Krížnej ti ponúka bohatú odmenu v podobe fascinujúceho panoramatického výhľadu na celé Slovensko. Na juhu sa týčia Kremnické a Starohorské vrchy. Východná časť zachytáva hrebene Nízkych Tatier s kulisou Slovenského rudohoria. Na severovýchodnom horizonte hrdo vyčnieva Majerova skala so siluetami nášho najvyššieho pohoria – Vysokých Tatier. Severnú časť tvoria Chočské vrchy a 360-stupňovú panorámu zo západnej časti uzatvárajú rozpínajúce sa končiare Malej Fatry. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'da6f39a0bafc',
        asset: {
          src: '/static/images/photosFull/srdcovky/KriznaPano.jpg',
          alt: 'KriznaPano',
          width: 2000,
          height: 525,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYdJxdAj5+u5/duZEABmkBU/8nSQcAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '2b307734218c',
        spans: [
          {
            text: 'Dominanta Národného parku Veľká Fatra leží (ľudovo povedané) za humnami Banskej Bystrice (cca 16 km smerom na Ružomberok). Okrem iného je významným uzlom prepájajúcim viaceré turistické chodníky z banskobystrickej, liptovskej a turčianskej strany (z toho je odvodený aj názov). Najrýchlejší výstup sa začína v oci Turecká a vedie po zjazdovke bývalého lyžiarskeho strediska Turecká-Krížna. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'b44dd800964d',
        asset: {
          src: '/static/images/photosFull/srdcovky/KriznaJumpLiv.jpg',
          alt: 'KriznaJumpLiv',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgkLX89u3/45fvGDjVGUpqOnNyCuOSMmLKmgGbgwtrwm6RKAAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'edead4fde07f',
        asset: {
          src: '/static/images/photosFull/srdcovky/KriznaUs.jpg',
          alt: 'KriznaUs',
          width: 1842,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AK/Y/42v18Xe/+L//wByeokECBqho6y+xcXhBA/v9l0W4gAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '04a5babfa459',
        level: 3,
        spans: [
          {
            text: '2. Kľak (1351 m n. m.)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a3ab278565d5',
        spans: [
          {
            text: 'Podľa nás najfotogenickejší vrch pohoria Malá Fatra patrí medzi veľmi obľúbené turistické trasy. Výstup na Kľak je možné absolvovať v ktoromkoľvek ročnom období, čo ti zabezpečí diametrálne odlišný, ale vo všetkých prípadoch znamenitý zážitok. Na vrchole je umiestnený mohutný dvojkríž a môžeš sa tu dosýta nabažiť výhľadmi na našu malebnú krajinu.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '5ac95f7aa8fc',
        asset: {
          src: '/static/images/photosFull/srdcovky/KlakView.jpg',
          alt: 'KlakView',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNY+/j/lif/L3z7nz7lLYOzVxAXL1dNaQEXqxgA0sIMWnAMZa8AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'f3a859e8dbb2',
        spans: [
          {
            text: 'Najrýchlejšia trasa na vrch Kľaku vedie z Fačkovského sedla a trvá približne 2 hodiny. Samotný výstup je pomerne jednoduchý a je vhodný aj pre menej zdatných turistov. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '19677126601e',
        asset: {
          src: '/static/images/photosFull/srdcovky/KlakForest.jpg',
          alt: 'KlakForest',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMIS6p9+en//CW7KusmMphb+H77/b+lfQ4nrwwAuzcNGh8oWGEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '22d7ce180481',
        asset: {
          src: '/static/images/photosFull/srdcovky/KlakUs.jpg',
          alt: 'KlakUs',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49O3/nf//j7z+P3njcQYbOw91O0d5VT0ONmEA3IgMVsH2if4AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'af2d260c950a',
        asset: {
          src: '/static/images/photosFull/srdcovky/KlakCross.jpg',
          alt: 'KlakCross',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/f//8p1H+V0yGBQiGabOX5tb1cHAIs3gWwgAqV8KgHQFKTwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '06adfc5f256c',
        level: 3,
        spans: [
          {
            text: '3. Králický vodopád',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '44baa2bc705a',
        spans: [
          {
            text: 'Sedem metrov vysoký vodopád sa nachádza na náučnom chodníku naprieč Králickou tiesňavou pri obci Králiky. Napriek tomu, že nepatrí medzi velikánov, môže ťa prekvapiť a súčasne potešiť svojou prírodnou veľkoleposťou. Unikni z víru veľkomesta, vytiahni slúchadlá z uší a namiesto toho sa započúvaj do šumenia vody v obklopení prekrásnej prírody. Takto podľa nás vyzerá dokonalý oddych.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'd4bd8a70e2c4',
        asset: {
          src: '/static/images/photosFull/srdcovky/KralickyVodopadHang.jpg',
          alt: 'KralickyVodopadHang',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNgEGbon5vz4cd2BhkN/o2bO9NKfBmMDZQ7eyrOHl/LoG2gHRUXXpQRDwAp7Q7Uijl1BQAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '2354ae02d00d',
        asset: {
          src: '/static/images/photosFull/srdcovky/KralickyVodopadLandscape.jpg',
          alt: 'KralickyVodopadLandscape',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMory9ZsnzWz//vjBwsGBhYGe0c7Rcvn69paQYAmOsKJcxuPb0AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'f65c36d43097',
        asset: {
          src: '/static/images/photosFull/srdcovky/KralickyVodopadPrirodaLiv.jpg',
          alt: 'KralickyVodopadPrirodaLiv',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4eG3R//+H/v/fvnZZPgMvD4OjnnS+v1GQpSIAyMgLwF13OQoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '192e7aa1188d',
        asset: {
          src: '/static/images/photosFull/srdcovky/KralickyVodopadPriroda.jpg',
          alt: 'KralickyVodopadPriroda',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGO4cnzat98Py3L8XG00GRJd9XJDXJ20ZIWZGACkjwlWvU+tfwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '2e13405e4117',
        level: 3,
        spans: [
          {
            text: '4. Badínsky prales',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '44331a281f82',
        spans: [
          {
            text: 'Unikátna časť slovenskej prírody, ktorá doposiaľ nebola nijakým spôsobom ovplyvnená človekom, si ťa získa svojou pokojnou atmosférou a všade prítomným tichom. Nachádza sa 6 km od obce Badín (na úpätí Kremnických vrchov v Banskobystrickom kraji).',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c58188f2dcf0',
        spans: [
          {
            text: 'Badínskym pralesom sa môžeš pokochať len z turistického chodníka. Z dôvodu zachovania nedotknutej prírodnej rozmanitosti je vstup dovnútra pralesu povolený len so sprievodcom a vo vyhradený čas. Turistika sa tu však ani zďaleka nekončí. Po turistickom chodníku sa dá pokračovať až na hrebeň Kremnických vrchov, odkiaľ vedú ďalšie nádherné turistické trasy.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '35cdfbfeab8e',
        left: {
          src: '/static/images/photosFull/srdcovky/BadinskyVodopad.jpg',
          alt: 'BadinskyVodopad',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AKmxr97r5PT49wC2r6DQyruNjIQAnH9mR0Aue3JoAEcwHQkKAMm8rd3NE/VRE8FBAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/srdcovky/BadinskyLes.jpg',
          alt: 'BadinskyLes',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNQtvO89+N/SFYpg6y2weS1O8MKKxgYWBgcPJwEJEQZjBR4UwNspPkYABNlCuciIkPqAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: '0ffddb689a66',
        asset: {
          src: '/static/images/photosFull/srdcovky/KremnickeVrchy.jpg',
          alt: 'KremnickeVrchy',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOYs/z8hRv/77z7/+LrfwZZBgYNSXUHpzxV80QA0EQMkbwb0ecAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '2d44a70621d0',
        level: 3,
        spans: [
          {
            text: '5. Súľovské skaly a Súľovská pyramída',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2f98a82b7c4b',
        spans: [
          {
            text: 'Patria medzi jedny z najkrajších prírodných úkazov severozápadnej časti Slovenska (10 km južne od mesta Bytče) a aj na našom zozname slovenských srdcoviek im patrí čestné miesto. Strednou časťou vedie 7,5 km dlhý turistický okruh, ktorý ťa prevedie zákutiami mohutných skál rôznych veľkostí a tvarov. Poriadne si vychutnaj širokú paletu mimoriadne krásnych scenérii. Určite nevynechaj ani Súľovskú zrakovú pyramídu – unikátnu drevenú expozíciu v tvare ležatého ihlana. Ponúka nezabudnuteľný zážitok v podobe naživo premietajúceho kina s výhľadom na Súľovské skaly. Odporúčame počkať si na západ slnka, keď dolina oplýva najkrajšími farbami.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e4f885e1f121',
        asset: {
          src: '/static/images/photosFull/srdcovky/ZrakovaPyramida.jpg',
          alt: 'ZrakovaPyramida',
          width: 2000,
          height: 1125,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPQZWAocNQscFGzEGRgmF1X+vD//wWb9m7szQQAYKMKTt94dUMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '68f458558dab',
        spans: [
          {
            text: 'Exhibíciu plánujú rozobrať na jeseň  roku 2020, preto si tam určite sprav výlet čím skôr, aby si nepremeškal možnosť vidieť tento jedinečný architektonický kúsok. Update: pyramída je od konca mája 2020 rozobratá a nieje možné ju navštíviť.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e25cec7653b4',
        asset: {
          src: '/static/images/photosFull/srdcovky/SulovViewLiv.jpg',
          alt: 'SulovViewLiv',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg8F3ctf7/0lP/TbIOMAizMDRmJv7/9MrfRh8AnuoL7FUt6PYAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'f995ed05ed62',
        asset: {
          src: '/static/images/photosFull/srdcovky/SulovView.jpg',
          alt: 'SulovView',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49PjJhauPPv38/+jjfwYjBQYRdob8eF8Wfj4A3g4MlvZtLpEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '2aead20784c1',
        level: 3,
        spans: [
          {
            text: 'Veľký Choč (1611 m n. m.)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '29e29852417c',
        spans: [
          {
            text: 'Turistika po slovenských kopcoch patrí medzi naše najobľúbenejšie aktivity. Sloboda, čarovné ticho a nekonečná krása, ktoré hory ponúkajú, sú pre nás doslova balzamom na dušu. Zrazu si človek uvedomí, aké sú jeho problémy malé, často nepodstatné, a že sa netreba zapodievať zbytočnými malichernosťami. Treba si vychutnávať čaro prítomného okamihu a užívať si život plnými dúškami.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '3f3bf8c08c05',
        asset: {
          src: '/static/images/photosFull/srdcovky/ChocHold.jpg',
          alt: 'ChocHold',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYf+5n35bnp9/9f/X/P4O6hp6FvjqfuDQDlwwAz18LsQdK+PkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '533bd84be1dc',
        spans: [
          {
            text: 'Veľký Choč je jeden z najkrajších výhľadových vrchov na Slovensku. Poskytuje 360-stupňový pohľad na okolité pohoria, ako sú: Západné Tatry, Malá a Veľká Fatra, Nízke Tatry a nádherne rozprestierajúca sa Podtatranská kotlina. Na vrchole Veľkého Choča by sme dokázali sedieť hodiny a stále by sa nám málilo. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'ef1c3b8b5f76',
        asset: {
          src: '/static/images/photosFull/srdcovky/ChocPano.jpg',
          alt: 'ChocPano',
          width: 2000,
          height: 297,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgkLBYfPzZxJ037/37DwAlfgefYOwmlgAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '794a2fb534e8',
        spans: [
          {
            text: 'Na vrchol vedie viacero trás. My sme si zvolili začiatok v obci Valaská Dubová, ktorá je známa tým, že v nej chytili zbojníka Juraja Jánošíka. Trasa je pomerne náročná s neustále meniacim sa terénom. Je to neprestajný výstup hore kopcom s prevýšením takmer tisíc výškových metrov, s minimom roviniek na oddych. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '0cb921dd2677',
        level: 3,
        spans: [
          {
            text: 'Ostrá (1247 m n. m.)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'afb497d6ebaf',
        spans: [
          {
            text: 'Ako už názov napovedá, turistika na Ostrú je naozaj ostrá. Nejde však o extrémne náročnú a dlhú turistiku, ale skôr o poriadne strmé stúpanie. Turistickú značku s predpokladaným časom 2 hod. 45 min. sa nám podarilo prekonať o vyše polhodiny. Na Ostrú sa dá dostať dvomi turistickými chodníkmi z Blatnickej a Gaderskej doliny. Kúsok pod vrcholom v sedle Ostrej sa tieto dve cesty spoja a nasleduje najzaujímavejšia časť turistiky, stúpanie na samotný vrchol. Na tomto krátkom a poriadne strmom úseku sú na istenie primontované reťaze. Pomyselnú cieľovú bránu na vrchole tvorí úzke „okno“ v skale, za ktorým sa rozprestrie výhľad na celý Turiec a časť Veľkej Fatry. Turistiku na Ostrú je možné spojiť s prechodom po hrebeni na vrchol Tlstej, na ktorú vedie ďalší turistický chodník z Gaderskej doliny.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '0d3396c158f5',
        left: {
          src: '/static/images/photosFull/srdcovky/OstraScarp.jpg',
          alt: 'OstraScarp',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AGmx8+37/9jt/wDW7P+io6p4cmMAVWuTFAIARCoAACcqNDgnAGxMAMvYESmqqSNgAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/srdcovky/OstraSteps.jpg',
          alt: 'OstraSteps',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPY/v9/1YX/Rcf/M6Rv+MKiaRtUMZuBkZPBQEnAQleOITPc7NO1BTObYgGCHRDWAYzePgAAAABJRU5ErkJggg==',
        },
      },
      {
        _type: 'image',
        _key: 'dcef03678986',
        asset: {
          src: '/static/images/photosFull/srdcovky/OstraEastDan.jpg',
          alt: 'OstraEastDan',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNoamx49e//9Sff9l14ydBRGJocZmOpz8PPwAAAz10MWQBdAzUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'b2ea3fbead47',
        asset: {
          src: '/static/images/photosFull/srdcovky/OstraKriz.jpg',
          alt: 'OstraKriz',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPInLhj7fmvT///v/71P4MkK4OcLL+eqQGDkDQAv+8K+vAh1NEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '059c2dafa2af',
        asset: {
          src: '/static/images/photosFull/srdcovky/OstraSide.jpg',
          alt: 'OstraSide',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49e//pr3nrly9dPz0DQZdPVFTUwEBJgYRfgYAzwALKXFzz8sAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '846bd058474b',
        asset: {
          src: '/static/images/photosFull/srdcovky/OstraVrchol.jpg',
          alt: 'OstraVrchol',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMIL57SsfbGyY//z/76z6DOyLC2xaEx24lHSAQAufcL5EhpH9sAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '17d5a112d83c',
        level: 3,
        spans: [
          {
            text: 'Hradisko na Kláštore',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7195838f0240',
        spans: [
          {
            text: 'Zašli sme si do Nórska. V našich predstavách tam zablúdime pomerne často, ale chceli sme povedať, že sme našli kúsoček Nórska na Slovensku. Prižmúr jedno oko a možno kúsok aj to druhé. Nepripomína ti tento skalný útvar v Ponickej pahorkatine vychýrený zaseknutý balvan Kjeragbolten v Nórsku? ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'ac82fd13ab78',
        left: {
          src: '/static/images/photosFull/srdcovky/KjeragboltenPoniky.jpg',
          alt: 'KjeragboltenPoniky',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMbLvMzOtv//4wC2tpSoqpFIUB4AdHM7V1s5DwkAACQgAExMMg4DAKZSD1xhy1ZeAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/srdcovky/KjeragboltenNorway.jpg',
          alt: 'KjeragboltenNorway',
          width: 928,
          height: 1160,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AK+8xej+/5upqwBzdGSfrK6oo58AHxoBLSkrhX9nAAQDAChPZG5nTJmDEFyTWTcaAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: '4506889af719',
        spans: [
          {
            text: 'Neďaleko obce Ponická Huta sa nachádza zaujímavý náučný chodník, ktorý vedie cez západný hrebeň vrchu Učovník (759 m n. m.). Približne v polovici trasy sa nachádza mohutné keltské hradisko ktorého najzaujímavejšou časťou je práve kamenná akropola. Toto miesto dýcha zvláštnou tajuplnou atmosférou a určite stojí za návštevu.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '619bf47b9cbe',
        spans: [
          {
            text: 'Kúsok od areálu hradiska sa vypína mohutné bralo Baba ozdobené veľkým železným krížom, ktoré je ideálnym miestom na pozorovanie západu slnka.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'b2ac0a472067',
        asset: {
          src: '/static/images/photosFull/srdcovky/PonikyKriz.jpg',
          alt: 'PonikyKriz',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49uv/2Zf/J2+67RkXwmBrK8XDxSAjxqChwQAAu0sJ3LmFpKUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'ee6c1f8dbc25',
        level: 3,
        spans: [
          {
            text: 'Rebrík do neba',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '93af98f8b1a2',
        spans: [
          {
            text: 'V jednoduchosti je krása. O tom ťa presvedčí aj unikátne dielo vizuálneho umelca Mateja Rosmányho. „Rebrík do neba“ vyčnieva na kopci za dedinou Dúbravica (okres Banská Bystrica). Zvláštnosťou je práve to, že sa o nič neopiera. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '16d8acfe6f7c',
        spans: [
          {
            text: 'Napriek tomu, že táto unikátna atrakcia je vysoká len päť metrov, vďaka svojej polohe a kompozícii ponúka skvelý výhľad na okolité dediny a v pozadí rozprestierajúce sa Nízke Tatry. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6dab09659638',
        spans: [
          {
            text: 'Cesta k rebríku nie je označená, ale dá sa k nemu dostať pomerne jednoducho. Hneď za tabuľou označujúcou začiatok obce Dúbravica (v smere od Poník) treba odbočiť doprava. Hore vedie asfaltová cesta, avšak v dosť zúboženom stave, ktorú vystrieda poľná cesa. Odporúčame zaparkovať auto v dedine, odkiaľ to je približne 1 km. ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'b7a3d1d8869c',
        left: {
          src: '/static/images/photosFull/srdcovky/RebrikAlone.jpg',
          alt: 'RebrikAlone',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOIWfyeIesoQ+Uphsf//zetv9d34h9DQPXcmOr+zm0XGRj4GMRlGURVGACX7RD+jZHpyQAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/srdcovky/RebrikUs.jpg',
          alt: 'RebrikUs',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AIypz8Tc8tDq/wDj9/99l6m+6v8Aq9z/bZq3rOX/ACUtABogAAAVABvOFgL67tivAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: 'b68ec63e1157',
        asset: {
          src: '/static/images/photosFull/srdcovky/RebrikLiv.jpg',
          alt: 'RebrikLiv',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPwqtrHoBTHYFzi37yf4cn3/6J20QwsJgkTLgIAeLMJvJ5DrckAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '72e1299c3459',
        level: 3,
        spans: [
          {
            text: 'Malachovské skalky',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ea8080fa7e14',
        spans: [
          {
            text: 'Malachovské skalky sú jedinečným miestom na relax a oddych. Krátka nenáročná trasa sa začína v obci Malachov, neďaleko autobusovej zastávky Stupy.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '90ba3c88375b',
        spans: [
          {
            text: 'Napriek tomu, že je to chránená krajinná oblasť s bohatou faunou a flórou, vplyv ľudskej činnosti sa negatívne odzrkadlil na atraktívnosti bezprostredného okolia lokality.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd336addba851',
        spans: [
          {
            text: 'Totomiesto sme si však zamilovali pre pôsobivý výhľad na našu milovanú Banskú Bystricu, Urpín a okolité pohoria.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '9a9b2d0f6c24',
        asset: {
          src: '/static/images/photosFull/srdcovky/MalachovSkalyBBus.jpg',
          alt: 'MalachovSkalyBBus',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPIb1nw4v//nc//rzp4hEFRgEFLjiEjTFKWiwEAu5oKv1vjlKkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'e6edba2908ce',
        asset: {
          src: '/static/images/photosFull/srdcovky/MalachovSkalyBB.jpg',
          alt: 'MalachovSkalyBB',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYe/H17f//7/3/f/TtfwYtbT57ew1dfWEGbgYA3NgMU7ZmHIAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '92ecb47070c1',
        level: 3,
        spans: [
          {
            text: 'Chodník korunami stromov Bachledka',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '313ee780a24b',
        spans: [
          {
            text: 'Turisticky obľúbená atrakcia v podobe chodníka vo výške stromov sa rozprestiera uprostred lesov Bachledovej doliny. Prechádzka vo výške 4 metrov naberá úplne iný rozmer. Pohľad z tejto perspektívy na okolitú prírodu s hrebeňom Belianskych Tatier v pozadí je pastvou pre oči. Záver chodníka tvorí točitá vyhliadková veža, uprostred ktorej je natiahnutá obrovská sieť. Môžeš sa na nej vyblázniť, vyskákať alebo len tak vegetiť, a to vo výške 32 metrov. Tak čo, trúfneš si?',
          },
        ],
      },
      {
        _type: 'image',
        _key: '12eba7339fa6',
        asset: {
          src: '/static/images/photosFull/srdcovky/BachledkaView.jpg',
          alt: 'BachledkaView',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49f//5X//r/79f+TBFwZudSMGSXkGTgleaQkA3yEMD4EqRzMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'e599432bcb47',
        level: 3,
        spans: [
          {
            text: 'Ako sa dostať ku chodníu?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'bdc5b127f8bf',
        spans: [
          {
            text: 'Na výber máš dva varianty. Tým rýchlejším je lanovka, ktorá ťa pohodlne vyvezie na vrchol kopca. Cena pre dospelého je 11 € a pre deti 9 €. Náročnejším variantom je pešia túra v strmom teréne, ktorú si musíš krvopotne odmakať. Nám to trvalo približne jednu hodinu. Pokiaľ si aj ty zvolíš túto možnosť, určite oceníš kvalitnú a pevnú obuv.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '097e1d4bea34',
        level: 4,
        spans: [
          {
            text: 'Otváracie hodiny',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'abbf502915f8',
        spans: [
          {
            text: 'Veľkou výhodou chodníka korunami stromov je jeho celoročná prevádzka. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'e92a713cdb43',
        level: 4,
        spans: [
          {
            text: 'Lístky',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '089db244560b',
        spans: [
          {
            text: 'Lístok odporúčame zakúpiť si v dostatočnom predstihu online, vďaka čomu ušetríš vystávanie v nekonečnom rade pri pokladniach. ',
          },
          {
            text: 'Ceny lístkov nájdeš na tomto odkaze.',
            link: {
              href: 'https://chodnikkorunamistromov.sk/#vstupne',
              external: true,
            },
          },
        ],
      },
      {
        _type: 'image',
        _key: '1ba7618990ef',
        asset: {
          src: '/static/images/photosFull/srdcovky/BachledkaNet.jpg',
          alt: 'BachledkaNet',
          width: 1080,
          height: 1350,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4/+FtckK8u7s3g6KSEr+woK6+NkNPS+3lC6eSEkIZygsyF82fu33tMgAw6xBAU3K7BgAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: 'fb7783178f50',
        asset: {
          src: '/static/images/photosFull/srdcovky/BachledkaTower.jpg',
          alt: 'BachledkaTower',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4////luvfV5++2zF3FUNCTmpkqp+1nToPJwMA1qcMdLgbT30AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'e97e1dfcf835',
        level: 3,
        spans: [
          {
            text: 'Poľana (1458 m n. m.) a vodopád Bystré',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '31270c56343d',
        spans: [
          {
            text: 'Jedného dňa sme rozmýšľali, ktoré miesto navštívime najbližšie. Náš kamarát Edo prišiel s návrhom turistiky na Poľanu. Nebolo nás treba dlho presviedčať, pretože Poľana už dlhší čas zastávala čestné miesto na našom bucketliste slovenských srdcoviek. Zbalili sme sa partička piatich kamarátov a vybrali sa spoznávať krásy stredného (možno srdce) Slovenska. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '56618ec8bea0',
        asset: {
          src: '/static/images/photosFull/srdcovky/PolanaLadder.jpg',
          alt: 'PolanaLadder',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMo60vY8yjr5f8yhtpZ0UllXjWTEhisnBTcPO2ycuIYGNgYzHTUWqvrAFjaDnb6q3XIAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '9b324bc3b1e0',
        asset: {
          src: '/static/images/photosFull/srdcovky/PolanaGroup.jpg',
          alt: 'PolanaGroup',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPI6tl07dd/z8T62mkrGWzMGVbPC/fzZ+DjZAAApwQKJK+rVkAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '03b16ec12521',
        spans: [
          {
            text: 'Približne po troch kilometroch od začiatku turistickej trasy v smere od Hriňovej sa na južných svahoch Poľany nachádza majestátny vodopád Bystré. Svojou mohutnosťou a dvadsať metrovou výškou patrí medzi najväčšie vodopády na Slovensku. Podľa nás je najlepší čas na návštevu vodopádu v jarných mesiacoch, keď sa začína roztápať sneh a vodopád oplýva veľkým množstvom vody.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '25317f3731eb',
        asset: {
          src: '/static/images/photosFull/srdcovky/VodopadBystreLiv.jpg',
          alt: 'VodopadBystreLiv',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOYv7xhyZ5VMzcuYigpjahsqrU102TYtGxBRV6NuKAYw/9fv7tyqvhYGQB4LhEhAW6oZwAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '497bfc79548b',
        asset: {
          src: '/static/images/photosFull/srdcovky/IMG_3764.jpg',
          alt: 'IMG_3764',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPwM5HuWrhzx///hbM3MugxMCiyMDQ3OZuaMgAAjAQI+n0X7aAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'b64e3cfa744d',
        spans: [
          {
            text: 'Výstup na Poľanu nám trval približne 3 hodiny. Celou cestou lahodila nášmu oku skutočne krásna a nedotknutá príroda. Trasa je vcelku náročná, lebo sme museli zdolať pomerne veľké prevýšenie s výrazným stúpaním najmä v záverečnej časti. Dkonca sa nám podarilo zablúdiť a chvíľku trvalo, kým sme sa vrátili naspäť na značenú trasu.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '609d4b11d533',
        spans: [
          {
            text: 'Vrch Poľany zdobí malá čistinka, kde sme si s radosťou vychutnali zaslúžený obed. Odmena v podobe znamenitého výhľadu sa nachádza o pár metrov ďalej na vyhliadke Katruška, ktorá je vzdialená cca 15 minút chôdze od vrcholu Poľany.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '92d7fbba21ae',
        asset: {
          src: '/static/images/photosFull/srdcovky/PolanaUs.jpg',
          alt: 'PolanaUs',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYe////f//V596vPXiKwYRLgZPY4vZle0GxkwA10YNA/QR1PMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '93d0a955ead8',
        level: 3,
        spans: [
          {
            text: 'Skalka Via ferrata',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e9ac48579ef2',
        spans: [
          {
            text: 'Ak máš chuť na poriadnu dávku adrenalínu, tak Via ferrata Komín na Skalke je tým správnym miestom pre teba. Novovybudovanú lezeckú časť tvorí šesť trás rôznych obťažností a tie sa postarajú o zážitok, na ktorý tak rýchlo nezabudneš. Na svoje si prídu aj úplní začiatočníci, ale aj skúsení lezci. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '643841a8ed13',
        asset: {
          src: '/static/images/photosFull/srdcovky/FerrataLiv.jpg',
          alt: 'FerrataLiv',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4/PbS6//vjj+6xTBxXnpphe+8tVkMKmoSQgzMuYUhDGriIlZaKtZ6egCkGg+MeF/rEgAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '312cb00c9b33',
        asset: {
          src: '/static/images/photosFull/srdcovky/FerrataView.jpg',
          alt: 'FerrataView',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNoXP9g0vFvh179f/D/PwOrprKctyuDsTkDjxAAxqkLcC8uVikAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '29c466ec2b34',
        spans: [
          {
            text: 'My sme si vyskúšali zdolať 110 m dlhý most upevnený vo výške 20 m nad zemou. Slimačím tempom som prešľapovala z priečky na priečku po rozkývanom moste. Sdce mi búšilo až kdesi v hrdle. Mám panický strach z výšok, preto považujem prekonanie tohto úseku ferratovej trasy za obrovské víťazstvo. Doteraz som na seba patrične hrdá.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'cb9a4f43e695',
        asset: {
          src: '/static/images/photosFull/srdcovky/FerrataBridge.jpg',
          alt: 'FerrataBridge',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGN4+vb/x///u9YdYGhYvETTL4ZBUJBBSFOKgZmBmYuBgUOMQU6SVYqBAQBiuAtO9jbpXgAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: 'f6ef838f9828',
        spans: [
          {
            text: 'Na vstup na ferratu je potrebný tzv. ferratový set, ktorý si môžeš za relatívne nízku cenu zapožičať v Relax centre na Skalke.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ef856fb0379f',
        spans: [
          {
            text: 'Keď sa rozhodneš preskúmať niektorú z našich slovenských srdcoviek, budeme radi, ak nám napíšeš na facebook alebo instagram, ako sa ti tam páčilo, čo ťa zaujalo, aký zážitok si si stade odniesol a čo všetko si popritom objavil. ',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'erasmusvofinsku',
    title:
      'Erasmus vo Fínsku: extrémne výzvy, nezabudnuteľné zážitky a fínsky humor',
    description:
      'Erasmus je továreň na nezabudnuteľné zážitky. Niet pochýb o tom, že Erasmus vo Fínsku bola pre nás neskutočná jazda. Priniesol so sebou množstvo výziev a nových skúseností vďaka ktorým sme získali nový pohľad na svet...',
    hero: {
      src: '/static/images/photosFull/Erasmus/ErasmusSnowBorder.jpg',
      alt: 'Erasmus vo Fínsku: extrémne výzvy, nezabudnuteľné zážitky a fínsky humor',
      width: 1080,
      height: 720,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AM3n9+n2/7nS4UaAnwDO8v8pHQ4AAgHg///ihA9PslVmqQAAAABJRU5ErkJggg==',
    },
    categories: ['Európa', 'Cestopisy'],
    keywords: [
      'erasmus',
      'erazmus',
      'oulu',
      'rady a tipy',
      'cestopisy',
      'cestovateľský blog',
    ],
    status: 'published',
    publishedAt: '2020-05-20T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-05-20T12:00:00.000Z',
    updatedAt: '2020-05-20T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '2a1340a3a3eb',
        level: 2,
        spans: [
          {
            text: 'Erasmus vo Fínsku: extrémne výzvy, nezabudnuteľné zážitky a fínsky humor',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'af8538269e86',
        spans: [
          {
            text: 'Erasmus je továreň na nezabudnuteľné zážitky. Niet pochýb o tom, že Erasmus vo Fínsku bola pre nás neskutočná jazda. Priniesol so sebou množstvo výziev a nových skúseností, vďaka ktorým sme získali úplne iný pohľad na svet. Z obrovského kvanta zážitkov sa chceme s tebou podeliť o naše NAJ momenty, ktoré sme zažili za polárnym kruhom.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '65e30324c492',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusHeart.jpg',
          alt: 'ErasmusHeart',
          width: 1814,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgELRnkA9iEHFniJzAcPTyq3f//+eUdzZ0zwcAYHgKirPx+0YAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'cb7f6026fea4',
        level: 3,
        spans: [
          {
            text: 'NAJmrazivejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '75e0517735fc',
        spans: [
          {
            text: 'Začiatky boli veľmi náročné. V jednej vete som veľmi slušne a stručne zhodnotila priebeh všetkých zmien, ktorým sme čelili prvé dni nášho pobytu. Chvíľku nám trvalo, kým sme sa ako-tak adaptovali na extrémne podmienky, ktorými nás Fínsko teda vôbec nešetrilo. Najnižšia denná teplota sa pohybovala okolo -45 °C a pocitová teplota dosahovala neuveriteľných -50 °C. V boji proti ukrutnej zime sme využili všetky dostupné prostriedky. Zvolili sme stratégiu á la „cibuľa,“ čo v preklade znamená, nahádž na seba pol šatníka (keby bolo stále málo, tak pridaj) a dúfaj, že nezamrzneš. Vonku sme dokázali vydržať v priemere 27 minút. Po ich uplynutí sa prechádzka zasneženými uličkami premenila na „boj o život.“ V končatinách nám prestávala cirkulovať krv. Vdychovať ten ľadový vzduch bolo ako prehĺtať ihličie. Pichľavá bolesť sa niesla celým dýchacím ústrojenstvom. Dych nám zamŕzal priamo na tvári v podobe ľadových krúpok. Ledva sa nám podarilo rozlepiť mihalnice od seba. Make-up nebol potrebný, pretože tuhý mráz sa sám postaral o typický fínsky winter look.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'de14bfc8e0c0',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusFrozenLiv.jpg',
          alt: 'ErasmusFrozenLiv',
          width: 1333,
          height: 1774,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAALOAAXEFZERQAADT0KFxmDf3kA0bnF/+Xm77XNALK8h/+2jv+6qOrNEWyTfUxCAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusFrozenDan.jpg',
          alt: 'ErasmusFrozenDan',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AH2Jo4aSsIKSsQB+fZloVWvL2/8A+Ob//+7/5ff/ACwtXo6PzAAAM8lDFg9ILa36AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'heading',
        _key: '019458c0a728',
        level: 3,
        spans: [
          {
            text: 'NAJnáročnejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '0f2329964f6b',
        spans: [
          {
            text: 'Zvyknúť si na nekonečnú tmu, ktorá nás obklopovala, bola takmer nemožná výzva, s ktorou sme sa museli popasovať. Prvú polovicu Erasmu (január, február) sme zažívali polárne noci, čo znamenalo, že slnko sa pri veľkom šťastí ráčilo ukázať na štyri hodiny denne, aj to len vo vzdialenom horizonte. Prvý mesiac sme slnečné svetlo zahliadli presne 24 hodín. Náš typický deň vyzeral takto: o deviatej ráno sme kráčali do školy za tmy a o druhej poobede sme sa zo školy vracali opäť za tmy. Na našu smolu sme práve v čase slnečných hodín sedeli v škole ako päť peňazí a svetelnými lúčmi nás obdaroval akurát tak projektor nainštalovaný v učebni. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '6af1eb50a4f9',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusZapadIntrak.jpg',
          alt: 'ErasmusZapadIntrak',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP49Ov/83e/t+w8W9axjMHV3tlQV0NJVoKBiRMA0AoLSeH2dNEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '5c678c0f0cd3',
        level: 3,
        spans: [
          {
            text: 'NAJočarujúcejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9c5570f57a97',
        spans: [
          {
            text: 'Prvotné očakávania boli, že polárnu žiaru budeme vidieť na dennom poriadku. Však sme sa nachádzali pri polárnom kruhu... Na naše sklamanie sa nám ju podarilo zahliadnuť ani nie päťkrát za celý náš pobyt, avšak o to väčšou radosťou sme prekypovali.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e11cf9aa43ef',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusArcticCircle.jpg',
          alt: 'ErasmusArcticCircle',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AHG58mWVta/o/wCr5v95m7bY//8AdZihQ0pXJTNKAJTN8CxRagADJ9h6FCgbQhlKAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '05d0bb446c82',
        spans: [
          {
            text: 'Každý erasmák mal posťahovaných milión aplikácii, ktoré „predpovedali“ výskyt polárnej žiary pre danú oblasť. Len čo sa index intenzity dostal do zelených hodnôt, vedelo sa, že v tú noc sa tak skoro spať nepôjde. Všetci sme netrpezlivo čakali s nosom pritlačeným na okne, kedy sa konečne začne to farebné divadlo. Najväčším sklamaním bolo, keď sa tá koťuha ani na tridsiaty deň neráčila ukázať. Od samého zúfalstva sme si ju dokresľovali na obrázky.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '1a8c8b2103fb',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusAuroraFake.jpg',
          alt: 'ErasmusArcticCircle',
          width: 1122,
          height: 1403,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AGpcXaCso350cgCQk4rm/O2diokA1dLH0M2/jIB6ADwrKEAyLhYKBZ+0Ekcid4g5AAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '4bdcabcdb3f5',
        spans: [
          {
            text: 'Keď už sme strácali všetku nádej, konečne nastal ten vytúžený okamih a obloha sa roztancovala zeleno-fialovými farbami. Bez rozmyslu sme vybehli von, nech nepremeškáme ani minútu tohto spektakulárneho predstavenia. Niektorí erasmáci boli takí natešení, že sa v tom zhone nestihli prezliecť a vybiehali von len v papučiach a pyžame (podotýkame, že vonku bolo tak -30 °C). Polárna žiara tancovala nad našimi hlavami tak blízko, že sme mali chuť natiahnuť ruku a dotknúť sa jej.  ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e1597cb39a42',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusAurora.jpg',
          alt: 'ErasmusAurora',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4tXX+rT8fYjMzBEUkGFYsnX7h3q2eKdOz42MBufENmlgYDDUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'f9e9238215e7',
        level: 3,
        spans: [
          {
            text: 'NAJfínskejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6d11588fc744',
        spans: [
          {
            text: 'Prvá vec, ktorá napadne azda každému v spojitosti s Fínskom, je fínska sauna. Nachádzala sa na každom kroku uprostred lesa, v škole, v bare, na strechách firiem, a dokonca aj na pobočke Burger Kingu.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '1ab9a599e6a6',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusSaunaSompa.jpg',
          alt: 'ErasmusSaunaSompa',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPQdsjQsombvOMtA4Oqj65HzrPf/xkY5GzMIxsW73rGwMAmraBtJ6FkCQAWXAzM7nLR4AAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusSauna.jpg',
          alt: 'ErasmusSauna',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AJv//5T//4bw/wCLlbZfPVHR6fkAf0A/MQAA3qajAHhwhVE5P+jQ3dOvFTie8hTyAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: 'de5fd286e139',
        spans: [
          {
            text: 'Krédo zimy krédo Fínov sa tiahne v znamení „alkohol, sauna a sex“ (presne v takomto poradí). Hneď sme pochopili, prečo miera pôrodnosti vo Fínsku narastá práve v letných mesiacoch. Fíni sa medzi sebou pretekajú, kto vymyslí v saune väčšiu blbinu, čím premenili oddychové saunové posedenie na nezabudnuteľný zážitok.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd6a1395b6bca',
        spans: [
          {
            text: 'Prvou netradičnou saunovou seansou, ktorou sme boli počastovaní, bolo poliatie žeravých kameňov pivom. Suchý vzduch okamžite nasiakol pivovou arómou. Po chvíli vdychovania pivných výparov mal človek pocit totálnej opitosti.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a956ebde0a97',
        spans: [
          {
            text: 'Druhou nezvyčajnou saunovou aktivitou, ktorej sme sa zúčastnili úplnou náhodou v jednom z barov, bolo tzv. kolo smrti. Ľudia sediaci v saune si kolujú fľašu vodky s jediným pravidlom: „Zo sauny sa nevychádza, dokým fľaša nie je dopitá.“ Piť vodku je hrôza, ale piť vodku v 90 °C je šialenstvo. Ešte teraz nás striasa, keď na to čo i len pomyslíme. Ako sme dopadli v ten večer, si pamätáme len matne, ale nie je ťažké si to domyslieť.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'd8d8b30cd488',
        level: 3,
        spans: [
          {
            text: 'NAJnezrozumiteľnejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '8839e0240160',
        spans: [
          {
            text: 'Učiť sa cudzie jazyky nám nikdy nerobilo veľký problém, ale fínčina bola tvrdým orieškom. „Hei, pyydän sinulta yhden oluen,“ takto znie po fínsky veta: „Dobrý deň, prosím si jedno pivo.“ Kým sme sa to naučili, aj nás prešla chuť. Keby Fíni nevedeli tak dobre po anglicky, asi by sme sa k tomu pivu nedostali inak ako posunkovou rečou. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2f85b23dd7af',
        spans: [
          {
            text: 'Zapísali sme sa do kurzu fínskeho jazyka, ale vzdali sme to hneď po prvej hodine. Okrem pozdravov, nadávok a počítania do desať sme nič iné z tohto ugrofínskeho jazyka nepochytili. Naše najobľúbenejšie slovo je „vitu“, čo v preklade do angličtiny znamená F*ck a je možné použiť ho v 150 slovných spojeniach.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '1c9bc6c4f282',
        level: 3,
        spans: [
          {
            text: 'NAJroztomilejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'b0157c02bedd',
        spans: [
          {
            text: 'Najroztomilejšie stvorenia, s akými sme prišli do kontaktu, boli huňatí sobíci. Pripomínali malé huňaté teľatá s tým rozdielom, že sobom z hlavy trčalo obrovské parožie. Boli to totálni flegmatici, ktorí prevažnú časť dňa strávili prežúvaním sena. Hoci ja som sa nadchýnala nad roztomilosťou týchto stvorení, naša parťáčka Rachel mala na nich trochu iný názor. Hovorievala: „Najlepší sob je tepelne upravený sob.“ Na spresnenie, mala na mysli steak s delikátnou brusnicovou omáčkou a pečenými zemiakmi. ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '1c0ccca41e19',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusReindeerParohy.jpg',
          alt: 'ErasmusReindeerParohy',
          width: 1333,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AGZrdmNsdmBxfWlyfADW5v/n//+2wNKKiZ0AqrjRrKq+UVZ1AAAjAJ2nvaarv2pOdiQCMsuXGecN00vRAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusReindeerWhite.jpg',
          alt: 'ErasmusReindeerWhite',
          width: 1333,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ABQXHI+XqgAGFVdgbQBibniUm6dISU/X4/kAZ219Gx4jWWBwzdjzAMnQ6YiRppumvvH7/wYzGKGKUk6ZAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'imagePair',
        _key: 'f49333fa3ea4',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusReindeer.jpg',
          alt: 'ErasmusReindeer',
          width: 1333,
          height: 1774,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOv0/EdNTUJDQgAlJyYOAgB8dnUA7e7u//niwLitANC2ozskDnNxbF54EhuFYt3KAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusReindeerLiv.jpg',
          alt: 'ErasmusReindeerLiv',
          width: 1333,
          height: 1774,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPYcuhodXN7UnIhQ3leoq+pVoi2MsO1ayfq4/ztGbgZ/v/7MCc51YiBAQBUZA/4iJz4/gAAAABJRU5ErkJggg==',
        },
      },
      {
        _type: 'heading',
        _key: '4be88cd50c03',
        level: 3,
        spans: [
          {
            text: 'NAJintenzívnejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '8f7d99ca60d5',
        spans: [
          {
            text: 'Hovorí sa: „Kto bol vo Fínsku a nevyskúšal „ice dipping“, akoby tam ani nebol.“ Preto sme to nemohli vynechať ani my. Pohľad na postaršie panie vchádzajúce do mrazivej vody s blaženým úsmevom na perách nám dodal kúsok odvahy. Bez najmenších problémov plávali z jednej strany na druhú, ako keby sa nachádzali v termálnom kúpalisku a voda mala ideálnu teplotu. Presviedčame sa, že to nemôže byť také strašné, a keď to zvládli ony, zvládneme to aj my. Jediný rozdiel medzi nami a nimi bol v tom, že ony to praktizujú celý život a my sme to išli vyskúšať po prvýkrát v živote.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'f6f340eecd1f',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusIceDipRovaniemi.jpg',
          alt: 'ErasmusIceDipRovaniemi',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AM7q/9Dw/9j8/wDM5f/d9v/n/f8AYnWSAAIbIS5CAJiz3F5yl09geC2VF3vzrOTTAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '995422b9bc5d',
        spans: [
          {
            text: 'Bolo to najintenzívnejších 60 sekúnd, ktoré sme vo Fínsku strávili. Vonku bolo -24 °C, keď sme vyšli zo šatne len v plavkách a papučkách. Voda mohla mať „príjemné“ 3 °C. V okamihu, keď sme sa do nej ponorili, vyrazilo nám dych a ostali sme úplne paralyzovaní. Po troch sekundách som stade vybehla ako raketová strela a priamočiaro smerovala do šatne. Mixlujem kľučkou, ale márne. Dvere boli zabuchnuté, rovnako všetko moje teplé oblečenie. Kľúče sme nemali. Bolo ich treba vyzdvihnúť na nejakej vrátnici, ktorá bola na míle vzdialená. Zuby mi drkotali tak silno, že som mala pocit, že sa o seba porozbíjajú. Z intenzívnych 60 sekúnd sa stáva celá večnosť. Našťastie ma v poslednej chvíli zachránila vysmiata babička, ktorá na mňa hľadela ako na najväčšiu cintľavku, ktorá nevie vydržať pár stupňov pod nulou.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '5781c6911eef',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusIceDipLiv.jpg',
          alt: 'ErasmusIceDipLiv',
          width: 1333,
          height: 1999,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMH//3nA/7Ll/wAAKF0AIEoAMF4AGzBKZl5qAAcpAODe3//4/4KJmnD2EjYEby/+AAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusIceDipDan.jpg',
          alt: 'ErasmusIceDipDan',
          width: 1333,
          height: 2000,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AJ/W/4/C/43B/wBFcaNxkrVMbZQAACRFAA0lACI6AMry/9r//32oxphkE+Wj60U/AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'heading',
        _key: 'd7cfd0b8dc2d',
        level: 3,
        spans: [
          {
            text: 'NAJprekvapujúcejšie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9d9e810838da',
        spans: [
          {
            text: 'Chytanie rýb neznie ako veľmi zábavná činnosť (teda pre väčšinu z nás). Ice fishing náš však veľmi rýchlo vyviedlo z omylu. Proces prípravy je ešte zábavnejší ako samotné chytanie rýb. Pomocou veľkých vrtákov sme hĺbili malé diery (v priemere 10 cm) do hrubej ľadovej vrstvy. Udice boli miniatúrne, pripomínali detské hračky. Miestami to vyzeralo, že ideme chytať planktón, a nie poriadne fínske pstruhy. ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '0260342f03ca',
        left: {
          src: '/static/images/photosFull/Erasmus/ErasmusIceFishingDan.jpg',
          alt: 'ErasmusIceFishingDan',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAUICBkUFwADCACZr8AbITA9SFsA5v//UV1yhqO7AL7W8IONnaC81t/HEAScaaUJAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/Erasmus/ErasmusIceFishCatch.jpg',
          alt: 'ErasmusIceFishCatch',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AJCgvouXtIOZvQBcYHQMABNwiKYAUGmIAAwo4v//AG2IrQAuSsTd/ltlEZkI49TwAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: 'c63b8d9b2a8c',
        spans: [
          {
            text: 'Prvým krokom bolo napichnutie hnusnej hemžiacej sa larvy na malý háčik. Vyprskávali ako paradajky a ich mazľavé vnútro sa nám lepilo po prstoch. Postupne sme spúšťali háčiky s návnadou do vody a netrpezlivo čakali na prvé úlovky. Rada by som napísala, že sa nám podarilo nachytať plné vedrá rýb. Bolo ich len zopár a ešte k tomu boli drobunké, nie väčšie ako dlaň, takže sme ich aj tak museli vrátiť naspäť do vody. Aj napriek tomu, že sme si žiadnu večeru neulovili, o zábavu sme mali postarané. ',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'roadtrip-usa-1',
    title: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
    description:
      'Prvá časť roadtripu o tom, ako sme 18 dní žili v aute a cestovali po západnom pobreží Ameriky. Zo San Francisca do Monument Valley, kde sa snažíme pochodiť čo najviac národných parkov Ameriky a zaujímavých miest.',
    hero: {
      src: '/static/images/photosFull/SFGoldenGateArticle.jpg',
      alt: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
      width: 1185,
      height: 790,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM48en/pXf/uxeuLeuZyODvosTNwpAapHF/XyMAxQQMpn3FX2QAAAAASUVORK5CYII=',
    },
    categories: ['Cestopisy', 'Hiking', 'Amerika'],
    keywords: [
      'cestovateľský blog',
      'roadtrip',
      'usa',
      'národné parky',
      'san francisco',
      'yosemite',
      'sequoje',
      'death valley',
      'údolie smrti',
      'las vegas',
      'valey of fire',
      'zion',
      'angels landing',
      'bryce canyon',
      'monument valley',
    ],
    status: 'published',
    publishedAt: '2020-04-01T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-04-01T12:00:00.000Z',
    updatedAt: '2020-04-01T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '222618ccf39c',
        level: 2,
        spans: [
          {
            text: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f52003725e2d',
        spans: [
          {
            text: 'Po pracovnom lete v Colorade, sme sa nevedeli dočkať zahájenia tej zábavnejšej, cestovateľskej časti programu Work&Travel. Posledné dni sme už o ničom inom nehovorili. Nič sme nenechali na náhodu a detailne sme si naplánovali pomerne dlhý a časovo náročný roadtrip po západe USA, veď ako sa hovorí, dobrý plán je polovica úspechu. Samozrejme už v druhý deň sme od neho upustili a takmer všetko plánovali za jazdy, veď spontánne nápady sú tie najlepšie, či?',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'b4d83d722f7b',
        asset: {
          src: '/static/images/photosFull/MtPrincetonView.jpg',
          alt: 'MtPrincetonView',
          width: 2000,
          height: 1316,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGP4+Od/Vv02TfPUoLQ6BkVNWV05cQUGhiB/bQCRnQg8/C6C+wAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'd9aa9be121dc',
        spans: [
          {
            text: 'Pre lepšiu predstavivosť opíšeme náš výlet v číslach. Na ceste sme strávili 17 dní, v aute sme spali 8 nocí, najazdili sme autom 5 100 km, nachodili sme 160 km, navštívili sme 4 štáty (Kalifornia, Utah, Nevada, Arizona), zastavili sa v 8 národných parkoch, dohromady sme vypili 16 litrov kávy, teplotné výkyvy sa pohybovali od -1°C do +45°C, zažili sme 8 dychvyrážajúcich východov slnka a získali sme nekonečne veľa krásnych zážitkov.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '575935626632',
        spans: [
          {
            text: 'Čísla neklamú, veru bolo to poriadne dobrodružstvo!',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '5b5876aab1c4',
        level: 3,
        spans: [
          {
            text: 'Deň 1',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7cd3157fbfd8',
        spans: [
          {
            text: 'Ráno, v nekresťansky skorú hodinu, sme skupinovo vyrážali na denverské letisko z rezortu, v ktorom sme cez leto pracovali. Pod oknom na nás čakalo auto, ktoré nám miesto príjemnej jazdy, zabezpečilo trojhodinové bubnovanie v ušiach. Zadné okno sa totižto nedalo zavrieť. Provizórne sme ho zakamuflovali posteľnou plachtou, ktorá pod náporom vetru ustavične plieskala. Na diaľnici sme vyzerali ako praví piráti. Do toho na nás fúkala pokazená klíma s príjemnými 37°C, prelínajúc sa s marihuanovou arómou. O prvý zážitok z výletu sme mali postarané a to sme ešte ani roadtrip nezahájili.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '29fbb86d8b20',
        spans: [
          {
            text: 'Oficiálnu časť výletu sme odštartovali v San José. Požičali sme si auto a cez Sillicon Valley sa presunuli do ',
          },
          {
            text: 'San Francisca',
            marks: ['bold'],
          },
          {
            text: '. Privítalo nás typické sanfranciscské počasie. Počas jazdy jasná slnečná obloha a v okamihu po príjazde do centra hustá hmla zahalila všetko navôkol. Bolo vidno ledva na pár metrov. Ani výrazná červená farba dominantného ',
          },
          {
            text: 'Golden Gate',
            marks: ['bold'],
          },
          {
            text: 'u cez ňu neprenikla. Na záver dňa sme sa zastavili pri mozaikovitých schodoch ',
          },
          {
            text: 'Tiled Steps',
            marks: ['bold'],
          },
          {
            text: ', na ktorých bol z malých úlomkov vyobrazený mesačný svit.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '508f6a455d35',
        asset: {
          src: '/static/images/photosFull/TiledSteps.jpg',
          alt: 'TiledSteps',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ACgSAODFqBIEAAAvMxvbzLp9aU0Aw7eZu7mteG1YAP/12f/96nlnVjyhEwleptuAAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '4aa4fabc5547',
        asset: {
          src: '/static/images/photosFull/SFNoBridgeView.jpg',
          alt: 'SFNoBridgeView',
          width: 1774,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4/uzZk48f3v7//+TnHwZeFoZcBmknDRUBXSUA4W0MsxthSUwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'eb546d1b8435',
        asset: {
          src: '/static/images/photosFull/SFHeart.jpg',
          alt: 'SFHeart',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPgZ2FwsNbQFGZQluFjqE9LXzup4t2F+YundDL0Tp6qratsambw//93ANDhDiC5VRn4AAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '667fae62a853',
        level: 3,
        spans: [
          {
            text: 'Deň 2',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2d7d2cdc3896',
        spans: [
          {
            text: 'Na druhý deň sme už mali väčšie šťastie. V San Francicsu je priemerne 70 slnečných dní ročne a toto bol jeden z nich. Kúpili sme si raňajkové muffiny a vychutnali si ich na pláži ',
          },
          {
            text: 'Baker Beach',
            marks: ['bold'],
          },
          {
            text: '. Vlastne sme si ich ani nevychutnali, skôr by sa dalo povedať, že sme ich rýchlo zhltli, pretože sa nad nami začali združovať nenažrané čajky, čakajúce na vhodnú príležitosť zaútočiť a získať svoju korisť.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'ed29c5de650d',
        asset: {
          src: '/static/images/photosFull/SFBakerBeach.jpg',
          alt: 'SFBakerBeach',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AJjK/6zW/5vJ/6rB8gD29//y7v+1dW2iMkMAlaPDnqGkUxgmJgAPEFIWwE8JK94AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '81146630ad0c',
        asset: {
          src: '/static/images/photosFull/SFGoldenGateArticle.jpg',
          alt: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
          width: 1185,
          height: 790,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM48en/pXf/uxeuLeuZyODvosTNwpAapHF/XyMAxQQMpn3FX2QAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'f98c3a2ba590',
        asset: {
          src: '/static/images/photosFull/SFBernalHeights.jpg',
          alt: 'SFBernalHeights',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYfO3/zuf/r/3/f+TbfwYhHgZleUE1acG2glgA1zIMy5I3VPsAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'e15ce1897732',
        spans: [
          {
            text: 'Ďalšou zastávkou bola kľukatá strmá ulička ',
          },
          {
            text: 'Lombardi Street',
            marks: ['bold'],
          },
          {
            text: ', ktorá potrápi nejedného skúseného vodiča. Sanfranciscské ulice sú veľmi strmé a dlhé, pre väčšinu dopravných prostriedkov takmer nezdolateľné. To však neplatí pre električku ',
          },
          {
            text: 'Cable Car',
            marks: ['bold'],
          },
          {
            text: ', ktorej pravidlá počas jazdy dovoľujú cestujúcim vytŕčať svoje ruky, nohy ba aj hlavy. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '39376ae9bfb5',
        asset: {
          src: '/static/images/photosFull/SFLombardiStreetBus.jpg',
          alt: 'SFLombardiStreetBus',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/vrsjVfX7v/+/v/XOwY/B1M5BgYnZdauBCsA48kNbwUQXMcAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'aa931e1ba802',
        asset: {
          src: '/static/images/photosFull/SFLombardiStreet.jpg',
          alt: 'SFLombardiStreet',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AJ3h/5re/7r+/2Wf2QBugXjE19zS5eoJBwDrHxAYrDC3yQAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '5f7dd723dde5',
        asset: {
          src: '/static/images/photosFull/SFCableCar.jpg',
          alt: 'SFCableCar',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNQsnPwiw3xT0jxyG9j6G+qEpdUYOUQ9/DxY1i7afv/X78O7d3/9M5FAPbvEKq9yuFdAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'd71fdfa60cc7',
        spans: [
          {
            text: 'Záver dňa sme strávili v prístave ',
          },
          {
            text: 'Pier 39',
            marks: ['bold'],
          },
          {
            text: '. Nachádzali sa tu kolotoče, prímorské reštaurácie, kaviarničky a zaujímavé obchodíky plné suvenírov. Zovšadiaľ hrala živá hudba, ktorú prehlušovalo jedine mľaskanie ľudí pochutnávajúcich si na daroch mora. Najnezvyčajnejšou atrakciou boli leňošiace tulene. Vyhrievali sa na slnku, vydávali pračudesné zvuky a mali všetkých totálne na háku.  To je život! ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '9a3e697d9fe2',
        asset: {
          src: '/static/images/photosFull/SFPier39Liv.jpg',
          alt: 'SFPier39Liv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGMw61ru1jHXpns3Q3ZFkioDQ0x7K8OUAJtdsT7/v11j2FmWur634cLhxQBCIRH7iwElfwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'ae89b5e2ed41',
        asset: {
          src: '/static/images/photosFull/SFPier39Lunch.jpg',
          alt: 'SFPier39Lunch',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/ALyhh+fSvpuTifrp2AAnCwD/48WtgGGWfm3Mng62p3lcMQAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'f7ca940edd58',
        asset: {
          src: '/static/images/photosFull/SFPier39Seals.jpg',
          alt: 'SFPier39Seals',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPoX3tl0oZrSw+9vP7/P4OwiIi0tAwzE7OItDQAtoQKLTjjZrsAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '51092efe6147',
        level: 3,
        spans: [
          {
            text: 'Deň 3 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e40bcb61917e',
        spans: [
          {
            text: 'Z veľkomesta sme sa presunuli do ',
          },
          {
            text: 'Národného parku Yosemite',
            marks: ['bold'],
          },
          {
            text: '. Vybrali sme si trasu na vyhliadku ',
          },
          {
            text: 'Glacier Point',
            marks: ['bold'],
          },
          {
            text: '. Na samý vrchol sa dá pohodlne vyviezť autom, ale my sme si povedali, že nebudeme „bábovky“ a pekne si to odmakáme. Výstup nám trval 2,5 hodiny, bol dosť náročný ale ten famózny výhľad bol dostatočnou odmenou.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '49f6f852fe2b',
        spans: [
          {
            text: 'Keď už sme schádzali naspäť k autu, znenazdajky počujeme strašné kriky. Vŕtalo nám hlavou, odkiaľ sa asi tak berú. O pár metrov ďalej zbadáme útleho chlapíka. Rozhadzoval rukami a kráčal hore-dolu akoby sa nevedel rozhodnúť, ktorým smerom sa má vydať. Zrazu namieste zmeravel, zahľadel sa do kríkov a my sme jeho pohľad nasledovali. Hneď sme pochopili, čo je vo veci. Medveď! Obrovitánsky, čierny, huňatý medveď. Všetci sme ostali stáť a v napätí čakali čo sa bude diať. Prvý zareagoval štvornohý „kamoš“, ktorý nám na naše počudovanie bez váhania nastrčil svoju zadnicu a zmizol kdesi v lese. Doposiaľ nevieme, kto mal z koho väčší strach. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '832e6e3dda35',
        asset: {
          src: '/static/images/photosFull/YosemiteHalfDome.jpg',
          alt: 'YosemiteHalfDome',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPQat63+///6Sc/t+9/whCSkj5xcp+RkS4DKz8AwNIMGKYDCukAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'f0c668125f30',
        asset: {
          src: '/static/images/photosFull/YGlacierPointTrail3.jpg',
          alt: 'YGlacierPointTrail3',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AKK30rrp/9v9/9bg+QADCQBLW2WWpKfCwK3cmw97bBbU4QAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'imagePair',
        _key: 'afcb7a7a8bcd',
        left: {
          src: '/static/images/photosFull/YGlacierPoint.jpg',
          alt: 'YGlacierPoint',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgsMhn8G1nqN7EENzJkFtXfufv/7PXTjEI8QAAcyAKSpnRG0oAAAAASUVORK5CYII=',
        },
        right: {
          src: '/static/images/photosFull/YGlacierPointTrail2.jpg',
          alt: 'YGlacierPointTrail2',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNoWHX1wv//l7/9ZxWTYYiJDli0eJW6hjI3CwMAvJoLRBI35wcAAAAASUVORK5CYII=',
        },
      },
      {
        _type: 'heading',
        _key: '3cd0f85aee18',
        level: 3,
        spans: [
          {
            text: 'Deň 4 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '4381d1d280d4',
        spans: [
          {
            text: 'Začínali sme prechádzkou v ',
          },
          {
            text: 'Sequoiskom národnom parku',
            marks: ['bold'],
          },
          {
            text: '. Nie nadarmo dostávajú sekvoje prívlastky ako obrovitánske či gigantické. Podobali sa na mamutie nohy, nie len veľkosťou ale aj chlpatosťou. Pokúšali sme sa objať kmeň najväčšieho stromu, ktorý mal priemer 10m, no chýbalo nám tak 20 párov ďalších rúk.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '16fb0a703f10',
        left: {
          src: '/static/images/photosFull/SeqMamut.jpg',
          alt: 'SeqMamut',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMT3/ysDAKmppgDO39ovCwBdVkgA5uLUhWJRZWFRADE3OhsYGP/04Wo9EUmNcb0nAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/SeqHug.jpg',
          alt: 'SeqHug',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGN4/v+LrKyIjEcYw+Q5nfzMDNaZeQwu1ira4gzyCqIMNfHWBb7KVopsAPmxCk920VxnAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: 'e2d0846cd1b6',
        asset: {
          src: '/static/images/photosFull/SeqHeart.jpg',
          alt: 'SeqHeart',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMomnGgqDS3Y+7q09/+M8jqmb69uPP/rQ1C/AwAttINUHSO7rAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '11f993b24fdc',
        spans: [
          {
            text: 'Nasledoval dlhý presun do Death Valley. Únava stúpala a s ňou sa astronomicky zvyšovali aj litre vypitej kávy. Bola veľká objemom a nie pôžitkom, no na to aby sme dokázali udržať oči otvorené, poslúžila vynikajúco. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5fd25c8b11cd',
        spans: [
          {
            text: 'Death Valley',
            marks: ['bold'],
          },
          {
            text: ' je známe ako jedno z najteplejších miest v severnej Amerike, široko ďaleko samá púšť a step. V celom národnom parku sa nachádzal len hotelík s maličkým obchodíkom (vlastne ešte jeden obrovský rezort pripomínajúci oázu, ale to je nepodstatné). Izbu v hoteli sme si rezervovať nestihli, čo nám zabezpečilo unikátny zážitok. Spali sme v aute, na mieste, kde ručička teplomeru o jedenástej v noci ukazovala 40°C. Išli sme sa rozpustiť ako také čokoládové figúrky. Nebyť žiarivej hviezdnej oblohy, dalo by sa povedať, že to bolo dosť naprd. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '495713cd455d',
        asset: {
          src: '/static/images/photosFull/DVZabrisky.jpg',
          alt: 'DVZabrisky',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+3rs9tXd21afvboDgYVBoa2GOe+WNvna9sA2hAOacQSL0kAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '3627fd5c70f7',
        asset: {
          src: '/static/images/photosFull/DVSunsetRoad.jpg',
          alt: 'DVSunsetRoad',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//Hj//t/Pp/++vvkNwZ5BgY/OTUtDjEfZXUA450MuKDUF9UAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '82bd8092042d',
        asset: {
          src: '/static/images/photosFull/DVPlain.jpg',
          alt: 'DVPlain',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AJDu/6D8/7r//wDAsrLUwr3WvbAALxUALAkAQB0AABwAACoQACUGAMeYD+K+FPShAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '3bfe457230f8',
        spans: [
          {
            text: 'Podarilo sa nám zhotoviť pár záberov nádhernej nočnej oblohy. Keď hovoríme pár, myslíme presne štyri. Liv mala totiž strašnú paranoju z kojotov a iných nočných živočíchov, ktorí nám (našťastie) nevenovali žiadnu pozornosť.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '39bbe8c4a866',
        asset: {
          src: '/static/images/photosFull/DVNightSkyBad.jpg',
          alt: 'DVNightSkyBad',
          width: 2000,
          height: 1219,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGPQVDf89vZ/V/t0cXFpBlF+4d72HhNdYwE+YQB9VQfxFi6CQwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '2961b809d6b8',
        asset: {
          src: '/static/images/photosFull/DVSunrise.jpg',
          alt: 'DVSunrise',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOYuPXF0fv/n/78f+XZfwYBBhY9ZSUrLXVTZRkAz6sL7vsSjXsAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '434f0facd9dc',
        level: 3,
        spans: [
          {
            text: 'Deň 5 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '41515c8ff98c',
        spans: [
          {
            text: 'Zavčasu ráno sme sa vydali hlbšie do údolia. Naplánované body sme chceli stihnúť obzrieť skôr než udrie poludnie, kedy už teplota dosahovala „príjemných“ 45°C. Spotení sme boli, len čo sme vystúpili z auta. Vznášajúci sa sivastý opar na teplote len pridával. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'dd6b6e417c84',
        spans: [
          {
            text: 'Učarovalo nám ',
          },
          {
            text: 'Badwater Basin',
            marks: ['bold'],
          },
          {
            text: ' nachádzajúce sa 85m pod morskou hladinou. Ide o obrovské vysušené jazero, po ktorom ostali rozsiahle soľné ostrovčeky. Vydali sme sa do jeho stredu, vzdialeného zhruba 1km od parkoviska. Trvalo nám to večnosť, slimačím tempom sme prešľapovali z nohy na nohu. Ozývalo sa len praskanie drobných soľných kryštálikov. V ústach sme mali úplne vysušené, aj slinné žľazy pozastavili svoju produkciu. Sily nám rapídne ubúdali.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f3aec8582c07',
        spans: [
          {
            text: 'Keď sme konečne dorazili do stredu vysušeného jazera, nevedno odkiaľ sa v nás vzalo toľko energie, že sme začali vymýšľať všelijaké fotokreácie. Vyskakovali sme a tancovali. Bola to však len krátkodobá ilúzia. Po 3 minútach nám energia klesla tak rýchlo ako výdrž baterky na iPhone a vzájomnou pomocou sme sa ledva doplazili naspäť do auta, kde sme hltavo vypili všetky zásoby vody.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'ce03540bf429',
        asset: {
          src: '/static/images/photosFull/DVBadWater.jpg',
          alt: 'DVBadWater',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgSKhx615SsWxf8fJtDIe2bF5cm7mkveL/z88M1uZGijxM0gwMZkbqAGTZD7tKZNDIAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '718bf1e814e7',
        asset: {
          src: '/static/images/photosFull/DVScvrkol.jpg',
          alt: 'DVScvrkol',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4HFl0ExlcChhcM5jKO6cP3n1fnVV9bTcUoarZ47++/Up1tth9pRuAOt7D4pXWk3zAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'c713f3abd051',
        asset: {
          src: '/static/images/photosFull/DVjump.jpg',
          alt: 'DVjump',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgZGRSUVTw9fYWExNiuH7x3MUTJ/7/+ffy0WMAX5gMEY7YPcMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '022d53771730',
        level: 3,
        spans: [
          {
            text: 'Deň 6 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6849656926e8',
        spans: [
          {
            text: 'Kontrast medzi ',
          },
          {
            text: 'Las Vegas',
            marks: ['bold'],
          },
          {
            text: ' a širokým okolím nám bil do očí. Vysvietené preplnené hlučné mesto vybudované uprostred púšte. Vzduchom sa niesla trpká vôňa hazardu a kubánskych cigár. Ľudia skúšali svoje šťastie a peniaze sa len točili a točili ako koliesko na rulete. Pristavili sme sa pri jednom pokrovom stole. Chlapík vedľa nás vyťahoval z vrecka tučnú rolku bankoviek, blafoval až do samého konca, nedal na sebe nič poznať. Šťastena mu opäť nepriala a peniaze boli v okamihu nenávratne preč. Ticho sme zastonali, pri pomyslení na všetky tie letenky, ktoré by sme si za tú sumu mohli kúpiť...',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'f63a03f2ad6d',
        asset: {
          src: '/static/images/photosFull/LVNY.jpg',
          alt: 'LVNY',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg42HKzSoI8wzV1TZj6Kio+P/p3/8X/8/uOwcAcSAMhGreDxgAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '7838a1ad73ba',
        asset: {
          src: '/static/images/photosFull/LVCasinoLiv.jpg',
          alt: 'LVCasinoLiv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AFIzJyQAAP/IrgDHprb6x8f/zOIA4Jue/+jN4amkAH5EQZ9kUtyUiaD9FepFOILBAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '98744187e7c9',
        spans: [
          {
            text: 'Prechádzka po najznámejšej ulici ',
          },
          {
            text: 'Las Vegas Strip',
            marks: ['bold'],
          },
          {
            text: ' pripomínala menšiu cestu okolo sveta. Nadštandardné hotely boli ladené do rôznych tematík, z jedného sa na nás usmievala socha Slobody, z iného už z diaľky mával gondolier z benátskeho kanálu. Nás najviac zaujal hotel ',
          },
          {
            text: 'Bellagio',
            marks: ['bold'],
          },
          {
            text: ', ktorý sa pýši fontánovou show v sprievode hudby. Každú hodinu sa tu priženú húfy turistov a s nadšením tlieskajú a výskajú. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'a87bc499b230',
        asset: {
          src: '/static/images/photosFull/LVCircus.jpg',
          alt: 'LVCircus',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//fTnSsnl8+ePm92B8PqitBSP3NBBgZWMWEAz24Ls9iVyHwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '67c4e2475a07',
        asset: {
          src: '/static/images/photosFull/LVLivNight.jpg',
          alt: 'LVLivNight',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4vzev0lM1zt80OsKN4f/TCefa3ebl+mzqDGOotxHptBLLNpaQY2AAAElSDmARyxBxAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '9e718b02d374',
        asset: {
          src: '/static/images/photosFull/LVBellagio.jpg',
          alt: 'LVBellagio',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOISUi6deXi/1/vZhWEMIgIMMXGRNSXl0ozMAAAqiIKoBn3iLYAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '7e0f0e769013',
        spans: [
          {
            text: 'Vychýrená uvítacia tabuľa „',
          },
          {
            text: 'Welcome to Las Vegas',
            marks: ['bold'],
          },
          {
            text: '“ nás nemilo prekvapila nekonečným radom čakateľov na vytúžený záber. Kvôli neznesiteľnému teplu sa nám tam trčať nechcelo a tak sme sa cvakli iba z ľavej strany a fičali sme na veľkú porciu zmrzliny.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'af2dc60cbe8e',
        spans: [
          {
            text: 'Naša fotka spred kaplnky s vyrobeným prsteňom vyvolala (najmä doma) nejednu prekvapenú reakciu. Svadba sa však nekonala, naše ÁNO by sme si predsa nepovedali pred nagélovaným Elvisom Presleym.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'cbba31b21075',
        left: {
          src: '/static/images/photosFull/LVSignQueue.jpg',
          alt: 'LVSignQueue',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNg0G1jUKpk8F7LIKZlxMAtquYVxiDGwHBofsGaxlCGY4fm/P977tONVQDBuQ5qTJe0wwAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/LVChapelRing.jpg',
          alt: 'LVChapelRing',
          width: 1001,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AHNqVxoAAF5QOwD7+tf49cuzrpAA+Pvl2M+vWjkoAO3u1HdbPB4AAIdAE3GkNIP1AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: 'b1c5aa4ac962',
        asset: {
          src: '/static/images/photosFull/LVChapel.jpg',
          alt: 'LVChapel',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNoTQhevXD98///Lz35ybAw3+tQe0JvUXJRehyDHAODmiCnvLiQrKQgAIpnD1HSAmp0AAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '8da3bc1000c6',
        level: 3,
        spans: [
          {
            text: 'Deň 7 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7a0f49b61c1a',
        spans: [
          {
            text: 'Nasledujúce ráno sme sa prebúdzali vo ',
          },
          {
            text: 'Valley of Fire',
            marks: ['bold'],
          },
          {
            text: ' – Ohnivom údolí. Pri rannom slnku sa celé údolie premenilo na ohnivú krásu, z ktorej sme onemeli od úžasu. Až do tohto momentu sme ani len netušili, koľko odtieňov červenej v prírode existuje.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e2aa460cd41a',
        asset: {
          src: '/static/images/photosFull/VoFRoad.jpg',
          alt: 'VoFRoad',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49uX/2///H336ferqA4bWGO8oVxtXPR1JBgYA8PEN0gLh6/QAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '6a1cc6d3eacd',
        asset: {
          src: '/static/images/photosFull/VoFView.jpg',
          alt: 'VoFView',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4cf3uieu3Lj149Ov/VwZ5BoYIS+lMJ4XGWG0A14gNFyfa82gAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '5d23702b75b3',
        asset: {
          src: '/static/images/photosFull/VoFRoadView.jpg',
          alt: 'VoFRoadView',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4cej4/zdX/62sZDBhZ0hQZNiRYclQ4yifoCHgI8HA0O0oZcnAYMjAAABY9gx/lBhxygAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '9e46c84c4e2d',
        spans: [
          {
            text: 'Ďalšou zastávkou bol ',
          },
          {
            text: 'Národný park Zion',
            marks: ['bold'],
          },
          {
            text: ', z ktorého máme tie najkrajšie spomienky. Zvolili sme si výstup na ',
          },
          {
            text: 'Angles Landing',
            marks: ['bold'],
          },
          {
            text: '. V druhej polovici trasy nám adrenalín v žilách poriadne stúpol. Chodník sa zúžil natoľko, že ak sme sa chceli vyhnúť oproti idúcim turistom, jednou nohou sme viseli zo strmého 130m vysokého zrázu. Jedinou oporou nám bola vykývaná reťaz a pevná vôľa. Na vrchole sa nám naskytol pohľad na celé údolie, osvietené poslednými slnečnými lúčmi. Razom sme zabudli na strach z výšky a začali si vychutnávať pohľad na nádhernú krajinu, akoby nemal nikdy skončiť. Spoločnosť nám robili neustále hladní čipmankovia a partička skvelých Slovákov. Paradoxne,  sme ich tu stretli viac ako v slovenských Tatrách. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '3c213692ff01',
        asset: {
          src: '/static/images/photosFull/ZionAngelsLanding.jpg',
          alt: 'ZionAngelsLanding',
          width: 2000,
          height: 1125,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+fTh///r965UZ8TyZDsrSrFySDBwKDGyAAA0BwK3srieLoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '768c507b44ee',
        asset: {
          src: '/static/images/photosFull/ZionClimb.jpg',
          alt: 'ZionClimb',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGMITM3ceOT0zVNHGCLjQ+18Pa09bRk2LO3q7i9nEGJiuLd7yv9P+zJTAwFlChHoGIRDygAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'd6f7758814a3',
        asset: {
          src: '/static/images/photosFull/ZionChipmunk.jpg',
          alt: 'ZionChipmunk',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AO/j4W1pYpGRjvb39wDPyMLn5962ublISk0ACxUW6evk8OjfDwkC3TQWS4tgqkoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'fe1ab87c1ce9',
        level: 3,
        spans: [
          {
            text: 'Deň 8 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'eddff139d0e6',
        spans: [
          {
            text: 'V Zione sa nám páčilo tak veľmi, že sme sa tam rozhodli ostať ešte jeden deň navyše. Zvolili sme menej náročnú túru ',
          },
          {
            text: 'Watchman Trail',
            marks: ['bold'],
          },
          {
            text: ' a dali si obed na málo frekventovanej turistickej vyhliadke.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '5b9237432707',
        asset: {
          src: '/static/images/photosFull/ZionWatchman.jpg',
          alt: 'ZionWatchman',
          width: 1856,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOY1L947aqD337/37N1P4MxA0O9n/LNRam5wTIAwg4M3K1lLgQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '981bc922bf60',
        asset: {
          src: '/static/images/photosFull/ZionCanyonLow.jpg',
          alt: 'ZionCanyonLow',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNIjEg9euzxs1//pXlYGQx5GZ5NSfl/ocedhwEAo4ELYrWA8mMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '7bc2d0f3fa4f',
        spans: [
          {
            text: 'Plán cesty bol nabitý a kvôli vykonaným zmenám sme sa ocitli v menšej časovej tiesni. Aby sme stihli všetky zvyšné naplánované body, museli sme sa rýchlo presunúť do ',
          },
          {
            text: 'Bryce Canyonu',
            marks: ['bold'],
          },
          {
            text: '. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a0106a0f8e48',
        spans: [
          {
            text: 'Našli sme tiché miesto na kempovanie a vďaka nízkemu svetelnému smogu nám noc ponúkla nádherné pohľady na našu galaxiu – Mliečnu dráhu. V noci teplota klesla na -1°C, nepríjemná zima zachádzala hlboko pod kožu. Útočisko sme našli v spacákoch, z ktorých nám ostali trčať iba nosy.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f06f70be5574',
        spans: [
          {
            text: 'Prvé slnečné lúče, dopadajúce na tzv. ',
          },
          {
            text: 'Hoodoos',
            marks: ['bold'],
          },
          {
            text: ' (nepravidelné kamenné stĺpy), vdýchli celému kaňonu život. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'cae1f8f0fb07',
        asset: {
          src: '/static/images/photosFull/BryceSunrise.jpg',
          alt: 'BryceSunrise',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPICEn+f3jP/6f7bs+sYtBgYIjSFXOQZzAXYQAApowJnQTURRQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '5a5afc5d237a',
        asset: {
          src: '/static/images/photosFull/BryceSunrise2.jpg',
          alt: 'BryceSunrise2',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOI6py2/9K1//++btu3j0GHgaHbUqbQSMaEmQEAubcLB4MS8ZsAAAAASUVORK5CYII=',
        },
        aspect: 'auto',
      },
      {
        _type: 'heading',
        _key: '6cdb05e1dfa4',
        level: 3,
        spans: [
          {
            text: 'Deň 9 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '04c6beb926b4',
        spans: [
          {
            text: 'Neodmysliteľnou zastávkou na našej ceste bol meander rieky Colorado, pripomínajúci podkovu – ',
          },
          {
            text: 'Horseshoe Bend',
            marks: ['bold'],
          },
          {
            text: '. Žasli sme nad širokou škálou farieb, ktorými oplýval. Prelínanie odtieňov modrej, zelenej, žltej, zvýrazňovala tmavo oranžová kulisa mohutných skál. Bol to veľkolepý obraz, jediný svojho druhu a my sme razom pochopili, prečo je tu také množstvo turistov ako v zaplnených uliciach Manhattenu.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '3137c77281f2',
        asset: {
          src: '/static/images/photosFull/HorseShoeUs.jpg',
          alt: 'HorseShoeUs',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AHFxgfXV0f7TyP/aywAGCgDIjWCbcEjCfVIA/9ej/+67s2pV/8aUurcW0Y5+nDwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '84ada349ee1b',
        asset: {
          src: '/static/images/photosFull/HorseShoePeople.jpg',
          alt: 'HorseShoePeople',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg0HDOn7Tx6P//mbP3MthIM2gyMKyvj42wkwMAiIsJaQpk9BUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '8ac6fecc540c',
        spans: [
          {
            text: 'Zavŕšenie dňa nám ponúklo ďalší jedinečný zážitok v krajine Indiánov – ',
          },
          {
            text: 'Mounument Valley',
            marks: ['bold'],
          },
          {
            text: ', známej aj z filmu Forest Gump. Z každej strany nás v diaľke obklopovali mohutné červené skalné útvary, ktoré svojím tvarom výrazne vytŕčali z krajinného rázu, akoby sem ani nepatrili. Sedeli sme uprostred cesty, smiali sa, užívali si scenériu  a občas sa uhýbali oproti idúcemu autu. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '7bb91946f97a',
        asset: {
          src: '/static/images/photosFull/MVRoad.jpg',
          alt: 'MVRoad',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYfOjQpU+v3vz/9eb3NwYRBgYHDbkCV4MCV30A1soM+4TgUskAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '66ea496eabb7',
        asset: {
          src: '/static/images/photosFull/MVRoadJump.jpg',
          alt: 'MVRoadJump',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AP/m1//x6P/v7f/15gCkhGDDfWDLgVzQlWgAAAgAKhoEXjoaWz8c+DETny1qlJkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '490ddc505ccb',
        asset: {
          src: '/static/images/photosFull/MVSunrise.jpg',
          alt: 'MVSunrise',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMw09c5v2X9hxsXilMTGCSE+OtzMw8sn+1uawEAlhEK4HjWo5gAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '6a6ee1933c4e',
        spans: [
          {
            text: 'Taaak a sme v polovici nášho roadtripu, pokračovanie nájdeš v článku ',
          },
          {
            text: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť ',
            link: {
              href: '/blog/roadtrip-usa-2',
              external: false,
            },
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'roadtrip-usa-2',
    title: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
    description:
      'Pokračovanie roadtripu z Monument Valley až do San Diega. Cestovateľský sen sa stal skutočnosťou a mohli sme si odfajknúť vytúženú vec z nášho bucketlistu –  Grand Canyon.',
    hero: {
      src: '/static/images/photosFull/GCLivPano.jpg',
      alt: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
      width: 2000,
      height: 779,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AImbsqyyy9fS7/by/AAQAwODbU3/7ar/+b3RORAaVgCeTwAAAABJRU5ErkJggg==',
    },
    categories: ['Amerika', 'Cestopisy'],
    keywords: [
      'cestovateľský blog',
      'monument valley',
      'grand canyon',
      'grand kanon',
      'route 66',
      'púšť mojave',
      'mojave desert',
      'universal studios',
      'holywood sign',
      'los angeles',
      'san diego',
    ],
    status: 'published',
    publishedAt: '2020-04-04T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-04-04T12:00:00.000Z',
    updatedAt: '2020-04-04T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '5f666a955327',
        level: 2,
        spans: [
          {
            text: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '29f33071ddbf',
        spans: [
          {
            text: 'Roadtrip USA: zo San Francisca do Monument Valley - 1. časť',
            link: {
              href: '/blog/roadtrip-usa-1',
              external: false,
            },
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'fc4582e55eb2',
        level: 3,
        spans: [
          {
            text: 'Deň 9 ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e3a534d0b93a',
        spans: [
          {
            text: 'Cestovateľský sen sa stal skutočnosťou a my sme si mohli odfajknúť dlho vytúženú vec na našom bucketliste – ',
          },
          {
            text: 'Grand Canyon',
            marks: ['bold'],
          },
          {
            text: '. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '699b3b62c768',
        asset: {
          src: '/static/images/photosFull/GCLivPano.jpg',
          alt: 'Roadtrip USA: z Monument Valley do San Diega - 2. časť',
          width: 2000,
          height: 779,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AImbsqyyy9fS7/by/AAQAwODbU3/7ar/+b3RORAaVgCeTwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'f0807ab4b1ab',
        spans: [
          {
            text: 'Z internetu sme mali napozeraných veľa fotiek a videí tohto miesta, ale ani zďaleka nezobrazovali tú mohutnosť a nádheru, ktorými v skutočnosti oplývalo. Kaskádovitá priepasť rozprestierajúca sa všade, kam len oko dovidelo. Zemité farby medzi sebou ladili tón v tóne, akoby ich kombinoval samotný Leonardo da Vinci, každý pohľad bol pastvou pre oči.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5de7fa91ef12',
        spans: [
          {
            text: 'Stáli sme na vrchu kaňonu, márne dúfajúc, že ten veľkolepý výhľad budeme v tichosti zdieľať len s pár ďalšími jedincami. Hemžilo sa to turistami ako v marakéšskych uličkách počas sezónneho výpredaja a bol to neskutočný boj dostať sa z jedného miesta na druhé. Na žiadané vyhliadky sa tvorili 20-minútové rady. Každý nervózne prešľapoval a hundral, keď ste si dovolili spraviť o jednu fotku viac, ako bolo povolené. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ccde1a678f3d',
        spans: [
          {
            text: 'Keď sa už zdalo, že sme našli náš secret spot, do piatich minút tam bola nasáčkovaná skupina Číňančekov a jasne nám dávali najavo, že sú v značnej prevahe a nemienia sa z tadeto pohnúť skôr, pokým nebudú mať spravených aspoň tisíc selfíčok.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e97c975485a8',
        asset: {
          src: '/static/images/photosFull/GCLivAlone.jpg',
          alt: 'GCLivAlone',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4/u3/h+//795/tXPHAQZuZlYXS4uGvOwIJxsA4Q0NkX3l9WQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'adc795d19ee2',
        asset: {
          src: '/static/images/photosFull/GCWaitingSpot.jpg',
          alt: 'GCWaitingSpot',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4/+bn+6///3//v2/jPgY+Fm4ddfX63MKpVQ0A4/UOTZ8//VAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'a5619475aa29',
        asset: {
          src: '/static/images/photosFull/GCNightSky.jpg',
          alt: 'GCNightSky',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPg5BbkFxTjFxRj8AjN9o8tcgtIY9h76Pjz1+/nL13FEOPnZqqpoiInBQDV+wx35BrzIgAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '04bfcb29980e',
        level: 3,
        spans: [
          {
            text: 'Deň 10',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e8ace1e83ba2',
        spans: [
          {
            text: 'Nechceli sme byť len mainstreamoví turisti, a tak sme sa zavčasu ráno vydali okúsiť pravú tvár tohto Velikána. Vybrali sme si menší trek „',
          },
          {
            text: 'South Kaibab Trail',
            marks: ['bold'],
          },
          {
            text: '“ a vydali sa objavovať zákutia kaňonu. Nazvali sme to inverznou turistikou, keďže sme na začiatku zostupovali smerom nadol, čo išlo celkom rýchlo a ľahko. Tá náročnejšia časť nastala potom, keď sme sa otočili a celý úsek sme museli krvopotne vystúpať naspäť.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '359cb01cb829',
        spans: [
          {
            text: 'Prvým míľnikom bol „',
          },
          {
            text: 'Ooh Aah Point',
            marks: ['bold'],
          },
          {
            text: '“ (treba to vysloviť veľmi pomaly a precítene). Ako názov naznačuje, toto sú citoslovcia, ktoré človek neustále vydával pri pohľade na toľkú nádheru.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '4ba7a8d199b4',
        asset: {
          src: '/static/images/photosFull/GCSunrise.jpg',
          alt: 'GCSunrise',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPI7Vl87vbrrz//vnt4ikGSgcFMnMFZkVVPggEAvvMKyhugJSoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '91bc3aca6561',
        asset: {
          src: '/static/images/photosFull/GCOohAah.jpg',
          alt: 'GCOohAah',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANr8/8Hr/7ri/7zq/wDrwq2jiX3Ap5V8cmwAQS8iEgEASjozEgUG/IQTk1B1HiAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '7cd8f71a5787',
        asset: {
          src: '/static/images/photosFull/GCInverseTrek.jpg',
          alt: 'GCInverseTrek',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM48eD/hXf/7/z+3zRxMYOCki4vK2+YqXKBky4A0JkMDP8n4ecAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '1cc9b08e78ca',
        spans: [
          {
            text: 'Boli sme hrdinovia, veselo sme si vykračovali, však už sme nejaké tie kopce zdolali. Naše hrdinstvo skončilo v polovici plánovanej cesty pri stretnutí s miestnym rangerom, ktorý nás vysmial na plnej čiare. Hovoril: „Vy nie ste odtiaľto, však? Tie 3 litre vody, čo máte v batohu (v skutočnosti sme mali iba dva) vám vydržia tak na pol míle, o chvíľu udrie poludnie a kaňon sa premení na horúce peklo. Dobre vám radím, rozmyslite si to.“ Rozmysleli sme si to. Napriek tomu, že sa nám nepodarilo zliezť až ku rieke Colorado, odchádzali sme spokojní, pretože sme si našli miesto, kde kaňon patril iba nám a patrične sme si ho užili. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '5da8d18e99dd',
        asset: {
          src: '/static/images/photosFull/GCContrastView.jpg',
          alt: 'GCContrastView',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4ePXzhbf/n///v+nsVwZpBoaMEO+mJP8EGxUA4A8NtNo793oAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '9116690e8cf7',
        asset: {
          src: '/static/images/photosFull/GCViewUs.jpg',
          alt: 'GCViewUs',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNYcu7X6ff/7/3/z+AbmOIbkeUVksYQaa2lwMhgJs7DsCXdQI2Bod1JGQCFAg6sa0uk+wAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '46b68aab1efb',
        asset: {
          src: '/static/images/photosFull/GCViewDown.jpg',
          alt: 'GCViewDown',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgsCjUzTmSufD/gnv/GdQZGExkWFOqmq///88QpsO+PNXwfY///1P1ADbyERdIHciCAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '7ee10feb7d57',
        level: 3,
        spans: [
          {
            text: 'Deň 11',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '81464fc26d55',
        spans: [
          {
            text: 'Hodný úsek našej cesty sme brázdili po legendárnej ',
          },
          {
            text: 'CustomPage 66',
            marks: ['bold'],
          },
          {
            text: '. Začali sme v mestečku Williams kúsok od Grand Canyonu a prešli až na samý koniec v ',
          },
          {
            text: 'Santa Monice',
            marks: ['bold'],
          },
          {
            text: '. Miestami sme si pripadali ako vo westernovke, rovná cesta a široko ďaleko len chumáče vysušenej trávy. Ale nie, až také vyprahnuté to nebolo, možno len máme napozeraných príliš veľa amerických filmov. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '547732497eb3',
        asset: {
          src: '/static/images/photosFull/RD66Road.jpg',
          alt: 'RD66Road',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49+7e1x9vvvx5de/ecQYtCQYDBQYFHgYtMQYA3egL72G/WykAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '9d10eab62ee1',
        asset: {
          src: '/static/images/photosFull/RD66MuseumBus.jpg',
          alt: 'RD66MuseumBus',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AOjfs9HKuLGqt/rgwQCWfUwnAAAlAAUXHBgA//vOdnhSllRoVCo4kcIRhhuDUtgAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'a3100d2f95b5',
        asset: {
          src: '/static/images/photosFull/RD66MuseumWall.jpg',
          alt: 'RD66MuseumWall',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/e2Dto4ur5DkglWHGDavmJ+VFCotxiAmwAAAkuYJHGp0xY8AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '9e2618d63757',
        spans: [
          {
            text: 'Pravidelne sme nachádzali reštaurácie v tradičnom americkom štýle. Bielo-čierne kachličkové podlahy, nepohodlné stoličky a dlhý bar, pri ktorom vždy sedel chlapík s pivom v ruke. Hudba zo 70. rokov bola neodmysliteľnou súčasťou. Čašníčky, s úsmevom vhodným do reklamy na Collgate pastu, neúnavne pobehovali a dolievali zákazníkom prepraženú kávu. Menu ponúkalo tie najchutnejšie americké delikatesy, ako sú hranolčeky, hot-dogy, hamburgery a pollitrové milkshakey s dvojitou porciou šľahačky. To, že na konci cesty vyzeráte ako michelinský panáčik, je druhá vec. Adios bikini!',
          },
        ],
      },
      {
        _type: 'image',
        _key: '713c11ab2d87',
        asset: {
          src: '/static/images/photosFull/RD66Bar.jpg',
          alt: 'RD66Bar',
          width: 720,
          height: 900,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPYcWDXzOkT///4weDh4xYXH9XQWMUgJsBgpCprra/BIMjJIMbAoCHBDwBVUgv6L3c5egAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'imagePair',
        _key: '4206d717afb3',
        left: {
          src: '/static/images/photosFull/RD66Selfie.jpg',
          alt: 'RD66Selfie',
          width: 959,
          height: 639,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOoyvBfNbFw6eylX77+YVg2v8NSgiHWmkGVkQEAqCMKhGYSuAkAAAAASUVORK5CYII=',
        },
        right: {
          src: '/static/images/photosFull/RD66Bar2.jpg',
          alt: 'RD66Bar2',
          width: 734,
          height: 587,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AJhyVvfbwMS0rtC6vgBbUEAXAwBfTzj//ukARj02VUU8m4dr0MCqfSsSiP1KDXoAAAAASUVORK5CYII=',
        },
      },
      {
        _type: 'paragraph',
        _key: '2f7b0033bd88',
        spans: [
          {
            text: ' Rýchlu zastávku sme spravili aj v ',
          },
          {
            text: 'Národnej rezervácii Mojave',
            marks: ['bold'],
          },
          {
            text: ', ktorá je známa predovšetkým poľami s nezvyčajnými kaktusmi – ',
          },
          {
            text: 'Joshua Trees',
            marks: ['bold'],
          },
          {
            text: '. Bola to akási zmiešanina stromu a ostnatej palmy rôznej veľkosti a výšky. V celom parku sme boli iba my a jeden motorkár, ktorý vyzeral ako po dobrej opici, a tiež bol prekvapený,že sme svedkami jeho trápenia.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'cd73a8c76f82',
        asset: {
          src: '/static/images/photosFull/MojaveTreesDetail.jpg',
          alt: 'MojaveTreesDetail',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOoWnXy2d//T75/nb77AoOlBoMcG4OFFoMEMwMAxNoKxOQcxUsAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'e041e67c3222',
        asset: {
          src: '/static/images/photosFull/MojaveWalk.jpg',
          alt: 'MojaveWalk',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg4GCKmbqz7NB/q6bdDEGOPI+uLvz/+8jMaRkAi9YMr1UTUhIAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'de83d0cbc8e3',
        asset: {
          src: '/static/images/photosFull/MojaveJoshuaTreeDetail.jpg',
          alt: 'MojaveJoshuaTreeDetail',
          width: 1000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANj//8rx/8zy/wDs0aXnzp/ApIEAj3tVOjkAiX1BABMEACwkAKOMT/80E+en2BkHAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'f0287b29a855',
        level: 3,
        spans: [
          {
            text: 'Deň 12',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '3ae8a6957224',
        spans: [
          {
            text: 'Po dlhšej odmlke sa dostávame naspäť do „civilizácie“. Predposlednou časťou nášho roadtripu je mesto anjelov – ',
          },
          {
            text: 'Los Angeles',
            marks: ['bold'],
          },
          {
            text: '. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '44cead815650',
        spans: [
          {
            text: 'Nebude žiadnym prekvapením, že prvou zastávkou, kam sme si to namierili, bol ',
          },
          {
            text: 'Hollywood Sign',
            marks: ['bold'],
          },
          {
            text: '. To by sme neboli my, keby sme si nevybrali tú najzložitejšiu, najdlhšiu a najneupravenejšiu cestu, aká sa len dala. S naším „šťastím“ sme vygooglili, že najvhodnejšie miesto, kde môžeme zaparkovať auto, je vzdialené 5 km od nápisu. Pomysleli sme si: „Najskôr práca, potom odmena v podobe znamenitého výhľadu. Nemáme na výber, musíme si to poctivo odmakať.“ Joj, keby sme len tušili, ako veľmi sme sa mýlili. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ab642c5bd3ca',
        spans: [
          {
            text: 'Kráčali sme po prašnej a strmej ceste na vrchol kopca. Doposiaľ nám je záhadou, čo viedlo Liv obuť si najnovšie bielučičké tenisky Converse, ale v polovici cesty svoje rozhodnutie trpko oľutovala, biele tenisky už nikdy neboli bielymi. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '69fab00c092c',
        spans: [
          {
            text: 'Vonku bolo nepríjemne dusno a navôkol nebolo jediného stromu, ktorý by nám poskytol ochranu pred pálivým slnkom. Po takmer dvoch hodinách sme sa konečne dotrepali na vrchol kopca nad Hollywood sign. Spokojní sme sa kochali výhľadom na celé mesto, bol naozaj zaslúžený. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '3dbcc0def62e',
        asset: {
          src: '/static/images/photosFull/LASign.jpg',
          alt: 'LASign',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYeOjKl///P///f+r2awZ5MQ5LDSVHQw1eVlYA2dkMLAxCOnwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '9e7aaa666ca2',
        asset: {
          src: '/static/images/photosFull/LAHollywoodSignUs.jpg',
          alt: 'LAHollywoodSignUs',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOYPv/0/3f/P5w6EmatyaDNxLCpvOjBylUKzAwAwEIMRFqNMWMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '5b9ff7d7425d',
        asset: {
          src: '/static/images/photosFull/LAToweWings.jpg',
          alt: 'LAToweWings',
          width: 1896,
          height: 1264,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOwL5tdO23TjQsP///+z6CmLi/IwqAgyBcRYgUApv0KPlNjQ/UAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'd41ca645dd0f',
        spans: [
          {
            text: 'Zrazu sa nám pohľad zabodol na parkovisko nachádzajúce sa priamo pod nami. Autá celkom frekventovane prichádzali a odchádzali a vyfintení ľudia z nich vyskakovali a fotili sa s nápisom bez vynaloženia jediného úsilia. Úsmev nám zmeravel v trpkom úškľabku, neverili sme vlastným očiam. Ako sa sem mohli dokelu dostať, keď spoľahlivý Google nám radil ten zapadákov? O malú chvíľu schádzame k tej skupine ľudí oplývajúcej sviežim výzorom. My dopotení, unavení, vediac, že nás čaká ďalších 5 km naspäť k autu, sme najskôr nevedeli, či sa máme smiať alebo plakať nad touto absurdnou situáciou. Zvolili sme smiech, však takúto túričk k Hollywood sign nezažije len tak hocikto. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '1550d7716c92',
        level: 3,
        spans: [
          {
            text: 'Deň 13',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '85eca35deca1',
        spans: [
          {
            text: 'Napriek tomu, že sme sa osobne so žiadnu hollywoodskou hviezdou nestretli, na ',
          },
          {
            text: 'Walk of Fame',
            marks: ['bold'],
          },
          {
            text: ' sme ich vyobzerali takmer všetky. Všetci turisti vrátane nás poctivo hladkali každý kúsok chodníku a zhotovovali pamätné fotky s hviezdami našich filmových/speváckych idolov. ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '8f0cb777463f',
        left: {
          src: '/static/images/photosFull/LAWalkFameDan.jpg',
          alt: 'LAWalkFameDan',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4/+eWq4uGtZo8w8eXr/dOW1gUFs6wcekiE00LHgYRhozEZB/nMDllEwBoAw8S8d9L4gAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/LAWalkFameLiv.jpg',
          alt: 'LAWalkFameLiv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AJ+50rCfnkJERAD/+aeigj0ZGygAcndW4bmSIBwkAAAGIOPF13hnaW+JEPaASLrwAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: '46d5de12d628',
        spans: [
          {
            text: 'Na ulici panoval ruch. Každý sa snažil presadiť svoj talent najlepšie, ako vedel. Pouliční maliari, taneční, speváci aj predajcovia, každý sa venoval svojmu biznisu. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '3a593174d7f7',
        spans: [
          {
            text: 'Zaujala nás skupinka umelcov veľmi podobná tej na Karlovom moste, kde maľujú portréty alebo karikatúry. Títo však zvečňovali tváre ľudí modelovaním z hliny. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '67b4c2c8e4b1',
        spans: [
          {
            text: 'Nápad netradičného darčeka sa veľmi zapáčil Liv, tak sa rozhodla jeden si zadovážiť. Napriek všetkej snahe pána umelca, k podobnosti medzi výtvorom a Liv nedošlo. Črty tváre, nos aj oči boli na míle vzdialené od reality (pozri foto). Možno to bol pokus o karikatúru, ktovie?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd531dfd805ee',
        spans: [
          {
            text: 'Liv bola spočiatku nadšená svojím originálom. Celej rodine poposielala fotky svojej vymodelovanej hlavy uloženej v krabici na zadnom sedadle auta. Reakcie nenechali na seba dlho čakať. „To čo ste našli za hlavu?“ reagovala mama. „Dúfam, že to nie je darček pre mňa, veď sa budem báť,“ bola reakcia ocina. Táto umelecká tvorba sa s pochopením a pozitívnou odozvou nestretla. ',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '61f031363009',
        left: {
          src: '/static/images/photosFull/LAHeadLiv.jpg',
          alt: 'LAHeadLiv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOY2xKS5mPqYqjM8P/v/fkFQT7KIgxnj2/WE2XQZGBguHJkYUVE+INVmwA05hADAUTiSgAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/LAHeadLiv.jpg',
          alt: 'LAHeadLiv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOY2xKS5mPqYqjM8P/v/fkFQT7KIgxnj2/WE2XQZGBguHJkYUVE+INVmwA05hADAUTiSgAAAABJRU5ErkJggg==',
        },
      },
      {
        _type: 'heading',
        _key: '6134982edeff',
        level: 3,
        spans: [
          {
            text: 'Deň 14',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'beabc8918239',
        spans: [
          {
            text: 'Na chvíľu sme sa vrátili do detských čias v ',
          },
          {
            text: 'Universal Studios',
            marks: ['bold'],
          },
          {
            text: '. Štúdiá ponúkali neskutočný zážitok v podobe 5D kín, animácií, atrakcií, pozoruhodne detailných rekvizít, ktoré návštevníkov vtiahnu do deja obľúbených filmov a rozprávok.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '8eb34fe24569',
        asset: {
          src: '/static/images/photosFull/LAUniversal.jpg',
          alt: 'LAUniversal',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgcOlKzC2v2P+fwcbZlZeDwcDSlCE1I8dQU9XHx54hJdqtLCvw/59bAPGcDVsWC8wjAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '36c3dd2302ae',
        spans: [
          {
            text: 'Naháňali nás dinosaury z Jurského parku, bojovali sme s Transformermi, Harry Potter nás previedol celým Rokfortom, triediaci klobúk nám priradil fakultu (samozrejme Chrabromil), lietali sme na metle aj na hipogryfovi. Ochutnali sme ďatelinové pivo v Rockville, nastúpili na rokfortský expres. So Simpsonovcami sme ochutnali povestné ružové donuty a zabávali sa na show Itchyho & Scratchyho. Blúdili sme po Imhotepovej hrobke (Múmia 2), obklopení stovkami mäožravých skarabeov. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '29a901642f38',
        spans: [
          {
            text: 'Tento deň sme si ohromne užili a zabávali sa.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '847f90876ed2',
        asset: {
          src: '/static/images/photosFull/LAUniversalDonkey.jpg',
          alt: 'LAUniversalDonkey',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGP4/+2+k6W2lbbK0r4qBn9LbU42LhtTlerMZAZ5MRkbHQMbE5usGD8A/YcLAl6RoY0AAAAASUVORK5CYII=',
        },
        aspect: 'portrait',
      },
      {
        _type: 'imagePair',
        _key: '8831d5500727',
        left: {
          src: '/static/images/photosFull/LAUniversalAle.jpg',
          alt: 'LAUniversalAle',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP/35cWnlVpPPQDKrZ+icFYRAAAAxq+t2sTIqZiQAJVsVjgsMKmViaGQE12ws3HJAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/LAUniversalKrusty.jpg',
          alt: 'LAUniversalKrusty',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOw9Uu/dGh3bEkPw7Sti/9/OVc3bxqDiriYCiODjBALgzQDrxIDg7WKGgBOPwx3sZ5uIgAAAABJRU5ErkJggg==',
        },
      },
      {
        _type: 'heading',
        _key: '25c9c8545602',
        level: 3,
        spans: [
          {
            text: 'Deň 15',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cf7d69938337',
        spans: [
          {
            text: 'Výrazných kontrastov sme našli v LA neúrekom. Napríklad, prepychová luxusná štvrť ',
          },
          {
            text: 'Beverly Hills',
            marks: ['bold'],
          },
          {
            text: ' prekypovala pozoruhodnými vilami. To, že ich hodnota sa pohybuje v miliónoch dolárov, nemusíme ani zdôrazňovať. Pred každou stáli zo dve luxusné autíčka a ani si nechceme predstaviť, čo bolo ukryté zraku verejnosti v garážach. Tráva bola zarovnaná s milimetrovou presnosťou a zavlažovacie systémy v pravidelných cykloch jemne rozprskávali vodu aj na palmy. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2fb1c8a31353',
        spans: [
          {
            text: 'Hneď vedľa sa nachádzala nákupná ulička ',
          },
          {
            text: 'Rodeo Drive',
            marks: ['bold'],
          },
          {
            text: ' so svetoznámymi módnymi značkami. Na jednu kabelku od Louisa Vuittona by sme nemali, ani keby sme obaja predali po jednej obličke.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '2b29f3933832',
        left: {
          src: '/static/images/photosFull/LABeverlyHillsUs.jpg',
          alt: 'LABeverlyHillsUs',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGMwaLpkO+EBg0kMg6mJtomeKj8DA0NZUVRRZniYsx3D/9+vPz+9MbGhHAD+fQ9UzdAffgAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/LARodeoDriveLiv.jpg',
          alt: 'LARodeoDriveLiv',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AK35/wAPKAMySgCElJsyQ1MxVWYAh5KdhoByHCcdAPb6/ufWvuLc3jTVElbsc1itAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: '0a93934d9f8a',
        asset: {
          src: '/static/images/photosFull/LARodeoDrive.jpg',
          alt: 'LARodeoDrive',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AEGK4iN90gBuxWWq/gCUr96PosrBxejs/v8ABgQAMycgt5aKloB6j4wTvqyAMd0AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '3ae33f78a596',
        asset: {
          src: '/static/images/photosFull/LAGriffith.jpg',
          alt: 'LAGriffith',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGPQ0tJ2dPQy0DeVlJJhMDc1vrhp1f+3j030DQBTbghdI9YlQAAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '07ee70267f9f',
        spans: [
          {
            text: 'Na druhej strane v silnom kontraste stojí celý ',
          },
          {
            text: 'LA Downton',
            marks: ['bold'],
          },
          {
            text: '. Bordel, špina, smrad. Porozhadzované smeti, porozbíjané fľaše, bezdomovci okupujúci lavičky, stany rozložené uprostred ulice a zo všadiaľ sa na nás valil gandžový smrad. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '752007b127d7',
        spans: [
          {
            text: 'Človek by ani neveril, že tieto dve miesta môžu byť súčasťou jedného mesta.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '797ef24000fd',
        asset: {
          src: '/static/images/photosFull/LAPalms.jpg',
          alt: 'LAPalms',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANv//6fZ/4S74wBdhZeZy+mHtMcAkauwrMC9g42KACUoIjk/MA0CAPJJFBiGg+8PAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: '1ff5cbb27bbf',
        asset: {
          src: '/static/images/photosFull/LATent.jpg',
          alt: 'LATent',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMQk+Bl5WYIC3JKC/dk2Dy7a2F3zesT2/5/vA4AWs0K7ETEe5gAAAAASUVORK5CYII=',
        },
        aspect: 'auto',
      },
      {
        _type: 'heading',
        _key: 'd386b1462464',
        level: 3,
        spans: [
          {
            text: 'Deň 16',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'abd805c2ffdf',
        spans: [
          {
            text: 'San Diego',
            marks: ['bold'],
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '998171504a57',
        spans: [
          {
            text: 'Bolo niečo po polnoci a my, totálne vyšťavení a prepotení, sme ešte zúfalo blúdili na diaľnici niekde medzi LA a San Diegom s jediným cieľom – nájsť miesto na prenocovanie. Všetko bolo pozatvárané alebo maximálne predražené. V jednom kempe od nás chceli šialených 95 dolárov za parkovanie auta. Začali sme podliehať beznádeji. Dokelu, my dnes oka nezažmúrime.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '50731d18f72e',
        spans: [
          {
            text: 'O hodinu alebo dve (človek, v tom zúfalstve čas vôbec nesledoval) sa pred nami zjaví vysvietené prícestné odpočívadlo. „ Áno! Sme zachránení,“ pomysleli sme si. Našou spásou bolo parkovisko preplnené mexickými kamionistami a podobnými zúfalcami, ako sme boli my. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7fb1f8baad91',
        spans: [
          {
            text: 'Ukladali sme sa spať a mysľou nám blúdili tie najstrašnejšie scenáre, ktoré by sa tej noci mohli prihodiť. Čo keď sa nám niekto začne dobíjať do auta, zoberie nám všetky veci a nás prepašujú v jednom z tých kamiónov do Mexika a my zvyšok života strávime lúpaním fazule... ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'bcf7de11880e',
        spans: [
          {
            text: 'Popravde, vyspali sme sa ako bábätká pekne do ružovučka a týmto sa ospravedlňujeme všetkým tým mexickým kamionistom za krivý úsudok.  ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd0caceae28e0',
        spans: [
          {
            text: 'Ráno sme dorazili do San Diega. Nemali sme dopredu pripravený plán, a tak sme sa riadili tým, čo nám poradil strýčko Google. Navigoval nás do nádhernej farebnej časti ',
          },
          {
            text: 'Spanish Village Art Center',
            marks: ['bold'],
          },
          {
            text: ', preplnenej maličkými dielničkami zasvätenými umeleckej tvorbe. Hneď vedľa bol obrovský areál s botanickou záhradou.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '6eb0c2903955',
        asset: {
          src: '/static/images/photosFull/SDSVAC.jpg',
          alt: 'SDSVAC',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANzHwK2flc3dzgBsXFQHAApxY0kAiXRof2ttyrGjAIh/bZZ+Z//154VnE6sJmxz4AAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'd45c4d4d5111',
        asset: {
          src: '/static/images/photosFull/SDSWTiles.jpg',
          alt: 'SDSWTiles',
          width: 1066,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ADM6NAYHFEUhAAB3em1Zr8VgYWIAwb6Upd7Lm77LAMKpr//3x+PX9RsIE4JN5BsFAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'ff041478ebfc',
        asset: {
          src: '/static/images/photosFull/SDSWTilesLiv.jpg',
          alt: 'SDSWTilesLiv',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg4GMwc5DNrMiSVpJg6Js649WjO/9///r/9R0AZsAMe3yBAGEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'a38e75c9d38f',
        asset: {
          src: '/static/images/photosFull/SDBotanicGarden.jpg',
          alt: 'SDBotanicGarden',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AD9oeNr+/cfY12JwagAYJhaUpIq1xJ5meV0AAAoBNTkgxL5+0s2ScV4R2v1ozLwAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '2dd7fb82785c',
        asset: {
          src: '/static/images/photosFull/LASWHouse.jpg',
          alt: 'LASWHouse',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgyFwiWLySISiXIbOfoTAvqDjWXkGagZORgSEzI2DD4t5vP+/+f30VAOZ6DwOk3DfdAAAAAElFTkSuQmCC',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '2b51cb737812',
        spans: [
          {
            text: 'Po tomto umeleckom zážitku naše kroky smerovali na pláž. Konečne si ideme užiť more a nič nerobenie. Na ',
          },
          {
            text: 'Ocean Beach',
            marks: ['bold'],
          },
          {
            text: ' panovala idylická atmosféra. Slnko príjemne hrialo, všade sa ozýval nádherný šum mora, pláž bola čistá a takmer nikto na nej nebol. Pôvodne sme chceli napísať, že  zvyšok dňa sme strávili surfovaním, chillovaním a povaľovaním sa na pláži. Pravda je však taká, že po desiatich minútach sme od vyčerpania zaspali (tie dva týždne na cestách si vyžiadali svoju daň). Ani sme sa nestihli natrieť opaľovacím krémom, a tak sa naše telá po dvojhodinovom spánku na priamom slnku premenili na paradajkový pretlak. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2dbaee0c671d',
        spans: [
          {
            text: 'K surfovaniu sme sa vôbec nedostali. Voda bola taká ľadová, že sme si v nej omočili ledva prsty na nohách. Do San Diega sme si skrátka prišli pospať na pláž. No nestálo to za to? ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '7ee3e2e3f908',
        asset: {
          src: '/static/images/photosFull/SDSwim.jpg',
          alt: 'SDSwim',
          width: 1666,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AM3k/o2w0RZEXgBCawD//v+ro5ozBwBRQkYAzs3Gx6SOMAAAalZOf7cRsiMbtyEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '6c6bf7cfc145',
        asset: {
          src: '/static/images/photosFull/SDSunsetChill.jpg',
          alt: 'SDSunsetChill',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4fXT2/28X//+6fv/CUgZFDV1xBgElPiFlFX0AzrsLe/hh0pUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '059b1e92a5ea',
        asset: {
          src: '/static/images/photosFull/SDSunsetSiluethe.jpg',
          alt: 'SDSunetSiluethe',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4f/Pa+107e1KSVPn5Gf6fm/NiXtHu4oC2AFMAxCgNkMk1+38AAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '401ae7033887',
        spans: [
          {
            text: 'Priestor pre tvoje otázky',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'cestahrdinovsnpzapisky',
    title: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
    description:
      'Počas cesty sme sa snažili zdokumentovať každý deň nášho putovania. Pocity, dojmy, zážitky, nečakané zvraty. Taká bola pôvodná predstava, ale nebudeme klamať. Entuziazmus z písania denníka nás veľmi rýchlo opustil. Postupne sa stávali z \tdenníka krátke zápisky, zo zápiskov odrážky, z \todrážok slovné spojenia a \tzo slovných spojení ostali už len citoslovcia a \tsmajlíky. Na napísanie nasledujúceho článku nám to bohato stačilo.',
    hero: {
      src: '/static/images/photosFull/SNPDuklaPamatnik.jpg',
      alt: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
      width: 2000,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNo7Wn59v93XVs9AzcDQ29zZFVlUGqKX26mLQChfwrsVbbjhwAAAABJRU5ErkJggg==',
    },
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    keywords: [
      'cestovateľský blog',
      'cesta hrdinov',
      'snp',
      'dukla',
      'devín',
      'turistika',
      'diaľková turistika',
      'prechod',
      'tatry',
    ],
    status: 'published',
    publishedAt: '2020-10-27T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-10-27T12:00:00.000Z',
    updatedAt: '2020-10-27T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: 'f28a4c228037',
        level: 2,
        spans: [
          {
            text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'c4707bb397b0',
        asset: {
          src: '/static/images/photosFull/SNPDuklaPamatnik.jpg',
          alt: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNo7Wn59v93XVs9AzcDQ29zZFVlUGqKX26mLQChfwrsVbbjhwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'c63a73e98c0c',
        spans: [
          {
            text: ' Počas celej cesty som si poctivo písala denník. Dokumentácia celého dňa, od zobúdzania až po zaspávanie. Pocity, dojmy, zážitky, nečakané zvraty. Taká bola moja predstava, ale nebudem klamať, entuziazmus z písania denníka ma veľmi rýchlo opustil. Presnejšie povedané, po troch dňoch. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a7d75b665243',
        spans: [
          {
            text: 'Len si to predstav, každý deň kráčaš 30 km s ťažkým hebedom na chrbte. Si spotený, hladný, zablatený od hlavy až po päty, do nitky premočený, doštípaný rojom komárov a inou háveďou, vystrašený, že z každej strany ťa sleduje krvilačný živočích, ktorý čaká na správny okamih zaútočiť. A večer, keď konečne dorazíš na miesto odpočinku, si rád, že zvládneš postaviť stan a navariť si večeru. Písať denník pri biednom svetle čelovky je posledná vec, ktorú som mala v tú chvíľu chuť urobiť. A tak sa postupne stávali z denníka krátke zápisky, zo zápiskov odrážky, z odrážok slovné spojenia a zo slovných spojení ostali už len citoslovcia a smajlíky. Aby om však napísala článok o našich najzaujímavejších zážitkoch a postrehoch z cesty, mi však bohato postačia. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '988914e1c069',
        level: 3,
        spans: [
          {
            text: 'Deň pred začiatkom',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '669d82d3e1b1',
        spans: [
          {
            text: 'Napriek poctivej príprave, tréningu, radám od skúsených SNPčkárov, načítaným blogom s blížiacim sa dátumom odchodu gradovali vo mne obavy a pochybnosti. Naozaj máme na to pokoriť túto výzvu? Chodiť na jednodňové turistiky je jedna vec, ale prejsť 760 km za 30 dní bolo pre mňa niečo nepredstaviteľné.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2fcf6a8e99b9',
        spans: [
          {
            text: 'Poslednú noc pred odchodom som spala ako na ihlách. Predstavovala som si tie najdivnejšie, najstrašnejšie a najvtipnejšie scenáre, ktoré by sa nám na našich potulkách po Slovensku mohli prihodiť. Zvieratá mám rada, ale stretu s medveďom/diviakom by som sa naozaj radšej vyhla. Ako prvú pomoc mi mamina chcela zadovážiť slzný sprej na medvede (silne koncentrovaný pepřák). Oceňujem jej dobrý úmysel, ale keď som si predstavila situáciu, keď obrovský medveď čumí na mňa kdesi z kríkov a ja v sebaobrane začnem dolovať zo spodku naprataného ruksaku tubičku slzného spreju, ktorý treba vzápätí namieriť na jeho čierne oči situované 10 cm od eho veľkej papule, vyzeralo to viac ako komicky. Takže slzák tentoraz vynechám a boj s medveďom budeme musieť vyhrať svojpomocne.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '39c313ff5cc4',
        level: 3,
        spans: [
          {
            text: 'Začíname',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '94649dd3b9a3',
        spans: [
          {
            text: 'Po celodennom presune v aute sme konečne dorazili do cieľového bodu, ktorý je zároveň východzím bodom našej Cesty hrdinov – Dukliansky priesmyk. Prvý významný medzník na ceste je symbolický pamätník postavený na počesť padlým sovietskym a česko-slovenským vojakom z druhej svetovej vojny. Chodníkom nás sprevádzali tanky, lietadlá, náhrobné kamene, busty padlých generálov. Pochmúrne počasie zvýrazňovalo atmosféru, ktorou toto historicky významné miesto dýchalo.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'd208baadda51',
        asset: {
          src: '/static/images/photosFull/SNPLietadlo.jpg',
          alt: 'SNPLietadlo',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNQU+Ds7Kr79evbq89vGRQUOAPtrd0tbJi5GACUUQlxe1yhQgAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '54c956a84992',
        asset: {
          src: '/static/images/photosFull/SNPTank.jpg',
          alt: 'SNPTank',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AOPd0bS5xZ+kt/v9+wCbklA9NygPDBewo4bV8w3V11HCmwAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'd5f466160186',
        spans: [
          {
            text: 'Doposiaľ som si nestíhala ani uvedomovať, na čo sme sa to vlastne odhodlali. Zvuk naštartovaného auta a krátke zatrúbenie na pozdrav mi razom všetko vyjasnili. Niet cesty späť. Ostali sme tam stáť sami dvaja. Len ja, Dan a naše 15-kilové prenosné bývanie na chrbte. 770 km pred nami. Presun z východu na západ Slovenska. Pešo. Pomoc!   ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '69e98ab388b1',
        asset: {
          src: '/static/images/photosFull/SNPKranieVDzungli.jpg',
          alt: 'SNPKranieVDzungli',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAALAF9kXfn89ACUpoZzfm6uv5wAyuS2doNtyeK5AL7croiUdrHHpIHyFWHFALD2AAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'heading',
        _key: '78c3e9f38328',
        level: 3,
        spans: [
          {
            text: 'Neskúsenosť svine prináša',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9be4ee5e2784',
        spans: [
          {
            text: 'Ako čerstvo začínajúci SNPčkári sme uznali za vhodné vyraziť na cestu o šiestej večer. Cieľ je dedinka Medvedie vzdialená 13 km. Blúdime lesom. Stmieva sa. Konáre vrhajú strašidelné tiene a každé šuchnutie lístia je čím ďalej tým desivejšie. Celý čas si v duchu opakujem: Nemôžeš byť pokakaná už na prvom kilometri, Devín je ešte ďaleko. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '72adea0c50e3',
        spans: [
          {
            text: 'Je potrebné vyriešiť otázku prvého spania v „divočine“. Popri ceste vidíme zopár posedov či prístreškov, avšak nie sú určené na prenocovanie. Jeden je zbúraný, druhý zamknutý a z tretieho nás pre istotu vyhadzuje poľovník s nabitou puškou.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'df5a01940063',
        spans: [
          {
            text: 'Keď nie v posede, rozkladáme stan pod ním. Rozumný človek isto dobre vie, že posedy všeobecne slúžia na pozorovanie divej zveri. V túto noc sme to pochopili aj my, keď sa namosúrený diviak rútil dolu kopcom, vydávajúc pačudesné zvuky, ktorými nám dával jasne najavo, že nie sme vítaní na jeho teritóriu. Jedinou zábranou od stretu s diviakom bol náš pancierový úkryt – dvojvrstvový stan.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '59b9006ea734',
        asset: {
          src: '/static/images/photosFull/SNPPosed.jpg',
          alt: 'SNPPosed',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOoaZ6yZuXG3///z1y8m0GYgSHORb27IMhEXRAAsjALHwL6vOUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'de92b914a2b7',
        level: 3,
        spans: [
          {
            text: 'Ranná rutina',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f35a54616a8b',
        spans: [
          {
            text: '5:30 Zvoní budík \nOdkladáme ho 3-krát.\n6:40 Konečne sa nám podarilo vyhrabať sa zo spacákov\n7:58 Končíme s rannou prípravou: hygiena, raňajky, balíme veci\n8:00 Vyrážame na cestu\nCelkový čas 2,5 hodiny \n',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '369fd6aac4e4',
        spans: [
          {
            text: ' Podľa vyššie uvedeného harmonogramu je ľahké vydedukovať, že ranné vstávanie nebola naša silná stránka. Väčšina SNPčkárov sa snaží vyraziť v čo najskorších ranných hodinách v snahe prejsť čo najviac kilometrov, a aby sa vyhli pečúcemu slnku. My si radšej pospíme o dve hodiny viac a potom sa celý deň škvaríme. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '26d9edca4cdb',
        asset: {
          src: '/static/images/photosFull/SNPMagura.jpg',
          alt: 'SNPMagura',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4GSwtTVvntRy/tVthv8/nixYubdp/vyQ/AgAjhIMrDP7nqAAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '9ad5d8b2acba',
        level: 3,
        spans: [
          {
            text: 'Voňaví na 4 minúty',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd8ef5c95a35c',
        spans: [
          {
            text: 'Nás ako SNPčkárov by si rozpoznal už z diaľky. Obrovské batohy na pleciach. Nosíme dve tričká dokola. Vôkol nás sa šíri poctivý prepotený púšik, ktorý neprebíja žiadna vôňa deodorantu (takú zbytočnú záťaž nosí len máloktorý SNPčkár). Vlasy máme také mastné, že stačí vyklepať rezne a môžeme vyprážať. Presne takto vyzerá človek, ktorý sa päť dní nesprchoval a jeho jediná záchrana sú vlhčené utierky. Občas sa pošťastí a nájdeme prameň či potôčik, v ktorých si doprajeme výdatnú ľadovú sprchu. Je to vskutku blažený pocit byť opäť čistý. Nie však nadlho. Po pár minútach kráčania sa všetko vracia do starých koľají. Už aj zabúdame, že nejaká sprcha bola.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '162d0f743b52',
        asset: {
          src: '/static/images/photosFull/SNPSuseniePradla.jpg',
          alt: 'SNPSuseniePradla',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAA9dgAiVgAhUgAyRVxDYX+yursAx7mTABAAmJaUAODPu0E0Hv/36fKvD30W3E2sAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'image',
        _key: 'd7c5112b4479',
        asset: {
          src: '/static/images/photosFull/SNPckarskaSprcha.jpg',
          alt: 'SNPckarskaSprcha',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPw8hV4+f9a77zJtc0BDGraDP+/rN62olCQlwEAn1oLUHCG6UkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'b4a32192f318',
        level: 3,
        spans: [
          {
            text: 'Tichá domácnosť',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7d7d2c213aa2',
        spans: [
          {
            text: 'Začíname 4. deň cesty. Míňame mesto Bardejov, čím sme sa definitívne rozlúčili s možnosťou sadnúť na priamy spoj domov. Nemáme bohvieaké šťastie na pekné počasie. Leje od rána do večera. Napriek tomu, sa snažíme udržať si dobrú náladu. Darilo sa nám to až do chvíle, kým sme neprešli dedinu Hervartov. Zjavil sa pred nami strmý tiahly kopec, ktorý je náročné zdolať aj za normálnych podmienok, nie keď dážď spravil z terénu blatovú šmýkačku. S vypätím všetkých síl sa po malých krôčikoch posúvame nahor. Začínal sa ma zmocňovať nepríjemný pocit, že toto sa neskončí dobre. Skôr ako som stihla svoje obavy povedať nahlas, stratila som pevnú pôdu pod nohami. Možno bez tej ťarchy na chrbte by som to ustála. Gravitácia však vyhráva nad váhou môjho batohu, ktorý ma nemilosrdne ťahá so sebou dolu. Ležím na chodníku ako taká rozpučená žaba. Som zablatená až po uši a neviem, či sa mám začať smiať alebo plakať. Som na neho strašne nahnevaná. Po zvyšok dňa máme tichú domácnosť.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'f22e3b4bec0b',
        left: {
          src: '/static/images/photosFull/SNPHojdacka.jpg',
          alt: 'SNPHojdacka',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGMIzQm1C7Yw8NRhePzjxJs/ZyfPamIoLg6pb4w/d2Yxw/fHj4JdncT5GQBtDBIeF2scjQAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/SNPPadDoBlata.jpg',
          alt: 'SNPPadDoBlata',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMQU2VgFmNQs5diCCgTYeRjaF2UyuBZrqpiKPP/zyMGCSMGM3uDpdP7AJq+CjWaOhM2AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: 'ed1469818d21',
        spans: [
          {
            text: 'Sily nám rapídne ubúdajú. Cieľ cesty je v nedohľadne, sme do nitky premočení, trasieme sa od zimy. Nie sme jediní, čo majú plné zuby daždivého počasia. Z kríkov na seba upozorní diviak. Za taký šprintérsky výkon, ako sme následne predviedli, by sa nemusel hanbiť ani samotný Usain Bolt.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '8391d81b235a',
        left: {
          src: '/static/images/photosFull/SNPHervartov.jpg',
          alt: 'SNPHervartov',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMob0j69ftriJ8Dg4GLu4ezuYqqHIOghquBkaaVOjcDA6+OGgPD4iItAAGjCh3dkmJ5AAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/SNPBlatovaCesta.jpg',
          alt: 'SNPBlatovaCesta',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AG6yVSBWFAAPAABDWDsmNCgiKhwAvbCq7ePX6uTOAKGbmv//7Pjx3QmNEq+05iF7AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: '518e21c9f9cd',
        spans: [
          {
            text: 'Svetlom dnešného dňa boli teplá sprcha a páperové periny  na chate Čergov, presne také, pod akými sme kedysi spávali u starej mamy. Keď sme sa nimi zababušili, ostali mám trčať iba nosy. Konečne si začínam cítiť prsty na nohách.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '0779ba1209a9',
        asset: {
          src: '/static/images/photosFull/SNPCergov.jpg',
          alt: 'SNPCergov',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYtm/dx///1+zdKKcjxqCjwZBbaqmiz8AgwgAAqxUJYsl4GRQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '8e7f6e32f6ab',
        spans: [
          {
            text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
            link: {
              href: '/blog/cestahrdinovsnpzapisky2',
              external: false,
            },
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '89c7ade030f5',
        spans: [
          {
            text: 'Galéria z našej Cesty hrdinov SNP',
            link: {
              href: '/galeria?view=cestahrdinovsnp',
              external: false,
            },
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'cestahrdinovsnpzapisky2',
    title: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
    description:
      'Poznáš ten nepríjemný pocit, keď ti začne krútiť črevá, sociálne zariadenie je na míle ďaleko a ty v snahe zabrániť blížiacej sa pohrome prekrižuješ nohy a zatínaš ritné polky. Na SNPčke takýto problém nastať nemôže. Záchod nájdeš na každom kroku. Kedykoľvek to na teba príde, môžeš si jednoducho odskočiť za najbližší krík.',
    hero: {
      src: '/static/images/photosFull/SNPPortraitVT.jpg',
      alt: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
      width: 2000,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4/+//m8//Xz1+8e3/f4aExFgrCxtuBsmg0BAA86EOXyTa2qcAAAAASUVORK5CYII=',
    },
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    keywords: [
      'cestovateľský blog',
      'cesta hrdinov',
      'snp',
      'dukla',
      'devín',
      'turistika',
      'diaľková turistika',
      'prechod',
      'tatry',
    ],
    status: 'published',
    publishedAt: '2020-11-07T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-11-07T12:00:00.000Z',
    updatedAt: '2020-11-07T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: 'a3679dc5f764',
        level: 2,
        spans: [
          {
            text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 2.časť',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '668ef816a498',
        level: 3,
        spans: [
          {
            text: 'Príroda volá',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '87d0273ecca8',
        spans: [
          {
            text: 'Poznáš ten nepríjemný pocit, keď ti začne krútiť črevá, sociálne zariadenie je na míle ďaleko a ty v snahe zabrániť blížiacej sa pohrome prekrižuješ nohy a zatínaš ritné polky. Na SNPčke takýto problém nastať nemôže. Záchod nájdeš na každom kroku. Kedykoľvek to na teba príde, môžeš si jednoducho odskočiť za najbližší krík. Jedna z takýchto situácií nastala, keď sme sa presúvali do Kysaku – dediny neďaleko Košíc. Kráčame v dobrej nálade, diskutujeme o tom, čo si dáme na večeru a kde budeme spať. Po chvíli mi Dan prestane odpovedať. Obzriem sa za seba a vidím ho skrúteného vo veľmi zvláštnej polohe s utrápeným výrazom na tvári. Mierne predklonený sa podopiera o palice a nahlas predycháva. Neviem, čo sa deje. Nevládze? Má kŕč? Bolí ho niečo? Snažím sa ho povzbudiť, cieľ je už na dosah, tak nech to nevzdáva. Stále nič. Jeho letmý pokus o pohyb skončil neúspešne. Po chvíli vykríkne: „Už nemôžem spraviť ani krok navyše, musím sa ísť vys*ať!“ V momente zhodil batoh a zmizol kdesi v lese. Musím povedať, že mi poriadne odľahlo. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '54d0358e56ec',
        asset: {
          src: '/static/images/photosFull/SNPNaPosratie.jpg',
          alt: 'SNPNaPosratie',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOwsDN++v9/18JZDAz8DJPWJacUmzL4JysHF6gtPGDNoGvP4BTEXDpdCQAy5A2bIPvjVQAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'heading',
        _key: 'be60f121ccb5',
        level: 3,
        spans: [
          {
            text: 'Pripíjame na Volovec',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '3f3ee2f819d8',
        spans: [
          {
            text: 'Schádzame z vyznačenej trasy a máme namierené na chatu Volovec. Po celodennom kráčaní nám padne vhod teplý guľáš na zohriatie. Nemáme v pláne zdržať sa nadlho, vyhliadli sme si skvelé miesto na spanie, odkiaľ si budeme môcť vychutnať západ slnka. Ledva sme vykročili z chaty, obklopila nás veselá partička Trnavákov a dali sme sa do reči. Ani sme sa nestihli predstaviť a už sme mali štamperlík domácej slivovice v ruke. Vzápätí nasledoval ešte jeden, do druhej nohy. Potom ešte jeden, ako sa vraví „kapurkový.“ Nemusím ani hovoriť, že nebol dobrý nápad hádzať takto zhurta do seba toľké panáky silnej pálenky. Naše žalúdky neboli na túto tekutinu vôbec pripravené. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'c3525ec70e87',
        asset: {
          src: '/static/images/photosFull/SNPVolovecGulas.jpg',
          alt: 'SNPVolovecGulas',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPwNlfQ5GNQEWRgkBfhZLBwZODjYUj1t4kLC9i1bQ3D/4sLv904/v/XdwCbzg3kWG2IaAAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '36e0a40e4fe0',
        spans: [
          {
            text: 'Chtiac-nechtiac nakoniec ostávame spať na chate. Celý večer sme spievali, tancovali a zabávali sa, chata sa len tak otriasala. Panáky veselo štrngali. Alkohol začal pomaly opantávať naše zmysly, až nás napokon opantal úplne celých. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'de2c78e087f0',
        asset: {
          src: '/static/images/photosFull/SNPVolovecOpica.jpg',
          alt: 'SNPVolovecOpica',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGN48P//nT//r33/zxDQuiG6uCEsw5PB0NtTSUU2PlKbISzAnJWTQVtXFgCxpw/HtrHEPwAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '30c6ac4b46cd',
        spans: [
          {
            text: 'Nasledujúce ráno som si privstala a vyšla na vrch Skalisko, odkiaľ som pozorovala jeden z najkrajších východov slnka, aké som doposiaľ zažila. Naschvál píšem v jednotnom čísle, pretože Dan po prehýrenej noci nebol schopný vstať z postele. Bol biely ako stena a svet sa mu točil pred očami.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '0a937cdec713',
        asset: {
          src: '/static/images/photosFull/SNPSkalisko.jpg',
          alt: 'SNPSkalisko',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYtXDb9/cf7l+9/v/7LQYhFgYzfUVBBmkbJQ4AyvkLYdMLPSUAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '9c6872a70bc8',
        spans: [
          {
            text: 'Na počudovanie, vôbec som sa na neho nehnevala, práve naopak, bolo mi ho ľúto. Svoj kalich horkosti si vypil sám až do dna. Jeho trestom za včerajšie žúrovanie bolo celodenné kráčanie so silnou opicou a suchotami v ústach. Myslím si, že pálenky sa tak skoro nedotkne.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '3a558c35faee',
        spans: [
          {
            text: 'Napriek plánovaným 27 km sme si dnešný hike skrátili takmer o polovicu. Zaujala nás útulňa Gálová, v ktorej sme skrátka museli ostať. Na SNPčkárske pomery sme si pripadali ako v Grand hoteli. Nádherná drevenička s pieckou, plne vybavenou kuchynkou a čistým záchodom. Dokonca nás čakalo vychladené pivo, ktorému by sa Dan dozaista potešil, nebyť včerajšej noci.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '7d9507cf0ffa',
        asset: {
          src: '/static/images/photosFull/SNPGalovaUtulna.jpg',
          alt: 'SNPGalovaUtulna',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4f+/h69v3/v/+//TtewYHC1VlBgYdVgYRFgYA3qoMBnFyq0YAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'b75af8ae5224',
        level: 3,
        spans: [
          {
            text: 'Búrka ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ca949eaec661',
        spans: [
          {
            text: 'Celý deň kráčame v otrasnom teple, je dusno a ja sa cítim ako vo fínskej saune. Ťažko sa mi dýcha a pot mi steká prúdom po tvári. Dala by som všetko za vylihovanie pri bazéne, s osviežujúcim drinkom v jednej ruke a s kýbľom zmrzliny v druhej. Z môjho rozjímania ma vytrhne silný úder blesku, ktorý nás upozorní na blížiace sa mračná. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '12e957315953',
        spans: [
          {
            text: 'Skontrolujeme predpoveď počasia. Všetko sa zdá v poriadku. Búrka je od nás na míle vzdialená a vietor taktiež fúka opačným smerom. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '1dcad5eb773a',
        spans: [
          {
            text: 'Akosi sme pozabudli na fakt, že počasie na horách sa dokáže zmeniť z minúty na minútu. Tak aj bolo. Asi po polhodine kráčania sa smer vetra otočil a fúkal priamo na nás. Skôr než sme si stihli obliecť pršiplášť, spustil sa hustý lejak (tak mi bolo dopriate to vytúžené schladenie, o ktorom som pol dňa básnila). Blesky šľahali ako besné všade navôkol. Jeden udrel tak blízko nás, že sme počuli, ako elektrické výboje svištia vzduchom. Búrka na horách je odlišná od tej, čo zažívame v meste. Všetko je mnohonásobne hlasnejšie, silnejšie, intenzívnejšie. Človek si hneď uvedomí, aká veľká je sila prírody.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '33f7955a6e68',
        asset: {
          src: '/static/images/photosFull/SNPGolgotaUkryt.jpg',
          alt: 'SNPGolgotaUkryt',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN48vyxCB+noqR0VVsGw8//Byc2pXibyZc02AAAjxsKl6Q8JBkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '14fff629a04e',
        spans: [
          {
            text: 'Našťastie vieme, čo robiť v lese počas búrky, a pohotovo reagujeme. Odhadzujeme kovové palice. Vypíname telefóny. Bežíme čo nám sily stačia a snažíme sa nájsť úkryt, v ktorom by sme mohli prečkať túto smršť. Sme odkázaní iba sami na seba. Po istej chvíli sa ako zázrakom pred nami zjaví drevený altánok. Neváhame ani sekundu a bežíme sa schovať. Síce sa klepeme ako osiky (od zimy aj od strachu), ale sme ako-tak v bezpečí. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '1c2dce4ff42d',
        asset: {
          src: '/static/images/photosFull/SNPNTPrsiplast.jpg',
          alt: 'SNPNTPrsiplast',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4+vv/1av3127YvXn3IQYbS00ZERY+VgYNdQkAy+4LDWiB/TcAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '77fc131f1b80',
        spans: [
          {
            text: 'Pre búrku nemôžme pokračovať ďalej. Ani jeden z nás si netrúfa odhadnúť, ako dlho budeme musieť čakať. Stretnú sa nám pohľay a je nám jasné, že obaja myslíme na to isté. Bez slov začneme vyťahovať z batoha ešus, horák a poháre. Nič nenapraví pokazenú náladu lepšie ako teplá instantná káva 3 v 1.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '2557de8d5d86',
        level: 3,
        spans: [
          {
            text: 'Mimozemšťania na Chopku',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7a2e181ca04a',
        spans: [
          {
            text: 'Titulné stránky časopisov zaplavili správy o pristátí ufa na Chopku. Len žiadna panika, nijaké sci-fi sa nekonalo. Jediní mimozemšťania pobehujúci po Kamennej chate sme my dvaja, teda aspoň my sme sa tak cítili. Ako jedni z mála sme na chrbte niesli obrovské turistické ruksaky, sme prepotení, pretože už piaty deň po sebe nosíme jedno a to isté tričko. Zapáchame aj sami sebe. Obzriem sa po miestnosti a mám pocit, že sme sa dostali na nejakú fashion show. Všetci sú vyobliekaní ako z kultového módneho časopisu. Pôvabné šaty, luxusné kabelky, kožené sandáliky, značkové vestičky či lakované topánky. Uvažujem nad tým, ako nepohodlne by sa v takýchto outfitoch turistikovalo. Jediný spôsob, ako sa mohli dostať hore, je predražená lanovka. Spravili si pár fotiek na Instagram a svoj výlet zavŕšili obedom s nemalou vysokohorskou prirážkou. Keď sme im rozprávali, akej výzve čelíme a čím všetkým sme si už prešli, len nechápavo krútili hlavami nad naším „zvláštnym koníčkom“. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '69ee8822faaa',
        level: 3,
        spans: [
          {
            text: 'Votrelec na útulni Žľab',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9fe1a0dc974f',
        spans: [
          {
            text: 'Nájsť strechu nad hlavou bolo vždy príjemnou zmenou po niekoľkých dňoch prespávania v stane. Na ceste sme našli niekoľko útulní, nie všetky sa však dajú nazvať útulnými. Na luxus si nepotrpíme, ale útulňa Žľab bola silný kaliber aj pre nás.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '1de5b25ed418',
        asset: {
          src: '/static/images/photosFull/SNPZlab.jpg',
          alt: 'SNPZlab',
          width: 1777,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgVGPwK/c1izWV02Vh2Hpg8q//T69eO+rtogEAaSIKZiIy/BIAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '6c0a95fae382',
        spans: [
          {
            text: 'Po stenách liezli čiernočierne pavúky veľké ako moja päsť. Tí, ktorí ma poznajú, vedia, že z pavúkov mám panický strach, ale po dvadsiatich dňoch strávených v prírode som rezignovala a dočasne som sa naučila s nimi žiť. To však neznamená, že nespravím všetko preto, aby som zabránila akémukoľvek kontaktu s nimi. Najväčšiu hrôzu som mala z toho, že mi vlezú do spacáku alebo nebodaj do úst. Zababušila som sa od hlavy po päty tak, že ostal len malý otvor na prísun vzduchu. Niekde som čítala, že vedci predpokladajú, že priemerne zjeme v spánku 8 pavúkov ročne. Na útulni Žľab by bol tento počet dosiahnutý za jedinú noc.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '07c0003c16c2',
        spans: [
          {
            text: 'Všetko je zahalené v tme. Počuť iba šum listov a praskanie konárov vo vetre. To ticho preruší zvláštne cupkanie po streche. Zmeravela som. Nedýcham, len načúvam a čakám, čo sa ide diať. Dan to isté. V tom začne rinčať železná sieťka natiahnutá pozdĺž strechy. Schmatneme prvé, čo nám príde do ruky. Dan turistickú palicu, ja topánku a čelovku. V rohu zbadáme reflektujúce oči obrovského hlodavca, ktorého nevieme vôbec identifikovať. Má chvost ako potkan, huňatú sivú srsť ako činčila, uši a oči ako netopier a pysk ako myš. Neskôr sme si to vygooglili a zistili, že spoločnosť nám prišiel robiť plch. Postavil sa na zadné, akoby nám chcel dať najavo, kto je tu pánom. Dan využil svoje dlhoročné šermiarske skúsenosti a vydal sa do boja s votrelcom. Nechceli sme ho zabiť, len poriadne vystrašiť, aby dal pokoj nám aj našim veciam. Chudák chlpáč, vôbec nechápal, čo sa deje. Splašene pobehoval z jednej strany chaty na druhú. Zaliezol do diery a po chvíľke opäť vyliezol skontrolovať situáciu. Posvietili sme si na neho bližšie a uvideli evidentne ľudskou rukou vytvorený brloh. Veď on je tu považovaný za domáceho miláčika. Súboj so spolubývajúcim prehrávame n plnej čiare. Nedal nám spať ďalšiu hodinu a pol, ako sa neustále približoval k našim spacákom. Hodinky ukazujú 3:10. Od úplného vyčerpania konečne zaspávame. Ranné vstávanie bude dosť náročné.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '8b6f509cb33f',
        level: 3,
        spans: [
          {
            text: 'Komáre a iné (h)ovady ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '0fff2ec37198',
        spans: [
          {
            text: 'Z duše neznášam otravný hmyz. Sprevádzal nás počas celej cesty a nech som sa snažila akokoľvek, zvyknúť som si naň nedokázala. Extrém extrémov bol záverečný výstup na Devínsku Kobylu. Hotová invázia besných krvovyciciavačov. Naše zbrane sú neúčinné. Štípancami sme posiati, akoby sme dostali ovčie kiahne. Zaháňam sa a snažím sa ich všetky rozplesnúť, skôr než zaboria ten hnusný sosák do mojej kože. Cítim sa ako hlavný hrdina rozprávky Sedem jednou ranou. Na mojom pleci sa vytvoril symbolický cintorín padlých komárov ako výstraha pre ostatné príživnícke (h)ovady. Už by mohli pochopiť, že nie som žiaden darca krvi na takéto účely ani neprevádzkujem hromadnú taxislužbu.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '2a30c1ff0588',
        left: {
          src: '/static/images/photosFull/SNPKomare.jpg',
          alt: 'SNPKomare',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOQt4n1aFrJIGjG0DL7zt13/0snv2RgCN7G4HWUwXgWQ9KG/wwMsQxsMQA5Eg7ec9zk5AAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/SNPFotenie.jpg',
          alt: 'SNPFotenie',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMPc/975/6PA/wC4yX++0JiEmFQAW3IALUQAJz4AACU0ABsmAAcQAL9PD8G7YkhjAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'paragraph',
        _key: 'a77e1eca5282',
        spans: [
          {
            text: 'Ceste hrdinov SNP: 30 dní, tisíce zážitkov - 1. časť.',
            link: {
              href: '/blog/cestahrdinovsnpzapisky',
              external: false,
            },
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a8e14c5df9f2',
        spans: [
          {
            text: 'Galéria z našej Cesty hrdinov SNP',
            link: {
              href: '/galeria?view=cestahrdinovsnp',
              external: false,
            },
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'cestahrdinovsnp',
    title: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
    description:
      'Najdlhšia turistická magistrála na území Slovenska. Začína sa v Duklianskom priesmyku a končí sa na hrade Devín. Jej dĺžka je 770 kilometrov. Celú túto trasu sme sa rozhodli prejsť peši a aj sa nám to podarilo. V tomto článku sa dočítaš základne informácie o našom putovaní na Ceste hrdinov SNP.',
    hero: {
      src: '/static/images/photosFull/SNPNTKosariska.jpg',
      alt: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
      width: 999,
      height: 666,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4dPL4tatn//6/vmrnXAZpBgZNToYobwZlYQYAw84KxjCeywMAAAAASUVORK5CYII=',
    },
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    keywords: [
      'cestovateľský blog',
      'cesta hrdinov',
      'snp',
      'dukla',
      'devín',
      'turistika',
      'diaľková turistika',
      'prechod',
      'tatry',
      'rady a tipy',
    ],
    status: 'published',
    publishedAt: '2020-09-09T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-09-09T12:00:00.000Z',
    updatedAt: '2020-09-09T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '84688c6a7c7e',
        level: 2,
        spans: [
          {
            text: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'eb40b624303b',
        spans: [
          {
            text: 'Naša cesta zhrnutá v číslach. Prešli sme 770 km za 30 dní s výškovým prevýšením 30 000 metrov. Denne sme nachodili v priemere 27 km s batohmi vážiacimi plus-mínus 15 kg. Zodrali sme 3 páry topánok a 5 párov ponožiek. 21 nocí sme spali v stane pod šírym nebom. Dokopy sme zjedli 34 vifoniek, 56 horaliek a vypili 10 litrov kofoly. Počas cesty sme stretli 2 diviakov, 10 srniek, 46 kamzíkov a 1 medveďa. Zdolali sme 19 slovenských pohorí (Laborecká vrchovina, Ondavská vrchovina, Busov, Čergov, Šarišská vrchovina, Čierna hora, Volovské vrchy, Spišsko-gemerský kras, Stolické vrchy, Nízke Tatry, Starohorské vrchy, Veľká Fatra, Kremnické vrchy, Žiar, Malá Fatra, Strážovské vrchy, Biele Karpaty, Myjavská pahorkatina a Malé Karpaty). Celé toto dobrodružstvo nás každého stálo cca 400 €.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '9274aa200d0b',
        asset: {
          src: '/static/images/photosFull/SNPDuklaVojak.jpg',
          alt: 'SNPDuklaVojak',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGO4dvWqk41hgJ/dr3//GRQFGGS4WcSYGLQ1ZQGLrwfoMj7SMQAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'aaa5a7c39301',
        level: 3,
        spans: [
          {
            text: 'Čo je Cesta hrdinov SNP?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ada0c473db86',
        spans: [
          {
            text: 'Najdlhšia turistická magistrála na Slovensku, dlhá 770 km, vedie od Duklianskeho priesmyku na severovýchode krajiny až po hrad Devín pri Bratislave. Cesta kopíruje trasy, po ktorých sa počas Slovenského národného povstania pohybovali partizánske jednotky, a prechádza miestami, kde sa odohrali dôležité udalosti spojené s oslobodzovaním Slovenska v rokoch 1944 – 1945. Táto trasa je preto nielen fyzickou výzvou, ale aj cestou po dejinách a pamiatkach Slovenska.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'e673c3fa50a3',
        asset: {
          src: '/static/images/photosFull/SNPznacka.jpg',
          alt: 'SNPznacka',
          width: 2000,
          height: 936,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4cu+QIB+DlraEiZkSg6+nzb17h57dPn71+C4AfesLy8u0ynQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '4eddb7028967',
        level: 3,
        spans: [
          {
            text: 'Prečo sme sa na ňu vydali my?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '78e19026cc94',
        spans: [
          {
            text: 'Tak ako každý rok mali sme naplánované najrôznejšie cestovateľské dobrodružstvá po celom svete. Smutné je, že Slovensko v nich zahrnuté nebolo. Nepríjemná situácia spôsobená novým koronavírusom však v okamihu všetko zmenila. Spočiatku nám to bolo všetko ľúto. Ako budeme cestovať, keď sú hranice zatvorené?  ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '4746c7bd7ec7',
        spans: [
          {
            text: 'Na celú situáciu sme sa pozreli z úplne iného uhla. Možno práve teraz je čas, keď sa máme spomaliť a ostať na chvíľku doma. Nemám na mysli ostať sedieť na zadku, ale vydať sa spoznávať krásu našej domoviny.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'f1b2bfd38217',
        asset: {
          src: '/static/images/photosFull/SNPChopok.jpg',
          alt: 'SNPChopok',
          width: 1333,
          height: 1777,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/APLz8ezp6fj38ADb7PO8zMzG0NMAX25yDgAT2bLAAP/vyJ+Keue1rTo2GjgTdOfyAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'heading',
        _key: '946bfda06aed',
        level: 3,
        spans: [
          {
            text: 'Boli sme na cestu pripravení?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f21e8b6c04a7',
        spans: [
          {
            text: 'Minulý rok padlo zopár slov o Ceste hrdinov, že jedného dňa ju určite zdoláme, ale nikto nečakal, že sa na ňu vydáme tak rýchlo. Hlavne naše mamy nie. Dievča z mesta ide žiť 30 dní v lese, keď chytá panický záchvat z pavúka na záchode? Viete založiť oheň? Kde budete spať? Viete, čo máte urobiť, keď stretnete medveďa? To nemáte šancu zvládnuť. Všetci len neveriacky krútili hlavami a modlili sa, nech si tento šialený nápad rýchlo vyhodíme z hlavy.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f9fab6ea86ac',
        spans: [
          {
            text: 'Popravde aj ja som miestami pochybovala. Nikdy predtým sme neabsolvovali poriadnu viacdňovú túru. Teda týždeň pred SNPčkou sme išli na dvojdňový prechod Veľkofatranskou magistrálou, po ktorej som vyhlásila, že na viacdňovú túru už nikdy v živote nepôjdem. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '1a8cfa2a38a8',
        asset: {
          src: '/static/images/photosFull/SNPStanMorning.jpg',
          alt: 'SNPStanMorning',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPQZmD4f3fBi6vnRITlGFIcWBZUJf369uH1zskAkZ8MswNU6RsAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '97c4b73a2d45',
        level: 3,
        spans: [
          {
            text: 'Aká bola Cesta hrdinov SNP pre nás dvoch?',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '32d91065b705',
        spans: [
          {
            text: 'Cesta hrdinov SNP bola obrovská životná skúsenosť, ktorú vrelo odporúčame každému dobrodruhovi. Ani sme len netušili, do akého šialeného dobrodružstva sa vrháme. Počas našej cesty sme si prešli kadečím. Tým lepším, ale nevyhli sme sa ani kritickým a náročným situáciám. Na mesiac sme vystúpili zo svojej komfortnej zóny. Spávali sme v stane, na lavičke, na zemi, ale opodiaľ latríny. Z môjho pohľadu je Cesta hrdinov SNP najmä o mentálnej sile. Nohy vládzu, ale treba o tom presvedčiť aj hlavu. Kráčali sme v silných búrkach, keď sme si museli siahnuť na svoje dno a nájsť v sebe silu a chuť pokračovať ďalej. Zažili sme aj neúprosné horúčavy, keď nám chýbala voda a jedlo a z posledných síl sme dokráčali k najbližšiemu motorestu, aby sme sa občerstvili. Počas celej cesty sme stretávali rôznych ľudí, ktorí dodávali našej ceste tie správne grády. Niektorí ľudia boli veľmi prekvapení, keď zistili, že kráčame 770 kilometrov naprieč Slovenskom, a naše dobrodružstvo opisovali ako veľmi zvláštny koníček. Iní ľudia boli na turistov – SNPčkárov zvyknutí a rovno nás vítali s naplnenými štamprlíkmi a prestretým stolom. O týchto zážitkoch sa viac dozvieš v pripravovaných príspevkoch, ktoré budú písané formou denníkových záznamov. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: '0daab53ea89c',
        asset: {
          src: '/static/images/photosFull/SNPNTKosariska.jpg',
          alt: 'Z Dukly na Devín za 30 dní: naša cesta hrdinov SNP v číslach',
          width: 999,
          height: 666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4dPL4tatn//6/vmrnXAZpBgZNToYobwZlYQYAw84KxjCeywMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
    ],
  },
  {
    _id: '',
    slug: 'radyatipyerasmus',
    title: '5 dôvodov prečo (NE)ísť na ERASMUS',
    description:
      'V článku 5 dôvodov prečo (NE)ísť na Erasmus sme spísali najčastejšie (NE)podstatné dôvody, ktoré odrádzajú študentov zúčastniť sa Erasmu. Zároveň ti ukážeme, že ani jeden z nich nie je dostatočnou prekážkou na to, aby si nevyužil jednu z najlepších cestovateľských príležitostí, aká sa ti na vysokej škole ponúka.',
    hero: {
      src: '/static/images/photosFull/Erasmus/OuluNalikari.jpg',
      alt: '5 dôvodov prečo (NE)ísť na ERASMUS',
      width: 1999,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM49fU/Q8peBudVDEwlDPlTzhYufxC46BVDxSkAnHgMKjyMwGwAAAAASUVORK5CYII=',
    },
    categories: ['Európa', 'Rady a Tipy'],
    keywords: [
      'erasmus',
      'erazmus',
      'oulu',
      'rady a tipy',
      'prečo ísť na erazmus',
    ],
    status: 'published',
    publishedAt: '2020-05-16T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-05-16T12:00:00.000Z',
    updatedAt: '2020-05-16T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '740b70613e78',
        level: 2,
        spans: [
          {
            text: '5 dôvodov prečo (NE)ísť na ERASMUS ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ab3947f11711',
        spans: [
          {
            text: 'Často sa stretávame s rôznymi otázkami na naše cestovanie, napr.: „Ako je možné, že toľko cestujete? Odkiaľ beriete na to peniaze? Ako dokážete skĺbiť cestovanie so štúdiom?“',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7e68d774b8de',
        spans: [
          {
            text: 'To, že sme študenti, nie je predsa žiadna nevýhoda a už vôbec nie bariéra pri plnení svojich snov. Práve naopak, je to jedinečné obdobie plné príležitostí a benefitov (nielen tých cestovateľských), ktoré treba využiť na maximum. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c65ee023c432',
        spans: [
          {
            text: 'Jednou z najdostupnejších príležitostí vycestovať na vysokej škole je program Erasmus+, ktorý umožňuje študentom stráviť až jeden rok na študijnom pobyte v zahraničí. Napriek tomu túto možnosť nevyužívajú študenti naplno.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'b4a08d15ac51',
        spans: [
          {
            text: 'V tomto článku sa zameriame na päť najčastejších (NE)podstatných dôvodov, ktoré odrádzajú študentov od Erasmu, ale zároveň ti ukážeme, že ani jeden z nich nie je dostatočnou prekážkou na to, aby si nevyužil jednu z najlepších cestovateľských príležitostí, aká sa ti na vysokej šole ponúka.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '62fef0f53da0',
        asset: {
          src: '/static/images/photosFull/Erasmus/OuluLakeJump.jpg',
          alt: 'OuluLakeJump',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgSN3LIBXLwBPM0HWP4f3P/+UtM2NSy4+ffwcAdcELmJkrJzIAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'e2ebf5adf4cf',
        level: 3,
        spans: [
          {
            text: '1. Povinné papierovačky',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a3ba3997ef03',
        spans: [
          {
            text: 'Veľké množstvo papierovačiek patrí medzi najmenej zábavné časti celého programu, ale, bohužiaľ, nedá sa im nijak vyhnúť. Je to jeden z najčastejších dôvodov, pre ktoré sa študenti vyhýbajú podať prihlášku na Erasmus.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cd9c02e6c883',
        spans: [
          {
            text: 'Aj my sme mali na začiatku obavy. Tŕpli sme, či niečo nepopletieme alebo na niečo nezabudneme. Z každej strany sa na nás valili papiere, ktoré bolo treba spracovať, podpísať, odoslať, odovzdať. Človek nevedel, čo má vybavovať skôr. Celý proces prebehol na naše prekvapenie veľmi hladko a rýchlo, bez zbytočných komplikácii, takže si naozaj netreba navodzovať zbytočný stres hneď v úvode.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '222db2d39d74',
        spans: [
          {
            text: 'O tom, čo všetko je potrebné vybaviť pri podávaní prihlášky na Erasmus a ako vyzerali naše jednotlivé kroky, sa dočítaš v článku ',
          },
          {
            text: 'Erasmus vybavovačky krok za krokom',
            link: {
              href: '/blog/radyatipyerasmusvybavovacky',
              external: false,
            },
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c796d8bd3d3b',
        spans: [
          {
            text: 'Upozorňujem, že každá univerzita môže mať iné podmienky, iné termíny aj iný zoznam partnerských univerzít. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'f4361c8e3679',
        level: 3,
        spans: [
          {
            text: '2. Neuznané kredity',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '43e69b477c8a',
        spans: [
          {
            text: 'Obava z predlžovania bakalárskeho štúdia pre neuznané kredity je veľkým strašiakom pre nejedného študenta. Niekto má to šťastie, že mu uznajú všetky, iný má tu smolu, že ani jeden. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '1f5d47647b27',
        spans: [
          {
            text: 'Uznanie kreditov závisí na tvojom výbere predmetov z ponuky hosťujúcej univerzity, ktoré by mali v čo najväčšej miere korešpondovať so študovanými predmetmi na domácej univerzite. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'be9ec045f0f2',
        spans: [
          {
            text: 'Pokiaľ by sa ti predsa len nepodarilo nájsť adekvátne predmety, stále to nie je dôvod na paniku z predĺženia štúdia. Zájdi za svojimi profesormi a pozisťuj si všetky možnosti týkajúce sa ukončenia jednotlivých predmetov. Väčšinu sú profesori veľmi ústretoví a snažia sa nájsť spôsob, ako ti danú situáciu uľahčiť. Najčastejším spôsobom býva zadanie semestrálnych prác počas tvojho výjazdu a po návrate ti poskytnú priestor na vykonanie chýbajúcich skúšok.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '76ccdf1a21de',
        level: 3,
        spans: [
          {
            text: '3. Osamelosť ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '2a31893a8cce',
        spans: [
          {
            text: 'Pre niekoho to môže byť desivá predstava vyraziť úplne sám, do krajiny vzdialenej niekoľko sto kilometrov od domova. Napriek tomu, že budeš obklopený hromadou nových ľudí, môžeš sa na začiatku cítiť trochu osamelo. Nebudem ti klamať, prvé dni môžu byť stresujúcejšie a náročnejšie. Je to celkom prirodzené po príchode do nového prostredia a pri množstve zmien: nástup do novej školy, noví ľudia, noví profesori, nová krajina. To je však hlavná myšlienka programu Erasmus – zažiť a naučiť sa niečo nové. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd8acf5722e18',
        spans: [
          {
            text: 'Nemaj strach, všetci prichádzajúci študenti prežívajú rovnaký mix pocitov. Začínajú od nuly, nikto sa s nikým nepozná, nikto nevie, čo má očakávať. Neboj sa urobiť prvý krok a nadviaž kontakt s novými ľuďmi. Neistota a hanblivosť po istom čase začnú opadávať, vzťahy sa začnú utužovať a kamarátstva stmelovať. Garantujem ti, že pocit osamelosti ti už po zvyšok pobytu nepríde ani len na um.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '801a1838a72f',
        asset: {
          src: '/static/images/photosFull/Erasmus/OuluTripToPetersburg.jpg',
          alt: 'OuluTripToPetersburg',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPIPPI/fsf/2C3/GVbd+5+3/MKB//8Z0oraOJhZCwvLGcz9yxkE9BkkXADAJRHc/ksqVgAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'b8f3c5b2804c',
        spans: [
          {
            text: 'Na každej univerzite zapojenej do programu Erasmus+ nájdeš sekciu ESN (Erasmus Student Network). Je to študentská organizácia, ktorá pomáha rozvíjať mobilitu študentov po celej Európe. Funguje na báze dobrovoľníctva a jej členmi sú študenti, ktorí sa usilujú prichádzajúcim študentom pomôcť pri adaptácii na nové prostredie. Organizujú rôzne aktivity, party, výlety, pri ktorých študenti majú možnosť navzájom sa spoznať. Rovnako ti ukážu priestory školy, vysvetlia ti, ako funguje školský systém, dajú cenné rady (napríklad kam si zájsť na dobré pivko), poprípade zorganizujú tour de mesto, aby si na začiatok trafil aspoň do potravín a na autobusovú zastávku.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '38b4986bf164',
        spans: [
          {
            text: 'Buddy program čiže každý člen sekcie má možnosť stať sa buddym (parťákom) pre zahraničného študenta. Je to osoba, na ktorú sa môžeš kedykoľvek obrátiť, keď si nebudeš vedieť s niečím poradiť. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5a2549b06ed6',
        spans: [
          {
            text: 'Naša skúsenosť: Môj buddy sa volal Caleb. Bol to vysmiaty chalan z&bsp;Arizony, ktorý bol veľmi milý a ochotný. Hneď v prvý deň nás s Danom zachránil tým, že po nás prišiel na letisko o tretej v noci, keď už nepremávali žiadne spoje a nemali sme sa ako dostať na intrák.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'b7f5f56f30ac',
        level: 3,
        spans: [
          {
            text: '4. Výučba v cudzom jazyku',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c121a109477f',
        spans: [
          {
            text: 'Ako sa mám vzdelávať v cudzom jazyku, keď niekedy nerozumiem výkladu ani v materinskom jazyku? Učiť sa v cudzom jazyku sa ti môže zdať nereálne. Ja si však myslím, že vo väčšine prípadov môže ísť o podvedomý strach z niečoho nového, neznámeho.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a3a74f46d89c',
        spans: [
          {
            text: 'To, že na prvých hodinách nerozumieš ani slovo, je viac-menej úplne normálne. Aj ja som prvý týždeň sedela schúlená v zadnej lavici dúfajúc, že si ma nikto nebude všímať, nie to ešte očakávať nejakú zmysluplnú odpoveď a účasť v diskusii. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f561a7b6551a',
        spans: [
          {
            text: 'Študovať v cudzom jazyku je iné, chvíľami náročné, ale po istom čase sa do toho dostaneš a začneš to brať ako prirodzenú vec.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7224b2672b31',
        spans: [
          {
            text: 'Veľmi nápomocní prekonať jazykovú bariéru boli samotní profesori, ktorí boli maximálne zhovievaví, milí a trpezliví. Rozprávali primeraným tempom a vždy sa uistili, že všetkému rozumieme. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'bc53b4df6bb2',
        spans: [
          {
            text: 'Ak máš obavy, že tvoje jazykové schopnosti nie sú na takej úrovni, aby si zvládol výučbu v cudzom jazyku, vždy máš veľa možností, ako sa v ňom môžeš zdokonaliť:',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9623e9b71c20',
        spans: [
          {
            text: '• Kurzy (online, jazykové školy, súkromné doučovnie) \n• Pozeranie filmu v angličtine alebo aspoň s anglickými titulkami\n• Čítaj všetko, čo sa v angličtine čítať dá\n• Každý deň rozšír svoju slovnú zásobu o 5 nových slovíčok\n• Vyskúšaj mobilné aplikácie\n',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'ffb93d6f4907',
        level: 3,
        spans: [
          {
            text: '5. Financie',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd1b5ce70d030',
        spans: [
          {
            text: 'Otázka financií je veľmi dôležitou pri plánovaní každého cestovania. Raz mi jedna kamarátka povedala, že by musela predať obidve obličky, aby si mohla dovoliť cestovať toľko ako my. Mám pre teba skvelú správu, účasť na Erasme ťa nebude stáť žiaden svoj orgán. Jedinečnosť tohto programu spočíva v získaní nemalého príspevku na svoj pobyt v zahraničí od Európskej Únie, ktorý by mal pokryť väčšiu časť tvojich výdajov. Zvykne to byť okolo 70%. Samozrejme, je potrebné mať aj nejaké vlasné finančné prostriedky. Malo by ti stačiť toľko, koľko minieš na život v bežných podmienkach počas štúdia. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '7fefc460f3c9',
        spans: [
          {
            text: 'Finančné náklady spojené s Erasmom sa líšia podľa výberu krajiny aj konkrétneho mesta. Je samozrejmé, že vo veľkých metropolitných mestách, ako je Paríž, Štokholm či Kodaň, sú náklady na život oveľa vyššie ako napríklad v balkánskych krajinách. Podotýkam, že menšie mesto nie je zárukou nižších nákladov. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd7802f1a40c6',
        spans: [
          {
            text: 'Dan vytvoril prehľadnú mapu, na ktorej si nájdeš sumy udeľovaných grantov pre jednotlivé krajiny',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'c3993b1da1d6',
        asset: {
          src: '/static/images/photosFull/Erasmus/ErasmusMap.jpg',
          alt: 'ErasmusMap',
          width: 1351,
          height: 905,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP49vPD2r3NYioM7DycDO8/3UisEjV3s2Xl5AcAnREJo0AGgaQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '15f020cf583b',
        spans: [
          {
            text: 'Dôvodov, prečo nevyraziť, je neúrekom, sks však nájsť svetlú stránku každého z nich a vykroč v ústrety nezabudnuteľnému dobrodružstvu.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '4235ae202f4d',
        spans: [
          {
            text: 'Tak na čo čakáš? Kam vyrážaš na svoj ERASMUS?',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'radyatipyerasmusvybavovacky',
    title: 'Erasmus vybavovačky krok za krokom',
    description:
      'Podrobný rozpis o tom, ako prebieha prihlasovanie na Erasmus. Nezabudni, tie najdôležitejšie a najaktuálnejšie informácie nájdeš na webových stránkach svojej univerzity.',
    hero: {
      src: '/static/images/photosFull/Erasmus/ErasmusFlight.jpg',
      alt: 'Erasmus vybavovačky krok za krokom',
      width: 1333,
      height: 1666,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAACigAAiAAAfABrvP93w//E/f8ATp7tWa3/r9//AG+Q2QBhuCRxxFYsE2XsdXQxAAAAAElFTkSuQmCC',
    },
    categories: ['Európa', 'Rady a Tipy'],
    keywords: [
      'erasmus',
      'erazmus',
      'oulu',
      'rady a tipy',
      'prečo ísť na erazmus',
    ],
    status: 'published',
    publishedAt: '2020-05-16T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-05-16T12:00:00.000Z',
    updatedAt: '2020-05-16T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '876af145095f',
        level: 2,
        spans: [
          {
            text: 'Rady a tipy - Erasmus vybavovačky krok za krokom',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '02998ce147b5',
        level: 3,
        spans: [
          {
            text: '1. Pozorne si naštuduj pokyny uvedené na webových stránkach tvojej univerzity',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'f35b5f573e5b',
        spans: [
          {
            text: 'Tie najdôležitejšie a najaktuálnejšie informácie nájdeš na webových stránkach v zložke zahraničné cesty/ zahraničné pobyty/ výjazdy/ Eramus+.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '15f8094b5827',
        level: 3,
        spans: [
          {
            text: '2. Pozor na dôležité termíny',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ba7627e2bf89',
        spans: [
          {
            text: 'Skôr než sa vrhneš do akýchkoľvek vybavovačiek, zisti si dôležité termíny, aby si všetky potrebné dokumenty stihol odovzdať načas.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'ef26b44aad10',
        level: 3,
        spans: [
          {
            text: '3. Výber hosťujúcej univerzity',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6b5afc477a87',
        spans: [
          {
            text: 'Zo zoznamu partnerských univerzít (nájdeš na webových stránkach) máš možnosť vybrať si až 4 univerzity, na ktorých by si rád študoval počas svojho pobytu v zahraničí. Zoradíš ich podľa preferencii od 1-4. Môže sa stať, že si viac záujemcov si vyberie rovnakú univerzitu. Z kapacitných dôvodov sa všetci nemusia zmestiť na univerzitu, ktor je uvedená na prvom mieste a v tomto prípade môže byť vybraná nasledujúca univerzita. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '301652601151',
        spans: [
          {
            text: 'Dobre si naštuduj zoznam ponúkaných predmetov aby si potom nemal problém pri uznávaní kreditov za povinné predmety na tvojej univerzite.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '9ec7e621fbce',
        level: 3,
        spans: [
          {
            text: '4. Podanie prihlášky',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '71baa5bbc48d',
        spans: [
          {
            text: 'Prihláška na Erasmus môže byť vyžadovaná v obidvoch formách – „papierová“ alebo online, prostredníctvom univerzitného informačného systému. V prihláške je nutné uviesť dĺžku študijného pobytu a informácie o hosťujúcej univerzite.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '159b5b8d2dd6',
        level: 3,
        spans: [
          {
            text: '5. Skontaktuj sa s partnerskou univerzitou ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '46c75ec7bc79',
        spans: [
          {
            text: 'Zisti si čo najviac informácii o podmienach prijatia, požadovaných dokumentoch ale aj celkovo o priebehu štúdia. Odporúčame zistiť informácie o možnostiach ubytovania. Ubytovacie zariadenia zvyknú zaplniť svoju kapacitu veľmi rýchlo, tak nech nezostaneš neskôr zaskočený, že v univerzitnom kampuse nie je miesto. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '96dc2a6d71b5',
        level: 3,
        spans: [
          {
            text: '6. Potrebné dokumenty',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c05f229fc3aa',
        spans: [
          {
            text: 'Learning agreement (LA) –  stiahneš si ho na stránkach univerzity. Ide o plánovaný študijný program v rámci mobility, do ktorého zapisuješ zoznam predmetov, ktoré chceš počas tvojho pobytu študovať. Po ukončení mobility sa do neho zapisujú dosiahnuté výsledky, ktoré môžu slúžiť ako náhrada pri uznávaní predmetov v rámci domácej univerzity.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5d82bc4097de',
        spans: [
          {
            text: 'Musí byť podpísaný všetkými 3 stranami (tebou, domácou univerzitou, hosťujúcou univerzitou)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '57cf47b0795a',
        spans: [
          {
            text: 'Transcript of records (nie je vždy podmienkou prihlášky) – ide o výpis absolvovaných predmetov na tvojej univerzite. Na požiadanie ti ho vytlačia na študijnom oddelení. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'c434a0349a95',
        spans: [
          {
            text: 'Potvrdenie o poistení – niektoré školy môžu vyžadovať aj potvrdenie o cestovnom poistení, ktoré pokryje celý študijný pobyt. Poistenie určite odporúčame aj v prípade, že nie je vyžadované školou. Výška krytia samozrejme je samozrejme individuálna.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '4f9337674b3c',
        level: 3,
        spans: [
          {
            text: '7. Jazykový test z anglického jazyka ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd0d16c6e5c6b',
        spans: [
          {
            text: 'Nemusíš sa báť, nie je známkovaný a ani nijak sa ti nezarátava do tvojho študijného hodnotenia. Nie je nejak zvlášť náročný, povedala by som že je to úroveň B1 a je vo forme krúžkovacích a doplňovacích otázok. Absolvuješ ho dvakrát, na začiatku a na konci študijného pobytu, pre porovnanie tvojich jazykových schopností pred a po mobilite. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'e1f6d3c9b166',
        level: 3,
        spans: [
          {
            text: '8. Kontaktuj zahraničné oddelenie tvojej univerzity',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'e31e8c1ed38d',
        spans: [
          {
            text: 'V prípade akýchkoľvek otázok je najlepšie obrátiť sa na zahraničné oddelenie, kde ti poskytnú všetky dôležité informácie a zodpovedajú všetky otázky.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'a07cf42e1c1e',
        level: 3,
        spans: [
          {
            text: '9. Absolventi študijného pobytu',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '08cf3aaaff82',
        spans: [
          {
            text: 'Informácie z prvej ruky môžeš získať jedine od študentov, ktorí sa už mobility zúčastnili. Neváhaj ich osloviť. Môžeš získať cenné informácie neformálneho charakteru, o ktorých sa nedočítaš na žiadnych webových stránkach.',
          },
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'radyatipyusa',
    title: 'Cestovanie po USA: užitočné rady a tipy',
    description:
      'Ako môžeš kúpiť annual pass za najnižšiu cenu?  Čo sa oplatí/neoplatí? Jedny z mála otázok, na ktoré ti ponúkame odpovede v našich článkoch. Možno zopár z nich využiješ aj pri plánovaní tvojho výletu po USA.',
    hero: {
      src: '/static/images/photosFull/VoFRoad.jpg',
      alt: 'VoFRoad',
      width: 2000,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49uX/2///H336ferqA4bWGO8oVxtXPR1JBgYA8PEN0gLh6/QAAAAASUVORK5CYII=',
    },
    categories: ['Amerika', 'Rady a Tipy'],
    keywords: [
      'cestovanie',
      'amerika',
      'cestovanie po amerike',
      'rady a tipy',
      'usa',
      'roadtrip',
    ],
    status: 'published',
    publishedAt: '2020-04-12T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-04-12T12:00:00.000Z',
    updatedAt: '2020-04-12T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: 'b5b2bdd4492b',
        level: 2,
        spans: [
          {
            text: 'Cestovanie po USA: užitočné rady a tipy',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6e55cd625aa2',
        spans: [
          {
            text: 'Návšteva Spojeých štátov je sen nejedného cestovateľa. My sme už absolvovali dva veľké roadtripy po východnom aj západnom pobreží USA, vďaka čomu sme nadobudli cenné skúsenosti, o ktoré by sme sa s vami radi podelili. Ponúkame ti zopár užitočných rád a tipov, aby si predišiel zbytočným komplikáciám počas tvojho cestovania po USA.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '167037a57f7b',
        level: 3,
        spans: [
          {
            text: 'Plán cesty',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'fc6a97dd5187',
        spans: [
          {
            text: 'Nie je nič jednoduchšie, ako sa zbaliť a vyraziť na cestu. My sme za spontánne nápady všetkými desiatimi, avšak v tomto prípade treba zvážiť svoje časové možnosti a tomu prispôsobiť aj celú prípravu. Nie nadarmo sa hovorí: „Dobre vypracovaný plán je polovica úspechu.“',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '1d24f109e52b',
        spans: [
          {
            text: 'Nie je podmienkou striktne dodržiavať každý bod programu, ale treba mať určitú predstavu o&bsp;miestach, ktoré by si rád navštívil. Stačí si načrtnúť stručný harmonogram, podľa ktorého sa budeš vedieť ľahšie orientovať a tomu prispôsobiť aj rezervácie ubytovania alebo kúpu lístkov na podujatia/atrakcie v dostatočnom predstihu. Zároveň budeš mať predstavu, koľko času potrebuješ na presun z jedného miesta na druhé.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'fd985a43c030',
        level: 3,
        spans: [
          {
            text: 'Auto',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'c8f7f0ed74fd',
        asset: {
          src: '/static/images/photosFull/RTUSA2.jpg',
          alt: 'RTUSA2',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49/T+vUfPvv37/+ndUwYHNzsTa2sGdl5FRTEA5E0M228b3JMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'a038c733322d',
        spans: [
          {
            text: 'Ak je zámerom tvojho cestovania spoznávanie, na presun jednoznačne odporúčame auto. Spravidla najväčšou položkou cestovateľkých výdajov býva práve jeho zapožičanie. Na lepšiu prehľadnosť sme sa rozhodli napísať samostatný článok a zdôrazniť najdôležitejšie body, na ktoré si treba dať pozor pri požičiavaní auta v Spojených štátoch. ',
          },
          {
            text: 'Požičiavanie auta v USA: kompletný sprievodca',
            link: {
              href: '/blog/radyatipyusapozicanieauta',
              external: false,
            },
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'aa3d69196341',
        level: 3,
        spans: [
          {
            text: 'Online lístky',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a6ed44efb73b',
        spans: [
          {
            text: 'S radou kúpiť lístky online si sa už určite stretol aj pri plánovaní iných výletov. Lístok kúpený online ti častokrát môže ušetriť nejaké tie drobné, ale čo je ešte dôležitejšie, ušetrí ti hromadu času. Vyhneš sa nekonečnému radu nervóznych ľudí pred vstupom a ušetrený čas môžeš yužiť zmysluplnejšie, napríklad na dobrom obede či kávičke. Je dôležité myslieť na to, že vychýrené atrakcie sú mesiace dopredu vybookované a šanca zohnať lístok na mieste je takmer nulová. Niektoré atrakcie sú dokonca také žiadané, že sa najprv prihlasuješ do online lotérie dúfajúc, že práve ty budeš ten šťastlivec, ktorému sa ujde miesto. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'c048de5ba3dd',
        level: 3,
        spans: [
          {
            text: 'Ubytovanie',
          },
        ],
      },
      {
        _type: 'image',
        _key: '1bdf94d25f04',
        asset: {
          src: '/static/images/photosFull/RTUSA3.jpg',
          alt: 'RTUSA3',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPwcrOQYWCwNVTV5eFkmFiR9//+4x9F5f8vXQcAWYYKe8w0KJQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'f8b98b38be97',
        spans: [
          {
            text: 'Asi najbežnejším a najlacnejším spôsobom je Airbnb, ktoré aj my s obľubou využívame. Ceny sa líšia od mesta a od vzdialenosti od centra.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '663fe0f6876d',
        spans: [
          {
            text: 'Ďalšími alternatívami sú couchsurfing, hotely, motely, ktoré odporúčame zarezervovať v dostatočnom predstihu, keď cena za izbu vie byť o niekoľko desiatok dolárov lacnejšia ako zakúpenie v daný deň. Aj pri využívaní lacnejších foriem ubytovania sa finálna cena za 2 – 3 týždne môže vyšplhať na celkom vysokú sumu.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'a6638e1a0d6d',
        spans: [
          {
            text: 'Naším najlepším rozhodnutím bolo kempovanie. Nielenže sme ušetrili nemalé peniaze za ubytovanie, ale zažili sme aj to, čo nám (takmer) žiaden hotel ponúknuť nedokáže – prespávanie nie v päť-, ale miliónhviezdičkovom hoteli. Je to naozaj lukratívny zážitok, ktorý odporúčame všetkými desiatimi. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '1db70bd2c09a',
        spans: [
          {
            text: 'V rámci národných parkov sa nachádza široká sieť kempingov, za ktoré sa platí minimálny alebo žiaden poplatok.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '071ce0e7b1ff',
        spans: [
          {
            text: 'Väčšina z nich prevádzkuje sociálne zariadenia a dokonca aj sprchy (po celom dni únavného chodenia nie je lepšej investície ako tri doláre do osemminútovej teplej sprchy). Odporúčame stiahnuť si aplikáciu The Dyrt, ktorá zobrazuje prehľadnú mapu s vyznačenými lokalitami kempov naprieč USA.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '227973f9b8e6',
        spans: [
          {
            text: 'Stan, spacáky, arimatky a všetky potrebné veci na kempovanie odporúčame nakúpiť vo Walmarte, v ktorom sa dá väčšina vecí po skončení výletu vrátiť bez ohľadu na miesto zakúpenia (platí aj pre rôzne pobočky vo všetkých štátoch v USA). Pokiaľ cestujete vo dvojici, môžete vyskúšať prespávať v aute, čo koniec koncov nie je také nekomfortné, ako sa na prvý pohľad zdá.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '5204eb405083',
        level: 3,
        spans: [
          {
            text: 'Jedlo',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'f4684e754ebd',
        asset: {
          src: '/static/images/photosFull/RTUSA4.jpg',
          alt: 'RTUSA4',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNY2xBxcX75/yPVDG2+2gl2isoMDAyJ9p51UQYZvqoM+oYZS5oT/r9bBgA10w84xBiT4wAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '863289a72486',
        spans: [
          {
            text: 'Čo sa týka low-cost spôsobu stravovania, popredné miesta výrazne obsadzujú fastfoody. Hamburger za 1 $, hranolky za 1,3 $, k tomu pollitra sýteného nápoja a obed máme za sebou. Pokiaľ sa rozhodneš pre túto alternatívu, naše odporúčania sú: Chick-fil-A, 5 guys, IHOP, Subway.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '91d6eb889c4f',
        spans: [
          {
            text: 'Strava v reštauráciách je celkom drahá záležitosť. Aj v cenovo prijateľných reštauráciách sa cena za jedlo pohybuje od 10 do 20 $. Túto možnosť sme využívali naozaj zriedkavo.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '1e569f3a7215',
        spans: [
          {
            text: 'Potraviny v supermarketoch sú cenovo prijateľné a vo väčších bchodných reťazcoch býva veľký výber. Nie je pravda, že Američanom sú pojmy zelenina a ovocie cudzie. Práve naopak, regály sú nimi preplnené a sú naozaj chutné a čerstvé. Kúpou potravín v supermarketoch si sám navolíš, ako bude vyzerať tvoja strava, na čo máš chuť a ešte k tomu päťkrát lacnejšie a zdravšie ako v reštauráciách.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '65def5e62524',
        level: 3,
        spans: [
          {
            text: 'Sociálne siete',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '987997d68f59',
        spans: [
          {
            text: 'Sociálne siete sú plné skupín zameraných na cestovanie i cestovateľské rady a tipy. Študenti/waťaci/cestovatelia sa v nich delia o svoje zážitky a skúsenosti s ostatnými členmi. Ak aj ty si nevieš s&nbp;niečím poradiť alebo sa chceš o niečom informovať, častokrát je toto najrýchlejší spôsob, ako nájsť odpovede na svoje otázky. Alebo môžeš napísať rovno nám, radi ti poradíme.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ea1f1118e5b1',
        spans: [
          {
            text: 'Odporúčame pridať sa do: WAT USA, czech-us Work and Travel USA, Work and Travel USA, Work and Travel USA (J1 Visa International Help Group).',
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'e6cc810ccbca',
        level: 3,
        spans: [
          {
            text: 'Annual pass',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'ef5b02b3d83a',
        spans: [
          {
            text: 'V USA sú vstupy do národných parkov spoplatnené. Jednorazový vstup sa pohybuje okolo 35 – 50 $.  ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '890dda458860',
        spans: [
          {
            text: 'Annual pass je preukaz, ktorý povoľuje vstup do väčšiny národných parkov bez ďalších poplatkov. Pokiaľ ho budeš kupovať priamo v USA, cena je 80 $ (stačí jeden do auta). Platí jeden rok od zakúpenia s tým, že oprávňuje mať dvoch držiteľov. Ak plánujete návštevu viacerých NP, Annual Pass určite odporúčame. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '9e01f03980b2',
        spans: [
          {
            text: 'Ako ho kúpiť najlacnejšie? Zakúp si AP, kým si doma. Väčšina waťákov po skončení ich zážitkového leta predáva ten svoj prostredníctvom facebookových skupín, ktoré sme zmienili už vyšši, za 40 - 50 $ priamo v SR alebo v ČR.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: '74154733e628',
        left: {
          src: '/static/images/photosFull/RTUSAAP1.jpg',
          alt: 'RTUSAAP1',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOwMmRYszf28/9ZjVVODFIMDBG+DEtyLA9FhQEAgcwJdVzkDqEAAAAASUVORK5CYII=',
        },
        right: {
          src: '/static/images/photosFull/RTUSAAP2.jpg',
          alt: 'RTUSAAP2',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGMIYmBIZWCIZ2D4/+gUQ7mVXpunW6aR3qXl0wFbWgiP/P5jPQAAAABJRU5ErkJggg==',
        },
      },
    ],
  },
  {
    _id: '',
    slug: 'radyatipyusapozicanieauta',
    title: 'Požičiavanie auta v USA: kompletný sprievodca',
    description:
      'Čo všetko potrebuješ, aby si si mohol požičať auto? Koľko stojí požičanie auta keď ešte nemáš 25 rokov? Koľko stojí nafta v USA? Aj na tieto otázky nájdeš odpoveď práve v tomto článku.',
    hero: {
      src: '/static/images/photosFull/RTUSA2.jpg',
      alt: 'RTUSA2',
      width: 1999,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49/T+vUfPvv37/+ndUwYHNzsTa2sGdl5FRTEA5E0M228b3JMAAAAASUVORK5CYII=',
    },
    categories: ['Amerika', 'Rady a Tipy'],
    keywords: [
      'roadtrip',
      'usa',
      'požičanie auta',
      'lowcost cestovanie',
      'kemping',
      'glamping',
    ],
    status: 'published',
    publishedAt: '2020-04-12T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-04-12T12:00:00.000Z',
    updatedAt: '2020-04-12T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '51398da61070',
        level: 2,
        spans: [
          {
            text: 'Požičiavanie auta v USA: kompletný sprievodca',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'bdbfe32abd65',
        spans: [
          {
            text: 'Pokiaľ plánuješ cestovanie po USA a chceš sa zamerať na spoznávanie, auto je najlepšou voľbou pre pohodlný a flexibilný presun. Tu sú všetky dôležité informácie, ktoré potrebuješ vedieť pri požičiavaní auta v USA.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '3c12e2c15284',
        level: 3,
        spans: [
          {
            text: 'Cesty',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cf9a9970971f',
        spans: [
          {
            text: 'V USA sú jedny z najkvalitnejšie spravených diaľnic, na akých sme doposiaľ jazdili. Cesty sú dlhé, rovné a široké, vďaka čomu je zabezpečená plynulá premávka. Napriek tomu je tam zavedené obmedzenie rýchlosti na 110km/hod.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5776df8def19',
        spans: [
          {
            text: 'Šoférovanie vo veľkých mestách ako Los Angeles či Denver už takým pôžitkom nebolo. Veľa áut, neohľaduplní vodiči, sedemprúdové cesty a dlhé kolóny, boli pre nás (hlavne pre Liv) veľmi stresujúce.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '31133f9c9f2d',
        asset: {
          src: '/static/images/photosFull/RTUSA2.jpg',
          alt: 'RTUSA2',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49/T+vUfPvv37/+ndUwYHNzsTa2sGdl5FRTEA5E0M228b3JMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: '70f9450d9c68',
        level: 3,
        spans: [
          {
            text: 'Čo budeš potrebovať na požičanie auta',
          },
        ],
      },
      {
        _type: 'list',
        _key: '8928a30603c2',
        style: 'bullet',
        items: [
          [
            {
              text: 'Medzinárodný vodičský preukaz:',
              marks: ['bold'],
            },
            {
              text: ' je nevyhnutný pre identifikáciu a prevádzkovanie auta. Skontroluj, či je platný v štátoch, ktoré navštíviš.',
            },
          ],
          [
            {
              text: 'Pas:',
              marks: ['bold'],
            },
            {
              text: ' potrebný na overenie tvojej identity pri prenájme auta.',
            },
          ],
          [
            {
              text: 'Kreditná karta:',
              marks: ['bold'],
            },
            {
              text: ' výhoda kreditnej karty je najmä pri požičiavaní auta, vďaka ktorej požičovne nevyžadujú dodatočné poplatky za poistenie.',
            },
          ],
          [
            {
              text: 'Číslo spiatočnej letenky: ',
              marks: ['bold'],
            },
            {
              text: 'môže byť požadované pri registrácii auta, ale aj pri pasovej kontrole pri vstupe do USA.',
            },
          ],
        ],
      },
      {
        _type: 'heading',
        _key: '449eb07df4be',
        level: 3,
        spans: [
          {
            text: 'Rezervácia auta',
          },
        ],
      },
      {
        _type: 'list',
        _key: '63b24d789a2f',
        style: 'bullet',
        items: [
          [
            {
              text: 'Rezerváciu je najlepšie vykonať online prostredníctvom webových stránok požičovní. Odporúča sa rezervovať auto 2-3 mesiace vopred na zabezpečenie najlepších cien.',
            },
          ],
          [
            {
              text: 'Ceny sa pohybujú od 10 do 130 USD za deň v závislosti od typu auta a počtu dní prenájmu; dlhšie prenájmy zvyčajne znamenajú nižšiu cenu za deň.',
            },
          ],
          [
            {
              text: 'Medzi obľúbené spoločnosti na prenájom áut patria Alamo, Enterprise, National, Dollar a Sixt. Porovnaj ich ponuky pomocou online nástrojov na porovnávanie cien a služieb.',
            },
          ],
        ],
      },
      {
        _type: 'image',
        _key: '2134a3cb5b0e',
        asset: {
          src: '/static/images/photosFull/RTCAR1.jpg',
          alt: 'RTCAR1',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANHz/83k/3ebzgCkwtfN3ufu//8AIyspNDU7VlJVAAEGAzU3KTc9I+OpEl2ieSzUAAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'heading',
        _key: 'd0f965b8a5a5',
        level: 3,
        spans: [
          {
            text: 'Poplatky a poistenie',
          },
        ],
      },
      {
        _type: 'list',
        _key: '15567bc5f6e2',
        style: 'bullet',
        items: [
          [
            {
              text: 'Poplatok za mladého vodiča:',
              marks: ['bold'],
            },
            {
              text: ' pre vodičov mladších ako 25 rokov je poplatok približne 20 USD za deň; vodiči mladší ako 21 rokov môžu čeliť ešte vyšším poplatkom alebo môžu mať problémy s prenájmom auta.',
            },
          ],
          [
            {
              text: 'Poplatky za ďalších vodičov:',
              marks: ['bold'],
            },
            {
              text: ' za každého ďalšieho vodiča sa zvyčajne účtuje 13USD za deň. Je dôležité nahlásiť všetkých vodičov pri rezervácii, aby si sa vyhol problémom a pokutám.',
            },
          ],
          [
            {
              text: 'Poistenie:',
              marks: ['bold'],
            },
            {
              text: ' poistenie je v USA dobrovoľné, ale odporúča sa vybaviť si plné krytie. Zváž zahrnúť krytie na odťahovanie, opravy a zodpovednosť za škody. Bez poistenia môžu byť náklady na odťahovanie a opravy veľmi vysoké (150-300 USD za odťah, 400-600 USD za servis).',
            },
          ],
        ],
      },
      {
        _type: 'heading',
        _key: '5919da9e1037',
        level: 3,
        spans: [
          {
            text: 'Vybavenie auta',
          },
        ],
      },
      {
        _type: 'list',
        _key: 'e55159f3aed3',
        style: 'bullet',
        items: [
          [
            {
              text: 'V USA väčšina áut má automatickú prevodovku a klimatizáciu, ktorá je veľmi dôležitá.',
            },
          ],
          [
            {
              text: 'Ak nemáš vlastnú navigáciu, môžeš si ju požičať za poplatok. Skontroluj, či má auto aj USB porty a ďalšie vybavenie, ktoré môžeš potrebovať.',
            },
          ],
          [
            {
              text: 'E-Z Pass:',
              marks: ['bold'],
            },
            {
              text: ' Tento elektronický systém na platenie mýta je bežný na východnom pobreží USA. Ak plánuješ cestovanie v týchto oblastiach, zisti, či má auto tento systém alebo si ho môžeš prenajať.',
            },
          ],
        ],
      },
      {
        _type: 'image',
        _key: '1fc716d17a2b',
        asset: {
          src: '/static/images/photosFull/RTCAR2.jpg',
          alt: 'RTCAR2',
          width: 750,
          height: 563,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGPQ19Uzs7CVkpcXYGViCIqN33Xl1cd//zsr6wBTXQmZHsoWsgAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'heading',
        _key: 'e9512ecc6d47',
        level: 3,
        spans: [
          {
            text: 'Cesty a ceny nafty',
          },
        ],
      },
      {
        _type: 'list',
        _key: 'a37030b38515',
        style: 'bullet',
        items: [
          [
            {
              text: 'Cesty v USA sú známe svojou kvalitou: dlhé, rovné a široké s obmedzením rýchlosti väčšinou na 110 km/h. Avšak, jazda v veľkých mestách môže byť náročná kvôli hustej premávke a kolónam.',
            },
          ],
          [
            {
              text: 'Cena nafty sa pohybuje medzi 2,79 a 4,5 USD za galón, pričom ceny sú vyššie v Kalifornii a nižšie na Floride. V odľahlých oblastiach sú pumpy menej časté a cena nafty môže byť vyššia.',
            },
          ],
          [
            {
              text: 'Tip:',
              marks: ['bold'],
            },
            {
              text: ' Maj so sebou rezervnú bandasku na naftu pre prípad núdze, najmä ak plánuješ cestovať do menej osídlených oblastí.',
            },
          ],
        ],
      },
      {
        _type: 'heading',
        _key: '391307eb8933',
        level: 3,
        spans: [
          {
            text: 'Alkohol v aute',
          },
        ],
      },
      {
        _type: 'list',
        _key: 'd4ba88938155',
        style: 'bullet',
        items: [
          [
            {
              text: 'Šoférovanie pod vplyvom alkoholu je v USA považované za závažný trestný čin, a to aj pre cestujúcich s alkoholom v otvorených nádobách. Pokuty sú vysoké a pravidlá sú prísne, preto sa uistite, že sa vyhýbaš porušovaniu tohto zákona.',
            },
          ],
        ],
      },
      {
        _type: 'heading',
        _key: '496fadee06f3',
        level: 3,
        spans: [
          {
            text: 'Vrátenie auta',
          },
        ],
      },
      {
        _type: 'list',
        _key: '596b81ff9ef4',
        style: 'bullet',
        items: [
          [
            {
              text: 'Mnoho požičovní umožňuje vrátenie auta na inej pobočke ako je miesto, kde si auto vyzdvihol, čo môže byť veľmi praktické pre flexibilitu v cestovaní. Uvedom si však, že táto služba môže byť spoplatnená, aj keď poplatok je zvyčajne nízky.',
            },
          ],
        ],
      },
      {
        _type: 'heading',
        _key: '6be0c697ad71',
        level: 3,
        spans: [
          {
            text: 'Naše skúsenosti',
          },
        ],
      },
      {
        _type: 'list',
        _key: '8e879ee21916',
        style: 'bullet',
        items: [
          [
            {
              text: 'Alamo:',
              marks: ['bold'],
            },
            {
              text: ' Vďaka ISIC zľave sme ušetrili na poplatkoch za mladého a druhého vodiča, získali plnú nádrž a možnosť vrátiť auto na inej pobočke – výhodný deal!',
            },
          ],
          [
            {
              text: 'Enterprise:',
              marks: ['bold'],
            },
            {
              text: ' Získali sme auto vyššej kategórie bez dodatočných nákladov vďaka ústretovosti pracovníka.',
            },
          ],
        ],
      },
    ],
  },
  {
    _id: '',
    slug: 'velkofatranskamagistrala',
    title: 'Veľkofatranská magistrála',
    description:
      'Článok o tom, čo sme zažili počas túry cez Veľkofatranskú magistrálu. Dvanásť kilové batohy na chrbtoch. Krvopotne odmakané kilometre. V daždi, v hmle. Cez deň, ale aj za tmy. Výškové prevýšenie by sme prirovnali k húsenkovej drahé. Prudko hore-dole, až človeku príde nevoľno 😀. Podarilo sa nám pokoriť Veľkofatranskú magistrálu (Ľubochňa-Turecká) dlhú 46km a s celkovým prevýšením 2 500m.',
    hero: {
      src: '/static/images/photosFull/VFPloskaBorisovUs.jpg',
      alt: 'Veľkofatranská magistrála',
      width: 2000,
      height: 1333,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYe/zMk2fvvv//X9tYxMDBy8DAzCCqxmBiyAAAvqcKJriulwQAAAAASUVORK5CYII=',
    },
    categories: ['Slovensko', 'Cestopisy', 'Hiking'],
    keywords: [
      'veľkofatranská magistrála',
      'ľubochňa',
      'krížna',
      'ostredok',
      'borišov',
      'turistika',
      'viacdenná turistika',
    ],
    status: 'published',
    publishedAt: '2020-07-12T12:00:00.000Z',
    scheduledFor: null,
    createdAt: '2020-07-12T12:00:00.000Z',
    updatedAt: '2020-07-12T12:00:00.000Z',
    body: [
      {
        _type: 'heading',
        _key: '15f69592e9b9',
        level: 2,
        spans: [
          {
            text: 'Veľkofatranská magistrála',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '484569c69c6d',
        spans: [
          {
            text: 'Toto leto sa chystáme pokoriť jednu z najnáročnejších výziev, akej sme doposiaľ čelili. Chceme zdolať najdlhšiu turistickú magistrálu na území Slovenska – Cestu hrdinov SNP. Trasa má približne 780 km. Je to ako ísť z Banskej Bystrice do Plzne, len s tým rozdielom, že na Cest hrdinov SNP je celkové prevýšenie 30 000 metrov. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '247fa427f7bc',
        spans: [
          {
            text: 'Tie čísla vzbudzujú rešpekt. Nechceli sme preto nič podceniť a všetko sme si dômyselne naplánovali. Príprava je v plnom prúde a jednou z jej hlavných fáz bolo zdolať Veľkofatranskú magistrálu. Ide o moju prvú dvojdňovú turistiku s prespávaním v stane, kde som razom pochopila, že toto veru nebude med lízať. Trasu so začiatkom v obci Ľubochňa a s koncom v obci Turecká s celkovou dĺžkou 46 km sa nám podarilo zvládnuť za dva dni. ',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '5fec5aab7f0a',
        level: 3,
        spans: [
          {
            text: '1. Deň (Ľubochňa – Jarabiná)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5d228c635c49',
        spans: [
          {
            text: 'Batohy sme naplnili tak, že praskali vo švíkoch. Vážili približne štrnásť kíl. Nevieme, ktoré veci sú nevyhnutné, a tak radšej berieme všetko. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '6a7987f2b002',
        spans: [
          {
            text: 'Čo všetko je súčasťou našej výbavy, sa môžeš dočítať v nasledujúcom článku .....Pripravujeme.....',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '393cd7e0b2d0',
        spans: [
          {
            text: 'Plní entuziazmu sme ráno o siedmej nasadli na vlak a o dve hodiny vystúpili v obci Ľubochňa. Začíname. Rýchlo dopĺňame sily na kávičke a predstavujem si to, čo nás najbližšie dni čaká. Náš dnešný cieľ je vrch Malý Lysec vzdialený približne 21 km.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '0b72428e8ed2',
        asset: {
          src: '/static/images/photosFull/VFLubochna.jpg',
          alt: 'VFLubochna',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPY1py8piuuN9fv4+4Ohv9ft5bFOzGwCGQWVwIAqqoL1j4ZnfoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '4be7ee01e0e3',
        spans: [
          {
            text: 'Po prejdení Ľubochnianskej doliny nás privítalo prudké stúpanie na vrch hrebeňa Veľkej Fatry. Očakávali sme nádherné výhľady, ale na naše prekvapenie sa nič nekonalo. Prvá polovica trasy vedie cez hustý les, ktorý ledva prepustil pár lúčov svetla. Naša najpoužívanejšia veta bola: „Je to tu ako v džungli!“ pretože celý čas sme sa brodili húštinou cez popadané stromy, blato a šmykľavý terén. Na niektorých úsekoch bola cesta veľmi zle značená a ťažko priechodná.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'ca12956d6dd3',
        left: {
          src: '/static/images/photosFull/VFDzungle.jpg',
          alt: 'VFDzungle',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4/evjpZ+vVF2MGMwCHZXstRj4GBisI92OfLxqGubAkDu1vHB2feumyQBVxxB1D/L3KwAAAABJRU5ErkJggg==',
        },
        right: {
          src: '/static/images/photosFull/VFDzungle3.jpg',
          alt: 'VFDzungle3',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AElKO+rp2pWgbQACBgAjKQBMUyYA7fu1q7aDkpppAJOicYuUa6WygkJhEVbXtH+sAAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: 'dccde6739220',
        asset: {
          src: '/static/images/photosFull/VFDzungle2.jpg',
          alt: 'VFDzungle2',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNQVRXQNzYoKi3+//cvQ1SUnJOtnDA7g5qiOABpMgcnqY6CvQAAAABJRU5ErkJggg==',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '5e9b6e3e662c',
        spans: [
          {
            text: 'Prvým vyhliadkovým bodom na našej trase bol vrch Kľak. Cez hustú trávu sme totižto nevideli, kam stúpame. Urobili sme dva kroky hore, ale tri dolu. Pri stúpaní na vrchol sme si poriadne pohundrali. A keď poviem, že aj Dan, tak to už naozaj muselo byť veľmi zlé. Keď sa nám podarilo dostať na vrchol Kľaku, žiaden výhľad na okolitú krajinu sa neodohral. Na zem sadla taká hustá hmla, že sme nevideli ani na meter pred seba. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '5693f5548cf9',
        spans: [
          {
            text: 'Náročné to bolo nielen po fyzickej stránke, ale najmä po psychickej. Veľkou chybou bolo, že za celý deň sme si nespravili jedinú dlhšiu prestávku. Sily nám rapídne ubúdali a nechuť pokračovať v chôdzi stúpala. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'cd2154e5452d',
        spans: [
          {
            text: 'Cieľom dňa bol už spomínaný Malý Lysec, ktorý sa nám, žiaľ, nepodarilo splniť. Po 18 km dnešnú turistiku ukončujeme. Vyčerpaní a hladní sme zakempovali na vrchu Jarabiná. Stan sme si rozložili na okraji lesa medzi čučoriedkovými kríkmi. Dnes už nespravím ani krok navyše. Dokelu, voda! Treba doplniť zásoby. Šťastie v nešťastí bolo, že zdroj pitnej vody, ktorý nám poslúžil aj ako provizórna sprcha, sa nachádzal len 350 m od nás. Nenastalo žiadne prekvapenie, že sme sa k nemu museli brodiť hustými kriakmi a vysokou trávou. Nabudúce už budeme vedieť, že je potrebné pribaliť si mačetu či rovno motorovú pílu.',
          },
        ],
      },
      {
        _type: 'imagePair',
        _key: 'ad752366f412',
        left: {
          src: '/static/images/photosFull/VFKlak.jpg',
          alt: 'VFKlak',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOTv/8rW6PL9/wDM3PCGlKff7f8Arb3Rk6OvlaS3AHaGjxgkGQAHADxuF2TM4o7aAAAAAElFTkSuQmCC',
        },
        right: {
          src: '/static/images/photosFull/VFZapad.jpg',
          alt: 'VFZapad',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNobSz6/+Ptnb1TGfyjtVuao7vL7RmUzHi1naU1bKUYGPgZGKQYhDQYAFA0C9ORVq31AAAAAElFTkSuQmCC',
        },
      },
      {
        _type: 'image',
        _key: '1583df53f13c',
        asset: {
          src: '/static/images/photosFull/VFStan.jpg',
          alt: 'VFStan',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg5mI49Hjvm/+P1I0lGFwsWWbNyy+vS0pN0QAAiKoKH2nakdoAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: 'eeb2c04c1c70',
        spans: [
          {
            text: 'Hostina v podobe wifonky a kávičky bola priam kráľovská. Nasýtení a „voňaví“ sa ukladáme spať niečo po deviatej hodine. Len čo sme zatvorili stan, začuli sme pravidelné šuchotanie kríkov len pár metro od našich hláv. Vietor to nemohol byť, pretože po chvíli sa k šuchotaniu pridalo aj tlmené dupanie. Krv nám stuhla v žilách. Naozaj som na 30 sekúnd prestala dýchať. Čo teraz? Máme začať robiť hluk? Byť ticho? Kričať o pomoc? ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '8adc5e88d81a',
        spans: [
          {
            text: 'Ostali sme ticho. Dan mal šialený nápad, že sa ide pozrieť von a zistiť, kto prišiel na návštevu, ale v momente som ho zahriakla, že ho nikam nepustím. Dedukujeme, že nám prišli robiť spoločnosť srny, ktoré okupovali náš stan až do samého rána. Podarilo sa nám zaspať niečo po tretej hodine.',
          },
        ],
      },
      {
        _type: 'heading',
        _key: '8e743a13d24f',
        level: 3,
        spans: [
          {
            text: '2. Deň (Jarabiná – Turecká)',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '3c40d9e68fab',
        spans: [
          {
            text: 'Budíček sme mali natiahnutý na piatu ráno. Tajne sme dúfali, že stihneme východ slnka. Po nočnom dobrodružstve sme však neboli schopní vstať skôr ako o siedmej. Čo je na naše pomery aj tak slušný výkon. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'd80c41858b64',
        spans: [
          {
            text: 'Opatrne vyliezame zo stanu a Dan kontroluje okolie. Čisté. Pomaly ho nasledujem a teším sa na ranné lúče, ktoré symbolizujú začiatok úspešného dňa. Na moje sklamanie jediná vec, ktorá nám „spríjemňuje“ ráno, je hustá mliečna hmla, ktorá dodala tomuto miestu hororový nádych. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '305aa788601d',
        spans: [
          {
            text: 'Bez raňajok sa vydávame opäť na cestu. Brodenie džungľou sa nekončí. Nasledovala strmá cesta dolu, na ktorej sa nám párkrát podarilo zísť z chodníka. Našťastie má Dan výborné orientačné zmysly a cestu sa mu vždy podarilo nájsť. Ja by som bola dávno stratená. Asi by som doteraz sedela na voľajakom pníku a čakala na záchranu.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '309b31f15340',
        spans: [
          {
            text: 'Okolo 10:00 sme dorazili na náš včerajší plánovaný cieľ – Malý Lysec. Hmla sa nadobro vyparila a my si konečne vychutnávame výhľad na okolitú prírodu. Vyťahujeme varič a pripravujeme si raňajky à la „čo batoh dá.“ Ovsená kaša s rozpučeným banánom a ryžovými čokochlebíčkami – to bola dobrota. ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'aee24fee4afd',
        asset: {
          src: '/static/images/photosFull/VFBreakfast.jpg',
          alt: 'VFBreakfast',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANf//8Pn/8fo/wAjQk0AHS8ABxsAvrRy1MWXtK92AERcdVNXXq+viKbCEz2vqWJ/AAAAAElFTkSuQmCC',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '9ab8356056b5',
        spans: [
          {
            text: 'Práve tu nastal zlomový okamih a nevyhnutné rozhodovanie. Pokračujeme ďalej po Veľkofatranskej magistrále, na ktorej nás čaká ešte 20 km, alebo to tu zabalíme a v najbližšej dedine (Belá-Dulice cca 11 km) nasadáme na autobus a fičíme domov. Bola to ťažká dilema, ale zhodnotili sme, že predošlú časť trasy si tak skoro zopakovať nemienime, takže sme sa zaťali, že dnes to dotiahneme do konca, aj keby padali traktory. ',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: '54b5d6006b09',
        spans: [
          {
            text: 'Pri rázcestníku sme ešte na malý moment zaváhali, či predsa ten autobus nebude lepšou voľbou. Po pár minútach kráčania sme už vedeli, že sme spravili dobré rozhodnutie. Terén sa zmenil o 180° a z húštiny sa stala nádherná prechádzka lesnou alejou. Stretli sme aj pár ďalších dobrodruhov, s ktorými sme sa podelili o náš včerajší zážitok.  ',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'bd3b9079276b',
        asset: {
          src: '/static/images/photosFull/VFPloskaBorisov.jpg',
          alt: 'VFPloskaBorisov',
          width: 2000,
          height: 760,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO4cu/pj///X7/9FuDnyMAvxMDNzcDDxCAvzgAAvvsJtnksJocAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '1cebebee67a5',
        asset: {
          src: '/static/images/photosFull/VFPloskaBorisovUs.jpg',
          alt: 'Veľkofatranská magistrála',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYe/zMk2fvvv//X9tYxMDBy8DAzCCqxmBiyAAAvqcKJriulwQAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '7b9d4ab880c0',
        spans: [
          {
            text: 'Obednú prestávku si robíme na Chate pod Borišovom, kde sa to hemžilo veselými turistami. Pôvodne sme mali v pláne navariť si cestoviny s tuniakom, ale vôňa kapustnice nás veľmi rýchlo presvedčila. Spolu s pollitrovou kofolou sme ich zhltli na jeden šup.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '42d9bea35fec',
        asset: {
          src: '/static/images/photosFull/VFBorisovLiv.jpg',
          alt: 'VFBorisovLiv',
          width: 1333,
          height: 1666,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4+/f/hU//l53/yNA2oT4o1pGBn4HB24ihtVw7r0qWwSeYPTxWqHe6CgCR6A/yh2b85AAAAABJRU5ErkJggg==',
        },
        aspect: 'portrait',
      },
      {
        _type: 'paragraph',
        _key: '86f8de94006d',
        spans: [
          {
            text: 'Pre menší časový sklz sme sa rozhodli výstup na Ploskú vynechať a pokračovali sme priamo na Ostredok – najvyšší vrchol Veľkej Fatry. Po jeho zdolaní sme šmarili ruksaky na zem a úplne vyšťavení sme ležali dolu pupkom a nečerpávali sily.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '7bee5183d363',
        asset: {
          src: '/static/images/photosFull/VFOstredokLiv.jpg',
          alt: 'VFOstredokLiv',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN49+nzh3+/7758euHac4beSvnAaHt+NobMaFEA7gYN86L+xYgAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '5fac45f98ca2',
        asset: {
          src: '/static/images/photosFull/VFOstredokDan.jpg',
          alt: 'VFOstredokDan',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOY0ZLclRf7+8HG/7+3MMiJMygzM0T56TZVuQIAockKgJHxUGEAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: 'b7425b5b8eca',
        asset: {
          src: '/static/images/photosFull/VFOstredokUs.jpg',
          alt: 'VFOstredokUs',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4++v/0v13gssXVsw/zqCtKcrLySAlLWrh4AwAscQJ9NOPJjcAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '52e87f19589e',
        spans: [
          {
            text: 'Predposlednou zastávkou na našej ceste bola Krížna, cez ktorú prechádza aj Cesta hrdinov SNP. Nohy už máme úplne ubolené. Každý si šúcha svoje otlaky a zbiera posledné kúsky síl na strmý 5 km dlhý zostup, ktorý nás delí od vytúženého cieľa. Čo je pre nás najlepším dopingom? No predsa kávička. Vyťahujeme varič a po pár minútach si ju vychutnávame s výhľadom na našu milovanú Banskú Bystricu.',
          },
        ],
      },
      {
        _type: 'image',
        _key: 'feb22beff042',
        asset: {
          src: '/static/images/photosFull/VFKrizna.jpg',
          alt: 'VFKrizna',
          width: 1999,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4/P9/0eITIT3bIrtWM0xtsrO1kdTQEuRiZQAAtOsKPCCxDVkAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'image',
        _key: '479cc8914c1d',
        asset: {
          src: '/static/images/photosFull/VFKriznacoffe.jpg',
          alt: 'VFKriznacoffe',
          width: 2000,
          height: 1333,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOYe+1/9+Yrm9ZtePD/P0NYXqKQgoIEA4O1mTkAxpALqmA12DMAAAAASUVORK5CYII=',
        },
        aspect: 'landscape',
      },
      {
        _type: 'paragraph',
        _key: '3ed9e441f4af',
        spans: [
          {
            text: 'Pred odchodom z Krížnej sa ešte poslednýkrát obzrieme za chrbát. Hľadáme vrcholky kopcov, po ktorých sme kráčali, a pomenúvame ich. Na mnohé z nich ani nedovidíme. Teraz sa zdajú také maličké, avšak dali nám poriadne zabrať. Nech nadávame po ceste akokoľvek, na vrchole vždy pochopíme, že tvrdá drina stojí za to.',
          },
        ],
      },
      {
        _type: 'paragraph',
        _key: 'dfb008e12bb8',
        spans: [
          {
            text: 'Pomaly kráčame dolu a naše kolená dostávajú poriadne zabrať. Najradšej by sme sa tým kopcom už len skotúľali priamo do auta. Na poslednej rovinke sme sa cítili ako Usain Bolt, keď prebieha cieľovou čiarou. Zvládli sme to! Zdolali sme Veľkofatranskú magistrálu. Za dva dni sme prešli 46 km na nastúpali 2 500 výškových metrov. Sme na seba hrdí.',
          },
        ],
      },
    ],
  },
];
