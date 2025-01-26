import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        brush: ["var(--font-nanum-brush-script)"],
      },
      screens: {
        "r-sm": "375px",
        "r-md": "514px",
        "r-lg": "768px",
        "r-xl": "1080px",
      },
    },
  },
  plugins: [],
} satisfies Config;
