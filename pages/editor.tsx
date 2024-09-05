import { ArticleEditor } from 'components/ArticleEditor/ArticleEditor';
import Page from 'components/Page';
import { usePageMargin } from 'utils/useBreakpoint';

export default function Editor() {
  const pageMargin = usePageMargin();
  return (
    <>
      <Page mr={pageMargin}>
        <ArticleEditor />
      </Page>
    </>
  );
}
