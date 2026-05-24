/* eslint-disable */
import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { JSDOM } from 'jsdom';
import sharp from 'sharp';
import { getPlaiceholder } from 'plaiceholder';

import {
  ArticleList,
  LegacyArticle,
  LegacyArticleComponent,
} from './legacy-articles';

// ───────────────── new schema (mirrors src/store/Article/Article.types.ts) ─────────────────

type Mark = 'bold' | 'italic' | 'code';

type Span = {
  text: string;
  marks?: Mark[];
  link?: { href: string; external?: boolean };
};

type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

type HeadingBlock = {
  _type: 'heading';
  _key: string;
  level: 2 | 3 | 4;
  spans: Span[];
};

type ParagraphBlock = { _type: 'paragraph'; _key: string; spans: Span[] };

type ListBlock = {
  _type: 'list';
  _key: string;
  style: 'bullet' | 'ordered';
  items: Span[][];
};

type ImageBlock = {
  _type: 'image';
  _key: string;
  asset: ImageAsset;
  caption?: string;
  aspect: 'landscape' | 'portrait' | 'auto';
};

type ImagePairBlock = {
  _type: 'imagePair';
  _key: string;
  left: ImageAsset;
  right: ImageAsset;
};

type Block = HeadingBlock | ParagraphBlock | ListBlock | ImageBlock | ImagePairBlock;

type Article = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  hero: ImageAsset;
  categories: string[];
  keywords: string[];
  status: 'draft' | 'scheduled' | 'published';
  publishedAt: string | null;
  scheduledFor: string | null;
  createdAt: string;
  updatedAt: string;
  body: Block[];
};

// ───────────────── helpers ─────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..', '..');
const PUBLIC_DIR = join(REPO_ROOT, 'public');
const OUTPUT = join(REPO_ROOT, 'src', 'data', 'article-list.ts');

const key = () => randomBytes(6).toString('hex');

const imageCache = new Map<string, ImageAsset>();

async function resolveImage(src: string, altHint?: string): Promise<ImageAsset> {
  const cached = imageCache.get(src);
  if (cached) return cached;

  const absPath = join(PUBLIC_DIR, src.replace(/^\//, ''));
  let width = 1200;
  let height = 800;
  let blurDataURL: string | undefined;

  if (existsSync(absPath)) {
    try {
      const meta = await sharp(absPath).metadata();
      if (meta.width && meta.height) {
        width = meta.width;
        height = meta.height;
      }
      const buffer = await sharp(absPath).resize(20).toBuffer();
      const { base64 } = await getPlaiceholder(buffer);
      blurDataURL = base64;
    } catch (e) {
      console.warn(`  ⚠ failed to read ${src}: ${(e as Error).message}`);
    }
  } else {
    console.warn(`  ⚠ image not found on disk: ${absPath}`);
  }

  const asset: ImageAsset = {
    src,
    alt: altHint ?? deriveAltFromPath(src),
    width,
    height,
    blurDataURL,
  };
  imageCache.set(src, asset);
  return asset;
}

function deriveAltFromPath(src: string): string {
  const name = src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
  return name.replace(/[-_]/g, ' ');
}

function parseSlovakDate(s: string): string {
  // Legacy dateCreated is "MM. DD. YYYY" (US-style, despite Slovak audience).
  const m = s.match(/^\s*(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})\s*$/);
  if (!m) {
    console.warn(`  ⚠ unparseable date "${s}", defaulting to today`);
    return new Date().toISOString();
  }
  const [, mm, dd, yyyy] = m;
  // Build an ISO timestamp at noon UTC to avoid TZ rollover.
  return new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd), 12)).toISOString();
}

// ───────────────── HTML → spans / blocks ─────────────────

const INLINE_TAGS = new Set([
  '#text',
  'B',
  'STRONG',
  'EM',
  'I',
  'CODE',
  'A',
  'SPAN',
  'BR',
]);

