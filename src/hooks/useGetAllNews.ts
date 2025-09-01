import { useState, useEffect, useCallback } from 'react';
import { newsApi } from '@/services/api';
import { News } from '@/app/types/news';

interface UseGetAllNewsReturn {
  news: News[];
  loading: boolean;
  error: string | null;
  getAllNews: () => Promise<void>;
}

export const useGetAllNews = (): UseGetAllNewsReturn => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await newsApi.getAllNews();
      setNews(response.data.articles || []);
      setLoading(false);
    } catch (e: unknown) {
      setError('Cannot fetch news');
      setNews([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllNews();
  }, [getAllNews]);

  return {
    news,
    loading,
    error,
    getAllNews,
  };
};
