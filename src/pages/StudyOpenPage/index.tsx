import React from 'react';
import PageTemplate from '../PageTemplate';
import * as S from './style';
import { TextField } from '../../components';

interface StudyOpenPageProps {}

const StudyOpenPage = ({ ...props }: StudyOpenPageProps) => {
  return (
    <PageTemplate contentCenter>
      <S.Container>
        <TextField
          label="label"
          variant="filled"
          helperText="some important text"
        />
        <TextField
          label="label"
          variant="outlined"
          helperText="some important text"
        />
        <TextField
          label="label"
          variant="standard"
          helperText="some important text"
        />
      </S.Container>
    </PageTemplate>
  );
};

export default StudyOpenPage;
