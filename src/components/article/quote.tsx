import Spans from './spans';
import { QuoteBlock } from '@/store/Article/Article.types';

export default function Quote({ block }: { block: QuoteBlock }) {
  return (
    <blockquote className="border-customGray-300 dark:border-customGray-600 mb-4 border-l-4 pl-4 italic">
      <Spans spans={block.spans} />
      {block.cite && (
        <cite className="text-customGray-600 dark:text-customGray-400 mt-2 block text-sm not-italic">
          — {block.cite}
        </cite>
      )}
    </blockquote>
  );
}
