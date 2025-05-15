import Page from 'components/Page';
import Link from 'next/link';
import React from 'react';
import { Text } from 'UI';

export default function Custom404() {
  return (
    <Page>
      <Text type={'h2'}>Táto stránka nebola nájdená</Text>
      <Text>
        <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
      </Text>
    </Page>
  );
}
