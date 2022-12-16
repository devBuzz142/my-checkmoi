import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface BackgroundProps {
  isModalOn: boolean;
  center: boolean;
  background: boolean;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: ${(props) =>
    props.background ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)'};

  display: flex;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    !props.isModalOn &&
    css`
      display: none;
    `}
`;

export const ContentContainer = styled.div`
  border: none;
  border-radius: 4px;

  padding: 12px;

  background-color: white;
`;
