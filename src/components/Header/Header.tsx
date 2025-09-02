'use client';

import {
  HeaderContainer,
  HeaderContent,
  LogoSection,
  Navigation,
  NavLinks,
  NavItem,
  HeaderButton,
} from './Header.styled';
import { useRouter } from 'next/navigation';
import { NativeTeamsLogoWithText } from '@/ui/icons/NativeTeamsLogoSvg';

export const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoSection onClick={() => router.push('/')}>
          <NativeTeamsLogoWithText color="#000000" />
        </LogoSection>
        <Navigation>
          <NavLinks>
            <NavItem>Links Group 1 v</NavItem>
            <NavItem>Links Group 2 v</NavItem>
          </NavLinks>
        </Navigation>
        <HeaderButton>Get Started</HeaderButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
