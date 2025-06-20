import React from "react";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";
import { HiExternalLink } from "react-icons/hi";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-secondary-600 to-secondary-700 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-600 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-8 py-4 relative text-primary-100">
            {t.title}
            <span className="block w-64 h-0.5 bg-primary-400 mt-2"></span>
          </h2>

          {/* Full-width*/}
          <div className="mb-12">
            <p className="text-lg text-accent-100 leading-relaxed mb-6">
              {t.paragraph1}
            </p>
            <p className="text-lg text-accent-100 leading-relaxed mb-6">
              {t.paragraph2}
            </p>
            <p className="text-lg text-accent-100 leading-relaxed">
              {t.paragraph3}
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Research Interests */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-300 mb-6">
                {t.researchTitle}
              </h3>
              <div className="space-y-6">
                {t.researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary-400 pl-4"
                  >
                    <h4 className="font-semibold text-primary-200 mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-accent-100 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-300 mb-4">
                {t.teaching}
              </h3>
              <p className="text-accent-100 text-sm leading-relaxed mb-6 italic">
                {t.teachingPhilosophy}
              </p>
              <div className="space-y-3">
                {t.teachingCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-secondary-500/30 rounded-lg p-3 border border-secondary-400/20"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-primary-300 font-semibold">
                          {course.code}
                        </span>
                        <p className="text-accent-100 text-sm mt-1">
                          {course.name}
                        </p>
                      </div>
                      <span className="text-xs text-accent-200 bg-secondary-400/30 px-2 py-1 rounded">
                        {course.terms}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Link Section */}
          <div className="border-t border-secondary-400/30 pt-8">
            <p className="text-lg text-accent-100 leading-relaxed">
              {t.cvParagraph} {}
              <span>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center text-primary-300 hover:text-primary-200 font-semibold underline decoration-primary-400 hover:decoration-primary-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cvLinkText}
                  <HiExternalLink className="w-4 h-4 ml-1" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
