'use client';

import { News } from '@/app/types/news';
import {
  AllPostCardContainer,
  AllPostImage,
  AllPostContent,
  AllPostTitle,
  AllPostReadMore,
} from './AllPosts.styled';

interface AllPostCardProps {
  news: News;
}

export const AllPostCard = ({ news }: AllPostCardProps) => {
  const handleReadMore = () => {
    console.log('readmore');
  };

  return (
    <AllPostCardContainer>
      {news.urlToImage ? (
        <AllPostImage
          src={news.urlToImage}
          alt={news.title}
          width={387}
          height={221}
        />
      ) : (
        <div
          style={{
            width: '387px',
            height: '221px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          No Image
        </div>
      )}
      <AllPostContent>
        <AllPostTitle>{news.title}</AllPostTitle>
        <AllPostReadMore onClick={handleReadMore}>
          Read More {`>`}
        </AllPostReadMore>
      </AllPostContent>
    </AllPostCardContainer>
  );
};
