import React from 'react';
import image from '../images/2danimation.jpg';

function AboutUsPage() {
  return (
    <div className="bg-gray-800 text-white">
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={image} alt="Animated Image" className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold mb-6">About Our Animation Course</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Learn from Industry Experts</h3>
                <p>
                  Our instructors are seasoned animators with years of experience in the industry.
                </p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">State-of-the-Art Tools and Techniques</h3>
                <p>
                  We use industry-standard software like Adobe After Effects and Blender to teach you the latest techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;