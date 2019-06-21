import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BasicStyles, theme } from './styles';

export default ({ children }) => (
  <>
    <BasicStyles />
    <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
  </>
);
