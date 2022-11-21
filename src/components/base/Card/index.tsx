import React, { ReactNode } from 'react';
import * as S from './style';

interface CardProps {
  children?: ReactNode;
  sx?: {
    padding: string;
  };
}

const Card = ({ children, sx = { padding: '16px' } }: CardProps) => {
  return <S.Container sx={sx}>{children}</S.Container>;
};

export default Card;
