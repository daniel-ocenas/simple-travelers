import Page from 'components/Page';
import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <Page>
      <h2>Táto stránka nebola nájdená</h2>
      <p style={{ textAlign: 'center' }}>
        <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
      </p>
    </Page>
  );
}
