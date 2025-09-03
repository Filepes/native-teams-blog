'use client';

import { useEffect, useMemo } from 'react';
import {
  PostDetailsContainer,
  PostContentSection,
  PostHeaderContainer,
  PostTitle,
  PostDate,
  PostImage,
  PostContentWrapper,
  PostContent,
  LoadingWrapper,
  LoadingMessage,
} from './PostDetails.styled';
import { calculateReadTime } from '@/utils/calcReadingTime';
import { formatDate } from '@/utils/formatDate';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticleContent, fetchNews } from '@/store/newsSlice';
import { AuthorSection } from '@/components/AuthorSection';
import { InfoSectionContent } from '@/components/InfoSectionContent/InfoSectionContent';
import { LoadingSpinner } from '../LoadingSpinner';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface PostDetailsProps {
  title: string;
}

export const PostDetails = ({ title }: PostDetailsProps) => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { news, selectedArticle, loading } = useAppSelector(
    (state) => state.news,
  );
  const postUrl = searchParams.get('postUrl');

  useEffect(() => {
    if (!news.length) {
      dispatch(fetchNews());
    }
  }, [news.length, dispatch]);

  useEffect(() => {
    if (!postUrl) {
      return;
    }
    dispatch(fetchArticleContent({ url: decodeURIComponent(postUrl) }));
  }, [postUrl, dispatch]);

  const currentPost = useMemo(() => {
    if (!news.length) {
      return null;
    }
    const foundPost = news.find(
      (news) => news.title === decodeURIComponent(title),
    );

    return foundPost;
  }, [news, title]);

  if (!currentPost) {
    return (
      <PostDetailsContainer>
        <PostContentSection>
          <LoadingSpinner size={200} />
        </PostContentSection>
      </PostDetailsContainer>
    );
  }

  const readTime = calculateReadTime(selectedArticle?.content || '');
  const formattedDate = formatDate(currentPost.publishedAt);

  const breadcrumbItems = [
    { href: '/', label: 'News' },
    { label: currentPost.title, isLast: true },
  ];

  return (
    <PostDetailsContainer>
      <Breadcrumbs crumbs={breadcrumbItems} />
      <PostContentSection>
        <PostHeaderContainer>
          <PostTitle>{currentPost.title}</PostTitle>
          <PostDate>
            {formattedDate} | {readTime} min read
          </PostDate>
        </PostHeaderContainer>

        {currentPost.urlToImage && (
          <PostImage
            src={currentPost.urlToImage}
            alt={currentPost.title}
            width={1200}
            height={615}
            priority
          />
        )}
      </PostContentSection>

      {loading && !selectedArticle?.content ? (
        <LoadingWrapper>
          <LoadingMessage>Loading..</LoadingMessage>
        </LoadingWrapper>
      ) : (
        <PostContentWrapper>
          <PostContent
            dangerouslySetInnerHTML={{
              __html: selectedArticle?.content || '',
            }}
          />
        </PostContentWrapper>
      )}

      <AuthorSection
        authorName={currentPost.author || undefined}
        authorImage="/authorImage.jpg"
        authorDescription="Author descrition"
      />

      <InfoSectionContent
        backgroundColor="#0A0A2B"
        bodyColor="#FFFFFF"
        textColor="#FFFFFF"
      />
    </PostDetailsContainer>
  );
};
