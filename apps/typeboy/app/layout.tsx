import "@repo/ui/globals.css";
import { Inter } from "next/font/google";
import React from "react";

import { Providers } from "./provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeBoy",
  description:
    "TypeBoy is a simple typing practice app that helps you improve your typing speed and accuracy.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
