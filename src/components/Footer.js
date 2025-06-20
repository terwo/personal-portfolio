"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-6 text-accent-100">
      <div className="container mx-auto text-center">
        <p className="mt-4 text-accent-300">
          {t.footer.copyright.replace("{year}", new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
