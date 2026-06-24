import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        glass: {
          border: "rgba(255, 255, 255, 0.1)",
          background: "rgba(15, 15, 20, 0.4)",
          highlight: "rgba(255, 255, 255, 0.05)"
        }
      }
    },
  },
  plugins: [],
};
export default config;
