// Component Definitions
export type ArticleComponentType = 'p' | 'h4' | 'h3' | 'h2' | 'img';

interface SimpleTextComponentType {
  component: 'simpleText';
  text: string;
}

interface ImageSrcType {
  src: string;
  name?: string;
  text?: string;
}

// component initial values

export const emptyImgComponent: ArticleComponent = {
  component: 'img',
  src: [
    {
      src: '',
      name: '',
    },
  ] as ImageSrcType[],
};
export const emptyTextComponent: ArticleComponent = {
  component: 'p',
  text: '',
};

export const emptySubtitleComponent: ArticleComponent = {
  component: 'h3',
  text: '',
};

export interface ArticleComponent {
  component: ArticleComponentType;
  children?: SimpleTextComponentType[];
  text?: string;
  src?: ImageSrcType[];
  class?: string;
  order?: number;
}

export interface ArticleProps {
  _id?: string;
  url: string;
  title: string;
  description: string;
  date: string;
  dateCreated?: string;
  image: string;
  isPublished: boolean;
  keywords?: string;
  category?: string[];
  content: ArticleComponent[];
}
