import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from '../components/Helmet';
import Artistes from '../components/Artistes';
import { toArtists, toImages } from '../utils/data';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      fields: { slug },
      html
    },
    allMarkdownRemark: { edges },
    allImageSharp
  } = data;

  const artistes = edges.map(toArtists);
  const images = toImages('/img')(allImageSharp);

  return (
    <Layout>
      <Helmet {...{ title: `Dr. Mobilo Aquafest | Artistes`, slug }} />
      <Artistes {...{ title, artistes, images }} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Artists($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { type: { eq: "artiste" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
    allImageSharp(filter: { original: { src: { regex: "/artiste/" } } }) {
      edges {
        node {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;
