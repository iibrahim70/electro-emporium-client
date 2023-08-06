/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        light: "#fffcfa",
        red: "#fe214f",
        green: "#a2f8cd",
        yellow: "#F6EAA3",
        orange: "#faa978",
        purple: "#872b81",
      },
    },
  },
  plugins: [],
};
