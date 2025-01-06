import React from 'react';

const CourseCard = () => {
  return (
    <div className="bg-gray-800 text-white min-h-600 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">₹500</span>
        <span className="text-sm line-through text-gray-500">₹1999</span>
      </div>
      <div className="flex space-x-4 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
        <button className="border border-gray-300 px-4 py-2 rounded">Add to cart</button>
      </div>
      <ul className="list-none">
        <li className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m-6-4h6m-6 10h6" />
          </svg>
          <span>Beginner</span>
        </li>
        <li className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354v2.856q0 3.01-2.003 5.363t-4.997 2.357v2.856q0 3.01 2.003 5.363t4.997 2.357v2.856q0 3.01-2.003 5.363t-4.997 2.357v2.856q0 3.01 2.003 5.363t4.997 2.357" />
          </svg>
          <span>Total Enrolled: 120</span>
        </li>
        <li className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0" />
          </svg>
          <span>Duration: 9 hours</span>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m-6-4h6" />
          </svg>
          <span>Last Updated: Feb 2025</span>
        </li>
      </ul>
    </div>
  );
};

export default CourseCard;