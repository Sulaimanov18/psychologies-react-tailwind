// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="text-primary hover:underline"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
