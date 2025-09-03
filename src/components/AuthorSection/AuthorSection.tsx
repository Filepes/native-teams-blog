'use client';

import {
  AuthorSectionWrapper,
  AuthorImage,
  AuthorName,
  AuthorDescription,
  AuthorType,
  AuthorDescriptionWrapper,
} from './AuthorSection.styled';

interface AuthorSectionProps {
  authorName?: string;
  authorImage?: string;
  authorDescription?: string;
}

export const AuthorSection = ({
  authorName = 'Autho',
  authorImage,
  authorDescription = 'Author description',
}: AuthorSectionProps) => {
  return (
    <AuthorSectionWrapper>
      {authorImage ? (
        <AuthorImage
          src={authorImage}
          alt={authorName}
          width={120}
          height={120}
        />
      ) : (
        <p>No image</p>
      )}
      <AuthorDescriptionWrapper>
        <AuthorName>{authorName}</AuthorName>
        <AuthorType>AUTHOR</AuthorType>
        <AuthorDescription>{authorDescription}</AuthorDescription>
      </AuthorDescriptionWrapper>
    </AuthorSectionWrapper>
  );
};
