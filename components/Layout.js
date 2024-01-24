import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer className="min-h-50" /> {/* Apply Tailwind CSS classes here */}
    </div>
  );
};

export default Layout;