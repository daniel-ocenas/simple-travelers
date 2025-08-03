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

export const emptySectionTitleComponent: ArticleComponent = {
  component: 'h3',
  text: '',
};
export const emptySubtitleComponent: ArticleComponent = {
  component: 'h4',
  text: '',
};

export type ArticleComponentType = 'p' | 'h4' | 'h3' | 'h2' | 'img';

export type ComponentType = {
  component: 'text';
  text?: string;
};

type ImageSrcType = {
  src: string;
  name?: string;
  text?: string;
};

export type ArticleComponent = {
  component: ArticleComponentType;
  children?: ComponentType[];
  text?: string;
  src?: ImageSrcType[];
  class?: string;
  order?: number;
};

export type CategoriesState = {
  selected: string[];
  active: string[];
};

export type Article = {
  _id: string;
  url: string;
  title: string;
  description: string;
  date: string;
  dateCreated: string;
  image: string;
  categories: string[];
  isPublished: boolean;
  keywords: string;
  content: ArticleComponent[];
};

export type ArticlesState = {
  loading: boolean;
  error: string | null;
  articles: Article[];
  categories: CategoriesState;
  query: string;
};
