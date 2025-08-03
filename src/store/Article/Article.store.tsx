import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/AppStore';
import { fetchArticles } from '@/store/Article/Article.api';
import { ArticlesState, CategoriesState } from '@/store/Article/Article.types';

const initialState: ArticlesState = {
  loading: false,
  error: null,
  articles: [],
  categories: {
    selected: [],
    active: [],
  },
  query: '',
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesState>) => {
      state.categories = action.payload;
    },
    setQuery: (state, action: PayloadAction<{ query: string }>) => {
      state.query = action.payload.query;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch coinGecko';
      });
  },
});

export const { setCategories, setQuery } = articleSlice.actions;

export default articleSlice.reducer;

// SELECTORS
export const getCategoriesState = createSelector(
  (state: RootState) => state.articles.categories,
  (categories) => categories
);
export const getCategoriesQuery = createSelector(
  (state: RootState) => state.articles.query,
  (query) => query
);
