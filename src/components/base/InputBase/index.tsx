import styled from '@emotion/styled';
import React from 'react';

interface InputBaseProps {
  placeholder?: string;
}

const InputBase = ({ placeholder }: InputBaseProps) => {
  const StyledInputBase = styled.input`
    margin-top: 16px;

    width: 100%;
    height: 32px;

    background-color: white;

    font-size: 16px;
  `;

  return <StyledInputBase placeholder={placeholder} />;
};

export default InputBase;
