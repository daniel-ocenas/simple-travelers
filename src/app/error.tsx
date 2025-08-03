'use client';

import Link from 'next/link';

export default function Custom500() {
  return (
    <div className={'my-24 text-center'}>
      <h1 className="my-24 text-center text-3xl font-bold">
        500 - Technické problémy na trase
      </h1>
      <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
    </div>
  );
}
