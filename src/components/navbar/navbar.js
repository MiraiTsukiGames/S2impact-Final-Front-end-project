import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // State to track if the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav>
     {/*sidebar menu*/}
     <div className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}>
     <button
        title="hamburger-menu"
        className="hamburger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >menu</button>
     <ul className="navbar-nav">
       <li className="nav-item">
         <Link to="/">Home</Link>
       </li>
       <li className="nav-item">
         <Link to="/co2">CO2</Link>
       </li>
       <li className="nav-item">
         <Link to="/methane">Methane</Link>
       </li>
       <li className="nav-item">
         <Link to="/no2">NO2</Link>
       </li>
       <li className="nav-item">
         <Link to="/polarice">Polarice</Link>
       </li>
       <li className="nav-item">
         <Link to="/temperature">Temperature</Link>
       </li>
     </ul>
   </div>
   </nav>
  )
}
