import { ArticleEditor } from 'components/ArticleEditor/ArticleEditor';
import Page from 'components/Page';
import PrivateComponent from 'components/PrivateComponent';

export default function Editor() {
  return (
    <Page>
      <PrivateComponent render={() => <ArticleEditor />} />
    </Page>
  );
}
