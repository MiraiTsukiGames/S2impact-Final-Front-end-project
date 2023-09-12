import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "it", // Imposta la lingua predefinita come italiano
    fallbackLng: "it", // Se la traduzione automatica non è disponibile, utilizza l'italiano come fallback
    backend: {
      loadPath: "https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&target={{lng}}&q={{query}}",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;