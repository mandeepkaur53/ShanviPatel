import React from 'react';

const reviews = [
  {
    name: "John Doe",
    review: "The animation course was amazing! I learned so much and the instructors were fantastic.",
    course: "Advanced Animation Techniques",
  },
  {
    name: "Jane Smith",
    review: "Great course! It really helped me improve my animation skills.",
    course: "Intro to 3D Animation",
  },
  {
    name: "Sam Wilson",
    review: "I loved the hands-on projects in this course. Highly recommend it to anyone interested in animation.",
    course: "Character Animation",
  },
  {
    name: "Lisa Brown",
    review: "Fantastic content and very well structured. I enjoyed every bit of it.",
    course: "Animation for Beginners",
  },
  {
    name: "Sam Wilson",
    review: "I loved the hands-on projects in this course. Highly recommend it to anyone interested in animation.",
    course: "Character Animation",
  },
  {
    name: "Lisa Brown",
    review: "Fantastic content and very well structured. I enjoyed every bit of it.",
    course: "Animation for Beginners",
  },
];

const ReviewCard = ({ name, review, course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-900 m-4">
      <div className="font-bold text-xl mb-2 text-white">{name}</div>
      <p className="text-gray-400 text-base">{review}</p>
      <p className="text-gray-500 text-sm mt-2">{course}</p>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="bg-gray-800 p-6">
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">Reviews by the Students</h1>
      <h2 className="text-3xl font-bold text-center text-white mb-6">Reviews by the Students</h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
