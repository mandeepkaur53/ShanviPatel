import React from 'react';
import { useNavigate } from 'react-router-dom';
//import twoDAnimation from '../images/2danimation.jpg';
import Image1 from '../images/1.png';
//import Image1A from '../images/1A.png';
//import Image1B from '../images/1B.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
//import Image3A from '../images/3A.png';
import Image4 from '../images/4.png';
//import Image4A from '../images/4A.png';
//import Image5 from '../images/5.png';
//import Image5A from '../images/5A.png';

//import twoDAnimation from '../images/2danimation.jpg';
//import StarRating from './StarRating';

const courses = [
  {
    rate: '₹500', 
    crossedRate: '₹1999',
    title: '2D Animation',
    subTitle: 'Adobe Animate CC 2024',
    description: 'In this course, we are going to tell you about 2D Animation. We will tell you step-by-step about the software from beginning to creating and finalizing the animation',
    //videoCount: 20,
    //duration: '40 hours',
    image: Image1, // Replace with the correct image file name
  },
  {
    rate: '₹500', 
    crossedRate: '₹1999',
    title: '2D Visual Effects',
    subTitle: 'Adobe Animate CC 2024',
    description: 'In this course, we are going to tell you about 2D Visual effects Animation. In which we will learn everything about creating Visual Effects animation.',
    //videoCount: 30,
    //duration: '60 hours',
    image: Image4, // Replace with the correct image file name
  },
  {
    rate: '₹500', 
    crossedRate: '₹1999',
    title: '2D Animation',
    subTitle: 'Cartoon Animator 4',
    description: 'In this course, we are going to tell you about 2D Animation. We will tell you step-by-step about the software from beginning to creating and finalizing the animation.',
    //videoCount: 30,
    //duration: '60 hours',
    image: Image3, // Replace with the correct image file name
  },
  {
    rate: '₹500', 
    crossedRate: '₹1999',
    title: 'Graphic Design',
    subTitle: 'Adobe Illustrator 2024',
    description: 'In this course, we are going to tell you about Graphic Design. In which we will learn everything about creating character and Graphic. We will tell you step-by-step about the software.',
    //videoCount: 30,
    //duration: '60 hours',
    image: Image2, // Replace with the correct image file name
  },
  // {
  //   rate: '₹800', 
  //   crossedRate: '₹3299',
  //   title: 'Combo Course',
  //   subTitle: 'Adobe Animate & Illustrator',
  //   description: 'In this course. we are going to tell you about 2D Animation. We will tell you step-by-step about the software from beginning to creating and finalizing the animation.',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image1A, // Replace with the correct image file name
  // },
  // {
  //   rate: '₹800', 
  //   crossedRate: '₹3299',
  //   title: 'Combo Course',
  //   subTitle: 'Adobe Animate CC 2024',
  //   description: 'In this course, we are going to tell you about 2D Visual effects Animation, In which we will learn everything about creating Visual Effects animation',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image4A, // Replace with the correct image file name
  // },
  // {
  //   rate: '₹800', 
  //   crossedRate: '₹3299',
  //   title: 'Combo Course',
  //   subTitle: 'Cartoon Animator 4',
  //   description: 'In this course, we are going to tell you about 2D Animation We will tell you step-by-step about the software from beginning to creating and finalizing the animation',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image3A, // Replace with the correct image file name
  // },
  // {
  //   rate: '₹500', 
  //   crossedRate: '₹1999',
  //   title: 'Graphic Design',
  //   subTitle: 'Adobe Photoshop 2024',
  //   description: 'In this course we are going to tell you about Graphic Design in which we will learn everything about creating character and Graphic Wir will tell you step-by-step about the software.',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image5, // Replace with the correct image file name
  // },
 
  // {
  //   rate: '₹800', 
  //   crossedRate: '₹3299',
  //   title: 'Combo Course',
  //   subTitle: 'Adobe Animate CC 2024',
  //   description: 'In this course, we are going to tell Byou about ZD Animation. We will tell you-step-by-step about the softwere From beginning to creating and finalizing the animation.',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image1B, // Replace with the correct image file name
  // },
  // {
  //   rate: '₹800', 
  //   crossedRate: '₹3299',
  //   title: 'Combo Course',
  //   subTitle: 'Adobe Animate CC 2024',
  //   description: 'In this course, we are going to tell you about Graphic Design. In which we will learn everything about creating character and Graphic. We will tell you step-by-step about the software.',
  //   // videoCount: 30,
  //   // duration: '60 hours',
  //   image: Image5A, // Replace with the correct image file name
  // },
  
];

const CourseCard = ({ rate, crossedRate, title, subTitle, description, image, videoCount, duration }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/price');
  };

  return (
    <div className="bg-white  rounded-lg shadow-md p-6">
      <img src={image} alt={title} className="w-full h-40 rounded-t-lg object-cover" />
      <div className="flex items-center mb-2">
        <span className="text-2xl font-bold">{rate}/</span>
        <span className="text-sm text-red-500 line-through ml-2">{crossedRate}</span>
      </div>

      <h1 className="text-3xl text-blue-500 font-bold mt-4 mb-4">{title}</h1>
      <h3 className="text-xl text-blue-500 font-bold mt-4 mb-4">{subTitle}</h3>

      {/* <div> <StarRating /> </div> */}
      <p className="text-gray-700 mb-4 ">{description}</p>
      {/* <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25a1.5 1.5 0 00-3 0V9h-1.5V5.25a3 3 0 016 0V9h1.5V7.5a1.5 1.5 0 00-3 0V9h-1.5V6a3 3 0 016 0V9z" />
        </svg>
        <span>{videoCount} Videos | {duration}</span>
      </div> */}
      <button onClick={handleBuyNowClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg text-2xl flex items-center"> Enroll Now </button>
    </div>
  );
};

const CourseSection = () => {
  return (
    <section className="bg-gray-900 py-4 ">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">Explore Our Animation Courses</h1>
        <h2 className="text-3xl text-white font-bold text-center mb-8">Explore Our Animation Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              rate={course.rate} 
              crossedRate={course.crossedRate}
              title={course.title}
              subTitle={course.subTitle}
              description={course.description}
              image={course.image}
              // videoCount={course.videoCount}
              // duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
