import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from '../components/Helmet';
import Artiste from '../components/Artiste';

import { toShow } from '../utils/data';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, image },
      fields: { slug },
      html
    },
    allMarkdownRemark: { edges: rawShows }
  } = data;

  const shows = rawShows.map(toShow).filter(({ artistes }) => artistes.indexOf(title) > -1);

  return (
    <Layout>
      <Helmet {...{ title: `Artiste Mobilo | ${title}`, slug, image: '/img/share-portrait.png' }} />
      <Artiste {...{ name: title, image, shows }} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArtistById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        image
      }
    }

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "spectacle" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            artistes
            poster
          }
        }
      }
    }
  }
`;
