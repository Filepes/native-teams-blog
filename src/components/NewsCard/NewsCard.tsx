'use client';

import { News } from '@/app/types/news';
import {
  PostCard,
  PostImageWrapper,
  PostImage,
  PostContent,
  PostTitle,
  PostDescription,
  ReadMoreButton,
} from './NewsCard.styled';

interface NewsCardProps {
  news: News;
  onClick?: () => void;
}

export const NewsCard = ({ news, onClick }: NewsCardProps) => {
  const handleReadMore = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('readmore');
    }
  };

  return (
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
        <ReadMoreButton onClick={handleReadMore}>
          Read More {`>`}
        </ReadMoreButton>
      </PostContent>
    </PostCard>
  );
};
