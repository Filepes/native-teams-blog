import styled from 'styled-components';

export const NewsletterSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1943px;
  max-width: 1943px;
  min-height: 456px;
  position: relative;
  background-color: #0a0a2b;
  box-shadow: 10px -7px 0px 3px #8c7bff;
  padding: 60px 20px;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 40px 16px;
    box-shadow: 5px -4px 0px 2px #8c7bff;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 30px 12px;
    box-shadow: 3px -2px 0px 1px #8c7bff;
  }
`;

export const StarSvgWrapper = styled.div`
  position: absolute;
  right: 290px;
  top: 257px;
  z-index: 1;
  transform: rotate(-45deg);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 911px;
  min-height: 294px;
  gap: 30px;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 16px;
  }
`;

export const NewsletterTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    width: 40%;
    font-size: 28px;
    line-height: 1.1;
  }
`;

export const NewsLetterTitleColor = styled.span`
  color: #5152fb;
`;

export const NewsletterInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

export const NewsletterInput = styled.input`
  display: flex;
  align-items: center;
  width: 375px;
  max-width: 430px;
  height: 49px;
  padding: 14px 44px;
  border: 1px solid #e0e0e0;
  border-radius: 55px;
  font-size: 16px;
  outline: none;
  background-color: #ffffff;
  color: #1e1e1e;

  &:focus {
    border-color: #5152fb;
  }

  &::placeholder {
    color: gray;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 12px 32px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export const NewsletterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 157px;
  height: 49px;
  padding: 14px 44px;
  background-color: #5152fb;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  right: 90px;

  &:hover {
    background-color: #4041e8;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 200px;
    padding: 12px 32px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 14px;
    max-width: 160px;
  }
`;
export const NewsLetterContainer = styled.div`
  width: 100%;
  max-width: 550px;
  min-height: 54px;

  @media (max-width: 768px) {
    max-width: 40%;
  }
`;

export const NewsletterDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.52;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;
