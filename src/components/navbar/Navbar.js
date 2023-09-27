import React, { useState } from "react";
import { Link } from "react-router-dom";
import { changeLanguage } from "i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/climatelogo.png";
import "./Navbar.css";

export default function Navbar({ t, i18n }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle navabar function
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    //navbar section
    <nav className={`navbar ${isOpen ? "sidebar" : ""}`}>
      <div className="items">
        <p>{t("selectALanguage")}</p> {/* Select a Language translation*/}
        <button
          onClick={() => changeLanguage("it")}
          className={i18n.language === "it" ? "button-active" : "button"}
        >
          Italiano
        </button>
        {/* Italian button */}
        <button
          onClick={() => changeLanguage("en")}
          className={i18n.language === "en" ? "button-active" : "button"}
        >
          English
        </button>
        {/* English button */}
      </div>
      <div className="navbar-container">
        {/* Logo render */}
        <img src={Logo} className="brand-name" alt="logo" />
        {/*hamburger button*/}
        <button
          title="hamburger-menu"
          className="hamburger"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Menu list */}
        <ul className={`menu ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/co2">CO2</Link>
          </li>
          <li>
            <Link to="/methane">{t("methane")}</Link>
          </li>
          <li>
            <Link to="/no2">NO2</Link>
          </li>
          <li>
            <Link to="/polarice">{t("polarice")}</Link>
          </li>
          <li>
            <Link to="/temperature">Temperature</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
