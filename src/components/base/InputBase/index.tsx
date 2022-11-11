import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { autocompleteClasses } from '@mui/material';
import React, { HTMLInputTypeAttribute } from 'react';

interface InputBaseProps {
  autoComplete?: boolean;
  autoFocus?: boolean;
  color?: string;
  defaultValue?: any;
  disabled?: boolean;
  disableUnderline?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  inputRef?: React.Ref<HTMLInputElement>;
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
  sx?: {
    backgroundColor?: string;
    color?: string;
  };
}

const InputBase = ({
  autoComplete = false,
  autoFocus = false,
  color = 'primary',
  defaultValue,
  disabled = false,
  disableUnderline = false,
  error = false,
  fullWidth = false,
  id,
  name,
  inputRef,
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
  sx = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 1)',
  },
}: InputBaseProps) => {
  const inputStyle = css`
    margin-top: 16px;

    width: 100%;
    min-height: 32px;

    background-color: ${sx.backgroundColor};
    color: ${sx.color};

    font-size: 16px;
  `;

  const StyledInput = styled.input`
    ${inputStyle};
  `;

  const StyledTextArea = styled.textarea`
    ${inputStyle};
  `;

  const StyledInputBase = multiline ? StyledTextArea : StyledInput;

  return (
    <StyledInputBase
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      name={name}
      // ref={inputRef}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default InputBase;
