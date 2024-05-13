import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Analytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panabu",
  description: "Panabu's landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
