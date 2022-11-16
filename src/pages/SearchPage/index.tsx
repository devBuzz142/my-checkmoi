import React from 'react';
import PageTemplate from '../PageTemplate';
import { useLocation } from 'react-router-dom';
import useQueries from '../../hooks/useQueries';

interface SearchPageProps {}

const SearchPage = ({ ...props }: SearchPageProps) => {
  const queries = useQueries();

  return (
    <PageTemplate pageName="SearchPage">
      <div>search word : {queries.word}</div>
      <div>cardList</div>
      <div>pagination curpage={queries.page}</div>
    </PageTemplate>
  );
};

export default SearchPage;
