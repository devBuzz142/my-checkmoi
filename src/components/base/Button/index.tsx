import React, { ReactNode } from 'react';
import * as S from './style';

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  color?: 'primary' | 'secondary' | string;
  href?: string;
  disableElevation?: boolean;
  fullWidth?: boolean;
  sx?: {
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
  fullWidth = false,
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
      fullWidth={fullWidth}
      sx={sx}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
