import React, { useRef } from 'react';
import * as S from './style';
import { InputBase } from '../';
import { InputBaseProps } from '../base/InputBase';
import userEvent from '@testing-library/user-event';

interface TextFieldProps extends InputBaseProps {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
  helperText?: string;
}

const TextField = ({ ...props }: TextFieldProps) => {
  const {
    variant = 'standard',
    label,
    helperText,
    fullWidth = false,
    multiline = false,
  } = props;

  // to pass the rules-of-hooks
  const textarearRef = useRef<HTMLTextAreaElement>(null);
  const inputRref = useRef<HTMLInputElement>(null);
  const textfieldRef = props.inputRef || (multiline ? textarearRef : inputRref);

  const onClickContainer = () => {
    if (!textfieldRef.current) return;

    textfieldRef.current.focus();
  };

  return (
    <S.Container variant={variant} onClick={onClickContainer}>
      {label && <label>{label}</label>}
      <S.InputWrapper className="TextField-InputWrapper" fullWidth={fullWidth}>
        <InputBase {...props} inputRef={textfieldRef} fullWidth />
      </S.InputWrapper>
      {helperText && <p>{helperText}</p>}
    </S.Container>
  );
};

export default TextField;
