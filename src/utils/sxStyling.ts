import { css } from '@emotion/react';

//TODO - theme type 추가
// import themeType from theme
// temp theme type
type ThemeType = 'primary' | 'secondary';

export interface SxTypes {
  border?: number;
  borderTop?: number;
  borderRight?: number;
  borderBottom?: number;
  borderLeft?: number;
  borderColor?: ThemeType;
  borderTopColor?: ThemeType;
  borderRightColor?: ThemeType;
  borderBottomColor?: ThemeType;
  borderLeftColor?: ThemeType;
  borderRadius?: number | string;

  display?: 'inline' | 'block' | 'none';
}

export const applySxStyling = (sx: SxTypes) => {
  return css``;
};
