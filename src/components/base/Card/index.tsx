import React, { MouseEventHandler, ReactNode } from 'react';
import * as S from './style';

interface CardProps {
  children?: ReactNode;
  className?: string;
  sx?: {
    padding: string;
  };
  onClick?: MouseEventHandler<HTMLElement>;
}

const Card = ({
  children,
  className = 'Card',
  sx = { padding: '16px' },
  onClick,
}: CardProps) => {
  return (
    <S.Container className={className} sx={sx} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default Card;
