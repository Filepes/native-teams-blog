import styled from 'styled-components';
import Link from 'next/link';

export const BreadcrumbsContainer = styled.nav`
  width: 100%;
  max-width: 1440px;
  padding: 20px 120px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    padding: 16px 20px;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 16px;
    margin-top: 16px;
  }
`;

export const BreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #5152fb;
  font-weight: 400;
  font-size: 18px;

  &:not(:last-child)::after {
    content: ' > ';
    color: #999999;
    margin-left: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: #0a0a2b;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BreadcrumbText = styled.span`
  color: #5152fb;
  font-size: 18px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
