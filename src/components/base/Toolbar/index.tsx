import React, { ReactNode } from 'react';
import * as S from './style';

interface ToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: ToolbarProps) => {
  return (
    <S.Container>
      {children}
      <div>toolbar</div>
      <div>toolbar</div>
    </S.Container>
  );
};

export default Toolbar;
