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
  description:
    "A Easy to integrate Modern , Optimized, Responsive Template by AahrbitX",
  authors: [{ name: "AahrbitX" }],
  creator: "AahrbitX",
  keywords: [
    "AahrbitX",
    "Moderno",
    "Template",
    "NextJS",
    "ReactJS",
    "TailwindCSS",
    "Typescript",
  ],
  openGraph: {
    title: "Moderno Template",
    description:
      "A Easy to integrate Modern , Optimized, Responsive Template by AahrbitX",
    url: "https://aahrbitx.com",
    siteName: "Moderno Template",
    images: [
      {
        url: "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/meta_image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moderno Template",
    description:
      "A Easy to integrate Modern , Optimized, Responsive Template by AahrbitX",
    images: [
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/meta_image.png",
    ],
  },
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
