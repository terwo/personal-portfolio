"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="absolute top-0 right-0 p-8 z-10">
      <ul className="flex items-center space-x-10">
        <li>
          <Link
            href="/"
            className={`text-white hover:text-primary-200 transition-colors ${
              pathname === "/" ? "text-primary-200" : ""
            }`}
          >
            {t.nav.home}
          </Link>
        </li>
        <li>
          <Link
            href="/translations"
            className={`text-white hover:text-primary-200 transition-colors ${
              pathname === "/translations" ? "text-primary-200" : ""
            }`}
          >
            {t.nav.translations}
          </Link>
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
