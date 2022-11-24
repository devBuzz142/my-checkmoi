import React, { useEffect, useState } from 'react';
import useQueries from '../../hooks/useQueries';
import { getNaverBooks } from '../../naver';
import PageTemplate from '../PageTemplate';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import { BookDetailCard, StudyCard } from '../../components';
import * as S from './style';

interface BookPageProps {}

const BookPage = ({ ...props }: BookPageProps) => {
  const { queries } = useQueries();
  const [bookId, setBookId] = useState(queries.id);
  const [book, setBook] = useState<NaverBookType>(dummyNaverBook);

  useEffect(() => {
    const getBookInfo = async () => {
      const res = await getNaverBooks({
        query: bookId,
      });

      if (res?.items[0]) setBook(res.items[0]);
    };

    getBookInfo();
  }, [queries.id]);

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
