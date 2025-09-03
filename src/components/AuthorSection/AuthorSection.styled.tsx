import styled from 'styled-components';
import Image from 'next/image';

export const AuthorSectionWrapper = styled.section`
  width: 100%;
  max-width: 1340px;
  min-height: 395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  margin: 150px 20px;
  border-radius: 20px;
  background-color: #1f2068;
  
  @media (max-width: 768px) {
    margin: 80px 16px;
    padding: 40px 20px;
    min-height: 300px;
  }
  
  @media (max-width: 375px) {
    margin: 60px 12px;
    padding: 30px 16px;
    min-height: 250px;
    border-radius: 16px;
  }
`;

export const AuthorImageContainer = styled.div`
  position: relative;
  z-index: 1;
  bottom: 130px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -5px 7px 0 0 #5152fb;
  
  @media (max-width: 768px) {
    bottom: 80px;
    width: 100px;
    height: 100px;
  }
  
  @media (max-width: 375px) {
    bottom: 60px;
    width: 80px;
    height: 80px;
    box-shadow: -3px 5px 0 0 #5152fb;
  }
`;

export const AuthorImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthorDescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const AuthorName = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

export const AuthorType = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 1.2;
`;

export const AuthorDescription = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  margin: 0;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
  
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
