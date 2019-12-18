import React from 'react';
import { Link } from 'gatsby';

// Constants
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

// Styles
import styles from '../css/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel compoany {new Date().getFullYear()}{' '}
        all right reserved
      </div>
    </footer>
  );
}

export default Footer;
