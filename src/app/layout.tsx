import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
  description: "The Kahlert Café is an inclusive community café in Sparks, MD providing meaningful employment and culinary training for adults with intellectual and developmental disabilities. Fresh, locally sourced food and specialty coffee with purpose.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    description: "The Kahlert Café is an inclusive community café in Sparks, MD providing meaningful employment and culinary training for adults with intellectual and developmental disabilities. Fresh, locally sourced food and specialty coffee with purpose.",
    images: [
      {
        url: "/tkc-web-preview.png",
        width: 1200,
        height: 630,
        alt: "The Kahlert Café",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    description: "The Kahlert Café is an inclusive community café in Sparks, MD providing meaningful employment and culinary training for adults with intellectual and developmental disabilities.",
    images: ["/tkc-web-preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
