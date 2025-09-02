import styled from 'styled-components';

export const InfoSectionContainer = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1943px;
  height: 456px;
  position: relative;
  background-color: ${(props) => props.$backgroundColor || '#ebf3ff'};
`;

export const LeftSideWrapper = styled.div`
  position: absolute;
  width: 535px;
  height: 456px;
  left: -145px;
  top: 0;
  opacity: 0.1;
  z-index: 1;
`;

export const BodySvgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 145px;
  z-index: 2;
`;

export const HeadSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 150px;
  z-index: 2;
`;

export const StarSvgWrapper = styled.div`
  position: absolute;
  right: 410px;
  top: 57px;
  z-index: 1;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 771px;
  height: 201px;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const InfoTitle = styled.h2<{ $textColor?: string }>`
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => props.$textColor || '#333333'};
  margin: 0;
`;

export const InfoDescription = styled.p<{ $textColor?: string }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 152%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => props.$textColor || '#666666'};
  margin: 0;
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
`;
