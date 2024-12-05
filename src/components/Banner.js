// Banner.js
import React from 'react';
import image from '../images/2danimation.jpg';
const Banner = () => {
  return (
    <div className="bg-gray-900 text-white p-8 relative overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side Content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Master Animation Skills</h1>
          <p className="mb-6">
            Join our comprehensive animation course and bring your ideas to life! Learn the fundamentals of animation and unleash your creativity.
          </p>
          {/* <div className="flex space-x-4">
            <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </a>
            <a href="/learn-more" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </a>
          </div> */}
        </div>

        {/* Right Side Image */}
        <div className="w-1/2">
          <img src={image} alt="Animation" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;






