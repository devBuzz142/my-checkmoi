import React, { FormEvent, MouseEvent, RefObject, useRef } from 'react';
import * as S from './style';
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  LoginButton,
  Menu,
} from '../index';
import LOGO_CHECKMOI from '../../assets/images/logo_checkmoi.png';
import AVATAR_BUZZ from '../../assets/images/avatar_buzz.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { MenuItem, useMenu } from '../base/Menu';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  const serarchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  //TODO - 추후 user관련 타입, 더미데이터, context 추가 예정
  const curUser = true;

  const { isMenuOn, openMenu, closeMenu, toggleMenu, backRef, parentRef } =
    useMenu();

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

  const handleAvatarClick = () => {
    toggleMenu();
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
        {curUser ? (
          <>
            <S.TempUserAvatar
              src={AVATAR_BUZZ}
              alt="user-profile-avatar"
              onClick={handleAvatarClick}
              ref={parentRef as RefObject<HTMLImageElement>}
            />
            <Menu isMenuOn={isMenuOn} backRef={backRef} parentRef={parentRef}>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Study 1</MenuItem>
              <MenuItem>Study 2</MenuItem>
              <MenuItem>Study 3</MenuItem>
              <MenuItem>Study 4</MenuItem>
            </Menu>
          </>
        ) : (
          <LoginButton />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
