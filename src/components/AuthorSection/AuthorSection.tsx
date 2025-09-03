'use client';

import {
  AuthorSectionWrapper,
  AuthorImageContainer,
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
      <AuthorImageContainer>
        {authorImage ? (
          <AuthorImage
            src={authorImage}
            alt={authorName}
            fill
            sizes="120px"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '12px',
            }}
          >
            No Image
          </div>
        )}
      </AuthorImageContainer>
      <AuthorDescriptionWrapper>
        <AuthorName>{authorName}</AuthorName>
        <AuthorType>AUTHOR</AuthorType>
        <AuthorDescription>{authorDescription}</AuthorDescription>
      </AuthorDescriptionWrapper>
    </AuthorSectionWrapper>
  );
};
