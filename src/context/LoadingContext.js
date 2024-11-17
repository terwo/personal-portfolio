"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  hasLoadedInitially: false,
  setHasLoadedInitially: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [hasLoadedInitially, setHasLoadedInitially] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ hasLoadedInitially, setHasLoadedInitially }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
