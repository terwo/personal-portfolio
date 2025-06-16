"use client";

import PageLayout from "../../components/PageLayout";
import AnimatedSection from "../../components/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

const TranslationsPage = () => {
  const { language } = useLanguage();
  const t = translations[language].translationsPage;

  const heroContent = (
    <h1 className="text-6xl font-bold text-secondary-100">
      {t.title}
    </h1>
  );

  return (
    <PageLayout heroHeight="h-[40vh]" heroContent={heroContent}>
      <AnimatedSection className="bg-background-600">
        <div className="container px-8 py-12">
          <p className="text-lg text-accent-100 max-w-3xl mb-6">
            {t.introduction}
          </p>
        </div>
      </AnimatedSection>

      {/* Translations Section */}
      <AnimatedSection className="bg-background-600">
        <div className="container px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-secondary-100">
            {t.projectsTitle}
          </h2>
          <div className="grid gap-6 max-w-2xl">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="bg-background-700 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-secondary-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-accent-200 mb-3">
                  by {project.author}
                </p>
                <p className="text-accent-100">{project.description}</p>
                <a
                  href={project.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-secondary-400 text-background-600 rounded hover:bg-secondary-300 transition-colors inline-block"
                >
                  {t.openPdf}
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Glossary Section */}
      <AnimatedSection className="bg-background-600">
        <div className="container px-8 py-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary-100">
            {t.glossaryTitle}
          </h2>
          <p className="text-lg text-accent-100 max-w-3xl mb-6">
            {t.glossaryIntro}
          </p>
          <div className="flex flex-col space-y-4">
            {t.glossaries.map((glossary, index) => (
              <a
                key={index}
                href={glossary.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:underline inline-flex items-center"
              >
                {glossary.title}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default TranslationsPage;
