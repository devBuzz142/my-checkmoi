import React, { MouseEventHandler, ReactNode } from 'react';
import * as S from './style';

interface BookCardProps {
  bookTitle: string;
  bookImage: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const BookCard = ({
  bookTitle = 'untitled',
  bookImage = '',
  onClick,
}: BookCardProps) => {
  return (
    <S.Container className="BookCard" onClick={onClick}>
      <S.ImageWrapper>
        <img src={bookImage} alt={bookTitle} />
      </S.ImageWrapper>
      <S.TitleWrapper className="BookCardTitleWrapper">
        {bookTitle}
      </S.TitleWrapper>
    </S.Container>
  );
};

export default BookCard;
