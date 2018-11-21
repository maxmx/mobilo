import React from 'react';
import { ThemeProvider } from 'styled-components';

import Helmet from './Helmet';
import { GlobalStyles, theme, SiteNote } from './styles';

import Navigation from './Navigation';

export default ({ children }) => (
  <>
    <Helmet />
    <GlobalStyles />
    <ThemeProvider {...{ theme }}>
      <div>
        <Navigation />
        {children}
        <SiteNote>
          Ce site est <a href="https://github.com/maxmx/mobilo">open source</a>
        </SiteNote>
      </div>
    </ThemeProvider>
  </>
);
