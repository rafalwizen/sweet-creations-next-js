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
          DEFAULT: "#FB7185",
        },
        accent: {
          DEFAULT: "#FBBF24",
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
