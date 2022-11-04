import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '@mui/system';
import { ProgressPlugin } from 'webpack';

interface ButtonProps {
  variant: string;
  color: string;
  justifyContent: string;
  alignItems: string;
  width: 'auto' | number;
  height: 'auto' | number;
  disableElevation: boolean;
}

const getTextButtonStyle = (color: string, varaint: string) => css`
  border: none;
  background-color: white;
  color: ${color};
`;

const getContainedButtonStyle = (color: string, varaint: string) => css`
  background-color: ${color};
  color: white;
`;

const getOutlinedButtonStyle = (color: string, variant: string) => css`
  border: 1px solid;
  border-color: ${color};
  background-color: white;
  color: ${color};
`;

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => {
    if (width === 'auto') return 'auto';

    return width <= 1 && width !== 0 ? `${width * 100}%` : `${width}px`;
  }};
  height: ${({ height }) => {
    if (height === 'auto') return 'auto';

    return height <= 1 && height !== 0 ? `${height * 100}%` : `${height}px`;
  }};

  border-radius: 4px;

  padding: 4px 8px;

  box-shadow: ${({ disableElevation }) =>
    disableElevation ? '' : '0px 4px 4px rgba(0, 0, 0, 0.2)'};

  ${({ color, variant, theme }) => {
    switch (variant) {
      case 'text':
        return getTextButtonStyle(theme.color.primary.main, variant);
      case 'contained':
        return getContainedButtonStyle(theme.color.primary.main, variant);
      case 'outlined':
        return getOutlinedButtonStyle(theme.color.primary.main, variant);
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: rgba(0, 0, 0, 0.15);
      background-color: rgba(0, 0, 0, 0.15);

      color: rgba(0, 0, 0, 0.4);
    `};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  font-weight: 700;
  letter-spacing: 0.02857em;

  :hover {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05),
      ${({ disableElevation }) =>
        disableElevation ? '' : '0px 4px 4px rgba(0, 0, 0, 0.2)'};
  }
`;
//TODO - letter-spacing enum화 할 것
