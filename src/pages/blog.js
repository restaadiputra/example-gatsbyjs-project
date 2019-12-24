import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

function Blog({ data }) {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>
      </StyledHero>
    </Layout>
  );
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Blog;
