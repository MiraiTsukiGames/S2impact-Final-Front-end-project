import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from './context/theme/Theme';
import { LanguageProvider } from './context/language/Language';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LanguageProvider>
  <ThemeContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContextProvider>
    </LanguageProvider>
  </React.StrictMode>
);

