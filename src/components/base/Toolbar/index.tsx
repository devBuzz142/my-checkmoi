import React, { ReactNode } from 'react';
import * as S from './style';

interface ToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: ToolbarProps) => {
  return <S.Container className="Toolbar">{children}</S.Container>;
};

export default Toolbar;
