import { createAsyncThunk } from '@reduxjs/toolkit';

import { ArticlesList } from '@/data/ArticlesList';

export const fetchArticles = createAsyncThunk('', async () => {
  return ArticlesList;
});
