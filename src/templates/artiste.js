import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Artiste from '../components/Artiste';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { name },
      html
    }
  } = data;

  return (
    <Layout>
      <Artiste {...{ name }} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArtistById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
      }
    }
  }
`;
