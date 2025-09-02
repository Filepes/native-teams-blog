'use client';
import { SearchBar } from '@/components/SearchBar';
import {
  Container,
  SearchSection,
  CategorySection,
  LatestPostSection,
  AllPostsSection,
  InfoSection,
} from './page.styled';
import { CategoriesList } from '@/components/CategoriesList';
import { LatestPost } from '@/components/LatestPost';
import { AllPosts } from '@/components/AllPosts';
import { InfoSectionContent } from '@/components/InfoSectionContent';

export default function Home() {
  return (
    <Container>
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
    </Container>
  );
}
