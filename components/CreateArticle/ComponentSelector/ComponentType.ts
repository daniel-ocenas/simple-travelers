// Component Definitions
export type ArticleComponentType = 'p' | 'h3' | 'h2' | 'img';

interface SimpleTextComponentType {
  component: 'simpleText';
  text: string;
}

interface ImageSrcType {
  src: string;
  name?: string;
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
