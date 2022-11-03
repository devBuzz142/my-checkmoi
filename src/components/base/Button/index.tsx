import React, { ReactNode } from 'react';
import * as S from './style';

interface ButtonProps {
  children?: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disabled: boolean;
  color?: string;
  href: string;
  rowPos?: string;
  colPos?: string;
}

const Button = ({
  children,
  variant = 'text',
  disabled = false,
  color = 'primary',
  href = '',
  rowPos = 'center',
  colPos = 'center',
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      color={color}
      disabled={disabled}
      rowPos={rowPos}
      colPos={colPos}
    >
      {children}
    </S.Button>
  );
};

export default Button;
