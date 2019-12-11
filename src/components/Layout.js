import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

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
        <Grid>
          <SiteNote>
            <span>
              Ce site est <a href="https://github.com/maxmx/mobilo">open source</a>
            </span>
            <a href="mailto:drmobilo@gmail.com">Contact</a>
          </SiteNote>
        </Grid>
      </div>
    </ThemeProvider>
  </>
);
