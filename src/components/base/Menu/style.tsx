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

export const Container = styled.div`
  border-bottom: 1px solid black;
  border-radius: 4px;

  background-color: white;

  div {
    width: 120px;
    padding: 4px;

    :hover {
      background-color: ${(props) => props.theme.color.palette.grey[100]};
    }
  }
`;
