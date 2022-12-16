import React, {
  HtmlHTMLAttributes,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from 'react';
import * as S from './style';

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  isModalOn?: boolean;
  center?: boolean;
  background?: boolean;
}

const Modal = ({ ...props }: ModalProps) => {
  const {
    children,
    isModalOn = false,
    center = true,
    background = true,
  } = props;

  return (
    <S.Background
      className="modal-background"
      isModalOn={isModalOn}
      center={center}
      background={background}
    >
      <S.ContentContainer className="modal-content">
        {children}
      </S.ContentContainer>
    </S.Background>
  );
};

export default Modal;
