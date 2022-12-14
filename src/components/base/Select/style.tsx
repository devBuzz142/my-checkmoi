import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ContainerProps {
  width: number | string;
  height: number | string;
}

export const Conainer = styled.div<ContainerProps>`
  width: ${(props) =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }

  :hover:not(:focus-within) {
    label {
      color: ${(props) => props.theme.color.palette.black};
    }
  }
`;

export const SelectorLabel = styled.label`
  z-index: 1;
  position: absolute;

  left: 14px;

  font-size: 14px;

  color: ${(props) => props.theme.color.palette.grey[400]};
`;

interface SelectorProps {
  variant: 'filled' | 'outlined' | 'standard';
  native?: boolean;
}

const getFilledStyle = ({ ...props }) => css`
  border-bottom: 2px solid ${props.theme.color.palette.grey[400]};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  padding: 24px 14px 8px 14px;

  background-color: ${props.theme.color.palette.grey[200]};
  color: ${props.theme.color.palette.grey[400]};

  :hover:not(:focus-within) {
    border-color: ${props.theme.color.palette.black};
    color: ${props.theme.color.palette.black};
  }

  :focus-within {
    border-color: ${props.theme.color.primary.dark};
  }
`;

const getOutlinedStyle = ({ ...props }) => css`
  border: 2px solid ${props.theme.color.palette.grey[400]};
  border-radius: 4px;

  padding: 24px 14px 8px 14px;

  color: ${props.theme.color.palette.grey[400]};

  :hover:not(:focus-within) {
    border-color: ${props.theme.color.palette.black};
    color: ${props.theme.color.palette.black};
  }

  :focus-within {
    border-color: ${props.theme.color.primary.dark};
  }
`;

const getStandardStyle = ({ ...props }) => css`
  border-bottom: 2px solid ${props.theme.color.palette.grey[400]};

  padding: ${props.native ? '18px 14px 8px 14px' : '24px 14px 8px 14px'};
`;

export const NativeSelect = styled.select<SelectorProps>`
  width: 100%;
  height: 100%;

  background-color: white;

  ${(props) => {
    switch (props.variant) {
      case 'filled':
        return getFilledStyle(props);
      case 'outlined':
        return getOutlinedStyle(props);
      case 'standard':
        return getStandardStyle(props);
    }
  }}
`;

export const StyledSelect = styled.div<SelectorProps>`
  width: 100%;
  height: 100%;

  background-color: white;

  ${(props) => {
    switch (props.variant) {
      case 'filled':
        return getFilledStyle(props);
      case 'outlined':
        return getOutlinedStyle(props);
      case 'standard':
        return getStandardStyle(props);
    }
  }}
`;

interface OptinListProps {
  isOn: boolean;
}

export const OptionList = styled.ul<OptinListProps>`
  z-index: 10;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  padding: 4px 0px;

  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;

  li {
    height: 48px;

    padding: 16px 14px;

    display: flex;
    align-items: center;

    :hover {
      background-color: ${(props) => props.theme.color.palette.grey[200]};
    }
  }
`;

export const ListBackground = styled.div<OptinListProps>`
  display: ${(props) => (props.isOn ? 'block' : 'none')};

  width: 120vw;
  height: 120vh;

  top: -120px;
  left: -120px;
`;
