import React, { useState } from 'react';
import Button from '../base/Button';
import Modal, { useModal } from '../base/Modal';
import * as S from './style';
import { KAKAO_LOGIN_BUTTON, NAVER_LOGIN_BUTTON } from '../../assets';

interface LoginButtonProps {}

const LoginButton = ({ ...props }: LoginButtonProps) => {
  const { isModalOn, toggleModal, closeModal, modalRef } = useModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Login
      </Button>
      <Modal isModalOn={isModalOn} modalRef={modalRef}>
        <S.Container>
          로그인 및 회원가입
          <br />
          <br />
          <br />
          <S.LoginButton onClick={closeModal} disableElevation>
            <img
              src={KAKAO_LOGIN_BUTTON}
              alt="kakao-login-button"
              width={'160px'}
            />
          </S.LoginButton>
          <br />
          <S.LoginButton onClick={closeModal} disableElevation>
            <img
              src={NAVER_LOGIN_BUTTON}
              alt="naver-login-button"
              width={'160px'}
            />
          </S.LoginButton>
        </S.Container>
      </Modal>
    </>
  );
};

export default LoginButton;
