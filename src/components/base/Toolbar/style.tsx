import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding-left: 16px;
  padding-right: 16px;

  min-height: 56px;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;

    min-height: 64px;
  }
`;
