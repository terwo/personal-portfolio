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

export default function Home() {
  const { hasLoadedInitially, setHasLoadedInitially } = useLoading();
  const [isLoading, setIsLoading] = useState(!hasLoadedInitially);

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
        <h1 className="text-8xl font-bold mb-2 text-peach-100">Hi there!</h1>
        <p className="py-8 text-2xl text-lavender-200">
          My name is Franklin Ma, a Cognitive Systems undergraduate in the
          Linguistics stream at the University of British Columbia.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full border-4 border-peach-400"
        />
      </div>
    </div>
  );

  return (
    <PageLayout heroContent={heroContent}>
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
    </PageLayout>
  );
}
