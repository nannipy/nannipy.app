import type { ExperienceItem } from "../app/page.tsx";

export const projectItems = [
  {
    name: "Virus Scanner",
    github: "https://github.com/AlexGallo8/VirusScanner.git",
    link: "https://github.com/AlexGallo8/VirusScanner.git",
    position: "",
    description:
      "a web app to scan for viruses in a given file or url, built with Ruby on rails, tailwindcss, Virustotal api and Auth0 for authentication.",
  },
  {
    name: "ADM - sport and nutrition",
    github: "https://github.com/nannipy/adm",
    link: "https://adm-sportandnutrition.vercel.app/",
    position: "",
    description:
      "a web app for a personal trainer, built for gym trainings and nutrition monitoring with a simple and clean UI.",
  },
  {
    name: "Parco La Cascina",
    github: "https://github.com/nannipy/parcolacascina",
    link: "https://parcolacascina.vercel.app/",
    position: "",
    description:
      "a web app to search for Parco la Cascina, a farm located near Varese, Italy. You can find information about the farm, the animals, the activities and the events and order products.",
  }
    
] satisfies ExperienceItem[];
