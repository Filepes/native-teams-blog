import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 670px;
  background-color: #1f2068;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 80px 120px 40px 120px;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 30px 30px 30px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 20px 20px 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0px auto;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 0;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const LinkColumn = styled.div`
  width: 146px;
  min-height: 274px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: auto;
    min-width: 146px;
    min-height: auto;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

export const LinkTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkItem = styled.li`
  font-weight: 300;
  font-size: 14px;
  line-height: 152%;
  color: #ddddfd;
  text-decoration: none;
`;

export const FooterSeparator = styled.div`
  width: calc(100% + 240px);
  height: 0.5px;
  background-color: #838a90;
  margin: 0 -120px 30px -120px;
  
  @media (max-width: 768px) {
    width: calc(100% + 60px);
    margin: 0 -30px 20px -30px;
  }
  
  @media (max-width: 480px) {
    width: calc(100% + 40px);
    margin: 0 -20px 15px -20px;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #838a90;
  margin: 0;
`;

export const PolicyLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0px auto;

  span {
    color: #838a90;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;

export const PolicyLink = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #838a90;
  text-decoration: none;
`;
