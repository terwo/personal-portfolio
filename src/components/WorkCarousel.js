"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const WorkCarousel = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const projects = t.list;

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
    <div className="w-full py-16 bg-secondary-700 bg-gradient-to-b from-secondary-700 to-secondary-600">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6 py-4 text-primary-100 border-b-4 border-primary-400 inline-block">
          {t.title}
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_33.33%] px-2"
                >
                  <Link href={project.link} passHref>
                    <div className="bg-secondary-500 rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:scale-105 transition-transform duration-300">
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
                        <h3 className="text-xl font-semibold mb-2 text-primary-200">
                          {project.title}
                        </h3>
                        <p className="text-md text-accent-200">
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
                    ? "border-primary-200 text-primary-200 hover:border-primary-400 hover:text-primary-400"
                    : "border-primary-200/50 text-primary-200/50 cursor-not-allowed"
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
                      ? "border-primary-200"
                      : "border-primary-200/50"
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
                    ? "border-primary-200 text-primary-200 hover:border-primary-400 hover:text-primary-400"
                    : "border-primary-200/50 text-primary-200/50 cursor-not-allowed"
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
