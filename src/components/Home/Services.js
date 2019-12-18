import React from 'react';

// Constants
import services from '../../constants/services';

// Components
import Title from '../Title';

// Styles
import styles from '../../css/services.module.css';

function Services() {
  return (
    <section className={styles.services}>
      <Title title='our' subtitle='services' />
      <div className={styles.center}>
        {services.map((item, index) => (
          <article key={index} className={styles.service}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
