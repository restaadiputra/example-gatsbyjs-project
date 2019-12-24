import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

function Contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      </StyledHero>
    </Layout>
  );
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Contact;
