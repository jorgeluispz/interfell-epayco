import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Post Manager - Prueba Técnica",
  description: "Gestión de posts con Next.js, React Hook Form y Atomic Design",
  verification: {
    google: "K5p4iG5sQCCc2p5jt8yc9OrSCvh6zzrtlbPQWFqGUYg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
