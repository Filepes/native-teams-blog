import styled from 'styled-components';

export const NewsletterSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1943px;
  height: 456px;
  position: relative;
  background-color: #0a0a2b;
  box-shadow: 10px -7px 0px 3px #8c7bff;
`;

export const StarSvgWrapper = styled.div`
  position: absolute;
  right: 290px;
  top: 257px;
  z-index: 1;
  transform: rotate(-45deg);
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 911px;
  height: 294px;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const NewsletterTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin: 0;
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
`;

export const NewsletterInput = styled.input`
  display: flex;
  align-items: center;
  width: 430px;
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

  &:hover {
    background-color: #4041e8;
  }
`;
export const NewsLetterContainer = styled.div`
  width: 550px;
  height: 54px;
`;

export const NewsletterDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.52;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;
