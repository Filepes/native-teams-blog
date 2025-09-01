'use client';
import { SearchBar } from '@/components/SearchBar';
import { Container, SearchSection } from './page.styled';

export default function Home() {
  return (
    <Container>
      <SearchSection>
        <SearchBar />
      </SearchSection>
    </Container>
  );
}
