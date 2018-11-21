import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Spectacle from '../components/Spectacle';
import Helmet from '../components/Helmet';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter,
      html,
      excerpt: description,
      fields: { slug }
    }
  } = data;

  const { title, poster } = frontmatter;

  return (
    <Layout>
      <Helmet {...{ title: `Dr. Mobilo Aquafest | ${title}`, description, slug, image: poster }} />
      <Spectacle {...{ ...frontmatter }} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query SpectacleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      fields {
        slug
      }
      frontmatter {
        title
        scene
        artistes
        poster
        dates {
          billet
          date
        }
      }
    }
  }
`;
