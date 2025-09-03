import styled from 'styled-components';

export const HeroSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 917px;
  min-height: 254px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: -100px;

  @media (max-width: 768px) {
    min-height: 200px;
    gap: 12px;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    min-height: 160px;
    gap: 10px;
    margin-top: 0;
  }
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

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
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

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeartIconWrapper = styled.div`
  position: relative;
  right: 500px;
  top: 230px;

  @media (max-width: 768px) {
    right: 200px;
    top: 150px;
    display: none;
  }
`;

export const SmallStarIcon = styled.div`
  position: relative;
  left: 400px;
  top: 130px;

  @media (max-width: 768px) {
    left: 150px;
    top: 80px;
    display: none;
  }
`;

export const BigStarIcon = styled.div`
  position: relative;
  right: 420px;
  top: 220px;

  @media (max-width: 768px) {
    right: 180px;
    top: 140px;
    display: none;
  }
`;
