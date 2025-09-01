import styled from 'styled-components';
import Image from 'next/image';

export const ResultsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 40px 0;
`;

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

export const PostCard = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 80px 100px;
  margin-bottom: 20px;
  width: 1200px;
  height: 560px;
  gap: 100px;
  align-items: center;

  &:hover {
    border-color: #5152fb;
  }
`;

export const PostImageWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 470px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 14px;
`;

export const PostImage = styled(Image)``;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const PostTitle = styled.h3`
  display: flex;
  align-items: flex-start;
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 20px 0;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: #5152fb;
  }
`;

export const PostDescription = styled.p`
  display: flex;
  font-size: 18px;
  color: #555555;
  line-height: 1.6;
  margin: 0 0 30px 0;
  flex: 1;
`;

export const ReadMoreButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5152fb;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
`;
