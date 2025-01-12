import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const experiences = {
    education: [
      "Undergraduate in Cognitive Systems, Emphasis in Language, at UBC",
      "1-year exchange at UTokyo",
    ],
    work: [
      "Project Assistant, UBC Cloud Innovation Centre",
      "Part-time Software Developer, Sparkle AI",
      "Freelance Web Developer, Riipen program",
    ],
    research: [
      "Research Assistant (NSERC), Human-AI Interaction Lab, under Dr. Cristina Conati",
      "Research Assistant, SLIME Lab, under Dr. Jian Zhu",
    ],
    teaching: [
      "CPSC110 TA (2021W1, 2021W2, 2024W1)",
      "CPSC210 TA (2024S2)",
      "CPSC320 TA (2024W2)",
      "JAPN100 TA (2023S)",
      "JAPN200 TA (2024S1)",
      "Part-time English Conversation Tutor, Ouchi International",
      "Chinese Oral Practice Volunteer (2020W1)",
    ],
    extracurricular: [
      "Applied AI Subteam Member, UBC Agrobot",
      "First-Year Representative (2020), Cultural Team Member (2021), UBC Japan Association",
      "Helper, Komaba Association for Children",
      "UBC Arts Co-op, Japan Association, Japan Career Network, Cognitive Systems Society, COGS Tri-mentoring Program",
      "UTokyo Cloud9, Piano Club, Volleyball Part",
    ],
  };

  const floatingImages = [
    {
      src: "/images/ouchi_logo.png",
      alt: "Ouchi International",
      link: "https://ouchi-inter.jp/",
      position: { top: "80%", left: "70%" },
    },
    {
      src: "/images/sparkle_space.png",
      alt: "Sparkle AI",
      link: "https://www.sparkleai.co.jp/",
      position: { top: "35%", left: "70%" },
    },
    {
      src: "/images/utokyo_logo.png",
      alt: "University of Tokyo",
      link: "https://www.u-tokyo.ac.jp/en/",
      position: { top: "5%", left: "10%" },
    },
    {
      src: "/images/agrobot_space.jpg",
      alt: "UBC Agrobot",
      link: "https://ubcagrobot.com/",
      position: { top: "90%", left: "10%" },
    },
    {
      src: "/images/kodomo_kai.png",
      alt: "Kodomo Kai",
      link: "https://komabakodomokaihp.wixsite.com/komabakodomokai",
      position: { top: "50%", left: "10%" },
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
              {renderSection("Research", experiences.research)}
              {renderSection("Teaching", experiences.teaching)}
              {/* {renderSection("Extracurricular", experiences.extracurricular)} */}
            </div>
            <div className="hidden md:block md:w-1/2 mt-4 md:mt-0 relative h-[700px]">
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
