import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 89px;
  padding: 24px 120px;
  gap: 8px;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  width: 158px;
  height: 29px;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  width: 276px;
  height: 19px;
  gap: 26px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  color: #1e1e1e;
  cursor: pointer;

  &:hover {
    color: #5152fb;
  }
`;

export const HeaderButton = styled.button`
  width: 125px;
  height: 41px;
  border-radius: 50px;
  background-color: #5152fb;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #4041e8;
  }
`;
