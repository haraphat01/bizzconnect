import React from 'react';
import Navbar from '../components/navbar';
import { NextAuthProvider } from '../pages/Provider';

const Layout = ({ children }) => {
  return (
    <div>
      <NextAuthProvider>
        <Navbar />
        {children}
      </NextAuthProvider>
    </div>
  );
};

export default Layout;