import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Upravený import pro Navbar
import Footer from "@/components/Footer"; // Upravený import pro Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moje Next.js Aplikace", // Změněný titulek
  description: "Vytvořeno pomocí Next.js a Tailwind CSS", // Změněný popis
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs"> {/* Změněno na češtinu */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
