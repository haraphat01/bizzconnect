import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer className="fixed bottom-0 w-full bg-gray-200 p-4 text-center min-h-16" /> {/* Apply Tailwind CSS classes here */}
    </div>
  );
};

export default Layout;