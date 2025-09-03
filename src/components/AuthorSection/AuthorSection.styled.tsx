import styled from 'styled-components';
import Image from 'next/image';

export const AuthorSectionWrapper = styled.section`
  width: 1340px;
  height: 395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  margin: 150px;
  border-radius: 20px;
  background-color: #1f2068;
`;

export const AuthorImage = styled(Image)`
  position: relative;
  z-index: 1;
  bottom: 130px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: -5px 7px 0 0 #5152fb;
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
`;
