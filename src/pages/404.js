import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import Banner from '../components/Banner';

// Styles
import styles from '../css/error.module.css';

function Error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops it's a dead end">
          <Link to="/" className='btn-white'>
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  );
}

export default Error;
