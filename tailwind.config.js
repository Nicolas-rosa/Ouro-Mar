/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
   colors: {
    'blue': '#1fb6ff',
        'green': '#13ce66',
        'gray-dark': '#273444',
   },
    },
  },
  plugins: [],
}