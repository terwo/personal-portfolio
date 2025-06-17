"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-8 left-8 z-20 px-4 py-2 bg-primary-400 text-background-600 rounded hover:bg-primary-300 transition-colors"
    >
      {language === "en" ? "日本語" : "English"}
    </button>
  );
};

export default LanguageToggle;
