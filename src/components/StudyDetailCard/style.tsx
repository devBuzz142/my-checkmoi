import styled from '@emotion/styled';
import Card from '../base/Card';

export const Container = styled(Card)`
  padding: 8px 16px;

  display: flex;
  flex-direction: row;

  background-color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const ImageWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  width: 160px;
  aspect-ratio: 2/3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StudyStatusWrapper = styled.div`
  border-radius: 4px;

  width: 96px;

  padding-top: auto;
  padding-bottom: auto;

  text-align: center;

  background-color: green;
  color: white;
`;

export const StudyInfoContainer = styled.div`
  width: 100%;

  padding-left: 16px;

  padding-top: 8px;

  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const RightContainer = styled.div``;

export const Avatar = styled.div`
  border-radius: 50%;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const MoreAvatar = styled.div`
  border-radius: 50%;

  width: 40px;
  height: 40px;

  background-color: ${(props) => props.theme.color.palette.grey[300]};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
