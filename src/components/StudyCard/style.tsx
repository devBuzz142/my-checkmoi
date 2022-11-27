import styled from '@emotion/styled';
import Card from '../base/Card';

export const Container = styled(Card)`
  width: 100%;
  padding: 16px;

  display: flex;

  background-color: white;

  :hover {
    transform: scale(1.01);
  }
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StudyInfoContainer = styled.div`
  padding-left: 16px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
