import React, { HTMLInputTypeAttribute, RefObject, useRef } from 'react';
import * as S from './style';

export interface InputBaseProps {
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  defaultValue?: any;
  value?: any;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  autoComplete?: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  sx?: {
    backgroundColor?: string;
    color?: string;
  };
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // inputRef?: React.RefObject<HTMLInputElement> | null;
  // multiline?: boolean;
  // rows?: number;
  // maxRows?: number;
  // minRows?: number;
}

const InputBase = ({
  type,
  id,
  name,
  defaultValue,
  value,
  disabled = false,
  readonly = false,
  required = false,
  inputRef,
  autoComplete = false,
  autoFocus = false,
  fullWidth = false,
  placeholder,
  error = false,
  // multiline,
  // rows,
  // maxRows,
  // minRows,
  sx = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(0,0,0,1)',
  },
  onChange,
}: InputBaseProps) => {
  return (
    <S.StyledInputBase
      type={type}
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      required={required}
      placeholder={placeholder}
      ref={inputRef}
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      error={error}
      sx={sx}
      onChange={onChange}
    />
  );
};

export default InputBase;
