'use client';

import { useGetPaginatedNews } from '@/hooks';
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
  const {
    news,
    loading,
    error,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  } = useGetPaginatedNews(9);

  if (loading) {
    return (
      <AllPostsContainer>
        <div>Loading..</div>
      </AllPostsContainer>
    );
  }

  if (error) {
    return (
      <AllPostsContainer>
        <div>Error {error}</div>
      </AllPostsContainer>
    );
  }

  return (
    <AllPostsContainer>
      <AllPostsGrid>
        {news.map((article) => (
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
