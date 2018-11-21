import React from 'react';
import { Padding } from 'styled-components-spacing';

import Hero from '../Hero';

export default ({ poster, children }) => (
  <Hero image={poster} darkness={0.75} style={{ minHeight: '100vh' }}>
    <Padding vertical={{ xs: 7 }}>{children}</Padding>
  </Hero>
);
