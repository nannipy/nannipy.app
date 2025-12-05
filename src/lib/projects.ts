import type { ExperienceItem } from '../types';

export const projectItems = [
  {
    id: "sapienza-foiling-team",
    name: "SFT Website",
    logo: "/SFT/logo.jpg",
    github: "https://github.com/nannipy/SapienzaFoilingTeam",
    link: "https://sapienzafoilingteam.vercel.app",
    screenshots: [
      "/SFT/SFT_homepage.png",
      "/SFT/SFT_blog.png",
      "/SFT/SFT_article_edit.png",
      "/SFT/SFT_admin_dashboard.png",
      "/SFT/SFT_media.png",
      "/SFT/SFT_sponsor.png",
    ],
    description:
      "Official website for Sapienza Foiling Team: a modern platform with blog, admin area to share news and grow the sailing community."
  },
  {
    id: "hiresight",
    name: "Hiresight",
    github: "https://github.com/nannipy/hiresight",
    link: "https://hiresight-cv.vercel.app",
    screenshots: [
      "/hiresight/home.png",
      "/hiresight/posizioni.png",
      "/hiresight/candidati.png",
      "/hiresight/dettaglio_candidato.png"
    ],
    description:
      "A powerful CV management system for companies to streamline hiring. Automatically ranks candidates using LLMs for intelligent analysis, detailed scoring, and reasoning against job positions."
  },
  {
    id: "snowcat",
    name: "Snowcat",
    logo: "/snowcat/logo.png",
    github: "https://github.com/nannipy/snowcat.git",
    link: "https://github.com/nannipy/snowcat.git",
    screenshots: [],
    description:
      "A dApp for the Avalanche Hackathon, built in 24 hours, to manage wallet 'dust'. It compacts small amounts of tokens into usable AVAX or burns unwanted tokens. Features automatic token detection, aggregation for swaps, and burning for trash tokens. Built with React, Vite, TypeScript, and integrated with Glacier API, CoinGecko, and Chainlink."
  },
  {
    id: "ollapy",
    name: "Ollapy",
    logo: "/ollapy/logo.jpg",
    github: "https://github.com/nannipy/ollapy.git",
    link: "https://github.com/nannipy/ollapy.git",
    screenshots: [
      "/ollapy/Home.png",
      "/ollapy/Home2.png",
      "/ollapy/Chat.png",
      "/ollapy/file_upload.png",
      "/ollapy/model-choice.png",
      "/ollapy/search_chats.png",
    ],
    description:
      "OllaPy is a sleek app interface for interacting with your local language models through Ollama. It provides a private and secure environment for your conversations, running entirely on your local machine."
  },
  {
    id: "adm-sport-and-nutrition",
    name: "ADM sport and nutrition",
    github: "https://github.com/nannipy/adm",
    link: "https://adm-sportandnutrition.vercel.app/",
    screenshots: [
      "/adm/calendario.png",
      "/adm/scheda.png",
      "/adm/manuale.png",
      "/adm/chat-coach.png",
      "/adm/account-info.png",
    ],
    description:
      "a web app for a personal trainer, built for gym trainings and nutrition monitoring with a simple and clean UI"
  },
  {
    id: "parco-la-cascina",
    name: "Parco La Cascina",
    github: "https://github.com/nannipy/parcolacascina",
    link: "https://parcolacascina.vercel.app/",
    screenshots: [
      "/plc/Home.png",
      "/plc/Prodotti.png",
      "/plc/Ordine.png",
      "/plc/Contatti.png",
    ],
    logo: "/plc/logo.jpg",
    description:
      "An exciting web app to explore Parco la Cascina, a beautiful farm near Varese, Italy! Dive into the world of the farm:  discover fun activities and events, and easily order fresh products online."
  },
  {
    id: "recup",
    name: "Recup",
    github: "https://github.com/nannipy/Recup.git",
    link: "https://github.com/nannipy/Recup.git",
    logo: "/Recup/logo.jpg",
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
    id: "virus-scanner",
    name: "Virus Scanner",
    logo: "/Virusscanner/logo.jpg",
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
    id: "foxrun",
    name: "Foxrun",
    logo: "/foxrun/logo.jpg",
    link: "https://github.com/nannipy/foxrun.git",
    github: "https://github.com/nannipy/foxrun.git",
    screenshots: [
      "/foxrun/dashboard.png",
      "/foxrun/activities.png",
      "/foxrun/performance.png",
      "/foxrun/trends.png",
      "/foxrun/settings.png",
      "/foxrun/sync_page.png",

    ],
    description:
      "I want to build my ultimate, privacy-oriented data center to collect and analyze all my activity data, learning and having fun along the way. This web application lets you view and analyze running, cycling, and tennis performance using Strava data and GPX files."
  },
  {
    id: "youtube-downloader-app",
    name: "Youtube Downloader App",
    logo: "/YT-Downloader/app.png",
    github: "https://github.com/nannipy/yt-dl",
    link: "https://github.com/nannipy/yt-dl",
    screenshots: [
      "/YT-Downloader/app.png",
      "/YT-Downloader/starting-downloading.png",
      "/YT-Downloader/downloading.png",
      "/YT-Downloader/successful.png",
    ],
    description:
      "My uncle asked me if i could make an app for his pc to download easily yt videos without going through strange websites full of ads, (oh he is a noob so ui > terminal ) so i made this.  hope you like it "
  },
  {
    id: "agricola-pernazza",
    name: "Agricola Pernazza",
    logo: "/ap/logo.jpg",
    github: "https://github.com/nannipy/agricolapernazza",
    link: "https://agricolapernazza.vercel.app/",
    description:
      "This is the website for all the products my family makes from the hills of Umbria. Cool project I enjoyed building. You can find our EVO oil and our incredible pasta made with ancient wheat varieties."
  },
] satisfies ExperienceItem[];
