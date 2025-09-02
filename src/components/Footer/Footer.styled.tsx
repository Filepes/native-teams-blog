import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 670px;
  background-color: #1f2068;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 80px 120px 40px 120px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  margin-bottom: 60px;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
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
`;

export const LinksSection = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 20px;
`;

export const LinkColumn = styled.div`
  width: 146px;
  height: 274px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
`;

export const PolicyLink = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #838a90;
  text-decoration: none;
`;
