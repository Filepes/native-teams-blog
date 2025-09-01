'use client';
import { SearchBar } from '@/components/SearchBar';
import {
  Container,
  SearchSection,
  CategorySection,
  LatestPostSection,
} from './page.styled';
import { CategoriesList } from '@/components/CategoriesList';
import { LatestPost } from '@/components/LatestPost';

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
    </Container>
  );
}
