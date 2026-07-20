import {
  Poppins,
  DM_Sans,
  Instrument_Serif,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
