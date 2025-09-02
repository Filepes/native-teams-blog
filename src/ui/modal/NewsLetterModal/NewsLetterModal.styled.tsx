import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  gap: 20px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 355px;
  height: 393px;
  padding: 40px 40px;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666666;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333333;
  }
`;

export const ModalIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0%;
  text-align: center;
  color: #000000;
  margin: 0;
`;

export const ModalDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.52;
  letter-spacing: 0%;
  text-align: center;
  color: #000000;
  margin: 0;
  max-width: 280px;
`;
