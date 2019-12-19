import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

// Components
import Title from '../Title';

// Styles
import styles from '../../css/about.module.css';

// Assets
// import img from '../../images/defaultBcg.jpeg';

const getAboutImage = graphql`
  query aboutImage {
    # aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    aboutImage: file(relativePath: {eq: "defaultBcg_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

function About() {
  const { aboutImage } = useStaticQuery(getAboutImage);

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt='about section' /> */}
            <Image fluid={aboutImage.childImageSharp.fluid} alt='awesome landscape' />
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
