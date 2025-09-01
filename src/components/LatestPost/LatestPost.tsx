'use client';

import { useSearchParams } from 'next/navigation';
import { NewsCard } from '../NewsCard';
import { useMemo } from 'react';
import { useGetAllNews } from '@/hooks';
import { ResultsHeader, ResultsWrapper } from './LatestPost.styled';

export const LatestPost = () => {
  const searchParams = useSearchParams();
  const { news, loading } = useGetAllNews();

  const filteredNews = useMemo(() => {
    const categoryParam = searchParams.get('category') || '';

    const filteredByCategory = categoryParam
      ? news.filter((news) => news.source.name === categoryParam)
      : news;

    const sortedByNew = filteredByCategory.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

    return sortedByNew[0] || null;
  }, [news, searchParams]);

  if (loading) {
    return (
      <ResultsHeader>
        <ResultsWrapper>Loading..</ResultsWrapper>
      </ResultsHeader>
    );
  }

  return (
    <>
      <NewsCard news={filteredNews} />
    </>
  );
};
