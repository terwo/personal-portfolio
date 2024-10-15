import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const experiences = {
    education: [
      "5th-year Cognitive Systems student at UBC",
      "Part of the Applied AI Subteam of UBC Agrobot",
      "Completed a 1-year exchange at the University of Tokyo",
    ],
    work: [
      "Project Assistant at UBC Cloud Innovation Centre",
      "Part-time Software Developer at Sparkle AI",
      "Student Researcher at Human-AI Interaction Lab @ UBC with Doctor Conati",
      "Freelance Web Developer through the Riipen program",
      "Teaching Assistant for CPSC110, CPSC210, JAPN100, and JAPN200 at UBC",
      "English Conversation Tutor for children aged 5-12 in Japan",
    ],
  };

  const floatingImages = [
    {
      src: "/images/ouchi_logo.png",
      alt: "Experience 1",
      link: "https://example1.com",
      position: { top: "10%", left: "10%" },
    },
    {
      src: "/images/sparkle_logo.jpg",
      alt: "Experience 2",
      link: "https://example2.com",
      position: { top: "40%", left: "60%" },
    },
    {
      src: "/images/utokyo_logo.png",
      alt: "Experience 3",
      link: "https://example3.com",
      position: { top: "70%", left: "30%" },
    },
  ];

  const renderSection = (title, items) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-peach-300 mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-lavender-100">
        {items.map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const FloatingImage = ({ src, alt, link, position }) => (
    <Link href={link} passHref>
      <div
        className="floating-image absolute transition-all duration-300 ease-in-out cursor-pointer hover:scale-125 z-10 hover:z-20"
        style={{
          animation: `float 5s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          top: position.top,
          left: position.left,
          transform: "translate3d(0,0,0)", // Enable hardware acceleration
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="rounded-md shadow-lg pointer-events-none"
        />
      </div>
    </Link>
  );

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-navy-600 to-navy-700 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-600 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 py-4 text-center relative text-peach-100">
          EXPERIENCE
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-peach-400 mt-2"></span>
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-6 space-y-6">
              {renderSection("Education", experiences.education)}
              {renderSection("Work Experience", experiences.work)}
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 relative h-[600px]">
              {floatingImages.map((img, index) => (
                <FloatingImage key={index} {...img} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
