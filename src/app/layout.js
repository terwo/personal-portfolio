import { Inter } from "next/font/google";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { LoadingProvider } from "../context/LoadingContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mplusrounded1c",
});

export const metadata = {
  title: "Franklin Ma's Portfolio",
  description: "About Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mPlusRounded1c.variable} font-sans`}>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
