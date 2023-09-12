import React, { createContext, useState, useContext } from 'react';
import i18n from '../../i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const translate = (key) => {
    return i18n.t(key);
  };

  // Create an object with the values to be provided in the context
  const values = { language, setLanguage, translate, changeLanguage };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily access the theme context values
export const useLanguageContext = () => {
    // Use the useContext hook to access the theme context
    const context = useContext(LanguageContext);
    return context;
  };
