'use client';

import { useState } from 'react';
import {
  NewsletterSectionContainer,
  NewsletterContent,
  NewsletterTitle,
  NewsletterInputContainer,
  NewsletterInput,
  NewsletterButton,
  NewsletterDescription,
  StarSvgWrapper,
  NewsLetterTitleColor,
  NewsLetterContainer,
} from './NewsletterSection.styled';
import { InfoSectionStarSvg } from '@/ui/icons/InfoSectionSvgs';
import { NewsLetterSuccessModal } from '@/ui/modal/NewsLetterModal';

export const NewsletterSectionContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsModalOpen(true);
    e.currentTarget.reset();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <NewsletterSectionContainer>
      <StarSvgWrapper>
        <InfoSectionStarSvg width="122" height="122" />
      </StarSvgWrapper>
      <NewsletterContent>
        <NewsletterTitle>
          Never miss out our{' '}
          <NewsLetterTitleColor>latest news</NewsLetterTitleColor>
        </NewsletterTitle>
        <form onSubmit={handleSubmit}>
          <NewsletterInputContainer>
            <NewsletterInput
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <NewsletterButton type="submit">Sign Up</NewsletterButton>
          </NewsletterInputContainer>
        </form>
        <NewsLetterContainer>
          <NewsletterDescription>
            By submitting this form, you will receive emails from Native Teams.
            For details, view our Privacy Policy.
          </NewsletterDescription>
        </NewsLetterContainer>
      </NewsletterContent>

      <NewsLetterSuccessModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Thank you for signing up!"
        description="Your email has been added to our list. Stay tuned for more news, and be the first to hear from us."
      />
    </NewsletterSectionContainer>
  );
};
