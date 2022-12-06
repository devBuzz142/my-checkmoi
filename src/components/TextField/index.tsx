import React, { useRef } from 'react';
import * as S from './style';
import { InputBase } from '../';
import { InputBaseProps } from '../base/InputBase';

interface TextFieldProps extends InputBaseProps {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
  helperText?: string;
}

const TextField = ({ ...props }: TextFieldProps) => {
  const { variant = 'standard', label, helperText, fullWidth = false } = props;

  // to pass the rules-of-hooks
  const tfInputRef = useRef<HTMLInputElement>(null);
  const inputRef = props.inputRef || tfInputRef;

  const onClickContainer = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  };

  return (
    <S.Container variant={variant} onClick={onClickContainer}>
      {label && <label>{label}</label>}
      <S.InputWrapper className="TextField-InputWrapper" fullWidth={fullWidth}>
        <InputBase {...props} inputRef={inputRef} fullWidth />
      </S.InputWrapper>
      {helperText && <p>{helperText}</p>}
    </S.Container>
  );
};

export default TextField;
