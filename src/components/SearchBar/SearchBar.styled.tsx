import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
    gap: 12px;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 0 12px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 576px;
  max-width: 578px;
  height: 49px;
  padding: 14px 44px;
  border: 1px solid #e0e0e0;
  border-radius: 55px;
  font-size: 16px;
  outline: none;
  background-color: #ffffff;
  color: #1e1e1e;

  &:focus {
    border-color: #5152fb;
  }

  &::placeholder {
    color: gray;
  }

  @media (max-width: 768px) {
    max-width: 370px;
    padding: 12px 32px;
  }

  @media (max-width: 375px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 49px;
  padding: 14px 44px;
  background-color: #5152fb;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  right: 80px;

  &:hover {
    background-color: #4041e8;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 200px;
    padding: 12px 32px;
  }

  @media (max-width: 375px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;
