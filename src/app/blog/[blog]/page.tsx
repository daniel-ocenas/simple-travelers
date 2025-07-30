import React, { use } from 'react';
import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';

export default function Page({ params }: { params: Promise<{ blog: string }> }) {
  const { blog } = use(params);
  console.log(blog);
  const article = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${blog}`);
  console.log(article);

  // const [textAreaWidth, setTextAreaWidth] = useState(300);
  // const refTextArea = useRef<any>(null);
  // const { width } = useScreenSize();

  // const getTextAreaWidth = () => {
  //   const newWidth = refTextArea.current.clientWidth;
  //   setTextAreaWidth(newWidth);
  // };
  //
  // useEffect(() => {
  //   getTextAreaWidth();
  // }, [width]);
  //
  // useEffect(() => {
  //   window.addEventListener('resize', getTextAreaWidth);
  //   return () => window.removeEventListener('resize', getTextAreaWidth);
  // }, []);

  return (
    <>
      <CustomPage>
        <WithSidebar>
          {/*<div ref={refTextArea}>*/}
          {/*  {article?.content === undefined ? (*/}
          {/*    <Text type={'h4'}>Article Could Not Be Found</Text>*/}
          {/*  ) : (*/}
          {/*    <>{article?.content.map((data: any, idx: any) => ArticleRenderer(data, idx, textAreaWidth))}</>*/}
          {/*  )}*/}
          {/*</div>*/}
          {'test'}
        </WithSidebar>
      </CustomPage>
    </>
  );
}
