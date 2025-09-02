import styled from 'styled-components';
import Image from 'next/image';

export const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AllPostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  width: 100%;
`;

export const AllPostCardContainer = styled.div`
  width: 387px;
  height: 399px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    border: 1px solid #5152fb;
    border-radius: 15px;
  }
`;

export const AllPostImage = styled(Image)`
  border-radius: 15px;
  & > img {
    object-fit: cover;
  }
`;

export const AllPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 178px;
`;

export const AllPostTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 2.5%;
  color: #333333;
  margin: 0 0 20px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AllPostReadMore = styled.button`
  background: transparent;
  border: none;
  color: #5152fb;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  padding: 0;
  margin-top: auto;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1201px;
  height: 29px;
  gap: 394px;
  margin-top: 40px;
`;

export const PreviousButton = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  color: #838a90;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const NextButton = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  color: #5152fb;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledReactPaginate = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 295px;
    height: 29px;
  }

  .pagination li {
    display: flex;
    align-items: center;
  }

  .pagination li a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    height: 29px;
    padding: 0 7px;
    border: none;
    background: transparent;
    color: #838a90;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    font-size: 24px;
  }

  .pagination li a:hover {
    color: #5152fb;
  }

  .pagination li.selected a {
    background-color: #ebf3ff;
    color: #5152fb;
    border-radius: 5px;
  }

  .pagination .break {
    pointer-events: none;
    cursor: default;
  }

  .pagination li.break a {
    border: none;
    background: transparent;
    color: #838a90;
  }

  .pagination li.break a:hover {
    background: transparent;
    color: #333333;
  }

  .pagination li.previous,
  .pagination li.next {
    display: none;
  }
`;
