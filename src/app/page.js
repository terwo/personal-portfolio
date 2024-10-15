"use client";

import { useState } from "react";
import LoadingPage from "../components/LoadingPage";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import WorkCarousel from "../components/WorkCarousel";
import About from "../components/About";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AnimatedSection className="bg-navy-600">
        <Experience />
      </AnimatedSection>
      <AnimatedSection className="bg-navy-700">
        <WorkCarousel />
      </AnimatedSection>
      <AnimatedSection className="bg-navy-600">
        <About />
      </AnimatedSection>
      <AnimatedSection className="bg-navy-500">
        <Footer />
      </AnimatedSection>
    </div>
  );
}
