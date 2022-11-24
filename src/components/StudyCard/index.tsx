import React from 'react';
import * as S from './style';
import { StudyType, dummyStudy } from '../../types/study';
import { useNavigate } from 'react-router-dom';

interface StudyCardProps {}

const StudyCard = ({ ...props }: StudyCardProps) => {
  const navigate = useNavigate();

  return (
    <S.Container
      className="StudyCard"
      onClick={() => navigate(`/study?id=${dummyStudy.id}`)}
    >
      <S.ImageWrapper>
        <img src={dummyStudy.thumbnail} alt={dummyStudy.name} />
      </S.ImageWrapper>
      <S.StudyInfoContainer>
        <h4>{dummyStudy.name}</h4>
        <p>모집 인원 : {dummyStudy.maxParticipant}</p>
        <p>
          모집 기간 : {dummyStudy.gatherStartDate} - {dummyStudy.gatherEndDate}
        </p>
        <p>
          모집 기간 : {dummyStudy.studyStartDate} - {dummyStudy.studyEndDate}
        </p>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyCard;
