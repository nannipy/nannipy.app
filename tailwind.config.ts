import { type Config } from "tailwindcss";


export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['var(--font-vt323)'],
        geist: ['var(--font-geist-mono)'],
      },
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#111111',
        },
        text: {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },
        card: {
          DEFAULT: 'rgba(233, 233, 233, 0.5)',
          dark: 'rgba(23, 23, 23, 0.502)',
        },
        'card-hover': {
          DEFAULT: 'rgba(211, 211, 211, 0.5)',
          dark: 'rgba(38, 38, 38, 0.5)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
