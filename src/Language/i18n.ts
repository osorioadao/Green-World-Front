import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Garbage Location System",
      description: "This system helps identify garbage piles using geolocation.",
    },
  },
  pt: {
    translation: {
      title: "Sistema de Localização de Lixo",
      description: "Este sistema ajuda a identificar amontoados de lixo usando geolocalização.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // Idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
