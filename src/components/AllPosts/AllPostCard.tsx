'use client';

import { News } from '@/app/types/news';
import { useRouter } from 'next/navigation';
import {
  AllPostCardContainer,
  AllPostImageContainer,
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
      <AllPostImageContainer>
        {news.urlToImage ? (
          <AllPostImage
            src={news.urlToImage}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 387px"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
            }}
          >
            No Image Available
          </div>
        )}
      </AllPostImageContainer>
      <AllPostContent>
        <AllPostTitle>{news.title}</AllPostTitle>
        <AllPostReadMore onClick={handleReadMore}>
          Read More {`>`}
        </AllPostReadMore>
      </AllPostContent>
    </AllPostCardContainer>
  );
};
