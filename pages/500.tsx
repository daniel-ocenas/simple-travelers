import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import React from 'react';
import { Text } from 'UI';

export default function Custom500() {
  return (
    <Page>
      <WithSidebar>
        <Text type={'h2'}>500 Internal Server Error</Text>
      </WithSidebar>
    </Page>
  );
}
