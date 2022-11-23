import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from '../src/commons/style/theme';
import GlobalStyle from '../src/commons/style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
};

export const decorators = [
  (Story, context) => {
    const { args } = context;
    if (args.noProvider) {
      return <Story {...context} />;
    }

    if (args.mui) {
      return (
        <div
          style={{ outline: '1px solid black', margin: '3em', padding: '1em' }}
        >
          <Story {...context} />
        </div>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Story {...context} />
        </BrowserRouter>
      </ThemeProvider>
    );
  },
];
