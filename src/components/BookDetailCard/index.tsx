import React from 'react';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import * as S from './style';
import { Button } from '../index';

interface BookDetailCardProps {
  book: NaverBookType;
}

const BookDetailCard = ({ book = dummyNaverBook }: BookDetailCardProps) => {
  return (
    <S.Container className="BookDetailCard">
      <S.LeftContainer>
        <S.ImageWrapper>
          <img src={book.image} alt={book.title} />
        </S.ImageWrapper>
        <Button variant="contained" color="primary" fullWidth>
          스터디 개설하기
        </Button>
      </S.LeftContainer>
      <S.BookInfoContainer>
        <div>{book.title}</div>
        <div>
          {book.author} | {book.publisher}
        </div>
        <div>출판일자 : {book.pubdate}</div>
        <div>책소개</div>
        <div>{book.description}</div>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BookDetailCard;
