import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";

const lato = Lato({
  weight: ["300"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golf Dashboard APP",
  description: "Golf Dashboard APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        {children}
      </body>
    </html>
  );
}
