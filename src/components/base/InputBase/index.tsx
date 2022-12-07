import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  RefObject,
} from 'react';
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
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | React.RefObject<HTMLTextAreaElement>;
  autoComplete?: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  sx?: {
    backgroundColor?: string;
    color?: string;
  };
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement>;
  multiline?: boolean;
  rows?: number;
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
  multiline = false,
  rows = 2,
  sx = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(0,0,0,1)',
  },
  onChange,
}: InputBaseProps) => {
  if (multiline) {
    return (
      <S.StyledTextArea
        id={id}
        name={name}
        defaultValue={defaultValue as string}
        value={value as string}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        placeholder={placeholder}
        ref={inputRef as RefObject<HTMLTextAreaElement>}
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        rows={rows}
        onChange={onChange as ChangeEventHandler<HTMLTextAreaElement>}
      ></S.StyledTextArea>
    );
  }

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
      ref={inputRef as RefObject<HTMLInputElement>}
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      error={error}
      sx={sx}
      onChange={onChange as ChangeEventHandler<HTMLInputElement>}
    />
  );
};

export default InputBase;
