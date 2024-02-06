import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import React from "react";
import Header from "@/components/ui/header";

import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Sweat",
  description: "my personal site",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
