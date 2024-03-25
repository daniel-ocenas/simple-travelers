import { Form, Select } from 'antd';
import ImageGrid from 'components/ImageGrid';
import { GalleryImageProps } from 'components/ImageGrid/ImageGrid';
import Page from 'components/Page';
import { BALI_IMAGES, IMAGES, OTHER_IMAGES, SNP_IMAGES } from 'data/GalleryImages';
import Head from 'next/head';
import React, { useState } from 'react';
import { CheckButton } from 'UI/Button/CheckButton';
import { Flex } from 'UI/Flex';
import { useMedium } from 'utils/useBreakpoint';

const { Option } = Select;

interface GalleryOption {
  title: string;
  option: string;
  images: GalleryImageProps[];
}

const galleryOptions: GalleryOption[] = [
  {
    title: 'Výber našich najlepších fotiek',
    option: 'Výber fotiek',
    images: IMAGES,
  },
  {
    title: 'Bali',
    option: 'Bali',
    images: BALI_IMAGES,
  },
  {
    title: 'Cesta hrdinov SNP',
    option: 'Cesta SNP',
    images: SNP_IMAGES,
  },
  {
    title: 'Ďalšie fotky',
    option: 'Ďalšie fotky',
    images: OTHER_IMAGES,
  },
];
const filterOptions = galleryOptions.map((item) => {
  return <Option key={item.option}>{item.option}</Option>;
});

export default function Galeria() {
  const [filterState, setFilterState] = useState<GalleryOption>(galleryOptions[0]);
  const medium = useMedium();

  const handleFilterChange = (value: string) => {
    setFilterState(galleryOptions.find((item) => item.option === value) ?? galleryOptions[0]);
  };

  const handleButtonChange = (id: string, checked: boolean) => {
    setFilterState(checked ? galleryOptions.find((item) => item.title === id) ?? galleryOptions[0] : galleryOptions[0]);
  };

  return (
    <>
      <Head>
        <title>Galéria, Simple Travelers</title>
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
      <Page>
        {medium ? (
          <Form.Item label="Filtovať fotky">
            <Select style={{ marginLeft: '5px' }} onChange={handleFilterChange}>
              {filterOptions}
            </Select>
          </Form.Item>
        ) : (
          <Flex>
            {galleryOptions.map((btn) => {
              return (
                <CheckButton
                  key={`btn-${btn.title}`}
                  label={btn.title}
                  value={filterState.title === btn.title}
                  onChange={(checked) => handleButtonChange(btn.title, checked)}
                />
              );
            })}
          </Flex>
        )}
        <h3>{filterState.title}</h3>
        <ImageGrid images={filterState.images} />
      </Page>
    </>
  );
}
