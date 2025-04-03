import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppWidget from "@/components/shared/whatsapp-widget";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evergreen Enviro Consultancy and Laboratories",
  description: `
    Evergreen Enviro Consultancy and Laboratories provides comprehensive environmental testing, monitoring, and consultancy services to help businesses and communities thrive sustainably.
    Our team of experts is dedicated to delivering accurate and timely results, ensuring compliance with environmental regulations, and promoting sustainable practices.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen ">
          {children}

        
    </div>
    <SanityLive />
      </body>
    </html>
  );
}
