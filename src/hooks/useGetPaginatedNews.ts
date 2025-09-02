import { useState, useEffect, useCallback } from 'react';
import { News } from '@/app/types/news';
import { newsApi } from '@/services/api';

interface UseGetPaginatedNewsReturn {
  news: News[];
  totalResults: number;
  error: string | null;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;
}

export const useGetPaginatedNews = (
  pageSize: number = 10,
): UseGetPaginatedNewsReturn => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // not dynamic because newsapi limits developerr accounts to a maximum of 100 results
  const totalPages = 10;
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const fetchPaginatedNews = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        setError(null);
        console.log(page);
        const response = await newsApi.getPaginatedNews(page, pageSize);
        setNews(response.data.articles || []);
        setTotalResults(response.data.totalResults || 0);
        setCurrentPage(page);
        setLoading(false);
      } catch (e: unknown) {
        setError('Cant fetch news');
        setNews([]);
        setLoading(false);
      }
    },
    [pageSize],
  );

  useEffect(() => {
    fetchPaginatedNews(1);
  }, [pageSize, fetchPaginatedNews]);

  const goToNextPage = () => {
    if (hasNextPage) {
      fetchPaginatedNews(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      fetchPaginatedNews(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchPaginatedNews(page);
    }
  };

  return {
    news,
    loading,
    error,
    totalResults,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
};
