import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

// Create a new context for the theme
export const ThemeContext = createContext();

// ThemeContextProvider component to provide the theme context to its children
export const ThemeContextProvider = ({ children }) => {
  const { t } = useTranslation();
  // State to track the current theme
  const [contextTheme, setContextTheme] = useState("light");
  const [mode, setMode] = useState(t("light"));

  // Create an object with the values to be provided in the context
  const values = { contextTheme, setContextTheme, mode, setMode };

  return (
    // Provide the values to the context
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to easily access the theme context values
export const useThemeContext = () => {
  // Use the useContext hook to access the theme context
  const context = useContext(ThemeContext);
  return context;
};
