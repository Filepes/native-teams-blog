'use client';

import { useState, useMemo } from 'react';
import { useGetAllNews } from '@/hooks';
import {
  CategoryItem,
  ResultsHeader,
  ResultsWrapper,
} from './CategoriesList.styled';
import { useRouter, useSearchParams } from 'next/navigation';

export const CategoriesList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category') || '';
  const { news, loading } = useGetAllNews();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam ? categoryParam : 'News',
  );

  const categories = useMemo(() => {
    if (!news.length) {
      return ['News'];
    }
    const uniqueSources = [...new Set(news.map((news) => news.source.name))];
    return ['News', ...uniqueSources.slice(0, 7)];
  }, [news]);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === 'News') {
      router.push(`/`);
    } else {
      router.push(`/?category=${encodeURIComponent(category.trim())}`);
    }
  };

  if (loading) {
    return (
      <ResultsHeader>
        <ResultsWrapper>Loading..</ResultsWrapper>
      </ResultsHeader>
    );
  }

  return (
    <>
      {categories.map((category) => (
        <CategoryItem
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => handleChangeCategory(category)}
        >
          {category}
        </CategoryItem>
      ))}
    </>
  );
};
