/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Raleway: ['Raleway', 'sans-serif'],
    },
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        'primary-dark': '#212529',
        'primary-light': '#ffffff',
        accent: '#dc4b74',
      },
    },
  },
  plugins: [],
}

module.exports = config
