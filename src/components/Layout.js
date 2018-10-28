import React from 'react';
import Helmet from './Helmet';

export default ({ children }) => (
  <>
    <Helmet />
    {children}
  </>
);
