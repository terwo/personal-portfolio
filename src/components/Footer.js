"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-6 text-accent-100">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/franklinma27/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/terwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-300 transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="mt-4 text-accent-300">
          {t.footer.copyright.replace("{year}", new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
