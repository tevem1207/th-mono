import { ThemeProvider } from "@/components";

import type { Metadata } from "next";

import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "TH's Portfolio",
  description: "A portfolio site built with Next.js and Tailwind CSS",
  generator: "HwangTaehee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
