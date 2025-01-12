import React from "react";

const About = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-navy-600 to-navy-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-6">
            <h2 className="text-3xl font-bold mb-6 text-peach-100">About Me</h2>
            <p className="text-lg text-lavender-100 mb-4">
              The time I interpreted for my mother at the hospital with my
              nurses in high school was one of the most fulfilling moments in my
              life. It was then I realized to always value the interpersonal
              connections in my life, and that I wanted to do work that allowed
              people to deeply connect with each other.
            </p>
            <p className="text-lg text-lavender-100 mb-4">
              Naturally, language is the universal medium that allows people to
              communicate, and I want to focus on researching the ways in which
              people can learn language-specific nuances more effectively, and
              the computer systems that can assist in this effort.
            </p>
            <p className="text-lg text-lavender-100">
              My hobbies include watching comedy skits on Youtube, listening to
              sappy Chinese music, going on walks at night, and of course,
              learning languages. More info about my extracurriculars can be
              found on my Linkedin.
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
              <figcaption className="text-sm text-lavender-200 mt-2 italic">
                An excerpt from the Man&apos;yōshū, found in Beppu, Japan
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
