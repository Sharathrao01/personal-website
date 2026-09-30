import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/spotlight";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Sharath S Rao — GenAI Systems Engineer",
  description:
    "GenAI systems engineer and technical leader. Multi-agent LLM systems, RAG, and evaluation-driven development — built to hold up in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${instrument.variable}`}
    >
      <body className="font-sans text-ink bg-bg leading-relaxed">
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
