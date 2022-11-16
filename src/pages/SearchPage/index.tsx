import React, { useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';
import { useLocation } from 'react-router-dom';
import useQueries from '../../hooks/useQueries';
import { getNaverBooks } from '../../naver';

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
  const queries = useQueries();
  const [searchedBooks, setSearchedBooks] = useState<Array<NaverBook>>([]);

  console.log(queries);

  useEffect(() => {
    if (!queries.word) return;

    const getBooks = async () => {
      const res = await getNaverBooks({
        query: queries.word,
      });

      if (res?.items) setSearchedBooks(res.items);
    };

    getBooks();
  }, [queries]);

  return (
    <PageTemplate pageName="SearchPage">
      <div>search word : {queries.word}</div>
      <div>cardList</div>
      {searchedBooks.map((book) => (
        <div key={book.isbn}>{book.title}</div>
      ))}
      <div>pagination curpage={queries.page}</div>
    </PageTemplate>
  );
};

export default SearchPage;
