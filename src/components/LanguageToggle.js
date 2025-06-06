"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed top-8 left-8 z-20 px-4 py-2 bg-${theme.colors.secondary[400]} text-${theme.colors.background[600]} rounded hover:bg-${theme.colors.secondary[300]} transition-colors`}
    >
      {language === "en" ? "日本語" : "English"}
    </button>
  );
};

export default LanguageToggle; 