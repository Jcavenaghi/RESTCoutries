/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#e94f37',
        customBeige: '#f6f7eb',
        customGray: '#393e41'
      }
    },
  },
  plugins: [],
}

