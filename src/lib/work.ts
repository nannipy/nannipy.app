import type { ExperienceItem } from "../app/page.tsx";


export const workItems = [
  {
    name: "Virus Scanner",
    github: "https://github.com/AlexGallo8/VirusScanner.git",
    link: "https://github.com/AlexGallo8/VirusScanner.git",
    position: "",
    description:
      "a web app to scan for viruses in a given file or url, built with Ruby on rails, tailwindcss, Virustotal api and Auth0 for authentication.",
      iconPath: "/icons/next.svg",
    },
  {
    name: "freelance developer",
    link: "",
    github: "https://github.com/nannipy",
    position: "",
    description: 
      "I built custom applications using React, Next.js and Node.js. Full-stack development with focus on responsive, user-friendly solutions.",
      iconPath: "/icons/next.svg",
    },
  {
    name: "Portfolio website",
    github: "https://github.com/nannipy/nanni.com",
    link: "/",
    position: "",
    description:
      "the web app you're looking at right now, built with nextjs, tailwindcss, trpc and supabase. It's very simple but i love it <3",
      iconPath: "/icons/next.svg",
    },
 
  {
    name: "Agricola Pernazza",
    github: "https://github.com/nannipy/agricolapernazza",
    link: "https://agricolapernazza.vercel.app/",
    position: "",
    description:
      "a web app for Agricola Pernazza, a farm located in Amelia, Italy. You can find information about the farm, the animals, the activities and the events and order products.",
      iconPath: "/icons/next.svg",
    },
] satisfies ExperienceItem[];
