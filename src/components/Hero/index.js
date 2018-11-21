import React from 'react';

import { Container } from './styles';

export default ({ image, darkness, repeat = false, fade = true, children, ...props }) => (
  <Container data-bg={image} data-darkness={darkness} data-repeat={repeat} data-fade={fade} {...props}>
    {children}
  </Container>
);
