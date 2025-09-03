'use client';

import {
  Spinner,
  SpinnerContainer,
} from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export const LoadingSpinner = ({ 
  size = 40, 
  color = '#5152fb' 
}: LoadingSpinnerProps) => {
  return (
    <SpinnerContainer>
      <Spinner 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          borderTopColor: color 
        }} 
      />
    </SpinnerContainer>
  );
};