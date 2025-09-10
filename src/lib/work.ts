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
      " Recup is a beautiful NGO project I’m collaborating with, where I’m building a personalized CRM to manage their data and  make their work more efficient, organized, and even enjoyable."     
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
        "/Data4Run/sync_page.png",

      ],
      description: 
        "I want to build my ultimate, privacy-oriented data center to collect and analyze all my activity data, learning and having fun along the way. This web application lets you view and analyze running, cycling, and tennis performance using Strava data and GPX files."
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
    ],
    description:
      "A web app built collaboratively with @alessandromaone and @sergioiovine to scan files or URLs for viruses. Developed using Ruby on Rails, TailwindCSS, the VirusTotal API, and Auth0 for authentication.",
     
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
      "This is the website for all the products my family makes from the hills of Umbria. Cool project I enjoyed building. You can find our EVO oil and our incredible pasta made with ancient wheat varieties."
    },
] satisfies ExperienceItem[];
