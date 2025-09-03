'use client';

import {
  InfoSectionContainer,
  InfoContent,
  InfoTitle,
  InfoDescription,
  InfoButton,
  LeftSideWrapper,
  BodySvgWrapper,
  HeadSvgWrapper,
  StarSvgWrapper,
} from './InfoSection.styled';
import {
  InfoSectionBodySvg,
  InfoSectionHeadSvg,
} from '@/ui/icons/InfoSectionSvgs';
import { StarSvg } from '@/ui/icons/StarSvg';

interface InfoSectionContentProps {
  backgroundColor?: string;
  svgColor?: string;
  textColor?: string;
  bodyColor?: string;
  starColor?: string;
}

export const InfoSectionContent = ({
  backgroundColor = '#ebf3ff',
  bodyColor = '#5152fb',
  starColor = '#5152fb',
  textColor = '#333333',
}: InfoSectionContentProps) => {
  return (
    <InfoSectionContainer $backgroundColor={backgroundColor}>
      <LeftSideWrapper>
        <BodySvgWrapper>
          <InfoSectionBodySvg color={bodyColor} />
        </BodySvgWrapper>
        <HeadSvgWrapper>
          <InfoSectionHeadSvg color={bodyColor} />
        </HeadSvgWrapper>
      </LeftSideWrapper>
      <StarSvgWrapper>
        <StarSvg color={starColor} />
      </StarSvgWrapper>
      <InfoContent>
        <InfoTitle $textColor={textColor}>Explore Native Teams today</InfoTitle>
        <InfoDescription $textColor={textColor}>
          Unlock the full potential of your teams and elevate your business or
          personal growth with Native Teams. Explore our platform today and
          start your journey towards success.
        </InfoDescription>
        <InfoButton>Learn more</InfoButton>
      </InfoContent>
    </InfoSectionContainer>
  );
};
