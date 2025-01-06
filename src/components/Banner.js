import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../images/Home-image.png';
import CircularProgress from './CircularProgress';

const Banner = () => {
  const navigate = useNavigate();

  const handleCoursesClick = () => {
    navigate('/courses'); // Ensure this path matches your routing setup
  };

  const handleEnrollClick = () => {
    navigate('/enrollment'); // Ensure this path matches your routing setup
  };

  return (
    <div className="bg-gray-900 text-white p-8 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side Content */}
        <div className="w-1/2 pr-8">
          <h1 className="text-6xl font-bold mb-4">Master Class</h1>
          <h3 className="text-4xl font-bold mb-4">Animation Skills</h3>
          <p className="mb-6 text-xl">
            Join our comprehensive animation course and bring your ideas to life! Learn the fundamentals of animation and unleash your creativity.
          </p>
          <div className="flex space-x-4 mb-6">
            <button onClick={handleCoursesClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Courses
            </button>
            <button onClick={handleEnrollClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-1/2">
          <img src={image} alt="Animation" className="w-full h-auto" />
        </div>
      </div>

      {/* Circular Progress */}
      <div className="w-full mt-8 flex justify-around">
        <CircularProgress end={3} name="Courses" />
        <CircularProgress end={200} name="Enrollment" />
        <CircularProgress end={50} name="Happy Customers" />
      </div>
    </div>
  );
};

export default Banner;
