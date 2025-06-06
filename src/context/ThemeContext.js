"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  sunset: {
    name: "sunset",
    colors: {
      primary: {
        100: "#BABCD9",
        200: "#516DA6",
        300: "#2D3C59",
        400: "#F2916D",
        500: "#D9756C",
      },
      secondary: {
        100: "#FFF0EB",
        200: "#FFD3C2",
        300: "#FFB69E",
        400: "#FF967A",
        500: "#F2916D",
        600: "#D9756C",
      },
      background: {
        100: "#E6E9F0",
        200: "#B3BCCC",
        300: "#8190A9",
        400: "#516DA6",
        500: "#2D3C59",
        600: "#1C2A3A",
        700: "#0D1721",
      },
      accent: {
        100: "#F0F1F9",
        200: "#DADDF0",
        300: "#BABCD9",
        400: "#9A9CC2",
        500: "#7A7DAC",
        600: "#5A5E95",
      },
    },
  },
  sakura: {
    name: "sakura",
    colors: {
      primary: {
        100: "#fdf7f8",
        200: "#f9d5db",
        300: "#f4b8c2",
        400: "#ef9aa9",
        500: "#ea7d90",
      },
      secondary: {
        100: "#f7f9f4",
        200: "#dde5c7",
        300: "#c7d4a5",
        400: "#b2c483",
        500: "#9cb361",
        600: "#86a33f",
      },
      background: {
        100: "#f0f1f9",
        200: "#c5cae9",
        300: "#9fa8da",
        400: "#7986cb",
        500: "#3f51b5",
        600: "#303f9f",
        700: "#1a237e",
      },
      accent: {
        100: "#e8eaf6",
        200: "#c5cae9",
        300: "#9fa8da",
        400: "#7986cb",
        500: "#3f51b5",
        600: "#303f9f",
      },
    },
  },
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("sunset");

  const toggleTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([colorType, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        root.style.setProperty(`--color-${colorType}-${shade}`, value);
      });
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 