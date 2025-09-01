'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetAllNews } from '@/hooks';
import { News } from '@/app/types/news';
import {
  ResultsHeader,
  ResultsWrapper,
  PostCard,
  PostImageWrapper,
  PostContent,
  PostTitle,
  PostDescription,
  ReadMoreButton,
  PostImage,
  ResultsSection,
} from './page.styled';
import { Container } from '../page.styled';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const { news, loading, error } = useGetAllNews();
  const [filteredNews, setFilteredNews] = useState<News[]>([]);

  useEffect(() => {
    const query = searchParams.get('search') || '';

    if (query && news.length > 0) {
      const filtered = news.filter(
        (article: News) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description?.toLowerCase().includes(query.toLowerCase()) ||
          article.content?.toLowerCase().includes(query.toLowerCase()) ||
          article.author?.toLowerCase().includes(query.toLowerCase()) ||
          article.source.name.toLowerCase().includes(query.toLowerCase()),
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
          <PostCard key={news.title}>
            <PostImageWrapper>
              {news.urlToImage ? (
                <PostImage
                  src={news.urlToImage}
                  alt={news.title}
                  width={470}
                  height={400}
                />
              ) : (
                'placeholder'
              )}
            </PostImageWrapper>
            <PostContent>
              <PostTitle>{news.title}</PostTitle>
              <PostDescription>{news.description}</PostDescription>
              <ReadMoreButton>Read More {`>`}</ReadMoreButton>
            </PostContent>
          </PostCard>
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
