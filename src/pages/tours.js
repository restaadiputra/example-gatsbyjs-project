import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

function Tours({ data }) {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      </StyledHero>
    </Layout>
  );
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Tours;
