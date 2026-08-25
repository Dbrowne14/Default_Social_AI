import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";
import LoaderStrip from "@/components/ui/LoaderStrip";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import { ScrollToTopButton } from "@/components/layout/redirectButton/ScrollToTopButton";
import { getSiteSettings } from "@/lib/content/site";
import { navigationItems } from "@/lib/navigation";
import { serif, sans, mono, poppins, dmSans } from "@/lib/fonts";

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
  const siteSettings = await getSiteSettings();
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} ${poppins.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <LoaderStrip />
          <Navigation
            siteSettings={siteSettings}
            navigation={navigationItems}
          />
        </header>
        <main>{children}</main>
        <footer>
          <Footer siteSettings={siteSettings} navigation={navigationItems} />
        </footer>
        <ScrollToTopButton />
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
