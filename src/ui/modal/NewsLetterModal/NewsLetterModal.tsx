import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalIconWrapper,
  ModalTitle,
  ModalDescription,
} from './NewsLetterModal.styled';
import { NativeTeamsLogo } from '@/ui/icons/NativeTeamsLogoSvg';

interface NewsLetterSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const NewsLetterSuccessModal = ({
  isOpen,
  onClose,
  title = 'title',
  description = 'desciprion',
}: NewsLetterSuccessModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="close modal">
          X
        </CloseButton>
        <ModalIconWrapper>
          <NativeTeamsLogo />
        </ModalIconWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
      </ModalContainer>
    </ModalOverlay>
  );
};
