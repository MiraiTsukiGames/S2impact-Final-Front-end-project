import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useThemeContext } from "./context/theme/Theme";
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
  const { contextTheme, setContextTheme } = useThemeContext();
  // State for the switch value
  const [checked, setChecked] = useState(false);

  // Handler for the switch change event
  const handleSwitch = () => {
    // Change the theme in the context
    setContextTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
    // Update the switch value
    setChecked(!checked);
  };

  return (
    <div className="App" id={contextTheme}>
      <Navbar />
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
        <BsMoonStarsFill color="white" size={12} />
        <BsFillSunFill color="yellow" size={12} />
        <div className="ball"></div>
      </label>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/co2" element={<CO2 />} />
          <Route path="/methane" element={<Methane />} />
          <Route path="/no2" element={<NO2 />} />
          <Route path="/polarice" element={<PolarIce />} />
          <Route path="/temperature" element={<Temperature />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
