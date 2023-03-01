import React from 'react';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Modal({ children, isOpen, onClose }) {
  return (
    <div style={{ position: 'fixed', zIndex: '999' }}>
      {!isOpen
        ? null
        : (
          <div>
            <ModalOverlay />
            <Wrapper data-testid="modal">
              <ModalInner>
                <CloseButton>
                  <IoIosCloseCircleOutline className="modal-close" onClick={onClose} />
                </CloseButton>
                {children}
              </ModalInner>
            </Wrapper>
          </div>
        )}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1010;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 12px;
  background-color: #FFFBEA;
  margin-top: 64px;
  margin-bottom: 64px;
  z-index: 1010;
  max-width: 1000px;
  color: #3D405B;
  padding: 24px;
`;

const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 20px;
  border: 0;
  font-size: 1.3rem;
  background: transparent;
`;
