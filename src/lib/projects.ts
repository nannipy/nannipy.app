import type { ExperienceItem } from "../app/page.tsx";

export const projectItems = [
  {
    id: "sapienza-foiling-team",
    name: "SFT Website",
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
    id: "ollapy",
    name: "Ollapy",
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
    description:
      "An exciting web app to explore Parco la Cascina, a beautiful farm near Varese, Italy! Dive into the world of the farm:  discover fun activities and events, and easily order fresh products online."
    },
    {
      id: "youtube-downloader-app",
      name: "Youtube Downloader App",
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
      }

    
    
] satisfies ExperienceItem[];
