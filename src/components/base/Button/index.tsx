import React, { ReactNode } from 'react';
import * as S from './style';

export interface ButtonProps {
  children?: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disabled: boolean;
  color: 'primary' | 'secondary' | string;
  href: string;
  disableElevation: boolean;
  sx: {
    flexDirection: 'row' | 'column';
    justifyContent: 'start' | 'center' | 'end';
    alignItems: 'start' | 'center' | 'end';
    width: 'auto' | number;
    height: 'auto' | number;
  };
}

const Button = ({
  children,
  variant = 'text',
  disabled = false,
  color = 'primary',
  href = '',
  disableElevation = false,
  sx = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
  },
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      sx={sx}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
