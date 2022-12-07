import React, { ChangeEvent, useState } from 'react';
import PageTemplate from '../PageTemplate';
import * as S from './style';
import { Button, TextField } from '../../components';

interface StudyOpenPageProps {}

const StudyOpenPage = ({ ...props }: StudyOpenPageProps) => {
  const [imageUrl, setImageUrl] = useState<string>(
    'https://via.placeholder.com/300.png',
  );

  const handleFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];

    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
    if (file.size > MAX_FILE_SIZE) {
      e.target.value = '';

      console.error('업로드 할 수 있는 크기는 최대 1MB입니다.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
  };

  return (
    <PageTemplate contentCenter>
      <S.Container>
        <S.UpperContainer>
          <S.LeftContainer>
            <TextField label="책 제목" variant="filled" disabled fullWidth />
            <TextField
              label="스터디 이름"
              variant="standard"
              type={'text'}
              fullWidth
            />
            <TextField
              label="스터디 인원"
              variant="standard"
              type={'number'}
              fullWidth
            />
            <TextField
              label="스터디원 모집 시작"
              variant="standard"
              type={'date'}
              fullWidth
            />
            <TextField
              label="스터디원 모집 마감"
              variant="standard"
              type={'date'}
              fullWidth
            />
            <TextField
              label="스터디 진행 시작"
              variant="standard"
              type={'date'}
              fullWidth
            />
            <TextField
              label="스터디 진행 종료"
              variant="standard"
              type={'date'}
              fullWidth
            />
            <TextField label="스터디 모집 상태" variant="standard" fullWidth />
          </S.LeftContainer>
          <S.RightContainer>
            <form>
              <S.ThumbnailTypo>스터디 썸네일</S.ThumbnailTypo>
              <br />
              <br />
              <S.ThumbnailBoxLabel htmlFor="study-open-file-input">
                <img src={imageUrl} alt="스터디 썸네일" />
              </S.ThumbnailBoxLabel>
              <input
                id="study-open-file-input"
                hidden
                type={'file'}
                accept="image/*"
                alt="스터디 썸네일 입력"
                onChange={handleFileUploadChange}
              />
            </form>
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
