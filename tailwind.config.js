/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx,css}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
