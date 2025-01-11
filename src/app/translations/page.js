"use client";

import PageLayout from "../../components/PageLayout";
import AnimatedSection from "../../components/AnimatedSection";

const TranslationsPage = () => {
  const translations = [
    {
      title: "沼地",
      author: "Akutagawa Ryuunosuke",
      description:
        "A short story that I believe doesn't have enough recognition. I am particularly fond of the structure of this piece. My main challenges included differentiating between 絵描き and 画家, and naturally combining clauses in ways natural for English.",
      pdfPath: "/translations/swampland_translation.pdf",
    },
    {
      title: "祖母の教訓",
      author: "Makino Shinichi",
      description:
        "A reflective narrative on the author's grandmother. I found it challenging to map the different ways of representing quotations to English. My favourite part is imagining the author smiling at the end as he looks back at his memories with his grandmother.",
      pdfPath: "/translations/grandmothers-lesson_translation.pdf",
    },
  ];

  const glossaries = [
    { title: "Glossary 1", path: "/glossaries/glossary1.pdf" },
    { title: "Glossary 2", path: "/glossaries/glossary2.pdf" },
    { title: "Glossary 3", path: "/glossaries/glossary3.pdf" },
    { title: "Glossary 4", path: "/glossaries/glossary4.pdf" },
  ];

  const heroContent = (
    <h1 className="text-6xl font-bold text-peach-100">Translations</h1>
  );

  return (
    <PageLayout heroHeight="h-[40vh]" heroContent={heroContent}>
      <AnimatedSection className="bg-navy-600">
        <div className="container px-8 py-12">
          <p className="text-lg text-white max-w-3xl mb-6">
            At the University of Tokyo, I took classes on translation and
            interpretation. As part of my goal to democratize both skills as an
            exercise towards fluency, I translate to familiarize myself with the
            nuances of the art. I hope this will serve me in furthering my
            research of developing systems that can understand word connotations
            and context, and in turn, help language learners communicate
            cross-culturally more meaningfully.
          </p>
        </div>
      </AnimatedSection>

      {/* Translations Section */}
      <AnimatedSection className="bg-navy-600">
        <div className="container px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-peach-100">
            Translation Projects
          </h2>
          <div className="grid gap-6 max-w-2xl">
            {translations.map((project, index) => (
              <div
                key={index}
                className="bg-navy-700 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-peach-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-lavender-200 mb-3">
                  by {project.author}
                </p>
                <p className="text-white">{project.description}</p>
                <a
                  href={project.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4
                  py-2 bg-peach-400 text-navy-800 rounded hover:bg-peach-300
                  transition-colors inline-block"
                >
                  Open PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Glossary Section */}
      <AnimatedSection className="bg-navy-600">
        <div className="container px-8 py-12">
          <h2 className="text-3xl font-bold mb-6 text-peach-100">Glossary</h2>
          <p className="text-lg text-white max-w-3xl mb-6">
            Professor Kaku Hanako told me that our glossary assignments would be
            one of the things she hopes we take back with us after the course,
            as a personalized treasure. I am sharing mine here, in the hopes
            that it may be helpful to someone else.
          </p>
          <div className="flex flex-col space-y-4">
            {glossaries.map((glossary, index) => (
              <a
                key={index}
                href={glossary.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-400 hover:underline inline-flex items-center"
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
