import Heading from './heading';
import BlockImage from './image';
import BlockImagePair from './image-pair';
import List from './list';
import Paragraph from './paragraph';
import Quote from './quote';
import Video from './video';
import { Block } from '@/store/Article/Article.types';

const PRIORITY_THRESHOLD = 2;

function renderBlock(block: Block, index: number): React.ReactNode {
  const priority = index < PRIORITY_THRESHOLD;

  switch (block._type) {
    case 'heading':
      return <Heading key={block._key} block={block} />;
    case 'paragraph':
      return <Paragraph key={block._key} block={block} />;
    case 'list':
      return <List key={block._key} block={block} />;
    case 'image':
      return <BlockImage key={block._key} block={block} priority={priority} />;
    case 'imagePair':
      return (
        <BlockImagePair key={block._key} block={block} priority={priority} />
      );
    case 'video':
      return <Video key={block._key} block={block} />;
    case 'quote':
      return <Quote key={block._key} block={block} />;
  }
}

export default function ArticleRenderer({ body }: { body: Block[] }) {
  return <>{body.map(renderBlock)}</>;
}
