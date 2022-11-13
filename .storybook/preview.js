import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from '../src/commons/style/theme';
import GlobalStyle from '../src/commons/style/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { args } = context;

    if (args.mui) {
      return (
        <div style={{ border: '1px solid black', margin: '3em' }}>
          <Story {...context} />
        </div>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
