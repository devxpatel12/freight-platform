import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#fee2e2",
          100: "#fecaca",
          200: "#fca5a5",
          300: "#f87171",
          400: "#ef4444",
          500: "#dc2626",
          600: "#b91c1c",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#7f1d1d",
        },
        company: {
          red: "#dc2626",
          "red-dark": "#b91c1c",
          "red-light": "#ef4444",
        },
      },
    },
  },
  plugins: [],
};
export default config;

