import styled from '@emotion/styled';

interface ContainerProps {
  color: string;
  position: string;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;

  position: ${(props) => props.position || 'fixed'};
  top: 0;
  right: 0;
  left: 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.color || 'skyblue'};
  color: white;
`;
