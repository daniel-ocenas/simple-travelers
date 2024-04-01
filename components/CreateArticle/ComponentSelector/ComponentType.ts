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
export const emptyTextComponent: ArticleComponent = {
  component: 'p',
  children: [
    {
      component: 'simpleText',
      text: 'a',
    },
  ] as SimpleTextComponentType[],
};
export const emptyImgComponent: ArticleComponent = {
  component: 'img',
  src: [
    {
      src: '',
      name: 'a',
    },
  ] as ImageSrcType[],
};
export const emptySubtitleComponent: ArticleComponent = {
  component: 'h3',
  text: 'aa',
};

export interface ArticleComponent {
  component: ArticleComponentType;
  children?: SimpleTextComponentType[];
  text?: string;
  src?: ImageSrcType[];
  class?: string;
  order?: number;
}
