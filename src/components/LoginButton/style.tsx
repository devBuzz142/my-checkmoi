import styled from '@emotion/styled';
import Button from '../base/Button';

export const Container = styled.div`
  min-width: 360px;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  :hover {
    transform: scale(1.05);
    background: none;
  }
`;
