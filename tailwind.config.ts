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
          DEFAULT: "#934a1a",
        },
        light : {
          DEFAULT: "#efebe9",
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
