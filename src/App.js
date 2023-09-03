import React from "react";
import { useThemeContext } from "./context/theme";
import './App.css';

function App() {
  // Get the current theme from the context
const { contextTheme, setContextTheme } = useThemeContext();

const getGradientClasses = () => {
  if (contextTheme === "light") {
    return "bg-gradient-to-b from-rose-700 via-rose-500 to-amber-200";
  } else {
    return "bg-gradient-to-b from-slate-950 via-slate-800 to-cyan-800";
  }
};

  return (
    <div className={`${getGradientClasses()} text-white p-8 mx-auto`}>
    <div className="flex items-center justify-center h-screen">
      <header className="py-4">
      <h1 className='text-3xl lg:text-4xl align-middle text-center'>Hello</h1>
      <button onClick={() => setContextTheme(contextTheme === "light" ? "dark" : "light")}>
          {contextTheme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <main>
        {/* Il contenuto principale della tua applicazione */}
      </main>
    </div>
    </div>
  );
}

export default App;
