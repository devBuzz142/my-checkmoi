import styled from '@emotion/styled';
import { Card } from '../index';

export const Container = styled(Card)`
  width: 176px;
  height: 304px;
  outline: 1px solid red;

  padding: 8px;

  :hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;

  white-space: nowrap;
  overflow: hidden;

  text-align: center;

  //TODO: hover하면 text 나머지 보이도록
`;

export const AuthorWrapper = styled.div``;
