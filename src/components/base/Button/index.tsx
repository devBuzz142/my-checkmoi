import React, { ReactNode } from 'react';
import * as S from './style';

interface ButtonProps {
  children?: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disabled: boolean;
  color: string;
  href: string;
  justifyContent: 'start' | 'center' | 'end';
  alignItems: 'start' | 'center' | 'end';
  width: 'auto' | number;
  height: 'auto' | number;
  disableElevation: boolean;
}

const Button = ({
  children,
  variant = 'text',
  disabled = false,
  color = 'primary',
  href = '',
  justifyContent = 'center',
  alignItems = 'center',
  width = 'auto',
  height = 'auto',
  disableElevation = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      color={color}
      disabled={disabled}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      height={height}
      disableElevation={disableElevation}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
