import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7A4526",
        },
        accent: {
          DEFAULT: "#b8642f",
        },
        background: {
          DEFAULT: "#F9FAFB",
        },
      },
      fontFamily: {
        greatVibes: ['GreatVibes', 'cursive'],
        lora: ['LoraItalic', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
