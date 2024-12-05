// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import courseImage from '../images/2danimation.jpg';

// const CourseDetails = () => {
//   const navigate = useNavigate();

//   const handlePurchaseClick = () => {
//     navigate('/purchase');
//   };

//   return (
//     <div className="bg-gray-900 text-white p-6 flex-grow">
//     <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 lg:w-1/3">
//       <img src={courseImage} alt="Course" className="w-full h-40 rounded-t-lg object-cover" />
//       <h3 className="text-xl font-bold mt-4 mb-4">Course Title</h3>
//       <p className="text-gray-700 mb-4">This is a detailed description of the course. It includes all the content covered in the course.</p>
//       <button
//         onClick={handlePurchaseClick}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Purchase Course
//       </button>
//     </div>
//     </div>
//   );
// };


// export default CourseDetails;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseDetails= () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/purchase'); // Navigate to the payment page, ensure the route is correctly set up
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gray-900 text-white p-6 w-full md:w-2/3">
        <h3 className="text-3xl font-bold mb-4">Course Content</h3>
        <ul>
          <li className="mb-4">Introduction</li>
          <li className="mb-4">Module 1: Basics</li>
          <li className="mb-4">Module 2: Intermediate</li>
          <li className="mb-4">Module 3: Advanced</li>
        </ul>
        <div className="mt-4">
          <video controls className="w-full">
            <source src="path-to-demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-white p-6 w-full md:w-1/3">
        <img src="/images/course-image.jpg" alt="Course" className="w-full h-40 rounded-t-lg object-cover mb-4" />
        <h3 className="text-xl font-bold mb-4">Course Title</h3>
        <p className="text-gray-700 mb-4">This is a detailed description of the course. It includes all the content covered in the course.</p>
        <button
          onClick={handleBuyNowClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;

