import { Inter, Bitter, Lora, Sacramento, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap"
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap"
});
const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${bitter.variable} ${lora.variable} antialiased ${sacramento.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
