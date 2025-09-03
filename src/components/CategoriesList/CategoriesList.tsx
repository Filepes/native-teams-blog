'use client';

import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedCategory } from '@/store/newsSlice';
import { CategoryItem } from './CategoriesList.styled';
import { useRouter, useSearchParams } from 'next/navigation';

export const CategoriesList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { news, selectedCategory } = useAppSelector((state) => state.news);

  const categoryParam = searchParams.get('category') || '';

  useEffect(() => {
    if (categoryParam) {
      dispatch(setSelectedCategory(categoryParam));
    }
  }, [dispatch, categoryParam]);

  const categories = useMemo(() => {
    if (!news.length) {
      return ['News'];
    }
    const uniqueSources = [...new Set(news.map((news) => news.source.name))];
    return ['News', ...uniqueSources.slice(0, 7)];
  }, [news]);

  const handleChangeCategory = (category: string) => {
    dispatch(setSelectedCategory(category));
    if (category === 'News') {
      router.replace(`/`, { scroll: false });
    } else {
      router.replace(`/?category=${encodeURIComponent(category.trim())}`, {
        scroll: false,
      });
    }
  };

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
