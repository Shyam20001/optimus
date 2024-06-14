import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl">Susmitha M's Portfolio</h1>
      <nav className="mt-4">
        <a href="#about" className="text-white mr-4">About Me</a>
        <a href="#projects" className="text-white mr-4">Projects</a>
        <a href="#education" className="text-white mr-4">Education</a>
        <a href="#contact" className="text-white">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
