import styled from 'styled-components';

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
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f5f5f5;
    border-color: #5152fb;
  }

  &.active {
    background-color: #5152fb;
    color: #ffffff;
    border-color: #5152fb;
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;
