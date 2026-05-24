import { ListBlock } from '@/store/Article/Article.types';

import Spans from './spans';

export default function List({ block }: { block: ListBlock }) {
  const items = block.items.map((spans, i) => (
    <li key={i} className="mb-1">
      <Spans spans={spans} />
    </li>
  ));

  return block.style === 'ordered' ? (
    <ol className="mb-4 ml-6 list-decimal">{items}</ol>
  ) : (
    <ul className="mb-4 ml-6 list-disc">{items}</ul>
  );
}
