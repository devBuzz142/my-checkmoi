import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  margin-left: 4px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
`;

export const SearchInputContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);

  border: 1px solid black;
  border-radius: 5px;

  font-size: 16px;

  width: 256px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
`;

export const TempButtonContainer = styled.div``;

export const Button = styled.button`
  all: unset;

  border-radius: 4px;
  background-color: #0d47a1;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  min-width: 64px;
  padding: 6px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
`;
