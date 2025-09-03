import styled from 'styled-components';

export const InfoSectionContainer = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1943px;
  max-width: 1943px;
  min-height: 456px;
  position: relative;
  background-color: ${(props) => props.$backgroundColor || '#ebf3ff'};
  padding: 60px 20px;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 40px 16px;
  }

  @media (max-width: 480px) {
    min-height: 280px;
    padding: 30px 12px;
  }
`;

export const LeftSideWrapper = styled.div`
  position: absolute;
  width: 535px;
  height: 456px;
  left: -145px;
  top: 0;
  opacity: 0.1;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BodySvgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 145px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeadSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 150px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StarSvgWrapper = styled.div`
  position: absolute;
  right: 410px;
  top: 57px;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 771px;
  min-height: 201px;
  gap: 20px;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 0 16px;
  }
`;

export const InfoTitle = styled.h2<{ $textColor?: string }>`
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => props.$textColor || '#333333'};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 110%;
  }
`;

export const InfoDescription = styled.p<{ $textColor?: string }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 152%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => props.$textColor || '#666666'};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 40%;
    font-size: 14px;
    line-height: 140%;
  }
`;

export const InfoButton = styled.button`
  width: 176px;
  height: 49px;
  padding: 14px 44px;
  gap: 10px;
  border-radius: 50px;
  background-color: #5152fb;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: #4041e8;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 44px;
    padding: 12px 36px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 40px;
    padding: 10px 30px;
    font-size: 13px;
  }
`;
