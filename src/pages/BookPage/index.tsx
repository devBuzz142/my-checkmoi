import React from 'react';
import useQueries from '../../hooks/useQueries';
import PageTemplate from '../PageTemplate';

interface BookPageProps {}

const BookPage = ({ ...props }: BookPageProps) => {
  const { queries } = useQueries();
  console.log(queries);

  return (
    <PageTemplate pageName="BookPage">
      <div></div>
      <div>BookDetailInfo</div>
      <div>BookStudies</div>
    </PageTemplate>
  );
};

export default BookPage;
