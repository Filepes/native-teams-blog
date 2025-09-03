'use client';

import { useSearchParams } from 'next/navigation';
import { NewsCard } from '../NewsCard';
import { useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';

export const LatestPost = () => {
  const searchParams = useSearchParams();
  const { news } = useAppSelector((state) => state.news);
  const filteredNews = useMemo(() => {
    const newsCopy = [...news];
    const categoryParam = searchParams.get('category') || '';

    const filteredByCategory = categoryParam
      ? newsCopy.filter((news) => news.source.name === decodeURI(categoryParam))
      : newsCopy;

    const sortedByNew = filteredByCategory.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

    return sortedByNew[0] || null;
  }, [news, searchParams]);

  if (!news.length) {
    return;
  }

  return (
    <>
      <NewsCard news={filteredNews} />
    </>
  );
};
