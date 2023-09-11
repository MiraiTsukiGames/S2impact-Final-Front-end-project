import React from "react";
import { useThemeContext } from "./context/Theme";
import { Routes, Route } from "react-router-dom";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Footer from "./components/footer/Footer";
/*import Navbar from "./components/navbar/Navbar";*/
import Home from "./pages/home/Home";
import CO2 from "./pages/CO2/CO2";
import Methane from "./pages/methane/Methane";
import NO2 from "./pages/NO2/NO2";
import PolarIce from "./pages/polar ice/Polarice";
import Temperature from "./pages/temperature/Temperature";
import './App.css';

function App() {
  // Get the current theme from the context
const { contextTheme, setContextTheme } = useThemeContext();

const getBackgroundClasses = () => {
  if (contextTheme === "Light") {
    return "bg-white-800 text-blue-900";
  } else {
    return "bg-gray-800 text-white";
  }
};

  return (
    <div className={`${getBackgroundClasses()}`}>
      <span>{contextTheme} Mode</span>
      <button className="cursor-pointer absolute right-6" onClick={() => setContextTheme(contextTheme === "Light" ? "Dark" : "Light")}>
      {contextTheme === "Light" ? <RiSunLine size={32} /> : <RiMoonLine size={32} />}</button>
      <main className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/co2" element={<CO2 />} />
        <Route path="/methane" element={<Methane />} />
        <Route path="/no2" element={<NO2 />} />
        <Route path="/polarice" element={<PolarIce />} />
        <Route path="/temperature" element={<Temperature />} />
      </Routes>
      </main>
      <Footer />
      </div>
  );
}

export default App;
