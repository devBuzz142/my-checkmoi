import React, {
  HtmlHTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './style';

export const useModal = (defaultOn = false) => {
  const [isModalOn, setIsModalOn] = useState(defaultOn);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setIsModalOn(!isModalOn);
  const openModal = () => setIsModalOn(true);
  const closeModal = () => setIsModalOn(false);

  useEffect(() => {
    const handleBackgroundClick = () => {
      if (!modalRef.current) return;

      modalRef.current.addEventListener('click', closeModal);
    };

    handleBackgroundClick();
    return handleBackgroundClick;
  }, [modalRef.current]);

  return { isModalOn, toggleModal, openModal, closeModal, modalRef };
};

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  isModalOn?: boolean;
  modalRef?: RefObject<HTMLDivElement>;
  center?: boolean;
  background?: boolean;
}

const Modal = ({ ...props }: ModalProps) => {
  const {
    children,
    isModalOn = false,
    modalRef,
    center = true,
    background = true,
  } = props;

  return (
    <S.Background
      className="modal-background"
      isModalOn={isModalOn}
      center={center}
      background={background}
      ref={modalRef}
    >
      <S.ContentContainer className="modal-content">
        {children}
      </S.ContentContainer>
    </S.Background>
  );
};

export default Modal;
