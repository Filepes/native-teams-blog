import styled from 'styled-components';

export const ResultsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const ResultsWrapper = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 8px 0;
`;

export const CategoryItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 14px 24px;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  background-color: #f0f2f7;
  color: #838a90;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: #5152fb;
  }

  &.active {
    background-color: #5152fb;
    color: #ffffff;
    border-color: #5152fb;
  }
`;
