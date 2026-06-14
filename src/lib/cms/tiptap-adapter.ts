import type { JSONContent } from '@tiptap/core';

import {
  Block,
  HeadingBlock,
  ListBlock,
  Mark,
  ParagraphBlock,
  QuoteBlock,
  Span,
} from '@/store/Article/Article.types';

const SITE_HOSTS = ['simpletravelers.sk'];

const newKey = () =>
  globalThis.crypto.randomUUID().replace(/-/g, '').slice(0, 12);

function isExternalLink(href: string): boolean {
  if (!/^https?:\/\//i.test(href)) return false;
  return !SITE_HOSTS.some((h) => href.includes(h));
}

// ─────────── blocks → TipTap JSON (load) ───────────

function spansToInline(spans: Span[]): JSONContent[] {
  const out: JSONContent[] = [];
  for (const span of spans) {
    if (!span.text) continue;
    const marks: { type: string; attrs?: Record<string, unknown> }[] = [];
    if (span.marks?.includes('bold')) marks.push({ type: 'bold' });
    if (span.marks?.includes('italic')) marks.push({ type: 'italic' });
    if (span.marks?.includes('code')) marks.push({ type: 'code' });
    if (span.link) {
      marks.push({
        type: 'link',
        attrs: {
          href: span.link.href,
          target: span.link.external ? '_blank' : null,
        },
      });
    }
    const node: JSONContent = { type: 'text', text: span.text };
    if (marks.length) node.marks = marks;
    out.push(node);
  }
  return out;
}

function blockToTiptapNode(block: Block): JSONContent {
  switch (block._type) {
    case 'paragraph':
      return { type: 'paragraph', content: spansToInline(block.spans) };
    case 'heading':
      return {
        type: 'heading',
        attrs: { level: block.level },
        content: spansToInline(block.spans),
      };
    case 'list':
      return {
        type: block.style === 'ordered' ? 'orderedList' : 'bulletList',
        content: block.items.map((spans) => ({
          type: 'listItem',
          content: [{ type: 'paragraph', content: spansToInline(spans) }],
        })),
      };
    case 'quote':
      return {
        type: 'blockquote',
        content: [
          { type: 'paragraph', content: spansToInline(block.spans) },
        ],
      };
    case 'image':
    case 'imagePair':
    case 'video':
      return {
        type: 'mediaBlock',
        attrs: { block },
      };
  }
}

export function blocksToTiptap(blocks: Block[]): JSONContent {
  return {
    type: 'doc',
    content: blocks.map(blockToTiptapNode),
  };
}

// ─────────── TipTap JSON → blocks (save) ───────────

function inlineToSpans(content?: JSONContent[]): Span[] {
  const spans: Span[] = [];
  for (const node of content ?? []) {
    if (node.type === 'text' && node.text) {
      const marks: Mark[] = [];
      let link: Span['link'] | undefined;
      for (const m of node.marks ?? []) {
        if (m.type === 'bold') marks.push('bold');
        else if (m.type === 'italic') marks.push('italic');
        else if (m.type === 'code') marks.push('code');
        else if (m.type === 'link') {
          const href = (m.attrs as { href?: string } | undefined)?.href;
          if (href) {
            link = {
              href,
              ...(isExternalLink(href) ? { external: true } : {}),
            };
          }
        }
      }
      const span: Span = { text: node.text };
      if (marks.length) span.marks = marks;
      if (link) span.link = link;
      spans.push(span);
    } else if (node.type === 'hardBreak') {
      spans.push({ text: '\n' });
    }
  }
  return mergeSpans(spans);
}

function mergeSpans(spans: Span[]): Span[] {
  const out: Span[] = [];
  for (const s of spans) {
    const last = out[out.length - 1];
    if (
      last &&
      JSON.stringify(last.marks ?? null) === JSON.stringify(s.marks ?? null) &&
      JSON.stringify(last.link ?? null) === JSON.stringify(s.link ?? null)
    ) {
      last.text += s.text;
    } else {
      out.push({ ...s });
    }
  }
  return out.filter((s) => s.text.length > 0);
}

function isMediaBlock(value: unknown): value is Block {
  return (
    !!value &&
    typeof value === 'object' &&
    ['image', 'imagePair', 'video'].includes(
      (value as { _type?: string })._type ?? '',
    )
  );
}

export function tiptapToBlocks(doc: JSONContent): Block[] {
  if (doc.type !== 'doc') return [];
  const out: Block[] = [];

  for (const node of doc.content ?? []) {
    switch (node.type) {
      case 'paragraph': {
        const spans = inlineToSpans(node.content);
        if (spans.length === 0) continue;
        out.push({
          _type: 'paragraph',
          _key: newKey(),
          spans,
        } satisfies ParagraphBlock);
        break;
      }
      case 'heading': {
        const level = (node.attrs as { level?: number } | undefined)?.level;
        if (level !== 2 && level !== 3 && level !== 4) continue;
        out.push({
          _type: 'heading',
          _key: newKey(),
          level,
          spans: inlineToSpans(node.content),
        } satisfies HeadingBlock);
        break;
      }
      case 'bulletList':
      case 'orderedList': {
        const items: Span[][] = [];
        for (const item of node.content ?? []) {
          if (item.type !== 'listItem') continue;
          const flat: Span[] = [];
          for (const p of item.content ?? []) {
            if (p.type === 'paragraph') {
              flat.push(...inlineToSpans(p.content));
            }
          }
          if (flat.length) items.push(flat);
        }
        if (items.length === 0) continue;
        out.push({
          _type: 'list',
          _key: newKey(),
          style: node.type === 'orderedList' ? 'ordered' : 'bullet',
          items,
        } satisfies ListBlock);
        break;
      }
      case 'blockquote': {
        const spans: Span[] = [];
        for (const child of node.content ?? []) {
          if (child.type === 'paragraph') {
            spans.push(...inlineToSpans(child.content));
          }
        }
        if (spans.length === 0) continue;
        out.push({
          _type: 'quote',
          _key: newKey(),
          spans,
        } satisfies QuoteBlock);
        break;
      }
      case 'mediaBlock': {
        const block = (node.attrs as { block?: unknown } | undefined)?.block;
        if (isMediaBlock(block)) {
          out.push(block._key ? block : { ...block, _key: newKey() });
        }
        break;
      }
    }
  }

  return out;
}
