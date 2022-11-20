import React, { ReactNode } from 'react';
import * as S from './style';

interface CardProps {
  children?: ReactNode;
  sx?: {};
}

const Card = ({ children, sx }: CardProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Card;
