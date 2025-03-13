'use client'
import '../styles/globals.css';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import { Analytics } from '@vercel/analytics/react';

interface RootLayoutProps {
  children: ReactNode;
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en" className="text-xl justify-between">
      <body suppressHydrationWarning>
        {isMounted && <CustomCursor />}
        <main className="flex-grow">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}