"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const originalProjects = [
  {
    id: 1,
    title: "yapyap",
    description: "An anonymous social journaling app. Winner of nwHacks 2024.",
    image: "/images/yapyap.jpg",
    link: "https://devpost.com/software/yapyap-anonymous-social-journaling-app",
  },
  {
    id: 2,
    title: "You're Not Trash!",
    description:
      "A web game to help users learn about recycling. Winner of StormHacks 2024.",
    image: "/images/yourenottrash.jpg",
    link: "https://devpost.com/software/you-re-not-trash",
  },
  {
    id: 3,
    title: "Invasive Plants Identification App",
    description:
      "A photo-identification mobile application, available on both iOS and Android devices. Made with the UBC CIC Team.",
    image: "/images/invasive_plants.jpg",
    link: "https://cic.ubc.ca/project/invasive-plants-identification-app/",
  },
  {
    id: 4,
    title: "NoiseTracker Web Application",
    description:
      "A client application coupled with a cloud-native web application to enable information sharing of underwater sound levels.",
    image: "/images/noisetracker.jpg",
    link: "https://cic.ubc.ca/project/noisetracker-web-application/",
  },
  {
    id: 5,
    title: "Institutional Grant Data Analytics",
    description:
      "A cloud-native web application to modernize the way institutional grant data is analyzed at UBC.",
    image: "/images/tlef.jpeg",
    link: "https://cic.ubc.ca/project/modernizing-institutional-grant-data-analytics-using-cloud-services/",
  },
  {
    id: 6,
    title: "Sooper Tooder",
    description:
      "A mobile app connecting students with tutors to democratize education for all. Submission for Hack The North 2024.",
    image: "/images/soopertooder.jpg",
    link: "https://devpost.com/software/sooper-tooder",
  },
  {
    id: 7,
    title: "Towerist",
    description: "A tower defense game made with Godot for GMTK Game Jam 2024.",
    image: "/images/towerist.png",
    link: "https://keveenwong.itch.io/towerist",
  },
  {
    id: 8,
    title: "MnemoMingle",
    description:
      "A Chrome extension where xample sentences, mnemonics, and images are generated in response to a user's highlighted text.",
    image: "/images/mnemomingle.png",
    link: "https://github.com/terwo/mnemo-mingle/tree/main",
  },
];

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const autoScrollTimerRef = useRef(null);
  const projects = [
    ...originalProjects.slice(-3),
    ...originalProjects,
    ...originalProjects.slice(0, 3),
  ];

  const moveCarousel = (dir) => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + dir);
    setDirection(dir);
  };

  const nextProject = () => moveCarousel(1);
  const prevProject = () => moveCarousel(-1);

  useEffect(() => {
    let intervalId;
    if (isAutoScrolling) {
      intervalId = setInterval(() => moveCarousel(direction), 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoScrolling, direction]);

  const handleInteraction = () => {
    setIsAutoScrolling(false);
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(
      () => setIsAutoScrolling(true),
      3000
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= originalProjects.length + 3) {
      setCurrentIndex(3);
    } else if (currentIndex < 3) {
      setCurrentIndex(originalProjects.length + 2);
    }
    setIsAutoScrolling(true);
  };

  const carouselStyle = {
    transform: `translateX(-${(currentIndex - 1) * 33.33}%)`,
    transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
  };

  return (
    <div className="w-full py-16 relative bg-navy-700 bg-gradient-to-b from-navy-700 to-navy-600">
      <div className="max-w-6xl mx-auto px-5 relative">
        <h2 className="text-3xl font-bold mb-6 py-4 text-center relative text-peach-100">
          PROJECTS
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-peach-400 mt-2"></span>
        </h2>
        <div className="flex py-4 items-center">
          <button
            className="mr-4 bg-peach-500 text-navy-700 px-4 py-2 rounded hover:bg-peach-400 transition-colors"
            onClick={() => {
              prevProject();
              handleInteraction();
            }}
            disabled={isTransitioning}
          >
            ←
          </button>
          <div
            className="flex-grow overflow-hidden"
            onMouseEnter={handleInteraction}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <div
              className="flex"
              style={carouselStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="w-1/3 flex-shrink-0 px-2"
                >
                  <Link href={project.link} passHref>
                    <div className="bg-navy-500 rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-peach-200 h-12">
                            {project.title}
                          </h3>
                          <p className="text-lavender-200 h-48 overflow-hidden">
                            {project.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <span className="text-peach-400 hover:text-peach-300 transition-colors">
                            Learn more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <button
            className="ml-4 bg-peach-500 text-navy-700 px-4 py-2 rounded hover:bg-peach-400 transition-colors"
            onClick={() => {
              nextProject();
              handleInteraction();
            }}
            disabled={isTransitioning}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
