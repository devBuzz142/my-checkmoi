import React, { useEffect, useState } from 'react';
import useQueries from '../../hooks/useQueries';
import { getNaverBooks } from '../../naver';
import PageTemplate from '../PageTemplate';
import { NaverBookType, dummyNaverBook } from '../../types/book';
import { BookDetailCard, Card } from '../../components';
import styled from '@emotion/styled';

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
      <div>BookStudies</div>
    </PageTemplate>
  );
};

export default BookPage;
