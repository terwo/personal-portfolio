"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";

const Hero = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [shrinkHero, setShrinkHero] = useState(false);

  useEffect(() => {
    const backgroundTimer = setTimeout(() => setShowBackground(true), 100);
    const introductionTimer = setTimeout(() => setShowIntroduction(true), 500);
    const contentTimer = setTimeout(() => setShowContent(true), 1000);
    const profileTimer = setTimeout(() => setShowProfile(true), 1000);
    const shrinkTimer = setTimeout(() => setShrinkHero(true), 1500);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(introductionTimer);
      clearTimeout(contentTimer);
      clearTimeout(profileTimer);
      clearTimeout(shrinkTimer);
    };
  }, []);

  return (
    <div
      className={`relative bg-navy-600 transition-all duration-1000 ease-in-out ${
        shrinkHero ? "h-[75vh]" : "h-screen"
      }`}
    >
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
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-600"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 70%, rgba(28, 42, 58, 0.7) 85%, rgba(28, 42, 58, 1) 100%)",
          }}
        />
      </div>

      <NavBar />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-8 flex items-center">
          <div className="w-1/2 pr-8 transition-all duration-500">
            <h1
              className={`text-8xl font-bold mb-2 text-peach-100 transition-all duration-500 ${
                showIntroduction
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Hi there!
            </h1>
            <p
              className={`py-8 text-2xl text-lavender-200 transition-all duration-500 ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              My name is Franklin Ma, a Cognitive Systems undergraduate in the
              Linguistics stream at the University of British Columbia.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <div
              className={`transition-all duration-500 ${
                showProfile
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full border-4 border-peach-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
