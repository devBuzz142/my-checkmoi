import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface BackgroundProps {
  isMenuOn: boolean;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;

  width: 100%;
  height: 100%;

  ${(props) =>
    !props.isMenuOn &&
    css`
      display: none;
    `}
`;

interface ContainerProps {
  menuPos?: {
    top: number;
    left: number;
  };
}

export const Container = styled.div<ContainerProps>`
  width: 140px;

  border-bottom: 1px solid black;
  border-radius: 4px;

  background-color: white;

  :first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${(props) =>
    props.menuPos &&
    css`
      top: ${props.menuPos.top}px;
      left: ${props.menuPos.left}px;
    `}
`;

export const MenuItem = styled.div`
  padding: 4px;

  color: black;

  :hover {
    background-color: ${(props) => props.theme.color.palette.grey[100]};
  }
`;
