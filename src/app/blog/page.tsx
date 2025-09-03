'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNews } from '@/store/newsSlice';
import { News } from '@/app/types/news';
import { ResultsHeader, ResultsWrapper, ResultsSection } from './page.styled';
import { Container } from '../page.styled';
import { NewsCard } from '@/components/NewsCard';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { news, loading, error } = useAppSelector((state) => state.news);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);

  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, news.length]);

  useEffect(() => {
    const query = searchParams.get('search') || '';

    if (query && news.length > 0) {
      const filtered = news.filter(
        (news: News) =>
          news.title.toLowerCase().includes(query.toLowerCase()) ||
          news.description?.toLowerCase().includes(query.toLowerCase()) ||
          news.content?.toLowerCase().includes(query.toLowerCase()) ||
          news.author?.toLowerCase().includes(query.toLowerCase()) ||
          news.source.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews([]);
    }
  }, [searchParams, news]);

  if (loading) {
    return (
      <ResultsHeader>
        <ResultsWrapper>Loading..</ResultsWrapper>
      </ResultsHeader>
    );
  }

  if (error) {
    return (
      <ResultsHeader>
        <ResultsWrapper>{error}</ResultsWrapper>
      </ResultsHeader>
    );
  }

  return (
    <Container>
      <ResultsSection>
        {filteredNews.map((news) => (
          <NewsCard key={news.title} news={news} />
        ))}
        {!filteredNews.length && (
          <ResultsHeader>
            <ResultsWrapper>No news found</ResultsWrapper>
          </ResultsHeader>
        )}
      </ResultsSection>
    </Container>
  );
}
