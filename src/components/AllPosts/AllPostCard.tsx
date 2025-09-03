'use client';

import { News } from '@/app/types/news';
import { useRouter } from 'next/navigation';
import {
  AllPostCardContainer,
  AllPostImage,
  AllPostContent,
  AllPostTitle,
  AllPostReadMore,
} from './AllPosts.styled';
import { useAppDispatch } from '@/store/hooks';
import { setSelectedArticle } from '@/store/newsSlice';

interface AllPostCardProps {
  news: News;
}

export const AllPostCard = ({ news }: AllPostCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReadMore = () => {
    dispatch(setSelectedArticle(news));
    router.push(`/post/${encodeURIComponent(news.title)}?postUrl=${encodeURIComponent(news.url)}`);
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
