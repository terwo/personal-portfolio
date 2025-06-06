"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToShow: 3 },
      "(max-width: 767px)": { slidesToShow: 1 },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full py-16 bg-navy-700 bg-gradient-to-b from-navy-700 to-navy-600">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6 py-4 text-center text-peach-100">
          PROJECTS
          <span className="block w-48 h-0.5 bg-peach-400 mx-auto mt-2"></span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {originalProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] md:flex-[0_0_33.33%] px-2"
                >
                  <Link href={project.link} passHref>
                    <div className="bg-navy-500 rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:scale-105 transition-transform duration-300">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={600}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                      />
                      <div className="px-3 py-5 flex-grow">
                        <h3 className="text-xl font-semibold mb-2 text-peach-200">
                          {project.title}
                        </h3>
                        <p className="text-md text-lavender-200">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 gap-2">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`
                p-2 rounded-full border-2 
                transition-colors
                ${
                  prevBtnEnabled
                    ? "border-peach-200 text-peach-200 hover:border-peach-400 hover:text-peach-400"
                    : "border-peach-200/50 text-peach-200/50 cursor-not-allowed"
                }
              `}
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="flex gap-2 mx-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 transition-opacity ${
                    index === selectedIndex
                      ? "border-peach-200"
                      : "border-peach-200/50"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`
                p-2 rounded-full border-2 
                transition-colors
                ${
                  nextBtnEnabled
                    ? "border-peach-200 text-peach-200 hover:border-peach-400 hover:text-peach-400"
                    : "border-peach-200/50 text-peach-200/50 cursor-not-allowed"
                }
              `}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
