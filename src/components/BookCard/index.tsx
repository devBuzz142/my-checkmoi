import React, { MouseEventHandler, ReactNode } from 'react';
import { dummyNaverBook, NaverBookType } from '../../types/book';
import * as S from './style';

interface BookCardProps {
  book: NaverBookType;
  onClick?: MouseEventHandler<HTMLElement>;
}

const BookCard = ({ book = dummyNaverBook, onClick }: BookCardProps) => {
  return (
    <S.Container className="BookCard" onClick={onClick}>
      <S.ImageWrapper>
        <img src={book.image} alt={book.title} />
      </S.ImageWrapper>
      <S.InfoContainer>
        <S.InfoWrapper>{book.title}</S.InfoWrapper>
        <S.InfoWrapper>{book.author}</S.InfoWrapper>
      </S.InfoContainer>
    </S.Container>
  );
};

export default BookCard;
