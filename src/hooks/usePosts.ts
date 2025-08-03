import { useMemo } from 'react';

import { Article } from '@/store/Article/Article.types';

const POST_PER_PAGE = 12;

export default function usePosts(allPosts: Article[]) {
  // const page = useRecoilValue(pageState);
  // const query = useRecoilValue(queryState);
  // const [categories, setCategories] = useRecoilState(categoriesState);

  const allPostsFiltered = useMemo(
    () =>
      allPosts.filter((post) => {
        if (!post.isPublished) {
          return false;
        }

        // if (query) {
        //   return false;
        // }

        // if (categories.selected.length) {
        //   const isCategoryMatch = categories.selected.every((cat) =>
        //     post.categories.includes(cat)
        //   );
        //   if (!isCategoryMatch) {
        //     return false;
        //   }
        // }

        return true;
      }),
    [allPosts]
    // [allPosts, categories.selected, query]
  );
  allPostsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  // const totalPages = Math.ceil(allPostsFiltered.length / POST_PER_PAGE);
  // const offset = (page ? +page - 1 : 0) * POST_PER_PAGE;
  // const postsForCurrentPage = allPostsFiltered.slice(
  //   offset,
  //   offset + POST_PER_PAGE
  // );
  //
  // useEffect(() => {
  //   setCategories((prevCategories) => ({
  //     ...prevCategories,
  //     active: toUniqueArray(
  //       allPostsFiltered.map((post) => post.categories).flat()
  //     ),
  //   }));
  // }, [allPostsFiltered, setCategories]);

  return {
    posts: allPostsFiltered,
    totalPages: 1,
  };
}
