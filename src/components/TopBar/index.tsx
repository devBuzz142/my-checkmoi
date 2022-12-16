import React, { FormEvent, MouseEvent, useRef } from 'react';
import * as S from './style';
import { AppBar, Toolbar, Button, InputBase, LoginButton } from '../index';
import LOGO_CHECKMOI from '../../assets/images/logo_checkmoi.png';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  const serarchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleLogoTitleClick = (e: MouseEvent<HTMLDivElement>) => {
    navigate('/');
  };

  const handleSearchInputSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO - pattern 검사 필요

    navigate(`/search?word=${serarchInputRef.current?.value}&page=1`);
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
          <SearchIcon sx={{ fontSize: 20 }} />
          <S.Form onSubmit={handleSearchInputSumbit}>
            <InputBase type={'text'} inputRef={serarchInputRef} fullWidth />
          </S.Form>
        </S.SearchInputContainer>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
