import React from 'react';
import * as S from './style';
import { StudyType, dummyStudy } from '../../types/study';

interface StudyCardProps {}

const StudyCard = ({ ...props }: StudyCardProps) => {
  return (
    <S.Container className="StudyCard">
      <S.ImageWrapper>
        <img src={dummyStudy.thumbnail} alt={dummyStudy.name} />
      </S.ImageWrapper>
      <S.StudyInfoContainer>
        <p>{dummyStudy.name}</p>
        <p>{dummyStudy.description}</p>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyCard;
