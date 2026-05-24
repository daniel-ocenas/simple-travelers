import Link from 'next/link';
import React from 'react';

import { Span } from '@/store/Article/Article.types';

function renderSpan(span: Span, key: number): React.ReactNode {
  let node: React.ReactNode = span.text;

  if (span.marks?.includes('code')) {
    node = (
      <code className="bg-customGray-100 dark:bg-customGray-800 rounded px-1 py-0.5 text-sm">
        {node}
      </code>
    );
  }
  if (span.marks?.includes('italic')) {
    node = <em>{node}</em>;
  }
  if (span.marks?.includes('bold')) {
    node = <strong>{node}</strong>;
  }

  if (span.link) {
    const { href, external } = span.link;
    node = external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
      >
        {node}
      </a>
    ) : (
      <Link
        href={href}
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
      >
        {node}
      </Link>
    );
  }

  return <React.Fragment key={key}>{node}</React.Fragment>;
}

export default function Spans({ spans }: { spans: Span[] }) {
  return <>{spans.map(renderSpan)}</>;
}
