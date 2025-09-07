"use client";

import React, { useState, useEffect } from 'react';
import { projectItems } from "../lib/projects.ts";
import { workItems } from "../lib/work.ts";
import Link from 'next/link';
import Image from 'next/image';


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
  id: string;
  name: string;
  link: string;
  github: string;
  description: string;
  screenshots?: string[];
};

function ExperienceSection({
  items,
  isProject,
}: {
  items: ExperienceItem[];
  github?: boolean;
  isProject?: boolean;
}) {
  return (
    <section className="text-left ">
      {items.map((item, index) => (
        <Link
          key={index}
          href={isProject ? `/projects/${item.id}` : `/work/${item.id}`}
          className="block relative transform transition-all duration-300 hover:translate-x-2"
        >
          <div className="min-h-[140px] p-6 rounded-lg transition-all duration-300 bg-neutral-900/50 hover:bg-neutral-600/30">
            <div className="flex justify-between items-start gap-6">
              <div className="font-medium group transition-all duration-300 hover:text-white">
                <span className="relative">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
              
              {item.github && (
                <Link
                  href={item.github}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center transition-all duration-300 hover:text-white"
                >
                  <GithubIcon />
                  <p className="ml-2 h-7 relative">
                    git
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </Link>
              )}
            </div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
          
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </Link>
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
    
    <main className="min-h-screen bg-[#111111] p-2 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-6 ">
          <div className="p-6 rounded-lg bg-neutral-900/50">
            <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-6">
            <Image
                src="/logo-en2.png"
                width={60}
                height={60}
                alt="Nannipy logo"
              />
              <div className="flex-grow">
                Giovanni Battista Pernazza
              </div>
              
            </h1>
            <div className="space-y-4 mt-3 ">
              <div className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                <LocationIcon />
                <p>Rome, Italy</p>
              </div>
              <div className="group flex items-center  gap-2 text-neutral-400 hover:text-white transition-colors">
                <WorkIcon />
                <p>SWE</p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-6 mt-2  text-neutral-400">
              {[
                { href: "mailto:gb.pernazza@gmail.com", text: "email" },
                { href: "https://www.linkedin.com/in/giovannibpernazza", text: "linkedin" },
                { href: "https://github.com/nannipy", text: "github" },
                { href: "https://www.instagram.com/nanni.py/", text: "instagram" },
                { href: "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0", text: "CV" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    className="group flex items-center hover:text-white transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link.href}
                  >
                    <span className="relative">
                      {link.text}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </span>
                    <UpRightArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="p-6 rounded-lg bg-neutral-900/50">
            <div>
              I&apos;m a software engineer passionate about building sleek, high-performance web applications with Next.js and TypeScript.
              I love blending clean design with seamless functionality, always striving for intuitive user experiences. Beyond coding, I&apos;m a tech enthusiast,
              a design lover, and a YouTube video binge-watcher, always exploring new trends.
              <Link
                href="https://www.strava.com/athletes/151899362"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Running
              </Link> keeps me balanced and fuels my creativity.
            </div>
          </div>
        </div>

        <div className="md:col-span-8 ">
          <h2 className=" p-3 rounded-lg bg-neutral-900/50 text-2xl font-bold text-center ">my projects</h2>    
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ExperienceSection items={projectItems} isProject={true} />
            <ExperienceSection items={workItems} />
          </div>
        </div>
      </div>
    </main>
  );
}