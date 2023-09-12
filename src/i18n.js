import i18n from "i18next";
import translationEN from "./translations/en.json";
import translationIT from "./translations/it.json";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

   i18n
     .use(LanguageDetector)
     .use(initReactI18next)
     .init({
       resources: {
         en: {
           translation: translationEN,
         },
         it: {
           translation: translationIT,
         }
       },
       fallbackLng: "it", // Lingua di fallback se la lingua preferita non è disponibile
       debug: true, // Imposta a true per visualizzare i messaggi di debug nella console
       interpolation: {
         escapeValue: false // Imposta a false se non hai bisogno di escapare i valori tradotti
       }
     });

   export default i18n;