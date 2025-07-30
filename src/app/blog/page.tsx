import Head from 'next/head';
import BlogCardsView from 'src/components/BlogCardsView';
import CustomPage from 'src/components/CustomPage';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog, Simple Travelers</title>
        <meta property="og:title" content="Blog, Simple Travelers" />
        <meta property="og:text" content="Blog | Cestopisy | Cestovateľský blog" />
        <meta property="og:description" content="Články, rady a tipy o cestovaní po svete od Simple Travelers" />
        <meta name="description" content="Články, rady a tipy o cestovaní po svete od Simple Travelers" />
        <meta
          property="og:image"
          content="https://simpletravelers.sk/static/images/photosFull/BaliBlackBeachDroneUs.jpg"
        />
        <meta property="og:url" content="https://simpletravelers.sk/blog" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovatelsky blog, blog, cestopisy, rady a tipy na cestovanie, cestovanie, erasmus, USA roadtrip, roadtrip, slovenské srdcovky, hiking, thru-hiking, turistika, dialkova turistika"
        />
      </Head>
      <CustomPage>
        <BlogCardsView enableFilters />
      </CustomPage>
    </>
  );
}
