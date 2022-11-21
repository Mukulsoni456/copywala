/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'Base': '#BE3481',
        'black': '#F55455',
        'mid': '#F35062',
        'myblue':'#0195F7',
      }
     }
  },
  plugins: [],
}
