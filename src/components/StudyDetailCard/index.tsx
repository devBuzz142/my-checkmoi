import React from 'react';
import * as S from './style';
import { StudyDetailType, dummyStudyDetail } from '../../types/study';
import AVATAR_BUZZ from '../../assets/images/avatar_buzz.jpeg';
import ShareIcon from '@mui/icons-material/Share';

interface StudyDetailCardProps {
  studyDetail?: StudyDetailType;
}

const StudyDetailCard = ({
  studyDetail = dummyStudyDetail,
}: StudyDetailCardProps) => {
  console.log(studyDetail);
  return (
    <S.Container className="StudyDetailCard">
      <S.LeftContainer>
        <S.ImageWrapper>
          <img src={studyDetail.study.thumbnail} alt={'study-thumbnail'} />
        </S.ImageWrapper>
        <S.StudyStatusWrapper>{studyDetail.status}</S.StudyStatusWrapper>
      </S.LeftContainer>
      <S.StudyInfoContainer>
        <h3>{studyDetail.study.name}</h3>
        <h4>{studyDetail.book.title}</h4>
        <p>{studyDetail.study.gatherStartDate}</p>
        <p>{studyDetail.study.gatherEndDate}</p>
        <p>{studyDetail.study.studyStartDate}</p>
        <p>{studyDetail.study.studyEndDate}</p>
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
