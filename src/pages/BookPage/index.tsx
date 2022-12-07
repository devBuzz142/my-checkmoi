import React, { useEffect, useState } from 'react';
import useQueries from '../../hooks/useQueries';
import { getNaverBooks } from '../../apis/naver';
import PageTemplate from '../PageTemplate';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import { BookDetailCard, StudyCard } from '../../components';
import * as S from './style';

interface BookPageProps {}

const BookPage = ({ ...props }: BookPageProps) => {
  const { queries } = useQueries();
  const [bookIsbn, setBookIsbn] = useState(queries.isbn);
  const [book, setBook] = useState<NaverBookType>(dummyNaverBook);

  useEffect(() => {
    const getBookInfo = async () => {
      const res = await getNaverBooks({
        query: bookIsbn,
      });

      if (res?.items[0]) setBook(res.items[0]);
    };

    getBookInfo();
  }, [queries.isbn]);

  return (
    <PageTemplate pageName="BookPage">
      <BookDetailCard book={book} />
      <S.Divider />
      <S.StudyCardList>
        <StudyCard />
        <StudyCard />
        <StudyCard />
      </S.StudyCardList>
    </PageTemplate>
  );
};

export default BookPage;
