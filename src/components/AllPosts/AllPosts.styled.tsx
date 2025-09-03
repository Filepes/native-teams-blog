import styled from 'styled-components';
import Image from 'next/image';

export const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const AllPostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  width: 100%;
  min-height: 1230px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 16px;
    min-height: auto;
  }

  @media (max-width: 375px) {
    gap: 12px;
    padding: 0 12px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const LoadingGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1230px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
    min-height: 600px;
  }

  @media (max-width: 375px) {
    padding: 0 12px;
    min-height: 400px;
  }
`;

export const AllPostCardContainer = styled.div`
  width: 360px;
  height: 399px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;

  &:hover {
    box-shadow: -5px 7px 0 0 #5152fb;
  }

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 380px;
  }

  @media (max-width: 375px) {
    width: 100%;
    max-width: 350px;
    height: 380px;
  }
`;

export const AllPostImageContainer = styled.div`
  width: 100%;
  height: 221px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  position: relative;
`;

export const AllPostImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AllPostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  height: 178px;

  @media (max-width: 768px) {
    padding: 16px;
    height: 160px;
  }

  @media (max-width: 375px) {
    padding: 16px;
    height: 140px;
  }
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

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 0 0 16px 0;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 1.2;
    margin: 0 0 12px 0;
  }
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
  width: 40%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1201px;
  height: 29px;
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
    height: auto;
    margin-top: 30px;
  }

  @media (max-width: 375px) {
    padding: 0 12px;
    margin-top: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 20px;
    order: 1;
  }

  @media (max-width: 375px) {
    font-size: 18px;
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

  @media (max-width: 768px) {
    font-size: 20px;
    order: 3;
  }

  @media (max-width: 375px) {
    font-size: 18px;
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
    width: 100%;
    max-width: 295px;
    height: 29px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      order: 2;
      gap: 3px;
    }

    @media (max-width: 375px) {
      gap: 2px;
      height: auto;
    }
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

    @media (max-width: 768px) {
      font-size: 20px;
      min-width: 24px;
      height: 26px;
      padding: 0 5px;
    }

    @media (max-width: 375px) {
      font-size: 18px;
      min-width: 22px;
      height: 24px;
      padding: 0 4px;
    }
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
