import React from 'react';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import * as S from './style';
import { Button } from '../index';

interface BookDetailCardProps {
  book: NaverBookType;
}

const BookDetailCard = ({ book = dummyNaverBook }: BookDetailCardProps) => {
  console.log(book);
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
        <div>작가 : {book.author}</div>
        <div>출판사 : {book.publisher}</div>
        <div>출판일자 : {book.pubdate}</div>
        <div>책소개</div>
        <S.BookDescriptionWrapper>
          {book.description || '-'}
        </S.BookDescriptionWrapper>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BookDetailCard;
