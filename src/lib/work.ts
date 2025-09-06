import type { ExperienceItem } from "../app/page.tsx";


export const workItems = [
  {
    id: "recup",
    name: "Recup",
    github: "https://github.com/nannipy/Recup.git",
    link: "https://github.com/nannipy/Recup.git",
    description:
      "Recup is a web application designed to streamline the management of food and goods recovery and distribution activities. It shows statistics, kpi and other beautiful info ",
     
    },
    {
      id: "data4run",
      name: "Data4Run",
      link: "https://github.com/nannipy/Data4Run.git",
      github: "https://github.com/nannipy/Data4Run.git",
      description: 
        "A web application to view and analyze running, cycling and tennis performance using Strava data and gpx files."
      },
  {
    id: "virus-scanner",
    name: "Virus Scanner",
    github: "https://github.com/AlexGallo8/VirusScanner.git",
    link: "https://github.com/AlexGallo8/VirusScanner.git",
    description:
      "a web app to scan for viruses in a given file or url, built with Ruby on rails, tailwindcss, Virustotal api and Auth0 for authentication.",
     
    },
  {
    id: "portfolio-website",
    name: "Portfolio website",
    github: "https://github.com/nannipy/nanni.com",
    link: "/",
    description:
      "the web app you're looking at right now, built with nextjs, tailwindcss. It's very simple but i love it <3"
    },
 
  {
    id: "agricola-pernazza",
    name: "Agricola Pernazza",
    github: "https://github.com/nannipy/agricolapernazza",
    link: "https://agricolapernazza.vercel.app/",
    description:
      "a web app for Agricola Pernazza, a farm located in Amelia, Italy. You can find information about the farm, the animals, the activities and the events and order products."
    },
] satisfies ExperienceItem[];
