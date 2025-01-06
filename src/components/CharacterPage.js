import React from 'react';
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
  // Add more characters as needed
];

const CharacterPage = () => {
  return (
    <div className="bg-gray-900 p-6">
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">All Characters</h1>
      <div className="flex flex-wrap justify-center bg-gray-900 p-6">
        {characters.map((character, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-800 m-4">
            <img className="w-full" src={character.image} alt={character.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{character.name}</div>
              <p className="text-gray-400 text-base">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;
