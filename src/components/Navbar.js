import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

// Constants
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

// Styles
import styles from '../css/navbar.module.css';

// Assets
import logo from '../images/logo.svg';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(open => !open);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            open ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  );
}

export default Navbar;
