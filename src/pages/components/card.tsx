import React from 'react';
import '/styles.css';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card bg-blue-500 text-white p-4 rounded-md w-70 h-70 flex flex-col items-center">
      <h2>{title}</h2>
      <p>Test Date</p>
      <p>Test Date</p>
      <p>Test Date</p>
      <div className="flex">
        <button className="bg-red-500 text-white py-2 px-4 rounded-md mr-2">Delete </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">Modify</button>
      </div>
    </div>
  );
};

export default Card;