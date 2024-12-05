import React from 'react';
import { useNavigate } from 'react-router-dom';
import twoDAnimation from '../images/2danimation.jpg';

const characters = [
  {
    name: "Character 1",
    image: twoDAnimation, 
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 1",
    image: twoDAnimation, 
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 1",
    image: twoDAnimation, 
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 2",
    image: twoDAnimation, 
    description: "Character 2 has a mysterious background and exceptional skills.",
  },
  {
    name: "Character 3",
    image: twoDAnimation, 
    description: "Character 3 is a master of strategy and quick thinking.",
  },
  {
    name: "Character 4",
    image: twoDAnimation, 
    description: "Character 4 is renowned for their unparalleled strength.",
  },
];

const CharacterCard = ({ name, image, description }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/buy-now');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-800 m-4">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
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

const CharacterList = () => {
  return (
    <div className="bg-gray-900 p-6">
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">Some Characters</h1>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Some Characters</h2>
        <div className="flex flex-wrap justify-center bg-gray-900 p-6">
          {characters.map((character, index) => (
            <CharacterCard key={index} {...character} />
          ))}
        </div>
    </div>
  );
};

export default CharacterList;


//<h1 className="text-8xl font-bold text-center mb-8 bg-gradient-to-r from-zinc-900 to-gray-50 text-transparent bg-clip-text">Review</h1>
//gradient color example courses review backgraound text in gradient