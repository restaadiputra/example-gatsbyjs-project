import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';

function Home({ data }) {
  return (
    <Layout>
      <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
        <Banner 
          title='continue exploring' 
          info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan luctus sagittis.'
        >
          <Link to='/tours' className='btn-white'>explore tours</Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  );
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "defaultBcg_2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Home;
