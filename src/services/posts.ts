import { ArticleList, sortArticlesByDate } from '@/data/article-list';


// Temporary loading static data
export async function getPost(slug?: string) {
  return ArticleList.find((post) => post.url === slug);
}

export async function getAllPosts() {
  // const allPosts: Article[] = [];
  // // @ts-ignore
  // const schema = Object.values(collection)[0].value.schema;
  // const propertyMap: Record<string, string> = {};
  //
  // Object.keys(schema).forEach((key) => {
  //   propertyMap[schema[key].name] = key;
  // });
  // allPosts.push({
  //   _id: 'id',
  //   title: 'title',
  //   url: 'slug',
  //   description: '',
  //   date: 'test',
  //   dateCreated: 'test',
  //   image: '',
  //   categories: ['test'],
  //   isPublished: true,
  //   keywords: '',
  //   content: [],
  // });
  // const blurImagesPromises = allPosts.map((post) => getBlurImage(post.image));
  // const blurImages = await Promise.all(blurImagesPromises);
  // allPosts.forEach((post, i) => (post.url = blurImages[i].base64));

  return sortArticlesByDate(ArticleList);
}
