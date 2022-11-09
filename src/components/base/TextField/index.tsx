import React, { useEffect, useRef } from 'react';
import { InputBase } from '../../index';
import * as S from './style';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
}

const TextField = ({ label = 'Standard', placeholder }: TextFieldProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <InputBase placeholder={placeholder} />
      </S.InputWrapper>
    </S.Container>
  );
};

export default TextField;
