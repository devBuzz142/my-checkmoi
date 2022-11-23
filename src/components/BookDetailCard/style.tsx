import styled from '@emotion/styled';
import Card from '../base/Card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;

  background-color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  padding-bottom: 16px;
`;

export const ImageWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  width: 200px;
  aspect-ratio: 2/3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfoContainer = styled.div`
  width: 100%;

  padding: 16px;

  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const BookDescriptionWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  min-height: 32px;
  height: 100%;
  width: 100%;

  padding: 12px;
`;
