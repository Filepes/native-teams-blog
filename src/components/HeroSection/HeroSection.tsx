'use client';

import { HeroSectionWrapper } from './HeroSection.styled';

interface HeroSectionProps {
  children: React.ReactNode;
}

export const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <HeroSectionWrapper>
      {children}
    </HeroSectionWrapper>
  );
};