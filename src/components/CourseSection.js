import React from 'react';
import { useNavigate } from 'react-router-dom';
import twoDAnimation from '../images/2danimation.jpg';

const courses = [
  {
    title: '2D Animation',
    description: 'Learn the fundamentals of 2D animation, from character design to frame-by-frame animation.',
    videoCount: 20,
    duration: '40 hours',
    image: twoDAnimation, // Replace with the correct image file name
  },
  {
    title: '3D Animation',
    description: 'Master the art of 3D animation, including modeling, rigging, and animation.',
    videoCount: 30,
    duration: '60 hours',
    image: twoDAnimation, // Replace with the correct image file name
  },
  {
    title: '3D Animation',
    description: 'Master the art of 3D animation, including modeling, rigging, and animation.',
    videoCount: 30,
    duration: '60 hours',
    image: twoDAnimation, // Replace with the correct image file name
  },
  {
    title: '3D Animation',
    description: 'Master the art of 3D animation, including modeling, rigging, and animation.',
    videoCount: 30,
    duration: '60 hours',
    image: twoDAnimation, // Replace with the correct image file name
  },
  // Add more courses as needed
];

const CourseCard = ({ title, description, image, videoCount, duration }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/price');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt={title} className="w-full h-40 rounded-t-lg object-cover" />
      
      <h3 className="text-xl font-bold mt-4 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25a1.5 1.5 0 00-3 0V9h-1.5V5.25a3 3 0 016 0V9h1.5V7.5a1.5 1.5 0 00-3 0V9h-1.5V6a3 3 0 016 0V9z" />
        </svg>
        <span>{videoCount} Videos | {duration}</span>
      </div>
      <button onClick={handleBuyNowClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
        Enroll Now
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

const CourseSection = () => {
  return (
    <section className="bg-gray-900 py-16 ">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">Explore Our Animation Courses</h1>
        <h2 className="text-3xl text-white font-bold text-center mb-8">Explore Our Animation Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              videoCount={course.videoCount}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
