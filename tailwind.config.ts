import { type Config } from "tailwindcss";


export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        terminal: ["Terminal", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
