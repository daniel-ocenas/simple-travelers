import { ArticleEditor } from 'components/ArticleEditor/ArticleEditor';
import Page from 'components/Page';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
import { usePageMargin } from 'utils/useBreakpoint';

export default function Editor() {
  const pageMargin = usePageMargin();
  return (
    <Page mr={pageMargin}>
      <PrivateComponent render={() => <ArticleEditor />} />
    </Page>
  );
}
