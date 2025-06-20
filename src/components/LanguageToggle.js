"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded overflow-hidden shadow-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2  transition-colors focus:outline-none ${
          language === "en"
            ? "bg-primary-400/70 text-secondary-600"
            : "bg-secondary-600/70 text-primary-400 hover:bg-primary-100"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-4 py-2 transition-colors focus:outline-none ${
          language === "ja"
            ? "bg-primary-400/70 text-secondary-600"
            : "bg-secondary-600/70 text-primary-400 hover:bg-primary-100"
        }`}
        aria-pressed={language === "ja"}
      >
        JA
      </button>
    </div>
  );
};

export default LanguageToggle;
