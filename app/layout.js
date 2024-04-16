import Cursor from "./components/cursor";
import Logos from "./components/logos";
import Navbar from "./components/navbar";
import TimeAndLocation from "./components/timeAndLocation";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "1107",
  description: "Lucca DeBonis Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor/>
        <Logos/>
        <Navbar/>
        {children}
        <TimeAndLocation/>
        <Script defer src="/cursorScript.js"/>
      </body>
    </html>
  );
}
