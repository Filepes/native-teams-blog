import styled from 'styled-components';
import Image from 'next/image';

export const PostCard = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid #e0e0e0;
  background-color: #ebf3ff;
  border-radius: 20px;
  padding: 80px 100px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px;
  min-height: 560px;
  gap: 100px;
  align-items: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 60px 80px;
    gap: 80px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 30px;
    min-height: auto;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    border-radius: 16px;
  }
`;

export const PostImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 470px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    width: 400px;
    height: 340px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    height: 240px;
    border-radius: 10px;
  }
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const PostDescription = styled.p`
  display: flex;
  font-size: 18px;
  color: #555555;
  line-height: 1.6;
  margin: 0 0 30px 0;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin: 0 0 20px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 16px 0;
  }
`;

export const ReadMoreButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #5152fb;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  
  @media (max-width: 768px) {
    align-self: center;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
