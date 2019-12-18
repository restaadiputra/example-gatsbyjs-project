import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// CSS
import './layout.css';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
