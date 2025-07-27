import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import Link from 'next/link';
import React from 'react';
import { Flex, Text } from 'UI';

export default function Custom404() {
  return (
    <Page>
      <WithSidebar>
        <Flex direction={'column'} justify={'flex-start'} align={'center'}>
          <Text type={'h2'}>404 - Stránka sa stratila na cestách</Text>
          <Text>
            <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
          </Text>
        </Flex>
      </WithSidebar>
    </Page>
  );
}
