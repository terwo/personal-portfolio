"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import LoadingPage from "../components/LoadingPage";
import AboutMe from "../components/AboutMe";
import WorkCarousel from "../components/WorkCarousel";
import Motivations from "../components/Motivations";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { useLoading } from "../context/LoadingContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./animations.css";

export default function Home() {
  const { hasLoadedInitially, setHasLoadedInitially } = useLoading();
  const [isLoading, setIsLoading] = useState(!hasLoadedInitially);
  const { language } = useLanguage();
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
        <div className="animate-name-cycle">
          <h1 className="text-8xl font-bold mb-2 text-primary-100">
            Franklin Ma
          </h1>
        </div>
        <div className="flex gap-6 text-3xl">
          <a
            href="https://github.com/terwo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-200 hover:text-primary-100 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/franklinma27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-200 hover:text-primary-100 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:franklinming.m27@icloud.com"
            className="text-accent-200 hover:text-primary-100 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://devpost.com/terwo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-200 hover:text-primary-100 transition-colors"
          >
            Devpost
          </a>
        </div>
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
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection className="bg-background-700">
        <WorkCarousel />
      </AnimatedSection>
      <AnimatedSection className="bg-background-600">
        <Motivations />
      </AnimatedSection>
      <AnimatedSection className="bg-background-500">
        <Footer />
      </AnimatedSection>
    </PageLayout>
  );
}
