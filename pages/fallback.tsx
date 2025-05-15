import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import React from 'react';
import { Text } from 'UI';

export default function Fallback() {
  return (
    <Page>
      <WithSidebar>
        <Text type={'h2'}>Táto stránka je momentálne nedostupná</Text>
      </WithSidebar>
    </Page>
  );
}
