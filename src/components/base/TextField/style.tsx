import styled from '@emotion/styled';
import InputBase from '../InputBase';

export const Container = styled.div`
  position: relative;

  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.color.palette.grey[300]};

  width: 226px;
  height: 56px;

  :focus-within {
    label {
      top: 0px;
      font-size: 12px;

      transition: all 0.5s;
    }
  }
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  position: absolute;

  width: 100%;

  top: 8px;
  font-size: 32px;

  transition-property: top, font-size;
  transition-duration: 0.5s;

  pointer-events: none;
`;
