"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 right-0 p-8 z-10">
      <ul className="flex space-x-10">
        <li>
          <Link
            href="/"
            className={`text-white hover:text-sakura-200 transition-colors ${
              pathname === "/" ? "text-sakura-200" : ""
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/translations"
            className={`text-white hover:text-sakura-200 transition-colors ${
              pathname === "/translations" ? "text-sakura-200" : ""
            }`}
          >
            TRANSLATIONS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
