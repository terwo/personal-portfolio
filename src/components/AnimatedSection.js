import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${className}`}>
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
