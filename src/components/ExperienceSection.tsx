import Link from 'next/link';
import { type ExperienceItem } from '../types';
import GithubIcon from './icons/GithubIcon';

export default function ExperienceSection({
  items,
}: {
  items: ExperienceItem[];
  github?: boolean;
}) {
  return (
    <section className="text-left ">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/projects/${item.id}`}
          className="block relative transform transition-all duration-300 hover:translate-x-1"
        >
            <div className="min-h-[140px] p-6 rounded-lg transition-all duration-300 card">
            <div className="flex flex-col gap-4">
              <div className="font-medium group transition-all duration-300">
                <span className="relative inline-block group">
                  {item.name}
                  <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-black dark:bg-white transition-transform duration-300 scale-x-0 origin-left group-hover:scale-x-100"></span>
                </span>
              </div>
            </div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>

            {item.github && (
              <Link
                href={item.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center transition-all duration-300 mt-2 justify-end"
              >
                <GithubIcon />
                <p className="ml-2 h-7 relative">
                git
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
              )}
          </div>
          
          
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </Link>
      ))}
    </section>
  );
}