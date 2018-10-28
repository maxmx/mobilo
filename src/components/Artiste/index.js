import React from 'react';
import { HTMLContent } from '../Content';

export default ({ name, content }) => (
  <>
    <h1>{name}</h1>
    <HTMLContent {...{ content }} />
  </>
);
