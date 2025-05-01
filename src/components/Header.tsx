
import React from 'react';
import info from '../data/info.json';

const Header = () => (
  <header className="mb-6 text-center">
    <h1 className="text-3xl font-bold">{info.name}</h1>
    <a href={info.instagram} className="text-blue-500" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
  </header>
);

export default Header;
