import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useThemeContext } from "./context/theme/Theme";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CO2 from "./pages/CO2/CO2";
import Methane from "./pages/methane/Methane";
import NO2 from "./pages/NO2/NO2";
import PolarIce from "./pages/polar ice/Polarice";
import Temperature from "./pages/temperature/Temperature";
import "./App.css";

const App = () => {
  // Get the current theme from the context
  const { contextTheme, setContextTheme, mode, setMode } = useThemeContext();
  const { t } = useTranslation();

  // State for the switch value
  const [checked, setChecked] = useState(false);

  // Handler for the switch change event
  const handleSwitch = () => {
    // Update the switch value
    setChecked(!checked);
      setContextTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      setMode((prevMode) => (prevMode === t("dark") ? t("light") : t("dark")));
    };

  return (
    <div className="App" id={contextTheme}>
      <Navbar t={t} />
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        // onChange prop to fire our internal function for changing the light mode value
        onChange={handleSwitch}
        // checking checked prop
        checked={checked}
      />
      <label htmlFor="checkbox" className="label">
        <BsMoonStarsFill className="Moon" />
        <BsFillSunFill className="Sun" />
        <div className="ball">
        </div>
      </label>
      <span>{mode}</span>
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/co2" element={<CO2 t={t} />} />
          <Route path="/methane" element={<Methane t={t} />} />
          <Route path="/no2" element={<NO2 t={t} />} />
          <Route path="/polarice" element={<PolarIce t={t} />} />
          <Route path="/temperature" element={<Temperature t={t} />} />
        </Routes>
        <Footer t={t} />
      </main>
    </div>
  );
};

export default App;
