import { ArticleList } from '@/data/article-list';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('', async () => {
  return ArticleList;
});
