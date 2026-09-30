import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/spotlight";
import { themeScript } from "@/components/theme-toggle";

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
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-ink bg-bg leading-relaxed">
        <Backdrop />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}

// Slow-drifting moss and saffron glows over a fading dot grid.
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute -left-[10%] -top-[20%] size-[55vmax] animate-drift-a rounded-full bg-moss-400/[0.09] blur-[120px] dark:bg-moss-300/[0.07]" />
      <div className="absolute -right-[15%] top-[30%] size-[45vmax] animate-drift-b rounded-full bg-saffron-300/[0.08] blur-[130px] dark:bg-saffron-400/[0.05]" />
    </div>
  );
}
