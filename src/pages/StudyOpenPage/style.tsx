import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1048px;
`;

export const UpperContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 512px;

  padding: 8px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const RightContainer = styled.div`
  width: 512px;

  padding: 8px;

  form {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ThumbnailTypo = styled.div`
  width: 100%;
  height: 56px;

  border-bottom: 1px solid ${(props) => props.theme.color.palette.grey[400]};

  padding-top: 22px;

  color: ${(props) => props.theme.color.palette.grey[400]};
`;

export const ThumbnailBoxLabel = styled.label`
  height: 500px;
  aspect-ratio: 2/3;

  border: 1px solid ${(props) => props.theme.color.palette.grey[400]};
  border-radius: 4px;

  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnderContainer = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
