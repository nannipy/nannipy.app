
import Image from 'next/image';
import Card from './ui/Card';
import Link from 'next/link'
import LocationIcon from './icons/LocationIcon';
import UpRightArrowIcon from './icons/UpRightArrowIcon';
import WorkIcon from './icons/WorkIcon';

export default function ProfileCard() {
  return (
    <div className="md:col-span-4 space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-6">
          <Image
            src="/logo-en2.png"
            width={60}
            height={60}
            alt="Nannipy logo"
            priority
          />
          <div className="flex-grow text-2xl font-bold">
            Giovanni Battista Pernazza
          </div>
        </h1>
        <div className="space-y-4 mt-3">
          <div className="group flex items-center gap-2 text-black dark:text-white transition-colors">
            <LocationIcon />
            <p>Rome, Italy</p>
          </div>
          <div className="group flex items-center gap-2 text-black dark:text-white transition-colors">
            <WorkIcon />
            <p>SWE</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-6 mt-2 text-black dark:text-white">
          {[
            { href: "mailto:gb.pernazza@gmail.com", text: "email" },
            { href: "https://www.linkedin.com/in/giovannibpernazza", text: "linkedin" },
            { href: "https://github.com/nannipy", text: "github" },
            { href: "https://www.instagram.com/nanni.py/", text: "instagram" },
            { href: "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0", text: "CV" },
            { href: "https://cal.com/giovannipernazza/30min", text: "Book a Call" }
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center"
              >
                {link.text}
                <UpRightArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <div>
          I&apos;m a software engineer passionate about building sleek, high-performance web applications with Next.js and TypeScript.
          I love blending clean design with seamless functionality, always striving for intuitive user experiences. Beyond coding, I&apos;m a tech enthusiast,
          a design lover, and a YouTube video binge-watcher, always exploring new trends.
          <Link
            href="https://strava.com/athletes/151899362"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Running
          </Link> keeps me balanced and fuels my creativity.
        </div>
      </Card>
    </div>
  )
}
