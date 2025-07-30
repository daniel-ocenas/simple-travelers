import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';
import { Text } from 'src/UI';

export default function Custom500() {
  return (
    <CustomPage>
      <WithSidebar>
        <Text type={'h2'}>500 - Technické problémy na trase</Text>
      </WithSidebar>
    </CustomPage>
  );
}
