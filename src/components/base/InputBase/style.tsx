import styled from '@emotion/styled';

interface StyledInputBaseProps {
  fullWidth: boolean;
  error?: boolean;
  sx?: {
    backgroundColor?: string;
    color?: string;
  };
}

export const StyledTextArea = styled.textarea<StyledInputBaseProps>`
  width: ${(props) => props.fullWidth && '100%'};
  min-height: 32px;
  height: ${(props) => `${Number(props.rows) * 24}px`};

  background-color: ${(props) => props.sx?.backgroundColor};
  color: ${(props) => props.sx?.color};

  font-size: 16px;
`;

export const StyledInputBase = styled.input<StyledInputBaseProps>`
  width: ${(props) => props.fullWidth && '100%'};
  min-height: 32px;

  background-color: ${(props) => props.sx?.backgroundColor};
  color: ${(props) => props.sx?.color};

  font-size: 16px;

  ${(props) =>
    props.error &&
    `
  color: red;
  `}
`;
