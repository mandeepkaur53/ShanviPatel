import React from 'react';
import image from '../images/about.png';

function AboutUsPage() {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">About Our Course</h1>
      <h2 className="text-3xl text-white font-bold text-center mb-8">About Our Course</h2>
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={image} alt="Animated Image" className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <p className="text-lg mb-8">
            In this course, we are going to tell you about 2D Animation and Graphic Design. In which we will learn everything about creating animation and Graphic. In this course, we will tell you step-by-step about the software from beginning to creating and finalizing the animation or related to graphic design.
            </p>
            <p className="text-lg mb-8"> In this course, you will learn about all the tools, as well as how and when to use them. In the end, we will create a story that will be told by doing step-by-step animation, which includes creating characters to animating the scene with symbols.
              
              </p>
              
              <p className="text-lg mb-8">Let's go make animation today!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;