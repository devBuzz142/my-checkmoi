import styled from '@emotion/styled';

interface ContainerProps {
  color: string;
  position: string;
  isTop: boolean;
}

// TODO : to be removed
const getByColorPalette = (color: string) => {
  switch (color) {
    case 'primary':
      return '#42a5f5';
    case 'secondary':
      return '#ba68c8';
    default:
      return 'inherit';
  }
};

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

  background-color: ${(props) => getByColorPalette(props.color)};
  color: white;
`;
