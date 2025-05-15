import Page from 'components/Page';
import React from 'react';
import { Text } from 'UI';

export default function Fallback() {
  return (
    <Page>
      <Text type={'h2'}>Táto stránka je momentálne nedostupná</Text>
    </Page>
  );
}
