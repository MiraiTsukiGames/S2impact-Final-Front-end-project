import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
  return (
    <nav>
    <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between h-16">
            <div className="flex items-center">

            </div>
     <div className="flex">
     <div className="hidden sm:flex sm:items-center">
     <ul className="flex space-x-4 justify-center">
       <li>
         <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
       </li>
       <li>
         <Link to="/co2" className="hover:bg-gray-700 px-3 py-2 rounded-md">CO2</Link>
       </li>
       <li>
         <Link to="/methane" className="hover:bg-gray-700 px-3 py-2 rounded-md">Methane</Link>
       </li>
       <li>
         <Link to="/no2" className="hover:bg-gray-700 px-3 py-2 rounded-md">NO2</Link>
       </li>
       <li>
         <Link to="/polarice" className="hover:bg-gray-700 px-3 py-2 rounded-md">Polarice</Link>
       </li>
       <li>
         <Link to="/temperature" className="hover:bg-gray-700 px-3 py-2 rounded-md">Temperature</Link>
       </li>
     </ul>
     </div>
   </div>
        </div>
        </div>
   </nav>
  )
}
