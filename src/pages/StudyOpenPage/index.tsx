import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';
import * as S from './style';
import { Button, TextField } from '../../components';
import { StudyType } from '../../types/study';
import { BookType, dummyBook } from '../../types/book';
import useQueries from '../../hooks/useQueries';
import { useNavigate } from 'react-router-dom';

interface StudyOpenPageProps {}

const initStuyInfo: StudyType = {
  id: '',
  name: '',
  thumbnail: 'https://via.placeholder.com/300.png',
  currentParticipant: 1,
  maxParticipant: 10,
  gatherStartDate: '',
  gatherEndDate: '',
  studyStartDate: '',
  studyEndDate: '',
  description: '',
  status: 'recruiting',
};

const StudyOpenPage = ({ ...props }: StudyOpenPageProps) => {
  const navigate = useNavigate();

  const [book, setBook] = useState<BookType>();
  const [study, setStudy] = useState<StudyType>(initStuyInfo);

  const { queries } = useQueries();
  useEffect(() => {
    // set book by book id
    //TODO - 백 맏늘고 나중에 코드 다시 짜기
    console.log(queries.id);

    setBook(dummyBook);
  }, [queries.id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name: inputName, value } = e.target;

    setStudy({
      ...study,
      [inputName]: value,
    });
  };

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
      setStudy({
        ...study,
        thumbnail: reader.result as string,
      });
    };
  };

  const handleOpenClick = (e: MouseEvent<HTMLButtonElement>) => {
    //TODO - error check
    //TODO - setStudy
    //TODO - submit by api and get success or fail
    //TODO - routing
    navigate(`/study?id=${study.id}`);
  };

  const handleBackClick = (e: MouseEvent<HTMLButtonElement>) => history.back();

  return (
    <PageTemplate contentCenter>
      <S.Container>
        <S.UpperContainer>
          <S.LeftContainer>
            <TextField
              label="책 제목"
              variant="filled"
              value={book?.title}
              disabled
              fullWidth
            />
            <TextField
              name="name"
              label="스터디 이름"
              variant="standard"
              type={'text'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="maxParticipant"
              label="스터디 인원"
              variant="standard"
              type={'number'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="gatherStartDate"
              label="스터디원 모집 시작"
              variant="standard"
              type={'date'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="gatherEndDate"
              label="스터디원 모집 마감"
              variant="standard"
              type={'date'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="studyStartDate"
              label="스터디 진행 시작"
              variant="standard"
              type={'date'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="studyEndDate"
              label="스터디 진행 종료"
              variant="standard"
              type={'date'}
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="status"
              label="스터디 모집 상태"
              variant="standard"
              fullWidth
              onChange={handleInputChange}
            />
          </S.LeftContainer>
          <S.RightContainer>
            <form>
              <S.ThumbnailTypo>스터디 썸네일</S.ThumbnailTypo>
              <br />
              <br />
              <S.ThumbnailBoxLabel htmlFor="study-open-file-input">
                <img src={study.thumbnail} alt="스터디 썸네일" />
              </S.ThumbnailBoxLabel>
              <input
                name="thumbnail"
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
          <TextField
            name="description"
            label="스터디 내용"
            variant="outlined"
            multiline
            rows={8}
            fullWidth
            onChange={handleInputChange}
          />
          <Button variant="outlined" fullWidth onClick={handleOpenClick}>
            스터디 개설하기
          </Button>
          <Button variant="outlined" fullWidth onClick={handleBackClick}>
            뒤로 가기
          </Button>
        </S.UnderContainer>
      </S.Container>
    </PageTemplate>
  );
};

export default StudyOpenPage;
