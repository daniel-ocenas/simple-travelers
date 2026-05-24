import { QuoteBlock } from '@/store/Article/Article.types';

import Spans from './spans';

export default function Quote({ block }: { block: QuoteBlock }) {
  return (
    <blockquote className="mb-4 border-l-4 border-customGray-300 pl-4 italic dark:border-customGray-600">
      <Spans spans={block.spans} />
      {block.cite && (
        <cite className="mt-2 block text-sm not-italic text-customGray-600 dark:text-customGray-400">
          — {block.cite}
        </cite>
      )}
    </blockquote>
  );
}
