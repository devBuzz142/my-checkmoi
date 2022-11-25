import React from 'react';
import * as S from './style';
import { StudyDetailType, dummyStudyDetail } from '../../types/study';
import AVATAR_BUZZ from '../../assets/images/avatar_buzz.jpeg';
import ShareIcon from '@mui/icons-material/Share';

interface StudyDetailCardProps {}

const StudyDetailCard = ({ ...props }: StudyDetailCardProps) => {
  return (
    <S.Container className="StudyDetailCard">
      <S.LeftContainer>
        <S.ImageWrapper>
          <img src={dummyStudyDetail.study.thumbnail} alt={'study-thumbnail'} />
        </S.ImageWrapper>
        <S.StudyStatusWrapper>{dummyStudyDetail.status}</S.StudyStatusWrapper>
      </S.LeftContainer>
      <S.StudyInfoContainer>
        <h3>{dummyStudyDetail.study.name}</h3>
        <h4>{dummyStudyDetail.book.title}</h4>
        <p>{dummyStudyDetail.study.gatherStartDate}</p>
        <p>{dummyStudyDetail.study.gatherEndDate}</p>
        <p>{dummyStudyDetail.study.studyStartDate}</p>
        <p>{dummyStudyDetail.study.studyEndDate}</p>
      </S.StudyInfoContainer>
      <S.RightContainer>
        <S.Avatar>
          <img src={AVATAR_BUZZ} alt="avatar" />
        </S.Avatar>
        <S.MoreAvatar>+2</S.MoreAvatar>
        <S.IconWrapper>
          <ShareIcon />
        </S.IconWrapper>
      </S.RightContainer>
    </S.Container>
  );
};

export default StudyDetailCard;
