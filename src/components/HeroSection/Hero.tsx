'use client';

import { HeartIconSvg } from '@/ui/icons/HeartIconSvg';
import {
  HeroContainer,
  SmallTitle,
  BigTitle,
  HeartIconWrapper,
  SmallStarIcon,
  BigStarIcon,
} from './HeroSection.styled';
import { StarSvg } from '@/ui/icons/StarSvg';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeartIconWrapper>
        <HeartIconSvg />
      </HeartIconWrapper>
      <SmallStarIcon>
        <StarSvg width="30.5" height="30.5" />
      </SmallStarIcon>
      <BigStarIcon>
        <StarSvg width="50" height="50" />
      </BigStarIcon>
      <SmallTitle>Native Teams Blog</SmallTitle>
      <BigTitle>
        Resources, Tips and Tricks About the Modern Way of Working
      </BigTitle>
    </HeroContainer>
  );
};