function nodeToSpans(
  node: Node,
  inheritedMarks: Mark[] = [],
  inheritedLink?: Span['link'],
): Span[] {
  if (node.nodeType === 3 /* TEXT */) {
    const text = (node.textContent ?? '').replace(/ /g, ' ');
    if (!text) return [];
    return [
      {
        text,
        ...(inheritedMarks.length ? { marks: [...inheritedMarks] } : {}),
        ...(inheritedLink ? { link: inheritedLink } : {}),
      },
    ];
  }

  if (node.nodeType !== 1 /* ELEMENT */) return [];

  const el = node as Element;
  const tag = el.tagName;

  if (tag === 'BR') {
    return [{ text: '\n' }];
  }

  const marks = [...inheritedMarks];
  if (tag === 'B' || tag === 'STRONG') marks.push('bold');
  if (tag === 'EM' || tag === 'I') marks.push('italic');
  if (tag === 'CODE') marks.push('code');

  let link = inheritedLink;
  if (tag === 'A') {
    const href = el.getAttribute('href') ?? '';
    if (href) {
      link = {
        href,
        external:
          /^https?:\/\//i.test(href) &&
          !href.includes('simpletravelers.sk'),
      };
    }
  }

  const out: Span[] = [];
  el.childNodes.forEach((child) => {
    out.push(...nodeToSpans(child, marks, link));
  });
  return out;
}

function mergeAdjacentSpans(spans: Span[]): Span[] {
  const out: Span[] = [];
  for (const span of spans) {
    const prev = out[out.length - 1];
    if (
      prev &&
      JSON.stringify(prev.marks ?? null) === JSON.stringify(span.marks ?? null) &&
      JSON.stringify(prev.link ?? null) === JSON.stringify(span.link ?? null)
    ) {
      prev.text += span.text;
    } else {
      out.push({ ...span });
    }
  }
  return out.filter((s) => s.text.length > 0);
}

function htmlToBlocks(html: string, dom: JSDOM): Block[] {
  // Wrap so we can iterate top-level children
  const root = dom.window.document.createElement('div');
  root.innerHTML = html ?? '';

  const blocks: Block[] = [];
  let pendingSpans: Span[] = [];

  const flushParagraph = () => {
    const merged = mergeAdjacentSpans(pendingSpans);
    if (merged.length) {
      blocks.push({ _type: 'paragraph', _key: key(), spans: merged });
    }
    pendingSpans = [];
  };

  root.childNodes.forEach((node) => {
    if (node.nodeType === 1) {
      const tag = (node as Element).tagName;
      if (tag === 'UL' || tag === 'OL') {
        flushParagraph();
        const items: Span[][] = [];
        (node as Element).querySelectorAll(':scope > li').forEach((li) => {
          const spans: Span[] = [];
          li.childNodes.forEach((child) => spans.push(...nodeToSpans(child)));
          const merged = mergeAdjacentSpans(spans);
          if (merged.length) items.push(merged);
        });
        if (items.length) {
          blocks.push({
            _type: 'list',
            _key: key(),
            style: tag === 'OL' ? 'ordered' : 'bullet',
            items,
          });
        }
        return;
      }
      if (tag === 'P' || tag === 'DIV') {
        flushParagraph();
        const spans: Span[] = [];
        node.childNodes.forEach((child) => spans.push(...nodeToSpans(child)));
        pendingSpans.push(...spans);
        flushParagraph();
        return;
      }
      if (INLINE_TAGS.has(tag)) {
        pendingSpans.push(...nodeToSpans(node));
        return;
      }
      // Unknown block element: treat its text as a paragraph
      flushParagraph();
      pendingSpans.push(...nodeToSpans(node));
      flushParagraph();
      return;
    }
    if (node.nodeType === 3) {
      pendingSpans.push(...nodeToSpans(node));
    }
  });

  flushParagraph();
  return blocks;
}

// ───────────────── block conversion ─────────────────

