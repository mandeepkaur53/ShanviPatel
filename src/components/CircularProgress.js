import React, { useEffect, useState } from 'react';

const CircularProgress = ({ end, name }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <svg className="w-34 h-34 mb-2 relative"> {/* Increase size to 32x32 */}
        <circle className="text-gray-300" strokeWidth="8" stroke="currentColor" fill="transparent" r="65" cx="50%" cy="50%" /> {/* Adjust radius */}
        <circle
          className="text-blue-500"
          strokeWidth="8"
          strokeDasharray="500"
          strokeDashoffset={500 - (500 * progress) / end} 
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="65" 
          cx="50%"
          cy="50%"
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-5xl font-bold fill-current text-white">{progress}</text> {/* Increase text size to 2xl */}
      </svg>
      <span className="text-3xl text-white">{name}</span> {/* Change text color to white and increase size */}
    </div>
  );
};

export default CircularProgress;
