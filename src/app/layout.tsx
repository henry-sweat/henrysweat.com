import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import React from "react";
import TerminalHeader from "@/components/ui/terminal-header";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Sweat",
  description: "my personal site",
};

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
