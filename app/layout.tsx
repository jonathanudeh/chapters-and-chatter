import type { Metadata } from "next";
import { Geist, Geist_Mono, Gaegu, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import the handwriting font for annotations/doodles
const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
});

// Import a serif font for the bold headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Chapters & Chatters",
  description: "A community for bookworms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${gaegu.variable} 
          ${playfair.variable} 
          antialiased bg-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
