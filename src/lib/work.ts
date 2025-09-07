import type { ExperienceItem } from "../app/page.tsx";


export const workItems = [
  {
    id: "recup",
    name: "Recup",
    github: "https://github.com/nannipy/Recup.git",
    link: "https://github.com/nannipy/Recup.git",
    screenshots: [
      "/Recup/Dashboard.png",
      "/Recup/Dashboard_2.png",
      "/Recup/Aggiungi_donazione.png",
      "/Recup/Account.png",
      "/Recup/Login.png",
      "/Recup/Loading.png",
    ],
    description:
      "Recup is a web application designed to streamline the management of food and goods recovery and distribution activities. It shows statistics, kpi and other beautiful info ",
     
    },
    {
      id: "data4run",
      name: "Data4Run",
      link: "https://github.com/nannipy/Data4Run.git",
      github: "https://github.com/nannipy/Data4Run.git",
      screenshots: [
        "/Data4Run/dashboard.png",
        "/Data4Run/activities.png",
        "/Data4Run/performance.png",
        "/Data4Run/trends.png",
        "/Data4Run/settings.png",
        "/Data4Run/compact-mode.png",
        "/Data4Run/sync_page.png",
        "/Data4Run/loading.png",

      ],
      description: 
        "A web application to view and analyze running, cycling and tennis performance using Strava data and gpx files."
      },
  {
    id: "virus-scanner",
    name: "Virus Scanner",
    github: "https://github.com/AlexGallo8/VirusScanner.git",
    link: "https://github.com/AlexGallo8/VirusScanner.git",
    screenshots: [
      "/Virusscanner/home-light.png",
      "/Virusscanner/scan-virus-light.png",
      "/Virusscanner/history.png",
      "/Virusscanner/comments.png",
      "/Virusscanner/security-guide.png",
      "/Virusscanner/tech-stack.png",
      "/Virusscanner/login-light.png",
    ],
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
