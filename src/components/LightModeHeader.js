import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/shanvipatellogo.jpg';

function LightModeHeader() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Courses');
  };
  const handleChange = () => {
    navigate('/Characters');
  };
  return (
    <header className="bg-white dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <img src={logoImage} alt="Course" className=" h-auto w-20 rounded-t-lg object-cover" />
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Home
          </a>
          <a href="/Courses" onClick={handleClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Courses
          </a>
          <a href="/Characters" onClick={handleChange} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Characters
          </a>
        </nav>
      </div>
    </header>
  );
}

export default LightModeHeader;