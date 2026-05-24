import { ParagraphBlock } from '@/store/Article/Article.types';

import Spans from './spans';

export default function Paragraph({ block }: { block: ParagraphBlock }) {
  if (!block.spans.length) return null;
  return (
    <p className="mb-4">
      <Spans spans={block.spans} />
    </p>
  );
}
