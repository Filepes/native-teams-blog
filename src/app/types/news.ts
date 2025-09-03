export interface NewsSource {
  id: string | null;
  name: string;
}

export interface News {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  news: News[];
}

export interface NewsState {
  news: News[];
  paginatedNews: News[];
  loading: boolean;
  error: string | null;
  paginatedNewsLoading: boolean;
  paginatedNewsError: string | null;
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  selectedCategory: string;
  selectedArticle: News | null;
}
