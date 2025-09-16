'use client'
import '../styles/globals.css';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../components/Providers';
import localFont from 'next/font/local';

const geist = localFont({
  src: './fonts/Geist-Bold.otf',
  variable: '--font-geist',
});

const geistMono = localFont({
  src: './fonts/GeistMono-Regular.otf',
  variable: '--font-geist-mono',
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <title>Nannipy</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col grainy">
        <Providers>
          <main className="flex-grow">
            {children}
          </main>
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
