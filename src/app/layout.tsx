'use client'
import '../styles/globals.css';
import type { ReactNode } from 'react';
import Footer from '../components/Footer.jsx';
import { Analytics } from '@vercel/analytics/react';

interface RootLayoutProps {
  children: ReactNode;
}



export default function RootLayout({ children }: RootLayoutProps) {
  

  return (
    <html lang="en" className="text-xl">
      <head>
        <title>Nannipy</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        
        <main className="flex-grow">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}