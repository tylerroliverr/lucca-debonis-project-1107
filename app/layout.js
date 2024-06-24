import Cursor from "./components/cursor";
import Logos from "./components/logos";
import Navbar from "./components/navbar";
import TimeAndLocation from "./components/timeAndLocation";
import "./globals.css";
import Script from "next/script";
import { WelcomeProvider } from "./components/3dLogoContext";

export const metadata = {
  title: "1107",
  description: "Lucca DeBonis Portfolio",
};

export const revalidate = 600;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WelcomeProvider>
          <Cursor />
          <Logos />
          <Navbar />
          {children}
          <TimeAndLocation />
        </WelcomeProvider>
        <Script defer src="/cursorScript.js" />
      </body>
    </html>
  );
}
