"use client";

import React, { useState, useEffect } from 'react';
import { projectItems } from "../lib/projects.ts";
import { workItems } from "../lib/work.ts";

// Terminal typing effect component
const TypingEffect = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="">
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">_</span>
      )}
    </div>
  );
};

function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export type ExperienceItem = {
  name: string;
  link: string;
  github: string;
  position: string;
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
  github?: boolean;
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium transform transition-all duration-300 hover:scale-105">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="relative transform transition-all duration-300 hover:translate-x-2">
          <div className="min-h-[140px] p-4 rounded-lg transition-all duration-300 hover:bg-neutral-600/30">
            <div className="flex justify-between items-start gap-4">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="font-medium group transition-all duration-300 hover:text-blue-400"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ) : (
                <p className="font-medium">{item.name}</p>
              )}
              
              {item.github && (
                <a
                  href={item.github}
                  className="group flex items-center transition-all duration-300 hover:text-blue-400"
                >
                  <GithubIcon />
                  <p className="ml-2 h-7 relative">
                    git
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </a>
              )}
            </div>
            
            <p className="mt-2 transform transition-all duration-300">{item.position}</p>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
          
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    
    <main className="flex min-h-screen flex-col justify-left mt-4 sm:mt-8 md:mt-5 text-white md:px-20 px-5 animate-fadeIn">
      <h1 className="mb-3 text-xl sm:text-2xl font-bold tracking-tighter">
        <TypingEffect text="Giovanni Battista Pernazza" speed={70} />
      </h1>

      <div className="flex flex-col gap-2">
        <div className="group flex items-center gap-2 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
          <LocationIcon />
          <p className="inline-flex">Roma, Italia</p>
        </div>

        <div className="group flex items-center gap-2 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
          <WorkIcon />
          <p className="inline-flex">SWE</p>
        </div>
      </div>

      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {[
          { href: "mailto:gb.pernazza@gmail.com", text: "email" },
          { href: "https://www.linkedin.com/in/giovannibpernazza", text: "linkedin" },
          { href: "https://github.com/nannipy", text: "github" },
          { href: "https://www.instagram.com/nanni.py/", text: "instagram" },
          { href: "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0", text: "CV" }
        ].map((link, index) => (
          <li key={index} className="transform transition-all duration-300 hover:translate-y--1">
            <a
              className="group flex items-center transition-all duration-300 hover:text-blue-400"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
            >
              <p className="mr-1 h-7 relative">
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <UpRightArrowIcon />
            </a>
          </li>
        ))}
      </ul>

      <div className="bg-neutral-900/50 p-4 rounded-lg mb-6  ">
        <TypingEffect 
          text="I’m a software engineer passionate about building sleek, high-performance web applications with Next.js and TypeScript.
           I love blending clean design with seamless functionality, always striving for intuitive user experiences. Beyond coding, 
           I’m a tech enthusiast who enjoys exploring new trends on YouTube, refining my design skills, and pushing my limits through running."
          speed={5}
        />
      </div>

      <div className="transform transition-all duration-500 hover:scale-[1.02]">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:flex-1 sm:max-w-md mt-7">
            <ExperienceSection title="Last Projects" items={projectItems} />
          </div>
          <div className="sm:flex-1 sm:max-w-md mt-7 sm:mt-14">
            <ExperienceSection title="" items={workItems} />
          </div>
        </div>
        <div className='mb-10'>
          <a 
            href="https://github.com/nannipy" 
            className="group flex items-center mt-4 font-medium transition-all duration-300 hover:text-blue-400"
          >
            <p className="relative">
              Scopri tutti i miei progetti su github
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full "></span>
            </p>
            <UpRightArrowIcon />
          </a>
        </div>
      </div>
    </main>
  );
}