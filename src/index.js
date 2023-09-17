import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/theme/Theme";
import { I18nextProvider } from "react-i18next";
import { HelmetProvider } from "react-helmet-async";
import i18n from "./i18n";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <HelmetProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
