import type { Metadata } from "next";
import { Syne, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aswin Salish | Portfolio",
  description: "Motorsport Minimalism - High-end digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground h-full selection:bg-accent selection:text-black">
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${ibmMono.variable} min-h-screen font-body flex flex-col`}>
        <div className="noise-overlay" />
        <SmoothScroll>
          <Header />
          <nav className="h-20" /> {/* Spacer for fixed header */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
