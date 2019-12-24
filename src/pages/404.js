import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}

export default Error;
