import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Association Wonder-Woman",
  description:
    "WONDER WOMAN est une plateforme qui permet aux femmes d'apprendre, de créer, de partager et de s'épanouir, en combinant l'autonomisation, la culture et la célébration pour un impact durable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/image/hero.jpeg')] bg-cover bg-center h-screen w-full`}
      >
        <Navbar />
        <main className="py-10"> {children}</main>
      </body>
    </html>
  );
}
