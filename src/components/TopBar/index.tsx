import React, { FormEvent, useRef } from 'react';
import * as S from './style';
import { AppBar, Toolbar } from '../index';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  const serarchInputRef = useRef<null | HTMLInputElement>(null);

  const handleSearchInputSumbit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <div>logo</div>
        <S.SearchInputContainer>
          <div>searchIcon</div>
          <form onSubmit={handleSearchInputSumbit}>
            <input type="text" ref={serarchInputRef} />
          </form>
        </S.SearchInputContainer>
        <S.TempButtonContainer>
          <button type="button">LogIn</button>
        </S.TempButtonContainer>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
