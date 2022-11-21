import React, { ReactNode } from 'react';
import * as S from './style';

interface BookCardProps {
  children?: ReactNode;
  bookTitle: string;
  bookImage: string;
}

const BookCard = ({
  children,
  bookTitle = 'untitled',
  bookImage = '',
}: BookCardProps) => {
  return (
    <S.Container className="BookCard">
      <img src={bookImage} alt={bookTitle} />
      <div>{bookTitle}</div>
    </S.Container>
  );
};

export default BookCard;
