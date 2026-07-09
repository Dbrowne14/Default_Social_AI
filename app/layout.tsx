import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";
import LoaderStrip from "@/components/ui/LoaderStrip";
import { getSiteSettings } from "@/lib/content/site";
import { navigationItems } from "@/lib/navigation";

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



export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  return {
    metadataBase: new URL(siteSettings.siteUrl),
    title: {
      default: siteSettings.siteName,
      template: `%s | ${siteSettings.siteName}`,
    },
    description: siteSettings.description,
    openGraph: {
      title: siteSettings.siteName,
      description: siteSettings.description,
      url: "/",
      siteName: siteSettings.siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings.siteName,
      description: siteSettings.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings()
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <LoaderStrip />
          <Navigation siteSettings={siteSettings} navigation={navigationItems} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer siteSettings={siteSettings} navigation={navigationItems}/>
        </footer>
      </body>
    </html>
  );
}
