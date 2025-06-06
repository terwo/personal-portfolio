import { Lato } from "next/font/google";
import { LoadingProvider } from "../context/LoadingContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Franklin Ma's Portfolio",
  description: "About Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
