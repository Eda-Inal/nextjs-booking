import { Inter, Bitter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bitter.variable} ${lora.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
