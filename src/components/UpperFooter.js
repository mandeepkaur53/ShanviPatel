import React from 'react';
import { Link } from 'react-router-dom';

const UpperFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-5 gap-4">
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-2 hover:text-blue-500">Home</Link>
          <Link to="/about" className="mb-2 hover:text-blue-500">About Us</Link>
          <Link to="/services" className="mb-2 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="mb-2 hover:text-blue-500">Contact</Link>
          <Link to="/characters" className="mb-2 hover:text-blue-500">Characters</Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-2 hover:text-blue-500">Blog</Link>
          <Link to="/about" className="mb-2 hover:text-blue-500">FAQ</Link>
          <Link to="/services" className="mb-2 hover:text-blue-500">Privacy Policy</Link>
          <Link to="/contact" className="mb-2 hover:text-blue-500">Terms of Service</Link>
          <Link to="/characters" className="mb-2 hover:text-blue-500">Support</Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-2 hover:text-blue-500">Careers</Link>
          <Link to="/about" className="mb-2 hover:text-blue-500">Press</Link>
          <Link to="/services" className="mb-2 hover:text-blue-500">Affiliates</Link>
          <Link to="/contact" className="mb-2 hover:text-blue-500">Sitemap</Link>
          <Link to="/characters" className="mb-2 hover:text-blue-500">Testimonials</Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-2 hover:text-blue-500">Community</Link>
          <Link to="/about" className="mb-2 hover:text-blue-500">Developers</Link>
          <Link to="/services" className="mb-2 hover:text-blue-500">Partners</Link>
          <Link to="/contact" className="mb-2 hover:text-blue-500">Advertising</Link>
          <Link to="/characters" className="mb-2 hover:text-blue-500">Events</Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-2 hover:text-blue-500">Newsletter</Link>
          <Link to="/about" className="mb-2 hover:text-blue-500">Guides</Link>
          <Link to="/services" className="mb-2 hover:text-blue-500">Blog</Link>
          <Link to="/contact" className="mb-2 hover:text-blue-500">News</Link>
          <Link to="/characters" className="mb-2 hover:text-blue-500">Tutorials</Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default UpperFooter;
