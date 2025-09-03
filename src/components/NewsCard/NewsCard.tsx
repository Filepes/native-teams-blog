'use client';

import { News } from '@/app/types/news';
import { useRouter } from 'next/navigation';
import {
  PostCard,
  PostImageWrapper,
  PostImage,
  PostContent,
  PostTitle,
  PostDescription,
  ReadMoreButton,
} from './NewsCard.styled';
import { useAppDispatch } from '@/store/hooks';
import { setSelectedArticle } from '@/store/newsSlice';

interface NewsCardProps {
  news: News;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReadMore = () => {
    dispatch(setSelectedArticle(news));
    router.push(`/post/${encodeURIComponent(news.title)}?postUrl=${news.url}`);
  };
  return (
    <PostCard key={news.title}>
      <PostImageWrapper>
        {news.urlToImage ? (
          <PostImage
            src={news.urlToImage}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 470px"
          />
        ) : (
          'No image available'
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
