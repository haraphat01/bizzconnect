import React from 'react';
import Navbar from '../components/navbar';
import Market from "../pages/marketplace/index"


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;