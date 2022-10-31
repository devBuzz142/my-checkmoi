import React, { FormEvent, MouseEvent, useRef } from 'react';
import * as S from './style';
import { AppBar, Toolbar } from '../index';
import LOGO_CHECKMOI from '../../assets/images/logo_checkmoi.png';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  const serarchInputRef = useRef<null | HTMLInputElement>(null);

  const handleLogoTitleClick = (e: MouseEvent<HTMLDivElement>) => {
    //TODO - 라우팅 구현 예정
  };

  const handleSearchInputSumbit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    //TODO - 검색 로직 구현 예정
  };

  const handleLoginClick = (e: MouseEvent<HTMLButtonElement>) => {
    //TODO - 로그인 구현 예정
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <S.LogoWrapper onClick={handleLogoTitleClick}>
          <img
            src={LOGO_CHECKMOI}
            alt="logo_checkmoi.png"
            width={40}
            height={40}
          />
        </S.LogoWrapper>
        <S.TitleWrapper onClick={handleLogoTitleClick}>
          <S.Title>책모이</S.Title>
        </S.TitleWrapper>
        <S.SearchInputContainer>
          <div>searchIcon</div>
          <form onSubmit={handleSearchInputSumbit}>
            <input type="text" ref={serarchInputRef} />
          </form>
        </S.SearchInputContainer>
        <S.Button type="button">LogIn</S.Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
