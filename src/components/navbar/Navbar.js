import React, { useState } from "react";
import { Link } from "react-router-dom";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/climate change logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    //navbar section
    <nav className={`navbar ${isOpen ? 'sidebar' : ''}`}>
    <div className="items">
      <p>{t("selectALanguage")}</p>
      <button onClick={() => changeLanguage("it")} className="button">Italiano</button>
      <button onClick={() => changeLanguage("en")} className="button">English</button>
      </div>
      <div className="navbar-container">
      <img src={Logo} className="brand-name" alt="logo"/>
      {/*hamburger button*/}
      <button
        title="hamburger-menu"
        className="hamburger"
        onClick={toggleNavbar}
      >
      {isOpen ? <FaTimes /> : <FaBars />}
      </button>
        <ul className={`menu ${isOpen ? 'show' : ''}`}>
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
