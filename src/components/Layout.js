import React from 'react';
import { ThemeProvider } from 'styled-components';

import Helmet from './Helmet';
import { GlobalStyles, theme } from './styles';

import Navigation from './Navigation';

export default ({ children }) => (
  <>
    <Helmet />
    <GlobalStyles />
    <ThemeProvider {...{ theme }}>
      <div>
        <Navigation />
        {children}
      </div>
    </ThemeProvider>
  </>
);