async function convertBlock(
  legacy: LegacyArticleComponent,
  dom: JSDOM,
): Promise<Block[]> {
  switch (legacy.component) {
    case 'h2':
    case 'h3':
    case 'h4': {
      const level = Number(legacy.component[1]) as 2 | 3 | 4;
      const text = (legacy.text ?? '').replace(/ /g, ' ');
      // Headings may contain inline HTML; parse + flatten to spans
      const root = dom.window.document.createElement('div');
      root.innerHTML = text;
      const spans: Span[] = [];
      root.childNodes.forEach((child) => spans.push(...nodeToSpans(child)));
      return [
        {
          _type: 'heading',
          _key: key(),
          level,
          spans: mergeAdjacentSpans(spans),
        },
      ];
    }
    case 'p': {
      return htmlToBlocks(legacy.text ?? '', dom);
    }
    case 'img': {
      if (!legacy.src?.length) return [];
      const aspect: ImageBlock['aspect'] =
        legacy.class === 'articlePictureLandscape'
          ? 'landscape'
          : legacy.class === 'articlePicturePortrait'
            ? 'portrait'
            : 'auto';

      if (legacy.src.length === 1) {
        const asset = await resolveImage(
          legacy.src[0].src,
          legacy.src[0].name ?? legacy.src[0].text,
        );
        return [{ _type: 'image', _key: key(), asset, aspect }];
      }
      // Two or more: take the first pair (the legacy data never has > 2)
      const left = await resolveImage(
        legacy.src[0].src,
        legacy.src[0].name ?? legacy.src[0].text,
      );
      const right = await resolveImage(
        legacy.src[1].src,
        legacy.src[1].name ?? legacy.src[1].text,
      );
      return [{ _type: 'imagePair', _key: key(), left, right }];
    }
  }
}

// ───────────────── article conversion ─────────────────

async function convertArticle(legacy: LegacyArticle): Promise<Article> {
  console.log(`→ ${legacy.url}`);
  const dom = new JSDOM('');
  const createdISO = parseSlovakDate(legacy.dateCreated);

  const hero = await resolveImage(legacy.image, legacy.title);

  const body: Block[] = [];
  for (const legacyBlock of legacy.content) {
    body.push(...(await convertBlock(legacyBlock, dom)));
  }

  return {
    _id: legacy._id || '',
    slug: legacy.url,
    title: legacy.title,
    description: legacy.description,
    hero,
    categories: legacy.categories,
    keywords: legacy.keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean),
    status: legacy.isPublished ? 'published' : 'draft',
    publishedAt: legacy.isPublished ? createdISO : null,
    scheduledFor: null,
    createdAt: createdISO,
    updatedAt: createdISO,
    body,
  };
}

// ───────────────── serialization ─────────────────

function tsLiteral(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent);
  const padInner = '  '.repeat(indent + 1);

  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map((v) => `${padInner}${tsLiteral(v, indent + 1)}`);
    return `[\n${items.join(',\n')},\n${pad}]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([, v]) => v !== undefined,
    );
    if (entries.length === 0) return '{}';
    const lines = entries.map(
      ([k, v]) => `${padInner}${k}: ${tsLiteral(v, indent + 1)}`,
    );
    return `{\n${lines.join(',\n')},\n${pad}}`;
  }

  return 'undefined';
}

function emitFile(articles: Article[]): string {
  return `import { Article } from '@/store/Article/Article.types';

export function sortArticlesByDate(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    const da = a.publishedAt ?? a.createdAt;
    const db = b.publishedAt ?? b.createdAt;
    return +new Date(db) - +new Date(da);
  });
}

export const ArticleList: Article[] = ${tsLiteral(articles, 0)};
`;
}

// ───────────────── main ─────────────────

async function main() {
  console.log(`Migrating ${ArticleList.length} legacy articles...`);
  const out: Article[] = [];
  for (const legacy of ArticleList) {
    out.push(await convertArticle(legacy));
  }
  const code = emitFile(out);
  await writeFile(OUTPUT, code, 'utf8');
  console.log(`✓ Wrote ${out.length} articles to ${OUTPUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
