import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';
import { Flex, Text } from 'src/UI';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function Custom404() {
  return (
    <CustomPage>
      <WithSidebar>
        <Flex direction={'column'} justify={'flex-start'} align={'center'}>
          <Text type={'h2'}>404 - Stránka sa stratila na cestách</Text>
          <Text>
            <Link href={'/public'}>Naspäť na úvodnú stránku.</Link>
          </Text>
        </Flex>
      </WithSidebar>
    </CustomPage>
  );
}
