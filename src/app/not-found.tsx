'use client';

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={'my-24 text-center'}>
      <h1 className="my-24 text-center text-3xl font-bold">
        404 - Stránka sa stratila na cestách
      </h1>
      <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
    </div>
  );
}
