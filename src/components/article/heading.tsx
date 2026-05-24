import { HeadingBlock } from '@/store/Article/Article.types';

import Spans from './spans';

const CLASSES: Record<HeadingBlock['level'], string> = {
  2: 'mb-8 text-4xl font-bold leading-tight',
  3: 'mb-4 text-xl font-bold',
  4: 'mb-2 text-base font-semibold',
};

export default function Heading({ block }: { block: HeadingBlock }) {
  const className = CLASSES[block.level];
  const children = <Spans spans={block.spans} />;

  if (block.level === 2) return <h2 className={className}>{children}</h2>;
  if (block.level === 3) return <h3 className={className}>{children}</h3>;
  return <h4 className={className}>{children}</h4>;
}
