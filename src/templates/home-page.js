import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Home from '../components/Home';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html
    }
  } = data;

  return (
    <Layout>
      <Home {...{ title }} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
