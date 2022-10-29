import React from 'react';
import * as S from './style';
import { AppBar, Toolbar } from '../index';

interface TopBarProps {}

const TopBar = ({ ...props }: TopBarProps) => {
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>toolbar</Toolbar>
    </AppBar>
  );
};

export default TopBar;
