import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
} from 'react';
import { InputBase } from '../../index';
import * as S from './style';

interface TextFieldProps {
  autoComplete?: boolean;
  autoFocus?: boolean;
  color?: string;
  defaultValue?: any;
  disabled?: boolean;
  disableUnderline?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  hiddenLabel?: boolean;
  id?: string;
  name?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  margin?: 'dense' | 'none';
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: any;
  // onChange?: ChangeEventHandler;
}

const TextField = ({
  autoComplete = false,
  autoFocus = false,
  color = 'primary',
  defaultValue,
  disabled = false,
  disableUnderline = false,
  error = false,
  fullWidth = false,
  hiddenLabel = false,
  id,
  name,
  inputRef,
  margin,
  multiline = false,
  rows,
  maxRows,
  minRows,
  label,
  placeholder,
  readonly = false,
  required = false,
  type,
  value,
}: TextFieldProps) => {
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
