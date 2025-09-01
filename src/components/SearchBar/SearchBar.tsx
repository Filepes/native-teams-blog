'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchContainer, SearchInput, SearchButton } from './SearchBar.styled';

interface SearchBarProps {
  initialValue?: string;
}

export const SearchBar = ({ initialValue = '' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push(`/`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        id="search"
        type="text"
        placeholder="Search for posts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};
