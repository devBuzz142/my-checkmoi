import styled from '@emotion/styled';

export const SearchWordWrapper = styled.div`
  outline: 1px solid black;
`;

export const BookCardContainer = styled.div`
  outline: 1px solid gold;

  width: 100%;
  height: 800px;

  padding: 8px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 20px;
`;

export const BookCardWrapper = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;

  column-gap: 12px;
`;

interface PaginationButton {
  curPage?: boolean;
}

export const PaginationButton = styled.button<PaginationButton>`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  width: 32px;
  height: 32px;

  padding: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.curPage && props.theme.color.primary[50]};
  color: ${(props) => props.curPage && props.theme.color.primary[500]};

  :hover:not([disabled]) {
    background-color: ${(props) => props.theme.color.palette.grey[100]};
  }

  :disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;
