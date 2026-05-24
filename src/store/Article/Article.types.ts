export type Mark = 'bold' | 'italic' | 'code';

export type Span = {
  text: string;
  marks?: Mark[];
  link?: {
    href: string;
    external?: boolean;
  };
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type HeadingBlock = {
  _type: 'heading';
  _key: string;
  level: 2 | 3 | 4;
  spans: Span[];
};

export type ParagraphBlock = {
  _type: 'paragraph';
  _key: string;
  spans: Span[];
};

export type ListBlock = {
  _type: 'list';
  _key: string;
  style: 'bullet' | 'ordered';
  items: Span[][];
};

export type ImageBlock = {
  _type: 'image';
  _key: string;
  asset: ImageAsset;
  caption?: string;
  aspect: 'landscape' | 'portrait' | 'auto';
};

export type ImagePairBlock = {
  _type: 'imagePair';
  _key: string;
  left: ImageAsset;
  right: ImageAsset;
};

export type VideoBlock = {
  _type: 'video';
  _key: string;
  provider: 'youtube' | 'vimeo' | 'mp4';
  src: string;
  poster?: ImageAsset;
};

export type QuoteBlock = {
  _type: 'quote';
  _key: string;
  spans: Span[];
  cite?: string;
};

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | ImageBlock
  | ImagePairBlock
  | VideoBlock
  | QuoteBlock;

export type ArticleStatus = 'draft' | 'scheduled' | 'published';

export type Article = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  hero: ImageAsset;
  categories: string[];
  keywords: string[];
  status: ArticleStatus;
  publishedAt: string | null;
  scheduledFor: string | null;
  createdAt: string;
  updatedAt: string;
  body: Block[];
};

export type CategoriesState = {
  selected: string[];
  active: string[];
};

export type ArticlesState = {
  loading: boolean;
  error: string | null;
  articles: Article[];
  categories: CategoriesState;
  query: string;
};
