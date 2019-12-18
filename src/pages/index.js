import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner 
          title='continue exploring' 
          info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan luctus sagittis.'
        >
          <Link to='/tours' className='btn-white'>explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  );
}

export default Home;
