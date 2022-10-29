import React, { ReactNode } from 'react';
import * as S from './style';

// type AppBarColor = {
//   default: string;
//   inherit: string;
//   primary: string;
//   secondary: string;
//   transparent: string;
// };

// type AppBarPosition = {
//   absolute: string;
//   fixed: string;
//   relative: string;
//   static: string;
//   sticky: string;
// };

interface AppBarProps {
  children?: ReactNode;
  color: 'inherit' | 'primary' | 'secondary';
  position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  onTop?: boolean;
}

const AppBar = ({
  children,
  color,
  position = 'fixed',
  onTop = true,
}: AppBarProps) => {
  return (
    <S.Container color={color} position={position} onTop={onTop}>
      {children}
    </S.Container>
  );
};

export default AppBar;
