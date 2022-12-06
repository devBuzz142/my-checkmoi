import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ContainerProps {
  variant: 'filled' | 'outlined' | 'standard';
}

const getFilledStyle = ({ ...props }) => css`
  .TextField-InputWrapper {
    border-bottom: 1px solid ${props.theme.color.palette.grey[400]};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-color: ${props.theme.color.palette.grey[200]};

    padding-top: 24px;
    padding-left: 14px;
    padding-right: 14px;
  }

  label {
    left: 14px;
  }

  p {
    padding-left: 14px;
  }
`;

const getOutlinedStyle = ({ ...props }) => css`
  .TextField-InputWrapper {
    border: 1px solid ${props.theme.color.palette.grey[400]};
    border-radius: 4px;

    padding: 16px 14px;
  }

  label {
    left: 14px;
  }

  p {
    padding-left: 14px;
  }
`;

const getStandardStyle = ({ ...props }) => css`
  .TextField-InputWrapper {
    padding-top: 24px;

    border-bottom: 1px solid ${props.theme.color.palette.grey[400]};
  }
`;

export const Container = styled.div<ContainerProps>`
  ${(props) => {
    switch (props.variant) {
      case 'filled':
        return getFilledStyle({ ...props });
      case 'outlined':
        return getOutlinedStyle({ ...props });
      case 'standard':
        return getStandardStyle({ ...props });
    }
  }}

  label {
    position: absolute;
    top: 0px;

    font-size: 14px;

    z-index: 1;
  }

  p {
    padding-top: 4px;
  }
`;

interface InputWrapperProps {
  fullWidth: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '220px')};
  height: 56px;
`;
