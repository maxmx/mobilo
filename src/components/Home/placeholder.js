import React from 'react';

import { PosterBg, PosterContent } from './styles';

export default ({ color, title, index = 0, size = 'medium' }) => (
  <PosterBg data-color={color}>
    <PosterContent data-index={index} data-color={color} data-size={size}>
      <span>{title}</span>
    </PosterContent>
  </PosterBg>
);
