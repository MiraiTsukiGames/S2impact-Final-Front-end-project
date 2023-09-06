import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ contextTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    /*navbar section*/
    <nav className='flex justify-end items-center'>
    {/*hamburger button*/}
    <button
        title="hamburger-menu"
        className= "hamburger bg-purple-900 rounded-full p-2"
        onClick={() => toggleNavbar(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/*sidebar menu*/}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className= {`${contextTheme} list-none p-0` }>
          <li className="py-2 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/co2">CO2</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/methane">Metano</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/no2">NO2</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/polarice">Ghiaccio Polare</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/temperature">Temperatura</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

