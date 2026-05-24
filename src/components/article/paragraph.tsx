import Spans from './spans';
import { ParagraphBlock } from '@/store/Article/Article.types';

export default function Paragraph({ block }: { block: ParagraphBlock }) {
  if (!block.spans.length) return null;
  return (
    <p className="mb-4">
      <Spans spans={block.spans} />
    </p>
  );
}
