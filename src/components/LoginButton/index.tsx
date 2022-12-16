import React, { useState } from 'react';
import Button from '../base/Button';
import Modal, { useModal } from '../base/Modal';

interface LoginButtonProps {}

const LoginButton = ({ ...props }: LoginButtonProps) => {
  const { isModalOn, toggleModal, openModal, closeModal, modalRef } =
    useModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Login
      </Button>
      <Modal isModalOn={isModalOn} modalRef={modalRef}>
        카카오 로그인
        <Button onClick={closeModal}>로그인</Button>
      </Modal>
    </>
  );
};

export default LoginButton;
