import * as colors from '@mui/material/colors';

// color pallette : https://mui.com/material-ui/customization/color/

//TODO - temp theme
const theme = {
  color: {
    palette: { ...colors, black: '#000000', white: '#ffffff' },
    primary: {
      lightest: colors.blue[50],
      light: colors.blue[200],
      main: colors.blue[500],
      dark: colors.blue[700],
      darkest: colors.blue[900],
      ...colors.blue,
    },
    secondary: {
      lightest: colors.purple[50],
      light: colors.purple[200],
      main: colors.purple[500],
      dark: colors.purple[700],
      darkest: colors.purple[900],
      ...colors.purple,
    },
    disabled: {
      text: colors.grey[700],
      background: colors.grey[400],
      border: colors.grey[400],
    },
  },
};

export default theme;
