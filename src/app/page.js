"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import LoadingPage from "../components/LoadingPage";
import Experience from "../components/Experience";
import WorkCarousel from "../components/WorkCarousel";
import About from "../components/About";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { useLoading } from "../context/LoadingContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

export default function Home() {
  const { hasLoadedInitially, setHasLoadedInitially } = useLoading();
  const [isLoading, setIsLoading] = useState(!hasLoadedInitially);
  const { language } = useLanguage();
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];
  const t = translations[language];

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoadedInitially(true);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  const heroContent = (
    <div className="container mx-auto px-8 flex items-center">
      <div className="w-1/2 pr-8">
        <h1 className="text-8xl font-bold mb-2 text-primary-100">{t.hero.greeting}</h1>
        <p className="py-8 text-2xl text-accent-200">
          {t.hero.introduction}
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src="/images/profile_blue.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full border-4 border-secondary-400"
        />
      </div>
    </div>
  );

  return (
    <PageLayout heroContent={heroContent}>
      <AnimatedSection className="bg-background-600">
        <Experience />
      </AnimatedSection>
      <AnimatedSection className="bg-background-700">
        <WorkCarousel />
      </AnimatedSection>
      <AnimatedSection className="bg-background-600">
        <About />
      </AnimatedSection>
      <AnimatedSection className="bg-background-500">
        <Footer />
      </AnimatedSection>
    </PageLayout>
  );
}
