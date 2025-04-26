/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",     // your App Router pages
    "./src/pages/**/*.{js,ts,jsx,tsx}",   // fallback for old structure
    "./src/components/**/*.{js,ts,jsx,tsx}", // shared components if you add them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
