import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";
import LoaderStrip from "@/components/ui/LoaderStrip";

import {
  Instrument_Serif,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://defaultsocial.co.uk"),
  title: {
    default: "Default Social",
    template: "%s | Default Social",
  },
  description:
    "AI-powered web development, social media, SEO, creative production and digital strategy for modern businesses.",
  openGraph: {
    title: "Default Social",
    description:
      "AI-powered web development, social media, SEO, creative production and digital strategy for modern businesses.",
    url: "/",
    siteName: "Default Social",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Default Social",
    description:
      "AI-powered web development, social media, SEO, creative production and digital strategy for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <LoaderStrip />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
