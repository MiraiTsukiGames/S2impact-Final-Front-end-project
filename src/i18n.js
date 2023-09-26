import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: false,
    supportedLngs: ["en", "it"],
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          title: "Climate Change Alert",
          title2: "Graphs",
          title3: "Chart",
          selectALanguage: "Select a language",
          description1:
            "The global warming is the increase in the average temperature of the Earth due to greenhouse gas emissions caused by human activities. It is important to reduce emissions, promote renewable energy, and adopt sustainable practices to protect our planet.",
          description2:
            "Data on carbon dioxide (CO2) present in the Earth's atmosphere from past years to the present year.",
          description3:
            "Data on temperature variations from past years to the present year.",
          description4:
            "Data on methane present in the Earth's atmosphere from past years to the present year",
          description5:
            "Data on nitrogen dioxide (NO2) present in the Earth's atmosphere from past years to the present year. ",
          description6:
            "Data on polar ice present in the Arctic and Antarctic regions from past years to the current year",
          co2description:
            "CO2 is a greenhouse gas that contributes to global warming. Human activities, such as the burning of fossil fuels, increase concentrations of CO2 in the atmosphere.",
          temperaturedescription:
            "The increase in global temperatures is caused by the rise in greenhouse gas emissions and has serious consequences for the environment and life on Earth. It is crucial to reduce emissions and adopt sustainable practices to address this issue.",
          methanedescription:
            "Methane is a potent greenhouse gas that contributes to climate change. Reducing its emissions is crucial in combating global warming.",
          no2description:
            "The nitrogen dioxide(NO2),  is an air pollutant primarily produced by human activities such as vehicular traffic and industrial processes. It is associated with respiratory issues and can contribute to the formation of air pollution and the greenhouse effect.",
          polaricedescription:
            "Polar ice is a mass of ice that forms in polar regions such as the Arctic and Antarctica. It is a crucial component of the global climate system, and its decline has significant consequences for ecosystems and sea levels.",
          methane: "Methane",
          polarice: "Polar ice",
          graph: "Graph",
          load: "Load Graph",
          dark: "Dark Mode",
          light: "Light Mode",
          text: "Contact me",
          error: "Page not found",
          page404: "The page you are looking for is not available."
        },
      },
      it: {
        translation: {
          title: "Climate Change Alert",
          title2: "Grafici",
          title3: "Grafico",
          selectALanguage: "Seleziona una lingua",
          description1:
            "Il riscaldamento globale è l'aumento della temperatura media della Terra a causa delle emissioni di gas serra prodotte dalle attività umane. È importante ridurre le emissioni, promuovere l'energia rinnovabile e adottare pratiche sostenibili per proteggere il nostro pianeta.",
          description2:
            "Dati sull'anidride carbonica (CO2) presente nell'atmosfera terrestre dagli anni passati all'anno attuale.",
          description3:
            "Dati sulle variazioni di temperatura dagli anni passati all'anno attuale.",
          description4:
            "Dati sul metano presente nell'atmosfera terrestre dagli anni passati all'anno attuale.",
          description5:
            "Dati sull'azoto (NO2) presente nell'atmosfera terrestre dagli anni passati all'anno attuale",
          description6:
            "Dati sul ghiaccio Artico presente nelle regioni Artiche e Antartiche dagli anni passati all'anno attuale",
          co2description:
            "Il CO2 è un gas serra che contribuisce al riscaldamento globale. Le attività umane, come la combustione di combustibili fossili, aumentano le concentrazioni di CO2 nell'atmosfera.",
          temperaturedescription:
            "L'aumento delle temperature globali è causato dall'aumento delle emissioni di gas serra e ha gravi conseguenze sull'ambiente e sulla vita sulla Terra. È fondamentale ridurre le emissioni e adottare pratiche sostenibili per affrontare questo problema.",
          methanedescription:
            "Il metano è un potente gas serra che contribuisce al cambiamento climatico. Ridurre le sue emissioni è fondamentale per combattere il riscaldamento globale.",
          no2description:
            "Il diossido di azoto (NO2), è un inquinante atmosferico prodotto principalmente dalle attività umane, come il traffico veicolare e l'industria. È associato a problemi respiratori e può contribuire alla formazione dell'inquinamento atmosferico e all'effetto serra.",
          polaricedescription:
            "Il ghiaccio polare è una massa di ghiaccio che si forma nelle regioni polari, come l'Artico e l'Antartide. È un elemento chiave per il clima globale e la sua diminuzione ha gravi conseguenze per l'ecosistema e il livello del mare.",
          methane: "Metano",
          polarice: "Ghiaccio artico",
          graph: "Grafico",
          load: "Carica Grafico",
          dark: "Modalità Scura",
          light: "Modalità Chiara",
          text: "Contattami",
          error: "Pagina non trovata",
          page404: "La pagina che stai cercando non è disponibile."
        },
      },
    },
  });

export default i18next;
