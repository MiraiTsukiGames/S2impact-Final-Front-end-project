import React from "react";
import { useThemeContext } from "./context/Theme";
import { Routes, Route } from "react-router-dom";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CO2 from "./pages/CO2/CO2";
import Methane from "./pages/methane/Methane";
import NO2 from "./pages/NO2/NO2";
import Polarice from "./pages/polar ice/Polarice";
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
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar contextTheme={contextTheme}/>
      <span className="mx-4 top-4 left-9 absolute">{contextTheme} Mode</span>
      <button className="cursor-pointer ml-auto absolute top-4 left-3" onClick={() => setContextTheme(contextTheme === "Light" ? "Dark" : "Light")}>
      {contextTheme === "Light" ? <RiSunLine size={32} /> : <RiMoonLine size={32} />}</button>
      <main className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/co2" element={<CO2 />} />
        <Route path="/methane" element={<Methane />} />
        <Route path="/no2" element={<NO2 />} />
        <Route path="/polarice" element={<Polarice />} />
        <Route path="/temperature" element={<Temperature />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
