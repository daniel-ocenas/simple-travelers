import { ArticleList, sortArticlesByDate } from '@/data/article-list';

export async function getPost(slug?: string) {
  return ArticleList.find((post) => post.slug === slug);
}

export async function getAllPosts() {
  return sortArticlesByDate(ArticleList);
}
