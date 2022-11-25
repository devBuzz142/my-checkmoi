import React, { useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';
import { StudyDetailCard } from '../../components';
import useQueries from '../../hooks/useQueries';
import { StudyDetailType } from '../../types/study';

interface StudyPageProps {}

const StudyPage = ({ ...props }: StudyPageProps) => {
  const { queries } = useQueries();
  const [studyId, setStudyId] = useState(queries.id);
  const [studyDetail, setStudyDetail] = useState<StudyDetailType>();

  console.log(queries);

  useEffect(() => {
    //TODO - get study from server by api
    // const getStudyDetail = async () => {};
    // getStudyDetail();
  }, [queries.id]);

  return (
    <PageTemplate pageName="StudyPage">
      <StudyDetailCard studyDetail={studyDetail} />
    </PageTemplate>
  );
};

export default StudyPage;
