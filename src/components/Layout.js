import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// CSS
import './layout.css';

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
