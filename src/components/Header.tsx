import React from 'react';
import info from '../personalData/info.json';
import '../index.css';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-4xl font-extrabold">{info.name}</h1>
      <a
        href={info.instagram}
        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow me on Instagram
      </a>
    </div>
  </header>
);

export default Header;