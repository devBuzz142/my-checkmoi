import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '@mui/system';
import { ProgressPlugin } from 'webpack';

interface ButtonProps {
  variant: string;
  color: string;
  rowPos: string;
  colPos: string;
}

const getTextButtonStyle = (color: string, varaint: string) => css`
  border: none;
  background-color: white;
  color: ${color};
`;

const getContainedButtonStyle = (color: string, varaint: string) => css`
  border-radius: 4px;
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
  border-radius: 4px;

  padding: 4px 8px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  ${({ color, variant, disabled, theme }) => {
    switch (variant) {
      case 'text':
        return getTextButtonStyle(theme.color.primary.main, variant);
      case 'contained':
        return getContainedButtonStyle(theme.color.primary.main, variant);
      case 'outlined':
        return getOutlinedButtonStyle(theme.color.primary.main, variant);
    }
  }};

  display: flex;
  justify-content: ${({ rowPos }) => rowPos};
  align-items: ${({ colPos }) => colPos};

  font-weight: 700;
  letter-spacing: 0.02857em;
`;
