import { ArticleList } from '@/data/article-list';

export async function getAllPosts(slug?: string) {
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

  return ArticleList;
}
