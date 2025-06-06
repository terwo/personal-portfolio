"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

const About = () => {
  const { language } = useLanguage();
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];
  const t = translations[language];

  return (
    <section className={`relative py-16 bg-gradient-to-b from-${theme.colors.background[600]} to-${theme.colors.background[500]}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-6">
            <h2 className={`text-3xl font-bold mb-6 text-${theme.colors.secondary[100]}`}>{t.about.title}</h2>
            <p className={`text-lg text-${theme.colors.accent[100]} mb-4`}>
              {t.about.paragraph1}
            </p>
            <p className={`text-lg text-${theme.colors.accent[100]} mb-4`}>
              {t.about.paragraph2}
            </p>
            <p className={`text-lg text-${theme.colors.accent[100]}`}>
              {t.about.paragraph3}
            </p>
          </div>

          {/* Single Image */}
          <div className="w-full md:w-1/2">
            <figure className="text-center">
              <img
                src="/images/manyoushuu.png"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg object-cover mb-2"
              />
              <figcaption className={`text-sm text-${theme.colors.accent[200]} mt-2 italic`}>
                {t.about.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
