import React from 'react';
import * as S from './style';

interface CardProps {}

const Card = ({ ...props }: CardProps) => {
  return <S.Container>hello card</S.Container>;
};

export default Card;
