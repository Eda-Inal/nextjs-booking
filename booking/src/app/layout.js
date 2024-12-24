import { Inter, Bitter, Lora,Sacramento ,Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";
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
const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
   weight: "400"
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
        <title>Hotel Paradise - Luxury Stay & Beach Views | Book Now</title>
        <meta
          name="description"
          content="Welcome to Hotel Paradise, where luxury meets comfort. Explore our premium hotel services, including free WiFi, fine dining, easy booking, and beautiful beach views."
        />
        <meta name="keywords" content="hotel, luxury, booking, free wifi, beach, restaurant, comfortable stay" />
        <meta name="author" content="Hotel Paradise" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hotel Paradise - Luxury and Comfort" />
        <meta
          property="og:description"
          content="Discover premium hotel services and enjoy a luxurious stay at Hotel Paradise. From free WiFi to fine dining, we offer everything to make your stay unforgettable."
        />
        <meta property="og:image" content="/hotel.jpg" />
        <meta property="og:url" content="https://hotelparadise.example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://hotelparadise.example.com" />
      </Head>
      <body
        className={`${inter.variable} ${bitter.variable} ${lora.variable} antialiased ${sacramento.variable}`} 
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
