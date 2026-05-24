import { createAsyncThunk } from '@reduxjs/toolkit';

import { ArticleList } from '@/data/article-list';

export const fetchArticles = createAsyncThunk('', async () => {
  return ArticleList;
});
