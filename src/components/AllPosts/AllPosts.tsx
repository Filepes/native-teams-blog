'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'next/navigation';
import { fetchPaginatedNews, setCurrentPage } from '@/store/newsSlice';
import {
  AllPostsContainer,
  AllPostsGrid,
  LoadingGridContainer,
  PaginationContainer,
  StyledReactPaginate,
  PreviousButton,
  NextButton,
} from './AllPosts.styled';
import { AllPostCard } from './AllPostCard';
import ReactPaginate from 'react-paginate';
import { LoadingSpinner } from '../LoadingSpinner';
import { useRouter } from 'next/navigation';

const pageSize = 9;

export const AllPosts = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const gridRef = useRef<HTMLDivElement>(null);
  const {
    paginatedNews,
    paginatedNewsLoading,
    paginatedNewsError,
    currentPage,
    totalPages,
  } = useAppSelector((state) => state.news);

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const scrollToGrid = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const updateURL = (newPage: number) => {
    const currentCategory = searchParams.get('category');
    const params = new URLSearchParams();

    if (currentCategory) {
      params.set('category', currentCategory);
    }

    if (newPage > 1) {
      params.set('page', newPage.toString());
    }

    const paramString = params.toString();
    const newURL = paramString ? `/?${paramString}` : '/';

    router.replace(newURL, { scroll: false });
  };

  useEffect(() => {
    const goToPage = Number(searchParams.get('page')) || currentPage;
    dispatch(fetchPaginatedNews({ page: goToPage, pageSize }));
  }, [dispatch, currentPage, searchParams]);

  const goToNextPage = () => {
    if (hasNextPage) {
      const newPage = currentPage + 1;
      dispatch(setCurrentPage(newPage));
      updateURL(newPage);
      scrollToGrid();
    }
  };

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      const newPage = currentPage - 1;
      dispatch(setCurrentPage(newPage));
      updateURL(newPage);
      scrollToGrid();
    }
  };

  const goToPage = (page: number) => {
    dispatch(setCurrentPage(page));
    updateURL(page);
    scrollToGrid();
  };

  if (paginatedNewsLoading) {
    return (
      <LoadingGridContainer>
        <LoadingSpinner size={100} />
      </LoadingGridContainer>
    );
  }

  if (paginatedNewsError) {
    return (
      <AllPostsContainer>
        <div>Error {paginatedNewsError}</div>
      </AllPostsContainer>
    );
  }

  return (
    <AllPostsContainer ref={gridRef}>
      <AllPostsGrid>
        {paginatedNews.map((article) => (
          <AllPostCard key={article.title} news={article} />
        ))}
      </AllPostsGrid>

      {totalPages > 1 && (
        <PaginationContainer>
          <PreviousButton
            onClick={goToPreviousPage}
            disabled={!hasPreviousPage}
          >
            Previous
          </PreviousButton>

          <StyledReactPaginate>
            <ReactPaginate
              breakLabel=". . ."
              onPageChange={(event) => goToPage(event.selected + 1)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={totalPages}
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              activeClassName="selected"
              disabledClassName="disabled"
              breakClassName="break"
              nextClassName="next"
              previousClassName="previous"
              forcePage={currentPage - 1}
            />
          </StyledReactPaginate>

          <NextButton onClick={goToNextPage} disabled={!hasNextPage}>
            Next
          </NextButton>
        </PaginationContainer>
      )}
    </AllPostsContainer>
  );
};
