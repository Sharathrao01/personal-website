import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sharath S Rao",
  description:
    "GenAI Systems Engineer & Technical Leader — builds systems that hold up, in production, on a team, and in the ground.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-body text-ink bg-bg">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
