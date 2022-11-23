import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  variant: string;
  color: string;
  disableElevation: boolean;
  fullWidth: boolean;
  disabled: boolean;
  sx: {
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    width: 'auto' | number;
    height: 'auto' | number;
  };
}

const getSxWidth = (width: 'auto' | number) => {
  if (width === 'auto') return 'auto';

  return width <= 1 && width !== 0 ? `${width * 100}%` : `${width}px`;
};

const getSxHeight = (height: 'auto' | number) => {
  if (height === 'auto') return 'auto';

  return height <= 1 && height !== 0 ? `${height * 100}%` : `${height}px`;
};

const getTextButtonStyle = ({ ...props }) => css`
  border: none;
  background-color: ${props.theme.color.palette.whte};
  color: ${props.disabled
    ? props.theme.color.disabled.text
    : props.theme.color[props.color].main};

  :hover {
    ${!props.disabled &&
    css`
      background-color: ${props.theme.color[props.color].lightest};
    `}
  }
`;

const getOutlinedButtonStyle = ({ ...props }) => css`
  border: 1px solid;
  border-color: ${props.disabled ? 'rgba(0, 0, 0, 0.4)' : props.color};
  background-color: ${props.theme.color.palette.white};
  color: ${props.disabled
    ? props.theme.color.disabled.text
    : props.theme.color[props.color].main};

  :hover {
    ${!props.disabled &&
    css`
      background-color: ${props.theme.color[props.color].lightest};
    `}
  }
`;

const getContainedButtonStyle = ({ ...props }) => css`
  background-color: ${props.disabled
    ? props.theme.color.disabled.background
    : props.theme.color[props.color].main};
  color: ${props.disabled
    ? props.theme.color.disabled.text
    : props.theme.color.palette.white};

  :hover {
    ${!props.disabled &&
    css`
      background-color: ${props.theme.color[props.color][700]};
    `}
  }
`;

export const Button = styled.button<ButtonProps>`
  width: ${({ fullWidth, sx }) => (fullWidth ? '100%' : getSxWidth(sx.width))};
  height: ${({ sx }) => getSxHeight(sx.height)};

  border-radius: 4px;

  box-shadow: ${({ disableElevation, theme }) =>
    !disableElevation && `0px 4px 4px ${theme.color.palette.grey[500]}`};

  padding: 4px 8px;

  ${(props) => {
    switch (props.variant) {
      case 'text':
        return getTextButtonStyle({ ...props });
      case 'contained':
        return getContainedButtonStyle({ ...props });
      case 'outlined':
        return getOutlinedButtonStyle({ ...props });
    }
  }};

  display: flex;
  flex-direction: ${({ sx }) => sx.flexDirection};
  justify-content: ${({ sx }) => sx.justifyContent};
  align-items: ${({ sx }) => sx.alignItems};

  font-weight: 700;
  letter-spacing: 0.02857em;
`;
//TODO - letter-spacing enum화 할 것
