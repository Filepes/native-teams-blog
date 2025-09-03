import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, News } from '@/app/types/news';
import { newsApi } from '@/services/api';

const initialState: NewsState = {
  news: [],
  paginatedNews: [],
  loading: false,
  error: null,
  paginatedNewsLoading: false,
  paginatedNewsError: null,
  currentPage: 1,
  // cannot be dynamic since newsapi limits developerr accounts to a maximum of 100 results
  // reference in previous implementation hooks > useGetPaginatedNews
  totalPages: 10,
  searchQuery: '',
  selectedCategory: 'News',
  selectedArticle: null,
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await newsApi.getAllNews();
      return response.articles;
    } catch (e: unknown) {
      return rejectWithValue('Cannot fetch news');
    }
  },
);

export const fetchPaginatedNews = createAsyncThunk(
  'news/fetchPaginatedNews',
  async (params: { page: number; pageSize: number }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getPaginatedNews(
        params.page,
        params.pageSize,
      );
      return {
        articles: response.articles,
        totalResults: response.totalResults,
        page: params.page,
        pageSize: params.pageSize,
      };
    } catch (e: unknown) {
      alert(e);
      return rejectWithValue('Cannot fetch news');
    }
  },
);

export const fetchArticleContent = createAsyncThunk(
  'news/fetchArticleContent',
  async (params: { url: string }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getArticleContent(params.url);
      return response;
    } catch (e: unknown) {
      console.error(e);
      return rejectWithValue('Cannot fetch article content');
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedArticle: (state, action: PayloadAction<News>) => {
      state.selectedArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPaginatedNews.pending, (state) => {
        state.paginatedNewsLoading = true;
        state.paginatedNewsError = null;
      })
      .addCase(fetchPaginatedNews.fulfilled, (state, action) => {
        state.paginatedNewsLoading = false;
        state.paginatedNews = action.payload.articles;
      })
      .addCase(fetchPaginatedNews.rejected, (state, action) => {
        state.paginatedNewsLoading = false;
        state.paginatedNewsError = action.payload as string;
      })
      .addCase(fetchArticleContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleContent.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedArticle = {
          ...state.selectedArticle,
          ...action.payload,
        };
      })
      .addCase(fetchArticleContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setCurrentPage,
  setSelectedArticle,
} = newsSlice.actions;
export default newsSlice.reducer;
