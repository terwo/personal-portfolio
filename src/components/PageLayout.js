"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";

const PageLayout = ({ children, heroHeight = "h-screen", heroContent }) => {
  const [showBackground, setShowBackground] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const backgroundTimer = setTimeout(() => setShowBackground(true), 100);
    const contentTimer = setTimeout(() => setShowContent(true), 500);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-navy-600">
      <div className={`relative ${heroHeight}`}>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/images/sunset.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 70%, rgba(28, 42, 58, 0.7) 85%, rgba(28, 42, 58, 1) 100%)",
            }}
          />
        </div>

        <NavBar />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {heroContent}
        </div>
      </div>

      {children}
    </div>
  );
};

export default PageLayout;
