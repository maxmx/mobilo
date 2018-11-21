import React from 'react';

export const HTMLContent = ({ content, ...props }) => (
  <div {...{ ...props }} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, ...props }) => <div {...{ ...props }}>{content}</div>;

export default Content;
