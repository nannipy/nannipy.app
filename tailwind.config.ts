import { type Config } from "tailwindcss";


export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        terminal: ["Terminal", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
