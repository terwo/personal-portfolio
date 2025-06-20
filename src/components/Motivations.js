"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Image from "next/image";

const Motivations = () => {
  const { language } = useLanguage();
  const t = translations[language].motivations;

  return (
    <section className="relative py-16 bg-gradient-to-b from-secondary-600 to-secondary-500">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6 py-4 relative text-primary-100">
          {t.title}
          <span className="block w-64 h-0.5 bg-primary-400 mt-2"></span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 pr-0 md:pr-6">
            <p className="text-lg text-accent-100 mb-4">{t.paragraph1}</p>
            <p className="text-lg text-accent-100 mb-4">{t.paragraph2}</p>
            <p className="text-lg text-accent-100">{t.paragraph3}</p>
          </div>

          {/* Single Image */}
          <div className="w-full md:w-1/2">
            <figure className="text-center">
              <Image
                width={300}
                height={500}
                src="/images/manyoushuu.png"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg object-cover mb-2"
              />
              <figcaption className="text-sm text-accent-200 mt-2 italic">
                {t.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivations;
