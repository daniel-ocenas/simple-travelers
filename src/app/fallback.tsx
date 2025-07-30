import React from 'react';
import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';
import { Text } from 'src/UI';

export default function Fallback() {
  return (
    <CustomPage>
      <WithSidebar>
        <Text type={'h2'}>Táto stránka je momentálne nedostupná</Text>
      </WithSidebar>
    </CustomPage>
  );
}
