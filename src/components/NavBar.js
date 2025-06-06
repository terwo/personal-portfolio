"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

const NavBar = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];
  const t = translations[language];

  return (
    <nav className="absolute top-0 right-0 p-8 z-10">
      <ul className="flex space-x-10">
        <li>
          <Link
            href="/"
            className={`text-white hover:text-${theme.colors.secondary[200]} transition-colors ${
              pathname === "/" ? `text-${theme.colors.secondary[200]}` : ""
            }`}
          >
            {t.nav.home}
          </Link>
        </li>
        <li>
          <Link
            href="/translations"
            className={`text-white hover:text-${theme.colors.secondary[200]} transition-colors ${
              pathname === "/translations" ? `text-${theme.colors.secondary[200]}` : ""
            }`}
          >
            {t.nav.translations}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
