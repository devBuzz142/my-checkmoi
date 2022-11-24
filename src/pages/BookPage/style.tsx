import React from 'react';
import styled from '@emotion/styled';

export const StudyCardList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

//NOTE - 임시로 만들어둔 diver, 필요하다면 base로 분리!
export const Divider = () => {
  return (
    <>
      <br />
      <hr />
      <br />
    </>
  );
};
