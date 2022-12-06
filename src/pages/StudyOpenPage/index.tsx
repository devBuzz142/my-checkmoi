import React from 'react';
import PageTemplate from '../PageTemplate';
import * as S from './style';
import { Button, TextField } from '../../components';

interface StudyOpenPageProps {}

const StudyOpenPage = ({ ...props }: StudyOpenPageProps) => {
  return (
    <PageTemplate contentCenter>
      <S.Container>
        <S.UpperContainer>
          <S.LeftContainer>
            <TextField label="책 제목" variant="filled" fullWidth />
            <TextField label="스터디 이름" variant="standard" fullWidth />
            <TextField label="스터디 인원" variant="standard" fullWidth />
            <TextField
              label="스터디원 모집 시작"
              variant="standard"
              fullWidth
            />
            <TextField
              label="스터디원 모집 마감"
              variant="standard"
              fullWidth
            />
            <TextField label="스터디 진행 시작" variant="standard" fullWidth />
            <TextField label="스터디 진행 종료" variant="standard" fullWidth />
            <TextField label="스터디 모집 상태" variant="standard" fullWidth />
          </S.LeftContainer>
          <S.RightContainer>
            <input type={'image'} alt="스터디 썸네일 입력" />
          </S.RightContainer>
        </S.UpperContainer>
        <S.UnderContainer>
          {
            // textarea 필요
          }
          <TextField label="스터디 내용" variant="outlined" fullWidth />
          <Button variant="outlined" fullWidth>
            스터디 개설하기
          </Button>
          <Button variant="outlined" fullWidth>
            뒤로 가기
          </Button>
        </S.UnderContainer>
      </S.Container>
    </PageTemplate>
  );
};

export default StudyOpenPage;
