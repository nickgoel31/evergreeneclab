import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Evergreen Enviro Consultancy and Laboratories",
  description: `
    Evergreen Enviro Consultancy and Laboratories provides comprehensive environmental testing, monitoring, and consultancy services to help businesses and communities thrive sustainably.
    Our team of experts is dedicated to delivering accurate and timely results, ensuring compliance with environmental regulations, and promoting sustainable practices.`,
  icons:{
    icon: "/favicon.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex flex-col min-h-screen ">
          {children}

        
    </div>
    <SanityLive />
      </body>
    </html>
  );
}
