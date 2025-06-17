import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(
          prevProgress + Math.floor(Math.random() * 6) + 5,
          100
        );
        return newProgress;
      });
    }, 300);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      onLoadingComplete();
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background-500 flex flex-col items-center justify-center z-50">
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
      <p className="text-xl font-semibold text-primary-600">
        Loading ... {progress}%
      </p>
    </div>
  );
};

export default LoadingPage;
