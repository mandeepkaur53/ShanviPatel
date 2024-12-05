import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LightModeHeader from './components/LightModeHeader';
import BuyNow from './components/BuyNow';
import CharacterList from './components/CharacterList';
import CourseSection from './components/CourseSection';
import NotFound from './components/NotFound';
import Price from './components/Price';
import Purchase from './components/Purchase';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <LightModeHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/price" element={<Price />} />
          <Route path="/Courses" element={<CourseSection />} />
          <Route path="/Characters" element={<CharacterList />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
