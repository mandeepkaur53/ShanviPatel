import React from 'react';
import Image1 from '../images/1.png';
import StarRating from './StarRating';
import CourseCard from './CourseCards';
import { MdCheckBox } from 'react-icons/md'; // Import the checkbox icon

const CourseDetails = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-2">Adobe Animate CC 2024 Complete Course</h2>
      <div className="flex items-center mb-2">
        <StarRating /> 
        <span className="text-sm text-gray-400">15 Ratings</span>
      </div>
      <p className="text-gray-300">Created by: Shanvi Patel</p>

      <div className="flex justify-between items-center h-screen p-6 bg-gray-900"> 
        {/* Left Side Image */}
        <div style={{ width: '55%' }} className="bg-white p-4 rounded-lg shadow-md mr-4"> 
          <img src={Image1} alt="Course" className="w-full h-full object-cover rounded-lg" /> 
        </div>

        {/* Right Side Card */}
        <div style={{ width: '45%' }} className="ml-4"> 
          <CourseCard /> 
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Requirements</h2> 
      <ul className="list-disc pl-6"> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          No previous knowledge of Animate CC required!
        </li> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          A desire to learn!
        </li> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          Passion for animation!
        </li> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          A positive attitude!
        </li> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          Adobe Animate CC software
        </li> 
        <li className="flex items-center">
          <MdCheckBox className="mr-2 text-blue-500" /> 
          Computer/Laptop
        </li> 
      </ul>
    </div>
  );
};

export default CourseDetails;