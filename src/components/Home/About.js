import React from 'react';

// Components
import Title from '../Title';

// Styles
import styles from '../../css/about.module.css';

// Assets
import img from '../../images/defaultBcg.jpeg';

function About() {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt='about section' />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Ad eiusmod dolore aute velit excepteur sunt elit exercitation.Laborum mollit officia qui tempor.</p>
          <p>Ad eiusmod dolore aute velit excepteur sunt elit exercitation.Laborum mollit officia qui tempor.</p>
          <button type='button' className='btn-primary'>read more</button>
        </article>
      </div>
    </section>
  );
}

export default About;
