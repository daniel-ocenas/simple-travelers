import { Form, Select } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';

import ImageGrid from '../components/ImageGrid';
import { CestaSNPIMAGES, IMAGES } from '../data/GalleryImages';

const { Option } = Select;

const galleryOptions = [
  {
    title: 'Výber našich najlepších fotiek',
    option: 'Výber fotiek',
    images: IMAGES,
  },
  {
    title: 'Cesta hrdinov SNP',
    option: 'Cesta SNP',
    images: CestaSNPIMAGES,
  },
];
const filterOptions = galleryOptions.map((item) => {
  return <Option key={item.option}>{item.option}</Option>;
});

function Galeria() {
  const [filterState, setFilterState] = useState(galleryOptions);

  const handleFilterChange = (selectionList: any) => {
    let displayGallery: any[] = [];
    if (selectionList.length === 0) {
      galleryOptions.forEach((item) => {
        displayGallery.push(item);
      });
    } else {
      galleryOptions.forEach((item) => {
        if (selectionList.includes(item.option)) {
          displayGallery.push(item);
        }
      });
    }
    setFilterState(displayGallery);
  };

  return (
    <div className="page screen-reader-text">
      <Head>
        <title>Galéria | Cestovateľský blog</title>
        <meta property="og:title" content="Simple Travelers - Galéria" />
        <meta
          property="og:description"
          content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete."
        />
        <meta name="description" content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete." />
        <meta property="og:image" content="https://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/galeria" />
        <link rel="canonical" href="https://simpletravelers.sk/galeria" />
        <meta name="keywords" content="" />
      </Head>
      <Form.Item label="Filtovať fotky">
        <Select style={{ marginLeft: '5px' }} mode="multiple" allowClear onChange={handleFilterChange}>
          {filterOptions}
        </Select>
      </Form.Item>
      {filterState.map((item: any) => {
        return (
          <div key={item.option}>
            <h3>{item.title}</h3>
            <ImageGrid images={item.images} />
          </div>
        );
      })}
    </div>
  );
}

// const Galeria = () => {
// 	return <></>;
// };

export default Galeria;
