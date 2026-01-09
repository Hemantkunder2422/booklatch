/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Brand */
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",

        /* Surface */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* UI */
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
      },
    },
  },
};
``