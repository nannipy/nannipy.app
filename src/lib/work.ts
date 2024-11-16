import type { ExperienceItem } from "../app/page.tsx";


export const workItems = [
  {
    name: "Sapienza Foiling Team",
    github: "https://github.com/nannipy/SapienzaFoilingTeam",
    link: "https://sapienzafoilingteam.vercel.app",
    position: "",
    description:
      "a web app for the Sapienza foiling team, a student association at the University of Rome. You can find information about the team, the activities and the events.",
  },
  {
    name: "Portfolio website",
    github: "https://github.com/nannipy/nanni.com",
    link: "/",
    position: "",
    description:
      "the web app you're looking at right now, built with nextjs, tailwindcss, trpc and supabase. It's very simple but i love it <3",
  },
  /*
  {
    name: "freelance developer",
    link: "",
    position: "",
    description:
      "developed multiple projects for clients, such as flutter app for medical devices (at sintesy) or a crm for a small business, and more.",
  },
  */
] satisfies ExperienceItem[];
