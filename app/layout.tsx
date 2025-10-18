// Modules imports
import type { Metadata } from "next";
import { ReactNode } from "react";

// Fonts import
import { JetBrains_Mono } from "next/font/google";

// Styles import
import "./globals.css";
import Header from "@/components/header/Header";
import PageTransition from "@/components/animation/PageTransition";
import StairTransition from "@/components/animation/StairTransition";

// Font configuration
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Portfolio - Sinisa Stojanovic",
  description: "Sinisa Stojanovic's personal portfolio website.",
  icons: {
    // todo: replace with your favicon icon and path
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
