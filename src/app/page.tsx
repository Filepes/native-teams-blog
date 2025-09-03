'use client';
import { SearchBar } from '@/components/SearchBar';
import { Hero } from '@/components/HeroSection';
import {
  Container,
  HeroSection,
  SearchSection,
  CategorySection,
  LatestPostSection,
  AllPostsSection,
  InfoSection,
  NewsletterSection,
} from './page.styled';
import { CategoriesList } from '@/components/CategoriesList';
import { LatestPost } from '@/components/LatestPost';
import { AllPosts } from '@/components/AllPosts';
import { InfoSectionContent } from '@/components/InfoSectionContent';
import { NewsletterSectionContent } from '@/components/NewsletterSectionContent';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { fetchNews } from '@/store/newsSlice';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Home() {
  const { loading, error } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <LoadingSpinner size={100} />
      </Container>
    );
  }
  if (error) {
    return <Container>Error: {error}</Container>;
  }
  return (
    <Container>
      <HeroSection>
        <Hero />
      </HeroSection>
      <SearchSection>
        <SearchBar />
      </SearchSection>
      <CategorySection>
        <CategoriesList />
      </CategorySection>
      <LatestPostSection>
        <LatestPost />
      </LatestPostSection>
      <AllPostsSection>
        <AllPosts />
      </AllPostsSection>
      <InfoSection>
        <InfoSectionContent />
      </InfoSection>
      <NewsletterSection>
        <NewsletterSectionContent />
      </NewsletterSection>
    </Container>
  );
}
