import styled from '@emotion/styled';

interface ContainerProps {
  color: string;
  position: string;
  isTop: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;

  position: ${(props) => props.position || 'fixed'};
  top: ${(props) => props.isTop && '0px'};
  right: 0;
  left: 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  color: white;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.color.primary.main;
      case 'secondary':
        return theme.color.secondary.main;
      default:
        return 'inherit';
    }
  }};
`;
