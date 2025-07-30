import { ArticleEditor } from 'src/components/ArticleEditor/ArticleEditor';
import CustomPage from 'src/components/CustomPage';
import PrivateComponent from 'src/components/PrivateComponent';

export default function Page() {
  return (
    <CustomPage>
      <PrivateComponent render={() => <ArticleEditor />} />
    </CustomPage>
  );
}
