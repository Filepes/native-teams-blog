import styled from 'styled-components';

export const HeroSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled.div`
  width: 917px;
  height: 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SmallTitle = styled.h2`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #5152fb;
  margin: 0;
  text-align: center;
`;

export const BigTitle = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #333333;
  margin: 0;
`;

export const HeartIconWrapper = styled.div`
  position: relative;
  right: 500px;
  top: 230px;
`;

export const SmallStarIcon = styled.div`
  position: relative;
  left: 400px;
  top: 130px;
`;

export const BigStarIcon = styled.div`
  position: relative;
  right: 420px;
  top: 220px;
`;
