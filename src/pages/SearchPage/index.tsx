import React, { useEffect, useRef, useState } from 'react';
import PageTemplate from '../PageTemplate';
import { useLocation, useNavigate } from 'react-router-dom';
import useQueries from '../../hooks/useQueries';
import { getNaverBooks } from '../../naver';
import * as S from './style';
import { BookCard } from '../../components';

interface SearchPageProps {}

interface NaverBook {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

const SearchPage = ({ ...props }: SearchPageProps) => {
  const navigate = useNavigate();
  const { queries } = useQueries();

  const [searchedBooks, setSearchedBooks] = useState<Array<NaverBook>>([]);
  const [curPage, setCurPage] = useState(Number(queries.page));
  const total = useRef<number>(0);

  const DISPLAY_UNIT = 8;

  useEffect(() => {
    if (!queries.page) return;

    setCurPage(Number(queries.page));
  }, [queries.page]);

  useEffect(() => {
    if (!queries.word) return;

    const getBooks = async () => {
      const res = await getNaverBooks({
        query: queries.word,
        display: DISPLAY_UNIT,
        start: 1 + (curPage - 1) * DISPLAY_UNIT,
      });

      if (res?.items) setSearchedBooks(res.items);
      if (!total.current) total.current = res?.total;
    };

    getBooks();
  }, [queries.word, curPage]);

  return (
    <PageTemplate pageName="SearchPage">
      <S.SearchWordWrapper>search word : {queries.word}</S.SearchWordWrapper>
      <S.BookCardContainer className="BookCardContainer">
        {searchedBooks.map((book) => (
          <BookCard
            key={book.isbn}
            bookImage={book.image}
            bookTitle={book.title}
            onClick={() => {
              navigate(`/book?title=${book.title}`);
            }}
          />
        ))}
      </S.BookCardContainer>
      <S.PaginationContainer>
        <S.PaginationButton
          disabled={curPage === 1}
          onClick={() =>
            navigate(
              `/search?word=${queries.word}&page=${Number(queries.page) - 1}`,
            )
          }
        >
          {'<'}
        </S.PaginationButton>
        {Array.from(
          Array(Math.ceil(total.current / DISPLAY_UNIT)),
          (_, i) => i + 1,
        ).map((pageNum) => (
          <S.PaginationButton
            curPage={curPage === pageNum}
            key={pageNum}
            onClick={() =>
              navigate(`/search?word=${queries.word}&page=${pageNum}`)
            }
          >
            {pageNum}
          </S.PaginationButton>
        ))}
        <S.PaginationButton
          disabled={curPage === Math.ceil(total.current / DISPLAY_UNIT)}
          onClick={() =>
            navigate(
              `/search?word=${queries.word}&page=${Number(queries.page) + 1}`,
            )
          }
        >
          {'>'}
        </S.PaginationButton>
      </S.PaginationContainer>
    </PageTemplate>
  );
};

export default SearchPage;
