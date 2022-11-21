import styled from '@emotion/styled';

interface ContainerProps {
  sx: {
    padding: string;
  };
}

export const Container = styled.div<ContainerProps>`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px;

  border-radius: 4px;

  padding: ${(props) => props.sx.padding};

  overflow-x: hidden;
  overflow-y: hidden;

  color: rgba(0, 0, 0, 1);
`;
