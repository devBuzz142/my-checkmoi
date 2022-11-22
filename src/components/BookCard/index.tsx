import React, { ReactNode } from 'react';
import * as S from './style';

interface BookCardProps {
  bookTitle: string;
  bookImage: string;
}

const BookCard = ({
  bookTitle = 'untitled',
  bookImage = '',
}: BookCardProps) => {
  return (
    <S.Container className="BookCard">
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
