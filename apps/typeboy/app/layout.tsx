import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Dialog } from "@repo/ui";
import { Inter } from "next/font/google";
import Providers from "./provider";
import React from "react";

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
          <Dialog>{modal}</Dialog>
        </Providers>
      </body>
    </html>
  );
}
