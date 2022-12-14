import React, {
  FormEvent,
  MouseEvent,
  RefObject,
  useRef,
  useState,
} from 'react';
import * as S from './style';
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  LoginButton,
  Menu,
} from '../index';
import { AVATAR_BUZZ, LOGO_CHECKMOI } from '../../assets';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { MenuItem, useMenu } from '../base/Menu';
import { dummyUser, UserType } from '../../types/user';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  const serarchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  //TODO - 추후 user관련 타입, 더미데이터, context 추가 예정
  const [tempUser, setTempUser] = useState<UserType | undefined>();

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
    setTempUser(dummyUser);
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
        {tempUser ? (
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
              <MenuItem
                onClick={() => {
                  setTempUser(undefined);
                }}
              >
                LogOut
              </MenuItem>
            </Menu>
          </>
        ) : (
          <LoginButton tempOnClick={handleLoginClick} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
