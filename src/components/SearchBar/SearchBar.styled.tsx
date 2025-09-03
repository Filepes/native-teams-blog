import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 578px;
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
`;

export const SearchButton = styled.button`
  display: flex;
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
`;
