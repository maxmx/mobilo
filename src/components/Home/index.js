import React from 'react';
import { HTMLContent } from '../Content';

export default ({ title, content }) => (
  <>
    <h1>{title}</h1>
    <HTMLContent {...{ content }} />
  </>
);
