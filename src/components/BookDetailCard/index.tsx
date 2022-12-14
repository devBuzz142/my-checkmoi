import React, { MouseEvent } from 'react';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import * as S from './style';
import { Button } from '../index';
import { useNavigate } from 'react-router-dom';

interface BookDetailCardProps {
  book: NaverBookType;
}

const BookDetailCard = ({ book = dummyNaverBook }: BookDetailCardProps) => {
  const navigate = useNavigate();

  const handleStudyOpenClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(`/open?isbn=${book.isbn}`);
  };

  return (
    <S.Container className="BookDetailCard">
      <S.LeftContainer>
        <S.ImageWrapper>
          <img src={book.image} alt={book.title} />
        </S.ImageWrapper>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleStudyOpenClick}
        >
          스터디 개설하기
        </Button>
      </S.LeftContainer>
      <S.BookInfoContainer>
        <h3>{book.title}</h3>
        <p>작가 : {book.author}</p>
        <p>출판사 : {book.publisher}</p>
        <p>출판일자 : {book.pubdate}</p>
        <p>책소개</p>
        <S.BookDescriptionWrapper>
          <p>{book.description || '-'}</p>
        </S.BookDescriptionWrapper>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BookDetailCard;
