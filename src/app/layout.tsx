import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno, Zen_Dots } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navigation";
import SmoothScroll from "@/components/atoms/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-dots",
});

export const metadata: Metadata = {
  title: "Moderno Template",
  description: "By AahrbitX enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenDots.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
