import Logos from "./components/logos";
import Navbar from "./components/navbar";
import TimeAndLocation from "./components/timeAndLocation";
import "./globals.css";

export const metadata = {
  title: "1107",
  description: "Lucca DeBonis Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logos/>
        <Navbar/>
        {children}
        <TimeAndLocation/>
      </body>
    </html>
  );
}
