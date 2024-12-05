import React from 'react';
import { useNavigate } from 'react-router-dom';
import characterImage from '../images/2danimation.jpg'; // Replace with the correct image path

const BuyNow = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/purchase'); // Navigate to the payment page
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 p-6 bg-gray-900 flex items-center justify-center">
        <img src={characterImage} alt="Character" className="rounded-lg object-cover h-64 w-64" />
      </div>
      <div className="md:w-1/2 p-6 bg-white flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Character Name</h2>
        <p className="text-xl text-gray-800 mb-4">$99.99</p>
        <p className="text-gray-700 mb-8">
          This is a detailed description of the character. It includes interesting facts and information about the character.
        </p>
        <button
          onClick={handleBuyNowClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
