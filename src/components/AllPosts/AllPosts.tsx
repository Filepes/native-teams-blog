'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchPaginatedNews, setCurrentPage } from '@/store/newsSlice';
import {
  AllPostsContainer,
  AllPostsGrid,
  PaginationContainer,
  StyledReactPaginate,
  PreviousButton,
  NextButton,
} from './AllPosts.styled';
import { AllPostCard } from './AllPostCard';
import ReactPaginate from 'react-paginate';

export const AllPosts = () => {
  const dispatch = useAppDispatch();
  const {
    paginatedNews,
    paginatedNewsLoading,
    paginatedNewsError,
    currentPage,
    totalPages,
  } = useAppSelector((state) => state.news);

  const pageSize = 9;
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  useEffect(() => {
    dispatch(fetchPaginatedNews({ page: currentPage, pageSize }));
  }, [dispatch, currentPage]);

  const goToNextPage = () => {
    if (hasNextPage) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (paginatedNewsLoading) {
    return (
      <AllPostsContainer>
        <div>Loading..</div>
      </AllPostsContainer>
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
    <AllPostsContainer>
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
