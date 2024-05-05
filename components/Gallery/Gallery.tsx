import { Form, Select } from 'antd';
import ImageGrid from 'components/Gallery/ImageGrid';
import { GalleryImageProps } from 'components/Gallery/ImageGrid/ImageGrid';
import { BALI_IMAGES, IMAGES, OTHER_IMAGES, SNP_IMAGES } from 'data/GalleryImages';
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

const Gallery = () => {
  const [filterState, setFilterState] = useState<GalleryOption>(galleryOptions[0]);
  const medium = useMedium();

  const handleFilterChange = (value: string) => {
    setFilterState(galleryOptions.find((item) => item.option === value) ?? galleryOptions[0]);
  };

  const handleButtonChange = (id: string, checked: boolean) => {
    setFilterState(checked ? galleryOptions.find((item) => item.title === id) ?? galleryOptions[0] : galleryOptions[0]);
  };

  return (
    <div>
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
    </div>
  );
};

export default Gallery;
