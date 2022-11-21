import React, { ReactNode } from 'react';
import * as S from './style';

interface CardProps {
  children?: ReactNode;
  className?: string;
  sx?: {
    padding: string;
  };
}

const Card = ({
  children,
  className = 'Card',
  sx = { padding: '16px' },
}: CardProps) => {
  return (
    <S.Container className={className} sx={sx}>
      {children}
    </S.Container>
  );
};

export default Card;
