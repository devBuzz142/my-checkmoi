import styled from '@emotion/styled';
import { InputBase } from '../index';

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
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);

  margin-left: auto;
  margin-right: auto;

  height: 32px;

  padding-left: 2px;
  padding-right: 2px;

  display: flex;
  align-items: center;

  font-size: 16px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Form = styled.form`
  margin-left: 2px;
  margin-right: 2px;

  width: 256px;

  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:focus-within {
    width: 512px;
  }
`;
