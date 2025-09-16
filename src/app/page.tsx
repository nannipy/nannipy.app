"use client";

import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ProfileCard from '../components/ProfileCard';
import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('../components/Experience'), { 
  ssr: false,
  loading: () => <div style={{ height: '800px' }} />
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    
    <main className="min-h-screen p-2 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <ProfileCard />
          <Experience />
        </div>
      </div>
    <div className="fixed bottom-4 right-4">
      <ThemeSwitcher />
    </div>
    </main>
  );
}
