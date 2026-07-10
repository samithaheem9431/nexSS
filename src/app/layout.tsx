import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexasoft Studio | Software Development Company",
  description:
    "Nexasoft Studio builds e-commerce websites, mobile applications, and business software solutions. Transform your ideas into powerful digital products.",
  keywords: [
    "software development",
    "e-commerce",
    "mobile apps",
    "web development",
    "Nexasoft Studio",
    "Pakistan",
  ],
  openGraph: {
    title: "Nexasoft Studio | Software Development Company",
    description:
      "We build e-commerce platforms, mobile apps, and business solutions that drive growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0a0f] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
