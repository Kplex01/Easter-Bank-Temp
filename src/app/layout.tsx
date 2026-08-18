import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ModalProvider } from '../components/layout/ModalProvider';

export const metadata: Metadata = {
  title: {
    template: "%s | Eastern Bank",
    default: "Eastern Bank | Secure, Modern Banking for Everyday Life",
  },
  description:
    "Experience secure, premium financial solutions designed to help you thrive. From checking to wealth management, Eastern Bank provides modern tools for local businesses and dreams.",
  keywords: ["banking", "finance", "checking account", "business loans", "Eastern Bank", "wealth management"],
  authors: [{ name: "Eastern Bank" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.easternbank.com",
    siteName: "Eastern Bank",
    title: "Eastern Bank | Modern Banking for Everyday Life",
    description: "Experience secure, premium financial solutions designed to help you thrive.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eastern Bank - Modern Financial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eastern Bank | Modern Banking for Everyday Life",
    description: "Experience secure, premium financial solutions designed to help you thrive.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ModalProvider />
      </body>
    </html>
  );
}
