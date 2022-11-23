import styled from '@emotion/styled';
import Card from '../base/Card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  padding-bottom: 16px;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  aspect-ratio: 2/3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfoContainer = styled.div`
  padding: 16px;
`;
