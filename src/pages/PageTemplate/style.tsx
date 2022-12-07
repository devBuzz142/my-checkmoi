import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PageContainer = styled.div`
  height: 100%;
`;

interface ContentContainerProps {
  contentCenter: boolean;
}

export const ContentContainer = styled.main<ContentContainerProps>`
  padding: 32px 64px;

  height: calc(100% - 64px);

  ${(props) =>
    props.contentCenter &&
    css`
      display: flex;
      justify-content: center;
    `}
`;
