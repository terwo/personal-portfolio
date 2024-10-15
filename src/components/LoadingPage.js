import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return Math.min(prevProgress + Math.floor(Math.random() * 6) + 5, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-navy-500 flex flex-col items-center justify-center z-50">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src="/images/turtle.gif"
          alt="Loading Turtle"
          width={128}
          height={128}
          objectFit="cover"
          priority
        />
      </div>
      <p className="text-xl font-semibold text-peach-600">
        Loading ... {progress}%
      </p>
    </div>
  );
};

export default LoadingPage;
