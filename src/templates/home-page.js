import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Home from '../components/Home';
import { toShow, toFlatShows, sortByDate, groupShowsByDates, toImages } from '../utils/data';

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html
    },
    allMarkdownRemark: { edges: rawShows },
    allImageSharp
  } = data;

  const shows = rawShows.map(toShow);
  const flatShows = toFlatShows(shows);
  const sorted = sortByDate(flatShows);

  const dates = groupShowsByDates(sorted);
  const galas = flatShows.filter(({ gala }) => gala);
  const images = toImages('/img')(allImageSharp);

  return (
    <Layout>
      <Home {...{ title, images, dates, galas }} content={html} />
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
            dates {
              billet
              date
            }
          }
        }
      }
    }
    allImageSharp(filter: { original: { src: { regex: "/poster/" } } }) {
      edges {
        node {
          fluid(maxWidth: 375) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;
