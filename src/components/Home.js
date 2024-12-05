import React from 'react';

import Banner from './Banner';
import AboutUsPage from './AboutUsPage';
import CourseSection from './CourseSection';
import ReviewSection from './ReviewSection';

import CharacterList from './CharacterList';


const Home = () => {
  return (
    <div>
      
      <Banner />
      <AboutUsPage />
      <CourseSection />
      <ReviewSection />
      <CharacterList />
     
    </div>
  );
};

export default Home;
