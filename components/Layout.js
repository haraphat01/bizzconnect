import React from 'react';
import Navbar from '../components/navbar';
import { NextAuthProvider } from '../pages/Provider';

const Layout = ({ children }) => {
  return (
    <div>

      <Navbar />
      {children}

    </div>
  );
};

export default Layout;